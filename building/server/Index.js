const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const puppeteer = require("puppeteer");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // disabled for security on local
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/PortalJob", async (req, res) => {
  let page_num = 2;
  let page_endpoint = "";

  if (page_num == 1) {
    page_endpoint = "";
  } else if (page_num <= 932) {
    page_endpoint = "page/" + page_num;
  } else {
    console.log("PAGE NON DISPONIBLE");
  }

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(
    `https://www.portaljob-madagascar.com/emploi/liste/${page_endpoint}`
  );
  const job = await page.evaluate(() => {
    let job = [];
    let elements = document.querySelectorAll("article.item_annonce");
    for (item of elements) {
      job.push({
        date_annonce:
          item.querySelector("aside.date_annonce > div.date > b").textContent +
          " " +
          item.querySelector("aside.date_annonce > div.date > span.mois")
            .textContent +
          " " +
          item.querySelector("aside.date_annonce > div.date > span.annee")
            .textContent,
        titre: item.querySelector("h3 > a > strong").textContent,
        societe: item.querySelector("h4").textContent,
        contrat_type: item.querySelector("h5").textContent,
        description: item.querySelector("a.description").textContent,
        lien: item.querySelector("h3 > a").href,
        date_lim: item.querySelector("i.date_lim")?.textContent,
      });
    }
    return job;
  });

  //console.log(job);

  res.send(job);

  await browser.close();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
