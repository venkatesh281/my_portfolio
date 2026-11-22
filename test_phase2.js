import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop Test (1440x900)
  console.log('Testing 1440px desktop...');
  const pageDesktop = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  const consoleLogs = [];
  pageDesktop.on('console', msg => consoleLogs.push(msg.text()));

  await pageDesktop.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await pageDesktop.waitForTimeout(2000);

  // Desktop Hero screenshot
  await pageDesktop.screenshot({ path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/hero_phase2_1440.png' });

  // Scroll to About section on desktop
  await pageDesktop.evaluate(() => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await pageDesktop.waitForTimeout(600);
  await pageDesktop.screenshot({ path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/about_desktop_1440.png' });

  // Reset scroll to top
  await pageDesktop.evaluate(() => window.scrollTo(0, 0));
  await pageDesktop.waitForTimeout(400);

  // Measure real FPS over 120 frames in browser
  const fpsResult = await pageDesktop.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function count() {
        frames++;
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

  console.log('Measured Desktop FPS:', fpsResult);

  // 2. Mobile Test (390x844 - iPhone 14 / modern standard mobile)
  console.log('Testing 390px mobile...');
  const pageMobile = await browser.newPage({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true
  });

  await pageMobile.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await pageMobile.waitForTimeout(2000);

  // Mobile top hero screenshot (verifies high badge placement)
  await pageMobile.screenshot({ path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/hero_phase2_390.png' });

  // Scroll to About section on mobile
  await pageMobile.evaluate(() => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await pageMobile.waitForTimeout(600);
  await pageMobile.screenshot({ path: 'C:/Users/hp/.gemini/antigravity/brain/c77d3f47-5c27-4959-a970-d1a88dba5755/about_mobile_390.png' });

  // Measure real Mobile FPS
  const mobileFpsResult = await pageMobile.evaluate(async () => {
    return new Promise(resolve => {
      let frames = 0;
      const start = performance.now();
      function count() {
        frames++;
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

  console.log('Measured Mobile FPS:', mobileFpsResult);
  console.log('Console logs count:', consoleLogs.length);

  await browser.close();
  console.log('Verification completed successfully.');
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
