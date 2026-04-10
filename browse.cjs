const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('http://localhost:5174');
  await page.waitForTimeout(2000);
  
  // Check the position of Metrics relative to Hero
  const metricRect = await page.evaluate(() => {
    const metric = document.querySelector('.xl\\:w-\\[1081px\\]');
    
    if (metric) {
      const rect = metric.getBoundingClientRect();
      return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
    }
    return null;
  });
  
  console.log("Metric Rect:", metricRect);
  
  const sections = await page.evaluate(() => {
     const items = document.querySelectorAll('section');
     return Array.from(items).map((el, i) => {
         const r = el.getBoundingClientRect();
         return `Section ${i}: top=${r.top}, left=${r.left}, width=${r.width}, height=${r.height}`;
     });
  });
  console.log(sections.join('\n'));
  
  await browser.close();
})();
