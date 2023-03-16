const sdk = require('postman-collection');
const fs = require('fs');
const codegen = require('postman-code-generators');

const codeToFile = require("./writeCodeToFile")

const Collection = sdk.Collection;

const importedCollection = new Collection(JSON.parse(fs.readFileSync('collection.json').toString()))

const newRequestItem = importedCollection.items.idx(0);

const request = newRequestItem.request;

const language = 'Go';
const variant = 'Native';
const options = {
    indentCount: 3,
    indentType: 'Space',
    trimRequestBody: true,
    followRedirect: true
};

codegen.convert(language, variant, request, options, function(error, snippet) {
    if (error) {
        //  handle error
        console.log("Error Occured => ", error)
    }
    //  handle snippet
    console.log(snippet);
    codeToFile('RequestSnippet', snippet);
});

