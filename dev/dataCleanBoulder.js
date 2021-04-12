'use strict'

let fs = require('fs');
let cheerio = require('cheerio');
// const puppeteer = require('puppeteer')
const csvParser = require('csv-parser');


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

let sendsDateUpdate = function () {

    data.forEach((el, i) => {

        let datesArr = []
        // el.sends.sendDates = []

        fs.createReadStream('data/hardClimbInfo.csv')
            .on('error', () => {
                console.log('error')
            })
            .pipe(csvParser())
            .on('data', (row) => {
                // console.log(row);

                if (el.name == row.CLIMB) {
                    // console.log(row.CLIMB);

                    // check if last name from csv exists in data, and if does, add date in json at index of last name
                    // if doesn't exist, add to data.name + date

                    // console.log(row.DATE)
                    datesArr.push(row.DATE)
                    // // console.log(datesArr)
                    // el.sends.sendDates = datesArr;
                    // el.sends.sendDates.push(row.DATE)
                    // console.log(el.sends.sendDates)
                }
            })
            .on('end', () => {
                // console.log('CSV file successfully processed');
                // console.log(el.sends.sendDates)
                // console.log(datesArr)
                el.sends.sendDates = datesArr;
                // console.log(el.sends.sendDates)
                let timeCount = 0;

                if (datesArr.length > 1) {
                    let date1 = new Date(datesArr[0]);
                    let date2 = new Date(datesArr[datesArr.length - 1]);

                    let Difference_In_Time = date2.getTime() - date1.getTime();
  
                    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

                    timeCount = Difference_In_Days / 365
                }

                // console.log(el.name + ' ' + datesArr + ' ' + timeCount);
                // console.log(datesArr)
                // console.log();
                // el.sends.totalYears = timeCount;
                el.sends.totalYears = Math.round(timeCount * 100) / 100;

                // setup if i == data.lengthb
                if (i == data.length - 1) {
                    // console.log(data)
                    // console.log(el.name + ' ' + el.sends.sendDates)
                    // console.log("the End")
                    writeFile('hardClimbData', data)
                }

            });
        // el.sends.sendDates = datesArr;
        // console.log(datesArr)
        // console.log(el)

    })
}
sendsDateUpdate();
// console.log(data)



function writeFile(fsName, fsData) {
    // fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
}
// writeFile('hardClimbData', data)
// writeFile('hardClimbDataTemp', data)