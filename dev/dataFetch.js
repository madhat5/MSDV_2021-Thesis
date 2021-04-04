// cf DVIA assign 3

let request = require('request');
let fs = require('fs');
let jsonData = require('./data/hardClimbData.json')

let urlOne = "https://www.99boulders.com/hardest-boulder-problems";
let urlTwo = "https://www.thecrag.com/en/article/hardestboulders";
let urlThree = "https://hardclimbs.info/"
let urlFour = "https://www.99boulders.com/hardest-sport-climbs";
let urlFive = "https://www.thecrag.com/en/article/hardestroutes";

let scrape = function (urlData, dataName) {
    request(urlData, function (err, res, body) {
        if (!err && res.statusCode == 200) {
            // console.log(body)

            fs.writeFileSync('data/' + dataName + 'Data.txt', body);
            console.log('site: ', urlData);
        } else {
            console.log('request failed')
        }
    });
};
// scrape(urlOne, 'boulder');
// scrape(urlFour, 'sport');
scrape(urlTwo, 'boulderCragLink')
scrape(urlFive, 'sportCragLink')
// scrape(urlThree, 'hardClimbs')

// scrape loop of data.sendsLink
// console.log(jsonData)
let scrapeCragLinks = function () {
    jsonData.forEach((el, i) => {
        // add if statement for boulder vs sport
        
        // console.log(i);
        // console.log(el.sends.sendsLink);

        let urlData = el.sends.sendsLink

        if (urlData) {
            request(urlData, function (err, res, body) {
                if (!err && res.statusCode == 200) {
                    fs.writeFileSync('data/txt_data/' + el.name + '.txt', body)
                } else {
                    console.log('request failed')
                }
            });
        }
    });
};
// scrapeCragLinks()