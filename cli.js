#!/usr/bin/env node
// import minimist from 'minimist';
console.log('Hello, Bible CLI!');


// Get a verse from the Bible API
// https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json

// Get a chapter from the Bible API
// https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json


// EXAMPLE REQUEST:
// fetch(
//     "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
// )
//     .then((response) => response.json())
//     .then((data) => console.log(data.text));




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

const getChapter = (version, book, chapter) => {
    // Build the API URL for the specific chapter
    fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`)
        // Get the response and parse it as JSON
        .then((request) => request.json())
        // Print each verse in the chapter to the console
        .then((data) => {
            console.log(`\n${book.charAt(0).toUpperCase() + book.slice(1)} ${chapter} (${version}):\n`);
            if (data.data && Array.isArray(data.data)) {
                data.data.forEach(v => {
                    const cleanText = v.text.replace(/¶/g, '');
                    console.log(`${v.book} ${v.chapter}:${v.verse} \n- ${cleanText}\n`);
                });
            } else {
                console.error('No verses found in response:', data);
            }
        });
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

if (args.verse) {
getVerse(version, book, chapter, args.verse);
} else {
getChapter(version, book, chapter);
}   
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



// ==============================SECONDARY API REQUESTs==============================
// Get the list of books for the BSB translation
// fetch(`https://bible.helloao.org/api/BSB/books.json`)
//     .then(request => request.json())
//     .then(books => {
//         console.log('The BSB has the following books:', books);
//     });

// Get Genesis 1 from the BSB translation
// fetch(`https://bible.helloao.org/api/BSB/GEN/1.json`)
//     .then(request => request.json())
//     .then(chapter => {
//         // console.log('Genesis 1 (BSB):', chapter);
//         chapter.chapter.content.forEach(verseObj => {
//             console.log(`${verseObj.verse}: ${verseObj.text}`);
//         });
//     });