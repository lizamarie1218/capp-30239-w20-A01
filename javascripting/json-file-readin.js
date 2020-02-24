// https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824
  const fs = require('fs');
  try {
  const jsonString = fs.readFileSync(data)
  const dataObj = JSON.parse(jsonString)
  const dataArray = dataObj[0]
  } catch(err) {
      console.log(err)
      return
  };