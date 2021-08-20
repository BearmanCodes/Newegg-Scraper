const puppeteer = require('puppeteer');
const url = "https://www.newegg.com/product-shuffle";
require('dotenv').config();

(async () => {
    const browser = await puppeteer.launch( {headless: false, args: ['--start-maximized']} );
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900});
    //page.setRequestInterception(true);
    await page.goto(url);
    await page.type('#labeled-input-signEmail', `${process.env['EMAIL']}`);
    await page.click('#signInSubmit');
    await page.waitForSelector('#labeled-input-password');
    await page.type('#labeled-input-password', `${process.env['PASSWORD']}`);
    await page.click("#signInSubmit");
    await page.waitForSelector(".modal-content");
    await page.waitForSelector(".close");
    await page.click(".close");
    await page.waitForSelector(".bg-wide-flag");
    var element = await page.$(".bg-wide-flag");
    var text = await element.evaluate(element => element.textContent);
    if (text == " Event Starts In"){
        text = await element.evaluate(element => element.textContent);
    }
    
    console.log(text);
}) ()
