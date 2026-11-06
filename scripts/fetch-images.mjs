// Downloads the AI-generated site photos and saves optimised JPGs into static/.
// Runs automatically before `npm run dev` / `npm run build` and skips files that already exist.
// Run once locally (`npm run images`) and commit static/*.jpg to stop depending on the remote CDN.
import { existsSync, mkdirSync } from "node:fs";
import sharp from "sharp";

const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3EXetEIG5AYDqY6DD0YFjA2Urhn";
const images = [
  ["hero.jpg", "hf_20261106_110722_f4ec4308-f33c-45b5-a0b0-80acb5ef2c1c", 1920],
  ["gal_01.jpg", "hf_20261106_110721_5027e285-65a1-420a-85e3-427891f9f247", 1200],
  ["gal_02.jpg", "hf_20261106_110412_605a5874-6fe2-4ecf-bde2-fa5148ea6a0a", 1200],
  ["gal_03.jpg", "hf_20261106_110931_4ad1d7be-005b-4e20-bfed-daa71b370da2", 1200],
  ["gal_04.jpg", "hf_20261106_110411_37fd92fb-329e-4c79-a825-16da1dbf728e", 1200],
  ["gal_05.jpg", "hf_20261106_110936_d6466922-5233-4629-99d7-af74068f5345", 1200],
  ["gal_06.jpg", "hf_20261106_110932_0216e35b-695c-418d-8fd7-111fae06d72d", 1200],
  ["van.jpg", "hf_20261106_110411_1392fc8b-349b-409b-8f20-6eb02004b21d", 1200],
  ["about.jpg", "hf_20261106_110412_16694b5e-ffc9-432e-a16c-895bdf0e6736", 800],
];

mkdirSync("static", { recursive: true });
let failed = 0;
for (const [name, id, width] of images) {
  const out = `static/${name}`;
  if (existsSync(out)) continue;
  try {
    const res = await fetch(`${CDN}/${id}.png`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf).resize({ width, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(out);
    console.log(`✓ ${out}`);
  } catch (err) {
    failed++;
    console.warn(`✗ ${out}: ${err.message}`);
  }
}
if (failed) console.warn(`${failed} image(s) could not be fetched.`);
