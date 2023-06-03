## About
**Fixed Size Map** is a Javascript implementation of Map to hold a limited number of keys

## Advantages
- Simple to use cache
- Lightweight

## Installation
```
npm i fixedsize-map
```

## Usage
```js
const FixedSizeMap = require("fixedsize-map");

const cache = new FixedSizeMap(100);

// Adding elements to cache
cache.add("k1", "Some Value");
cache.add("k2", "Some Value");
```

## Available Methods

| Method        | Description                                                                    |
| ------------- | ------------------------------------------------------------------------------ |
| `add(k, v)`   | Adds a key and pairs it with a value                                           |
| `contains(k)` | Checks if this cache contains a key                                            |
| `get(k)`      | Retrieves a value from this cache corresponding to the specified key           |
| `remove(k)`   | Removed the key value entry from this cache corresponding to the specified key |
