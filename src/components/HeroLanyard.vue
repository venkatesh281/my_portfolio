<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasContainer = ref(null)
const prefersReducedMotion = ref(false)
const is3dReady = ref(false)
const currentFps = ref(60)

let THREE = null
let renderer = null
let scene = null
let camera = null
let cardPivot = null
let cordMesh = null
let cordMaterial = null
let frontCanvas = null
let frontTexture = null
let backCanvas = null
let backTexture = null
let rafId = null
let isPaused = false
let intersectionObserver = null

// Real-time Physics State
const physics = {
  x: 0,
  y: 0,
  z: 0,
  vx: 0,
  vy: 0,
  vz: 0,
  rotX: 0,
  rotY: 0,
  rotZ: 0,
  vRotX: 0,
  vRotY: 0,
  vRotZ: 0,
  targetX: 0,
  targetY: 0,
  targetRotX: 0,
  targetRotY: 0,
  targetRotZ: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  cardStartX: 0,
  cardStartY: 0,
}

// FPS measurement telemetry
let frameCount = 0
let lastFpsUpdate = performance.now()

// Renders the high-resolution front badge texture on a 2D canvas
function generateFrontTexture(portraitImg, qrImg) {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1536
  const ctx = canvas.getContext('2d')

  // Smooth background: Authentic ivory editorial paper
  ctx.fillStyle = '#fbfaf6'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Subtle inner border (hairline)
  ctx.strokeStyle = '#e6e2d4'
  ctx.lineWidth = 3
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40)

  // Top clip punch-out slot (charcoal pill)
  ctx.fillStyle = '#181a20'
  ctx.beginPath()
  ctx.roundRect(canvas.width / 2 - 45, 52, 90, 22, 11)
  ctx.fill()

  // Header Bar
  ctx.fillStyle = '#121316'
  ctx.font = '600 24px "JetBrains Mono", monospace'
  ctx.textAlign = 'left'
  ctx.fillText('VISU.AI', 64, 128)

  // Active Status Indicator Dot & Label
  ctx.fillStyle = '#10b981'
  ctx.beginPath()
  ctx.arc(canvas.width - 240, 120, 7, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = '#525866'
  ctx.font = '500 18px "JetBrains Mono", monospace'
  ctx.fillText('ACTIVE CREDENTIAL', canvas.width - 220, 126)

  // Portrait Container (clean editorial rounded frame)
  const px = 64
  const py = 155
  const pw = canvas.width - 128
  const ph = 730
  const radius = 24

  ctx.save()
  ctx.beginPath()
  ctx.roundRect(px, py, pw, ph, radius)
  ctx.clip()

  if (portraitImg && portraitImg.complete && portraitImg.naturalWidth > 0) {
    const imgAspect = portraitImg.naturalWidth / portraitImg.naturalHeight
    const targetAspect = pw / ph
    let sw, sh, sx, sy

    if (imgAspect > targetAspect) {
      sh = portraitImg.naturalHeight
      sw = sh * targetAspect
      sx = (portraitImg.naturalWidth - sw) / 2
      sy = 0
    } else {
      sw = portraitImg.naturalWidth
      sh = sw / targetAspect
      sx = 0
      sy = (portraitImg.naturalHeight - sh) * 0.2
    }
    ctx.drawImage(portraitImg, sx, sy, sw, sh, px, py, pw, ph)
  } else {
    ctx.fillStyle = '#e2dfd5'
    ctx.fillRect(px, py, pw, ph)
  }
  ctx.restore()

  // Frame boundary for portrait
  ctx.strokeStyle = '#dfdacb'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.roundRect(px, py, pw, ph, radius)
  ctx.stroke()

  // Identity Details: Headline & Role
  ctx.textAlign = 'left'
  ctx.fillStyle = '#121316'
  ctx.font = '700 58px "Plus Jakarta Sans", sans-serif'
  ctx.fillText('Venkateshwaran', 64, 965)

  ctx.fillStyle = '#0038ff'
  ctx.font = 'italic 500 34px "Newsreader", Georgia, serif'
  ctx.fillText('Full Stack Developer', 64, 1018)

  ctx.fillStyle = '#525866'
  ctx.font = '500 22px "JetBrains Mono", monospace'
  ctx.fillText('visu.ai  •  Chennai, India', 64, 1065)

  // Hairline separator
  ctx.strokeStyle = '#e8e4d8'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(64, 1105)
  ctx.lineTo(canvas.width - 64, 1105)
  ctx.stroke()

  // Bottom Section: Real QR Code & Tech Architecture
  const qx = 64
  const qy = 1135
  const qw = 260
  const qh = 260

  if (qrImg && qrImg.complete && qrImg.naturalWidth > 0) {
    ctx.drawImage(qrImg, qx, qy, qw, qh)
  } else {
    ctx.fillStyle = '#edeae0'
    ctx.fillRect(qx, qy, qw, qh)
  }

  // QR Boundary
  ctx.strokeStyle = '#e0dbce'
  ctx.lineWidth = 2
  ctx.strokeRect(qx, qy, qw, qh)

  // Architecture telemetry next to QR
  const tx = qx + qw + 40
  ctx.fillStyle = '#666d7e'
  ctx.font = '600 18px "JetBrains Mono", monospace'
  ctx.fillText('VERIFIED PORTFOLIO URL', tx, 1175)

  ctx.fillStyle = '#121316'
  ctx.font = '600 23px "Plus Jakarta Sans", sans-serif'
  ctx.fillText('venkateshwaran-portfolio.web.app', tx, 1215)

  ctx.fillStyle = '#0038ff'
  ctx.font = '700 20px "JetBrains Mono", monospace'
  ctx.fillText('DJANGO • LARAVEL • VUE 3', tx, 1285)

  ctx.fillStyle = '#525866'
  ctx.font = '500 19px "JetBrains Mono", monospace'
  ctx.fillText('CELERY • RABBITMQ • REDIS', tx, 1325)

  ctx.fillStyle = '#666d7e'
  ctx.font = '400 16px "JetBrains Mono", monospace'
  ctx.fillText('SCAN WITH CAMERA TO VERIFY', tx, 1370)

  return canvas
}

