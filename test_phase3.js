import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop Test (1440x900)
  console.log('Testing 1440px desktop Skills section...');
  const pageDesktop = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  const consoleLogs = [];
  pageDesktop.on('console', msg => consoleLogs.push(msg.text()));
  pageDesktop.on('pageerror', err => console.error('Page error:', err.message));

  await pageDesktop.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await pageDesktop.waitForTimeout(1500);

  // Scroll to Skills section on desktop
  await pageDesktop.evaluate(() => {
    const el = document.querySelector('#skills');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await pageDesktop.waitForTimeout(600);

  // Capture desktop skills overview
  await pageDesktop.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_desktop_1440.png'
  });

  // Scrub through the pinned diagram and capture packet frames
  console.log('Scrubbing through desktop pipeline animation...');
  
  // Frame 1: Inbound -> Broker
  await pageDesktop.evaluate(() => window.scrollBy({ top: 150, behavior: 'instant' }));
  await pageDesktop.waitForTimeout(400);
  await pageDesktop.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_packet_frame1.png'
  });

  // Frame 2: Fan out to Celery Workers
  await pageDesktop.evaluate(() => window.scrollBy({ top: 250, behavior: 'instant' }));
  await pageDesktop.waitForTimeout(400);
  await pageDesktop.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_packet_frame2.png'
  });

  // Frame 3: Redis -> Vue 3
  await pageDesktop.evaluate(() => window.scrollBy({ top: 250, behavior: 'instant' }));
  await pageDesktop.waitForTimeout(400);
  await pageDesktop.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_packet_frame3.png'
  });

  // Scroll down to complete inventory specimen sheet
  await pageDesktop.evaluate(() => window.scrollBy({ top: 400, behavior: 'instant' }));
  await pageDesktop.waitForTimeout(400);
  await pageDesktop.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_inventory_desktop_1440.png'
  });

  // Measure real FPS during active scrolling/scrubbing
  console.log('Measuring Desktop FPS during scrub...');
  const desktopFps = await pageDesktop.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function count() {
        frames++;
        window.scrollBy(0, 2);
        if (performance.now() - start < 1000) {
          requestAnimationFrame(count);
        } else {
          const elapsed = (performance.now() - start) / 1000;
          resolve(Math.round(frames / elapsed));
        }
      }
      requestAnimationFrame(count);
    });
  });
  console.log('Measured Desktop FPS during scrub:', desktopFps);

  // 2. Mobile Test (390x844)
  console.log('Testing 390px mobile Skills section...');
  const pageMobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });

  await pageMobile.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await pageMobile.waitForTimeout(1500);

  // Scroll to Skills section on mobile
  await pageMobile.evaluate(() => {
    const el = document.querySelector('#skills');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await pageMobile.waitForTimeout(600);

  // Mobile Skills Header + Vertical Pipeline screenshot
  await pageMobile.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_mobile_390.png'
  });

  // Scroll to Mobile inventory specimen
  await pageMobile.evaluate(() => window.scrollBy({ top: 550, behavior: 'instant' }));
  await pageMobile.waitForTimeout(400);
  await pageMobile.screenshot({
    path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/skills_inventory_mobile_390.png'
  });

  // Measure real Mobile FPS
  const mobileFps = await pageMobile.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function count() {
        frames++;
        window.scrollBy(0, 2);
        if (performance.now() - start < 1000) {
          requestAnimationFrame(count);
        } else {
          const elapsed = (performance.now() - start) / 1000;
          resolve(Math.round(frames / elapsed));
        }
      }
      requestAnimationFrame(count);
    });
  });
  console.log('Measured Mobile FPS during scroll:', mobileFps);

  await browser.close();
  console.log('Skills testing and verification complete!');
}

main().catch(err => {
  console.error('Test script failed:', err);
  process.exit(1);
});
