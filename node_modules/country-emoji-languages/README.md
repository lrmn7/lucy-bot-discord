# country-emoji-languages

> Get country languages from country flag emojis

## Install

```sh
npm install country-emoji-languages
```

## Usage

```js
const { isValidCode, isValidEmoji, getLanguagesFromCode, getLanguagesFromEmoji } = require("country-emoji-languages");

isValidCode("IN"); // true

isValidEmoji("🇮🇳"); // true

getLanguagesFromCode("IN"); // ['bn', 'en', 'gu', 'hi', 'pa', 'ta', 'te']

getLanguagesFromEmoji("🇮🇳"); // ['bn', 'en', 'gu', 'hi', 'pa', 'ta', 'te']
```

## To Do's

-   Return language names along with codes
