# paticik-fixed

## how to develop with local ide?

- give tampermonkey access to local files on your browser.
- clone the repo.

add this script in tamper monkey.

```
// ==UserScript==
// @name         paticik-debug
// @include      https://forum.paticik.com/*
// @require      file:///E:/Coding/paticik-fixed/fixed.user.js
// @grant        GM_addStyle
// ==/UserScript==
```

you have to fix that local path to get it working.