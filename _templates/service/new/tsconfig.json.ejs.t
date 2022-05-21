---
to: src/services/<%= service %>/tsconfig.json
---
{
    "extends": "../../../tsconfig.json",
    "compilerOptions": {
        "outDir": "./bin",
        "esModuleInterop": true,
    },
    "exclude": ["tests"]
}