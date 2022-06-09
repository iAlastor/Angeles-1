# Angeles
Test Hack
###### Angeles#3954

## Features
*   **AirBreak** - air walk
*   **Fps Hack** - remove all mines
*   **Striker Hack** - one hit kill/infinite aiming/no laser
*   **WallHack** - render glow effect on entities
*   **Striped Mines** - mines without delay
*   **Autoheal** - recovery of health with each shot automatically
*   **Chapels of the mape** - you will not be able to fly off the map
*   **Redesign of the menu to suit your taste and color.** - say me your settings (Angeles#3954)


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

// @require      https://raw.githubusercontent.com/AngelesCreate/TestHack/main/jquery.min.js
// @require      https://raw.githubusercontent.com/AngelesCreate/TestHack/main/isKeyPressing.min.js

// @grant        GM_xmlhttpRequest

// ==/UserScript==

GM_xmlhttpRequest({
  method : "GET",
  url : "https://raw.githubusercontent.com/AngelesCreate/TestHack/main/Testhacks.min.js",
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