// Renders the back face texture of the credential badge
function generateBackTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1536
  const ctx = canvas.getContext('2d')

  // Deep charcoal background
  ctx.fillStyle = '#121316'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Hairline subtle boundary
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)'
  ctx.lineWidth = 4
  ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48)

  // Top clip punch-out slot
  ctx.fillStyle = '#22252d'
  ctx.beginPath()
  ctx.roundRect(canvas.width / 2 - 45, 52, 90, 22, 11)
  ctx.fill()

  // Large low-contrast watermark monogram "V"
  ctx.fillStyle = 'rgba(255, 255, 255, 0.035)'
  ctx.font = '800 680px "Syne", sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('V', canvas.width / 2, 980)

  // Atelier Back Text
  ctx.textAlign = 'left'
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
  ctx.font = '600 20px "JetBrains Mono", monospace'
  ctx.fillText('ATELIER CREDENTIAL SPECIFICATION', 80, 160)

  ctx.fillStyle = '#ffffff'
  ctx.font = '700 48px "Plus Jakarta Sans", sans-serif'
  ctx.fillText('Venkateshwaran', 80, 250)

  ctx.fillStyle = '#60a5fa'
  ctx.font = 'italic 500 28px "Newsreader", Georgia, serif'
  ctx.fillText('Full Stack Developer', 80, 298)

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(80, 360)
  ctx.lineTo(canvas.width - 80, 360)
  ctx.stroke()

  // Real career coordinates
  const rows = [
    { label: 'STATUS', val: 'Associate Engineer @ visu.ai' },
    { label: 'TENURE', val: 'Feb 2026 — Present' },
    { label: 'PRIOR', val: 'Web Developer @ Geometriccae (Dec 2024 — Jan 2026)' },
    { label: 'LOCATION', val: 'Chennai, Tamil Nadu, India' },
    { label: 'DIRECT', val: 'venkateshwaran2810@gmail.com' },
  ]

  let yOffset = 440
  rows.forEach((row) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    ctx.font = '500 18px "JetBrains Mono", monospace'
    ctx.fillText(row.label, 80, yOffset)

    ctx.fillStyle = '#fbfbfb'
    ctx.font = '500 24px "Plus Jakarta Sans", sans-serif'
    ctx.fillText(row.val, 80, yOffset + 36)

    yOffset += 110
  })

  // Footer seal
  ctx.fillStyle = '#0038ff'
  ctx.font = '600 20px "JetBrains Mono", monospace'
  ctx.fillText('DESIGN CONCEPT B • EDITORIAL ATELIER', 80, 1420)

  return canvas
}

