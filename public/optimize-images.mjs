import sharp from "sharp";
import fs from 'fs'
const images = [
    { input: "./dashboard.png", output: "./dashboard.webp", width: 455 },
    { input: "./devNext.png", output: "./devNext.webp", width: 455 },
    { input: "./docMind.png", output: "./docMind.webp", width: 455 },
    { input: "./exposio.png", output: "./exposio.webp", width: 455 },
    { input: "./jarvis-assistant.png", output: "./jarvis-assistant.webp", width: 455 },
    { input: "./Mak-todos.png", output: "./Mak-todos.webp", width: 455 },
    { input: "./movieX.png", output: "./movieX.webp", width: 455 },
    { input: "./myLeads.png", output: "./myLeads.webp", width: 455 },
    { input: "./pi-converter.png", output: "./pi-converter.webp", width: 455 },
    { input: "./Profile.jpg         ", output: "./Profile.webp", width: 455 },
    { input: "./rsg.png", output: "./rsg.webp", width: 455 },
    { input: "./tech-zen.png", output: "./tech-zen.webp", width: 455 },
    { input: "./todays-News.png", output: "./todays-News.webp", width: 455 },
    { input: "./wordbridge.png", output: "./wordbridge.webp", width: 455 }
];

for (const img of images) {
    await sharp(img.input)
        .resize({ width: img.width })
        .webp({ quality: 80 })
        .toFile(img.output);
    console.log(`✓ ${img.input} → ${img.output}`);
}

