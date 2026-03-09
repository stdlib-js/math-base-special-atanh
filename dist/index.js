"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=n(function(p,u){
var s=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-log1p/dist'),v=require('@stdlib/constants-float64-pinf/dist'),f=require('@stdlib/constants-float64-ninf/dist'),N=1/(1<<28);function q(r){var e,i;return s(r)||r<-1||r>1?NaN:r===1?v:r===-1?f:(r<0&&(e=!0,r=-r),r<N?e?-r:r:(r<.5?(i=r+r,i=.5*t(i+i*r/(1-r))):i=.5*t((r+r)/(1-r)),e?-i:i))}u.exports=q
});var o=a();module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