// Updates the dynamic lanyard thin rope spline
function updateCordMesh() {
  if (!cordMesh || !cardPivot || !THREE) return

  const p0 = new THREE.Vector3(0, 3.4, 0)
  const p1 = new THREE.Vector3(cardPivot.position.x * 0.25, 2.7, cardPivot.position.z * 0.25)
  const p2 = new THREE.Vector3(cardPivot.position.x * 0.7, 2.0, cardPivot.position.z * 0.7)
  const p3 = new THREE.Vector3(cardPivot.position.x, cardPivot.position.y + 0.08, cardPivot.position.z)

  const curve = new THREE.CatmullRomCurve3([p0, p1, p2, p3])
  const newGeometry = new THREE.TubeGeometry(curve, 32, 0.015, 8, false)

  cordMesh.geometry.dispose()
  cordMesh.geometry = newGeometry
}

// Pointer & Touch Interaction Handlers with pan-y protection
function onPointerMove(e) {
  if (!canvasContainer.value) return
  const rect = canvasContainer.value.getBoundingClientRect()
  const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
  const mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

  if (physics.isDragging) {
    const deltaX = (e.clientX - physics.dragStartX) / rect.width
    const deltaY = (e.clientY - physics.dragStartY) / rect.height

    physics.targetX = physics.cardStartX + deltaX * 4.2
    physics.targetY = physics.cardStartY - deltaY * 3.2

    physics.targetRotY = (physics.targetX * 0.6)
    physics.targetRotX = (-physics.targetY * 0.45)
    physics.targetRotZ = (-deltaX * 1.6)
  } else {
    // Subtle hover attraction when mouse is over canvas
    physics.targetX = mouseX * 0.85
    physics.targetY = mouseY * 0.4
    physics.targetRotY = mouseX * 0.5
    physics.targetRotX = -mouseY * 0.35
    physics.targetRotZ = -mouseX * 0.22
  }
}

function onPointerDown(e) {
  // Only activate drag if clicking on the badge area
  physics.isDragging = true
  physics.dragStartX = e.clientX
  physics.dragStartY = e.clientY
  physics.cardStartX = physics.x
  physics.cardStartY = physics.y
}

function onPointerUp() {
  if (physics.isDragging) {
    physics.isDragging = false
    physics.targetX = 0
    physics.targetY = 0
    physics.targetRotX = 0
    physics.targetRotY = 0
    physics.targetRotZ = 0
  }
}

function onPointerLeave() {
  if (!physics.isDragging) {
    physics.targetX = 0
    physics.targetY = 0
    physics.targetRotX = 0
    physics.targetRotY = 0
    physics.targetRotZ = 0
  }
}

