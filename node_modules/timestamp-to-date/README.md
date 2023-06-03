## timestamp-to-date
Returns date on 'yyyy-MM-dd HH:mm:ss' format from timestamp
## Installation

```sh
$ npm i timestamp-to-date
```

## Usage
```javascript
'use strict'

const timestampToDate = require('.timestampToDate');
console.log(timestampToDate('1484448039504','yyyy-MM-dd HH:mm:ss')) // => 2017-01-15 10:40:39
console.log(timestampToDate('1484448039504','yyyy-MM-dd')) // => 2017-01-15

```
