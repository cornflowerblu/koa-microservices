---
to: src/services/<%= service %>/package.json
---
{
  "name": "<%= service %>",
  "version": "1.0.0",
  "description": "",
  "directories": {
    "test": "tests"
  },
  "scripts": {
    "test": "jest --coverage .",
    "build": "npx tsc",
    "start":"ts-node server.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
