let fs = require('fs');
let cheerio = require('cheerio');
const puppeteer = require('puppeteer')

let dataModel = {
    name: 'string',
    grade: 'string',
    repeatNumber: 123,
    firstSends: 123
}

let data = [];

let baseSendData = function (fileName, climbType) {
    let content = fs.readFileSync('data/' + fileName + '.txt');

    let $ = cheerio.load(content);
    // console.log($); 
    let queryEl;

    if (climbType == 'Boulder Problem') {
        queryEl = $("#tablepress-1 > tbody > tr")
        // return queryEl
    } else if (climbType == 'Sport Route') {
        queryEl = $("#tablepress-103 > tbody > tr")
        // return queryEl
    }
    // console.log(queryEl);

    queryEl.each((i, el) => {
        // console.log(i);  
        // console.log($(el).children('td.column-1').text()) // name
        
        // split grade into V grade and Font Grade
        let grades = ($(el).children('td.column-2').text()).split('(')
        // let fontgrade = grades[1].slice(0, -1);
        // console.log(fontgrade)

        // split repeats by ',' + count items
        let repeatsSplit = ($(el).children('td.column-5').text()).split(',')
        // console.log(repeatsSplit)

        data.push({
            id: i,
            type: climbType,
            name: $(el).children('td.column-1').text(),
            grade: {
                gradeV: grades[0].slice(0, -1),
                gradeFont: grades[1].slice(0, -1),
            },
            sends: {
                totalSends: repeatsSplit.length,
                climberList: repeatsSplit
            },
            geoInfo: {
                crag: $(el).children('td.column-3').text(),
                country: $(el).children('td.column-4').text(),
            }
        })
    })
    // console.log(data);
}
baseSendData('boulderData', 'Boulder Problem')
baseSendData('sportData', 'Sport Route')

// ascent gaps
// scrape crag page > for every item in this list, check if exists in crag
let cragLinks = function (fileName) {
    let content = fs.readFileSync('data/' + fileName + '.txt');

    let $ = cheerio.load(content);
    // console.log($); 

    let queryEl = $("tr.actionable")
    // console.log(queryEl);

    data.forEach((dataEl, n) => {
        // console.log(dataEl.name);
        queryEl.each((i, el) => {
            // console.log(i);  

            let routeName = $(el).children('td.rt_name').children('span.route').children('a').text();
            let cragRouteLink = 'https://www.thecrag.com' + $(el).children('td.rt_name').children('span.route').children('a').attr('href');
            // console.log(dataEl.name)

            if (routeName == dataEl.name) {
                // console.log(routeName)
                // console.log(dataEl.name)

                dataEl.sends.cragSendLink = cragRouteLink
                // console.log(dataEl.sends.sendsLink)
            } else if (routeName !== dataEl.name) {
                // console.log(dataEl)
                // dataEl.splice(index, i)
            }
        })
    })
    // console.log(data.length);
}
cragLinks('boulderCragLinkData')
cragLinks('sportCragLinkData')

// grab year + link
// on link grab ascent years


// ======================================================
// for each name of file with scrape page
// pull dates and calc gap btw 1st and 2nd sends + longest gap?
// hardcrags data
// let sendsBoulderData = function () {
//     data.forEach((el, i) => {

//         if (el.sends.sendsLink) {
//             let content = fs.readFileSync('data/txt_data/' + el.name + '.txt');

//             let $ = cheerio.load(content);
//             if ($) {
//                 console.log(true)
//             }
//         }

//     })
// }
// sendsBoulderData();
// ======================================================

// let sendsBoulderData = function () {
//     data.forEach((el, i) => {

//         let content = fs.readFileSync('data/' + fileName + '.txt');

//         let $ = cheerio.load(content);
//         // console.log($); 
    
//         let queryEl = $("")

//         queryEl.each((i, el) => {

//             // check name against site climb name
//             // if doesnt exist push data
//             // else if exists add dates and check if has name?
//                 // if no name add name
            
//         })
//     })
// }
// sendsBoulderData();


let sendsDataUpdate = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let url = "https://hardclimbs.info/"

    await page.goto(url);

    let res = await page.evaluate(() => {
        // let queryEl = document.querySelectorAll("#ember33")
        let queryEl = document.querySelectorAll("[id='ember33']")

        return queryEl
        
        // queryEl.each((i, el) => {

            // check name against site climb name
            // if doesnt exist push data
            // else if exists add dates and check if has name?
                // if no name add name
            
        // })
    })

    browser.close()
    return res
}
// sendsDataUpdate().then((value) => {
//     console.log(value)
// });



function writeFile(fsName, fsData) {
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
}
writeFile('hardClimbData', data)