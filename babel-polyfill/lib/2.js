"use strict";

require("core-js/modules/es.promise.js");

require("core-js/modules/es.promise.finally.js");

const fn = () => {
  console.log("babel-----------");
};

const p = new Promise((resolve, reject) => {
  resolve("*********babel");
});
p.finally(() => {
  console.log('promsie finally');
});
const list = [1, 2, 3, 4].map(item => item * 2);