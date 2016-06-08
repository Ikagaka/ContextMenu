/// <reference path="../typings/index.d.ts" />

import ContextMenu from "./index";
import assert = require('power-assert');
window["ContextMenu"] = ContextMenu;

// async-await and generator test
function * main(){
  yield 0;
}
async function _main(){
    await 0;
}


console.log(ContextMenu);


QUnit.module("ContextMenu");
QUnit.test('ContextMenu#load', (assert)=>{
    console.log(QUnit);
    assert.ok(true === true);
});
