#!/usr/bin/env node

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


const getVerse = (version, book, chapter, verse) => {
    fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`)
        .then((request) => request.json())
        .then((verseData) =>  console.log(verseData.text));
} 

getVerse('en-kjv', 'genesis', 1, 1);
getVerse('en-kjv', 'genesis', 1, 1);
getVerse('en-asv', 'john', 3, 16);

const testFetch = () => {
    fetch(
        "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
    )
        .then((response) => response.json())
        .then((data) => console.log(data.text));   
}

// testFetch();