async function initThreeScene() {
  const container = canvasContainer.value
  if (!container) return

  // Lazy-load Three.js dynamically after first paint!
  if (!THREE) {
    THREE = await import('three')
  }

  const width = container.clientWidth
  const height = container.clientHeight

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(32, width / height, 0.1, 100)
  camera.position.set(0, -0.35, 7.6)
  camera.lookAt(0, -0.35, 0)

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(width, height)

  const isMobile = window.innerWidth < 768
  renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  container.appendChild(renderer.domElement)

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.95)
  scene.add(ambientLight)

  const keyLight = new THREE.DirectionalLight(0xffffff, 1.6)
  keyLight.position.set(-2.8, 4.8, 3.5)
  scene.add(keyLight)

  const fillLight = new THREE.DirectionalLight(0xedf2ff, 0.6)
  fillLight.position.set(2.5, -2.5, 2.0)
  scene.add(fillLight)

  cardPivot = new THREE.Group()
  cardPivot.position.set(0, 1.35, 0)
  scene.add(cardPivot)

  if (document.fonts) {
    await document.fonts.ready
  }

  const portraitImg = new Image()
  portraitImg.src = '/images/badge_portrait.jpg'

  const qrImg = new Image()
  qrImg.src = '/images/qr_portfolio.png'

  let texturesReady = false

  const checkBuildTextures = () => {
    frontCanvas = generateFrontTexture(portraitImg, qrImg)
    backCanvas = generateBackTexture()

    frontTexture = new THREE.CanvasTexture(frontCanvas)
    frontTexture.colorSpace = THREE.SRGBColorSpace
    frontTexture.anisotropy = 4

    backTexture = new THREE.CanvasTexture(backCanvas)
    backTexture.colorSpace = THREE.SRGBColorSpace
    backTexture.anisotropy = 4

    const cardGeometry = new THREE.BoxGeometry(2.2, 3.48, 0.035)

    const edgeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf4f1e6,
      roughness: 0.35,
      metalness: 0.05,
    })

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTexture,
      roughness: 0.28,
      metalness: 0.04,
    })

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      roughness: 0.35,
      metalness: 0.05,
    })

    const cardMaterials = [
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      edgeMaterial,
      frontMaterial,
      backMaterial,
    ]

    const cardMesh = new THREE.Mesh(cardGeometry, cardMaterials)
    cardMesh.position.set(0, -1.74, 0)
    cardPivot.add(cardMesh)

    // Small metallic clip and ring at top hole
    const claspGroup = new THREE.Group()
    claspGroup.position.set(0, 0, 0)

    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0xd6dae2,
      roughness: 0.18,
      metalness: 0.92,
    })

    const ringGeo = new THREE.TorusGeometry(0.08, 0.018, 16, 32)
    const ringMesh = new THREE.Mesh(ringGeo, metalMaterial)
    ringMesh.rotation.y = Math.PI / 2
    ringMesh.position.set(0, 0.03, 0)
    claspGroup.add(ringMesh)

    const clipGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.14, 16)
    const clipMesh = new THREE.Mesh(clipGeo, metalMaterial)
    clipMesh.position.set(0, -0.05, 0)
    claspGroup.add(clipMesh)

    cardPivot.add(claspGroup)
    texturesReady = true
    is3dReady.value = true
  }

  let loadedCount = 0
  const onImgLoad = () => {
    loadedCount++
    if (loadedCount >= 2) checkBuildTextures()
  }

  portraitImg.onload = onImgLoad
  portraitImg.onerror = () => onImgLoad()

  qrImg.onload = onImgLoad
  qrImg.onerror = () => onImgLoad()

  setTimeout(() => {
    if (!texturesReady) checkBuildTextures()
  }, 200)

  // Thin rope strap cord
  cordMaterial = new THREE.MeshStandardMaterial({
    color: 0x16181f,
    roughness: 0.85,
    metalness: 0.1,
  })

  const initialCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 3.4, 0),
    new THREE.Vector3(0, 2.7, 0),
    new THREE.Vector3(0, 2.0, 0),
    new THREE.Vector3(0, 1.43, 0),
  ])
  const initialCordGeo = new THREE.TubeGeometry(initialCurve, 32, 0.015, 8, false)
  cordMesh = new THREE.Mesh(initialCordGeo, cordMaterial)
  scene.add(cordMesh)

  let lastTime = performance.now()

  function animate(now) {
    if (isPaused) return
    rafId = requestAnimationFrame(animate)

    frameCount++
    if (now - lastFpsUpdate >= 1000) {
      currentFps.value = Math.round((frameCount * 1000) / (now - lastFpsUpdate))
      frameCount = 0
      lastFpsUpdate = now
    }

    const dt = Math.min((now - lastTime) / 1000, 0.05)
    lastTime = now

    const spring = 32
    const damping = 0.86
    const angularSpring = 28
    const angularDamping = 0.84

    const timeSec = now * 0.0015
    const idleSwayX = physics.isDragging ? 0 : Math.sin(timeSec * 1.3) * 0.035
    const idleSwayRotY = physics.isDragging ? 0 : Math.sin(timeSec * 1.1) * 0.045

    const effTargetX = physics.targetX + idleSwayX
    const effTargetY = physics.targetY
    const effTargetRotY = physics.targetRotY + idleSwayRotY

    const ax = (effTargetX - physics.x) * spring
    const ay = (effTargetY - physics.y) * spring
    physics.vx = (physics.vx + ax * dt) * damping
    physics.vy = (physics.vy + ay * dt) * damping
    physics.x += physics.vx * dt
    physics.y += physics.vy * dt

    const coupledRotZ = -physics.vx * 0.35 + physics.targetRotZ
    const aRotX = (physics.targetRotX - physics.rotX) * angularSpring
    const aRotY = (effTargetRotY - physics.rotY) * angularSpring
    const aRotZ = (coupledRotZ - physics.rotZ) * angularSpring

    physics.vRotX = (physics.vRotX + aRotX * dt) * angularDamping
    physics.vRotY = (physics.vRotY + aRotY * dt) * angularDamping
    physics.vRotZ = (physics.vRotZ + aRotZ * dt) * angularDamping

    physics.rotX += physics.vRotX * dt
    physics.rotY += physics.vRotY * dt
    physics.rotZ += physics.vRotZ * dt

    if (cardPivot) {
      cardPivot.position.set(physics.x, 1.35 + physics.y, 0)
      cardPivot.rotation.set(physics.rotX, physics.rotY, physics.rotZ)
    }

    updateCordMesh()
    renderer.render(scene, camera)
  }

  rafId = requestAnimationFrame(animate)

  const handleResize = () => {
    if (!canvasContainer.value || !renderer || !camera) return
    const w = canvasContainer.value.clientWidth
    const h = canvasContainer.value.clientHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)

    const mobile = window.innerWidth < 768
    renderer.setPixelRatio(mobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2))
  }
  window.addEventListener('resize', handleResize)

  const handleVisibilityChange = () => {
    if (document.hidden) {
      isPaused = true
      if (rafId) cancelAnimationFrame(rafId)
    } else {
      isPaused = false
      lastTime = performance.now()
      rafId = requestAnimationFrame(animate)
    }
  }
  document.addEventListener('visibilitychange', handleVisibilityChange)

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (isPaused) {
            isPaused = false
            lastTime = performance.now()
            rafId = requestAnimationFrame(animate)
          }
        } else {
          isPaused = true
          if (rafId) cancelAnimationFrame(rafId)
        }
      })
    },
    { threshold: 0.1 }
  )
  intersectionObserver.observe(container)
}

