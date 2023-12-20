// src/utils/fileStorage.js

const fs = require('fs');

// Function to read data from a file
const readFromFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return null;
  }
};

// Function to write data to a file
const writeToFile = (filePath, data) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
    console.log('Data written to file successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
};

module.exports = {
  readFromFile,
  writeToFile
};
