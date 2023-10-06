// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";function i(i){var m,d;return s(i)||i<-1||i>1?NaN:1===i?e:-1===i?n:(i<0&&(m=!0,i=-i),i<3.725290298461914e-9?m?-i:i:(d=i<.5?.5*t((d=i+i)+d*i/(1-i)):.5*t((i+i)/(1-i)),m?-d:d))}export{i as default};
//# sourceMappingURL=index.mjs.map
