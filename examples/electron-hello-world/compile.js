"use strict";

const bytenode = require("../../");
const fs = require("fs");
const v8 = require("v8");

v8.setFlagsFromString("--no-lazy");

bytenode.compileFile("./main-window.src.js", "./main-window.jsc");
bytenode.compileFile("./preload.src.js", "./preload.src.jsc");
