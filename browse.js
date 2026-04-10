const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:5174');
  await page.waitForTimeout(2000);
  
  // Check the position of Metrics relative to Hero
  const heroRect = await page.evaluate(() => {
    const el = document.querySelector('section:has(.content-stretch)'); // or try to find hero
    const metric = document.querySelector('.max-w-\\[1081px\\]') || document.querySelector('.xl\\:w-\\[1081px\\]');
    
    if (metric) {
      const rect = metric.getBoundingClientRect();
      return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
    }
    return null;
  });
  
  console.log("Metric Rect:", heroRect);
  await browser.close();
})();
