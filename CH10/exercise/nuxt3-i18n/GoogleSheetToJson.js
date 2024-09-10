// GoogleSheetToJson.js
// GoogleSheetToJson.js
const fs = require("fs-extra");
const unflatten = require("flat").unflatten;
const { extractSheets } = require("spreadsheet-to-json");
const path = require("path");
extractSheets(
  {
    spreadsheetKey: '1YsIJyhRcJlDimjJoB1MbHOJ-835i4c2mKrE9LfU5Xvc',
    credentials:  require('./google/nuxt3-keke-i18n-test-5775c0814d63.json'),
    sheetsToExtract: ['index','about'],
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data['index'], ...data['about']];
    const result = {};
    const files = [];
    
    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, "./language", `${fileName}.json`)
        )
      );
      fs.writeJSONSync(
        path.resolve(__dirname, "./language", `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      );
    }

  }
);
