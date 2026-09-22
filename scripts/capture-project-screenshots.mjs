import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const sites = [
  { slug: "hr-it", url: "https://hr-it-website.vercel.app/" },
  { slug: "archana-garments", url: "https://archanagarments.vercel.app/" },
  { slug: "viva-soft", url: "https://viva-soft.vercel.app/" },
  { slug: "veduka-restaurant", url: "https://vedukarestaurant.com/" },
  { slug: "soltex", url: "https://soltex.vercel.app/" },
  { slug: "german-quiz", url: "https://germanquiz.vercel.app/" },
  { slug: "care", url: "https://care.ukp.informatik.tu-darmstadt.de/" },
];

const outDir = path.join(process.cwd(), "public/projects/screenshots");

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 1,
});

for (const site of sites) {
  const page = await context.newPage();
  try {
    await page.goto(site.url, { waitUntil: "domcontentloaded", timeout: 90000 });
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(outDir, `${site.slug}.png`),
      fullPage: false,
    });
    console.log("OK", site.slug);
  } catch (error) {
    console.error("FAIL", site.slug, error.message);
  } finally {
    await page.close();
  }
}

await browser.close();
