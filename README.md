# ln3


[![MIT][mit-image]][mit-url]

> Custom, simple, extendable internationalization module for JavaScript applications


[mit-image]: https://img.shields.io/npm/l/es6-event-emitter.svg?style=flat-square
[mit-url]: https://github.com/stanurkov/ln3/blob/master/LICENSE


## Introduction

The idea behind this module is to provide a simple way to perform internationalization by using a call that contains both language identifier and default value. Just like this: 

```
ln3.text("sample.text", "This is a sample text that should be translated")
```

This way, a developer don't need to dig into project files in order to find what the language constant actually means. From the other hand, it is also easy to collect all the strings for  translation using a RegEx-based tool and make them available for translation either by developers or other parties.


#### Installation
From the root of your project.
```sh
npm install ln3
```

#### Usage

```
import ln3 from 'ln3';

console.log( ln3.text("sample.text", "This is a sample text that should be translated") );

```

