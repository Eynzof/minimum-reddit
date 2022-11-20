import puppeteer from "puppeteer";

jest.setTimeout(30000);

describe("App.js", () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({headless: false});
        page = await browser.newPage();
    });

    it("contains the welcome text", async () => {
        await page.goto("http://localhost:3000/");
        await page.waitForSelector(".subreddit-title");
        const text = await page.$eval(".subreddit-title", (e) => e.textContent);
        expect(text).toContain("Subreddits");
    }, 30000);

    afterAll(() => browser.close());
});