// 'use strict'

let fs = require('fs');
let cheerio = require('cheerio');

let boulderData = [{
    "id": 00,
    "year": 2004,
    "climbs": 45
}]

let hardClimbData = require("./data/hardClimbData.json")
// console.log(hardClimbData)

let data = [];
let tempArr = [];

hardClimbData.forEach((el, i) => {
    // console.log(el.sends.sendDates.length)

    let baseArr = el.sends.sendDates;
    // let tempArr = [];

    if (baseArr != undefined) {
        for (let i = 0; i < baseArr.length - 1; i++) {
            // console.log(baseArr[i].split('-')[0])
            tempArr.push(baseArr[i].split('-')[0])
        }
        // console.log(tempArr)
    }

})
// console.log(tempArr)

let counts = {};
for (let i = 0; i < tempArr.length; i++) {
    counts[tempArr[i]] = 1 + (counts[tempArr[i]] || 0);
}
// console.log(counts)

let num = 0
for (el in counts) {
    num = num + 1;

    data.push({
        id: num,
        year: `${el}`,
        climbs: +`${counts[el]}`
    })
}
// console.log(data)

function writeFile(fsName, fsData) {
    // fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    fs.writeFileSync('data/' + fsName + '.json', JSON.stringify(fsData));
    console.log('*** *** *** *** ***');
    console.log('writeFile complete for', fsName);
}
writeFile('yearlyClimbData', data)