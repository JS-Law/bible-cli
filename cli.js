#!/usr/bin/env node
// import minimist from 'minimist';
console.log('Hello, Bible CLI!');


// Get a verse from the Bible API
// https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json

// Get a chapter from the Bible API
// https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json


/* 
EXAMPLE REQUEST:
fetch(
    "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
)
    .then((response) => response.json())
    .then((data) => console.log(data.text));
*/



// Import minimist for parsing command-line arguments
const minimist = require('minimist');

// Function to fetch and print a single verse
// version: Bible translation (e.g., 'en-kjv')
// book: Book name (lowercase, e.g., 'genesis')
// chapter: Chapter number (integer)
// verse: Verse number (integer)
const getVerse = (version, book, chapter, verse) => {
    // Build the API URL for the specific verse
    fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`)
        // Get the response and parse it as JSON
        .then((request) => request.json())
        // Print the verse text to the console
        .then((verseData) =>  console.log(verseData.text));
}

// Parse command-line arguments using minimist
// Example: node cli.js --book genesis --chapter 1 --verse 1 --version en-kjv
const args = minimist(process.argv.slice(2));
// Get the book name, default to 'genesis', and convert to lowercase
const book = (args.book || 'genesis').toLowerCase();
// Get the chapter number, default to 1
const chapter = args.chapter || 1;
// Get the verse number, default to 1
const verse = args.verse || 1;
// Get the version, default to 'en-kjv'
const version = args.version || 'en-kjv';

// Fetch and print the requested verse
getVerse(version, book, chapter, verse);

// Example function to fetch a specific verse (used for testing)
const testFetch = () => {
    // Hardcoded request for Genesis 1:1 in ASV translation
    fetch(
        "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
    )
        .then((response) => response.json())
        .then((data) => console.log(data.text));   
}

// Uncomment to run the testFetch function
// testFetch();

