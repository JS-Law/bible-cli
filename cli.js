#!/usr/bin/env node

console.log('Hello, Bible CLI!');




const getTranslation = (book) => {
    // Get Genesis 1 from the BSB translation
    fetch(`https://bible-api.com/genesis+1?translation=${book}`)
        .then(request => request.json())
        .then(chapter => {
            console.log('Genesis 2 (BSB):', chapter);
        });
}                 

getTranslation('KJV');