// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";var i=s,r=t,m=e,a=n;var d=function(s){var t,e;return i(s)||s<-1||s>1?NaN:1===s?m:-1===s?a:(s<0&&(t=!0,s=-s),s<3.725290298461914e-9?t?-s:s:(e=s<.5?.5*r((e=s+s)+e*s/(1-s)):.5*r((s+s)/(1-s)),t?-e:e))};export{d as default};
//# sourceMappingURL=index.mjs.map
