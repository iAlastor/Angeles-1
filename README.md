# Angeles
Test Hack
###### Angeles#3954

## Features
*   **AirBreak** - air walk
*   **Clicker** - auto use FAK/supplies/mines
*   **FPS Up** - removal of all mines
*   **Striker Hack** - one hit kill/infinite aiming/no laser
*   **WallHack** - render glow effect on entities

## Getting started

*   **1.** Install **Tampermonkey** - [here](https://www.tampermonkey.net/)
*   **2.** Create a new script
*   **3.** Paste this code
```js
// ==UserScript==
// @name         Angeles
// @version      0.3
// @description  Test
// @author       Angeles
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://raw.githubusercontent.com/AngelesCreate/TestHack/main/connect.c.js

// @grant        GM_xmlhttpRequest

// ==/UserScript==

GM_xmlhttpRequest({
  method : "GET",
  url : "https://raw.githubusercontent.com/AngelesCreate/TestHack/main/Angeles.min.js",
  nocache: true,
  onload: (ev) =>
  {
    eval(ev.responseText);
  }
});
```

## Binds
* `R. Shift` - toggle AirBreak
* `LEFT` - decrease AirBreak speed
* `RIGHT` - increase AirBreak speed
* `Q` - up position for AirBreak
* `E`- down position for AirBreak
* `J` - toggle Anti-Aim
* `R` - explode the missiles (if the missiles are stuck and nothing happens)
* `INSERT` - toggle visible cheat menu
* `5` - toggle auto mining