onMounted(() => {
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion.value) {
    // Lazily initialize 3D scene after first DOM paint
    requestAnimationFrame(() => {
      setTimeout(() => {
        initThreeScene()
      }, 50)
    })
  }
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  if (intersectionObserver) intersectionObserver.disconnect()
  document.removeEventListener('visibilitychange', () => {})

  if (renderer) {
    renderer.dispose()
    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }

  if (scene) {
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose()
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((mat) => mat.dispose())
        } else {
          obj.material.dispose()
        }
      }
    })
  }

  if (frontTexture) frontTexture.dispose()
  if (backTexture) backTexture.dispose()
})
</script>

<template>
  <div class="relative w-full max-w-[480px] lg:max-w-[540px] mx-auto select-none">
    
    <!-- Active Three.js Interactive Physics Canvas -->
    <div
      v-if="!prefersReducedMotion"
      ref="canvasContainer"
      class="relative w-full h-[480px] sm:h-[580px] lg:h-[680px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      style="touch-action: pan-y;"
      @pointermove="onPointerMove"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointerleave="onPointerLeave"
      aria-label="Interactive 3D hanging credential lanyard for Venkateshwaran. Drag horizontally to swing."
      role="img"
    >
      <!-- Pre-3D Instant Paint Fallback Preview (Zero Layout Shift while Three.js lazily parses) -->
      <div
        class="absolute pointer-events-none transition-opacity duration-300 w-full max-w-[280px] sm:max-w-[320px] p-5 rounded-2xl bg-[#fbfaf6] border border-[#e6e2d4] shadow-sm text-[#121316]"
        :class="is3dReady ? 'opacity-0' : 'opacity-100'"
      >
      >
        <div class="flex items-center justify-between text-xs font-mono text-[#525866]">
          <span class="font-bold text-[#121316]">VISU.AI</span>
          <span class="text-emerald-600 font-medium">● ACTIVE CREDENTIAL</span>
        </div>
        <div class="my-3 rounded-lg overflow-hidden border border-[#dfdacb] aspect-[4/3] bg-[#edeae0]">
          <img
            src="/images/badge_portrait.jpg"
            alt="Venkateshwaran"
            class="w-full h-full object-cover object-top"
          />
        </div>
        <div class="space-y-0.5">
          <p class="font-bold text-lg text-[#121316]">Venkateshwaran</p>
          <p class="font-serif italic text-sm text-[#0038ff]">Full Stack Developer</p>
        </div>
      </div>
    </div>

    <!-- Static CSS Fallback for prefers-reduced-motion -->
    <div
      v-else
      class="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto p-6 rounded-2xl bg-[#fdfaf6] border border-[#e6e2d4] shadow-sm text-[#121316] font-sans"
    >
      <div class="flex items-center justify-between pb-4 border-b border-[#e8e4d8] text-xs font-mono text-[#525866]">
        <span class="font-bold text-[#121316]">VISU.AI</span>
        <div class="flex items-center gap-1.5 text-emerald-600 font-medium">
          <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>ACTIVE CREDENTIAL</span>
        </div>
      </div>

      <div class="my-4 rounded-xl overflow-hidden border border-[#dfdacb] aspect-[4/3]">
        <img
          src="/images/badge_portrait.jpg"
          alt="Venkateshwaran"
          class="w-full h-full object-cover object-top"
        />
      </div>

      <div class="space-y-1">
        <h2 class="text-2xl font-bold text-[#121316]">Venkateshwaran</h2>
        <p class="font-serif italic text-lg text-[#0038ff]">Full Stack Developer</p>
        <p class="font-mono text-xs text-[#525866]">visu.ai • Chennai, India</p>
      </div>

      <div class="mt-4 pt-4 border-t border-[#e8e4d8] flex items-center gap-4">
        <img
          src="/images/qr_portfolio.png"
          alt="QR Code"
          class="w-16 h-16 border border-[#e0dbce] rounded p-1"
        />
        <div class="text-[11px] font-mono space-y-0.5">
          <p class="text-[#0038ff] font-semibold">DJANGO • LARAVEL • VUE 3</p>
          <p class="text-[#525866]">CELERY • RABBITMQ • REDIS</p>
          <p class="text-[#666d7e]">venkateshwaran-portfolio.web.app</p>
        </div>
      </div>
    </div>

  </div>
</template>