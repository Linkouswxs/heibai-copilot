import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const issues: string[] = [];

  // 监听 console 错误
  page.on('console', msg => {
    if (msg.type() === 'error') {
      issues.push(`Console Error: ${msg.text()}`);
    }
  });

  // 监听页面错误
  page.on('pageerror', err => {
    issues.push(`Page Error: ${err.message}`);
  });

  console.log('Testing homepage...');
  await page.goto('https://heibai-copilot.vercel.app');
  await page.waitForLoadState('networkidle');

  // 检查横向溢出
  const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth = await page.evaluate(() => window.innerWidth);
  if (bodyWidth > viewportWidth) {
    issues.push(`Overflow: body scrollWidth (${bodyWidth}) > viewportWidth (${viewportWidth})`);
  }

  // 检查元素对齐
  const headings = await page.locator('h1, h2, h3').all();
  for (const heading of headings) {
    const box = await heading.boundingBox();
    if (box && box.x < 0) {
      issues.push(`Heading overflow: x=${box.x}, width=${box.width}`);
    }
  }

  // 检查图片加载
  const images = await page.locator('img').all();
  for (const img of images) {
    const loaded = await img.evaluate(el => (el as HTMLImageElement).complete);
    if (!loaded) {
      issues.push(`Image not loaded: ${await img.getAttribute('src')}`);
    }
  }

  // 测试详情页
  console.log('Testing post detail page...');
  await page.goto('https://heibai-copilot.vercel.app/posts/1');
  await page.waitForLoadState('networkidle');
  
  const bodyWidth2 = await page.evaluate(() => document.body.scrollWidth);
  const viewportWidth2 = await page.evaluate(() => window.innerWidth);
  if (bodyWidth2 > viewportWidth2) {
    issues.push(`Overflow (detail): body scrollWidth (${bodyWidth2}) > viewportWidth (${viewportWidth2})`);
  }

  await browser.close();

  if (issues.length > 0) {
    console.log('\n❌ Issues found:');
    issues.forEach(i => console.log(`  - ${i}`));
    process.exit(1);
  } else {
    console.log('\n✅ No issues found!');
    process.exit(0);
  }
})();
