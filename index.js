const puppeteer = require('puppeteer');
const url = "https://www.newegg.com/product-shuffle";

(async () => {
    const browser = await puppeteer.launch( {headless: false, args: ['--start-maximized']} );
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900});
    //page.setRequestInterception(true);
    await page.goto(url);
    await page.type('#labeled-input-signEmail', "test");
    //await page.screenshot( {path: "C:/Users/User/Documents/GitHub/Newegg-Scraper/output.png"} );
    //await browser.close();
}) ()
