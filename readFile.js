
const fs = require('fs');

const fileName = 'welcome.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err.message}`);
    return;
  }

  console.log(`File content of ${fileName}:\n${data}`);
});


