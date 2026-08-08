"use strict";var s=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var n=s(function(P,_){
var q=require('@stdlib/constants-float64-high-word-sign-mask/dist'),I=require('@stdlib/constants-float64-high-word-abs-mask/dist'),f=require('@stdlib/number-float64-base-get-high-word/dist'),E=require('@stdlib/number-float64-base-set-high-word/dist'),H=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-special-log1p/dist'),N=require('@stdlib/constants-float64-pinf/dist'),S=require('@stdlib/constants-float64-ninf/dist'),o=1072693248,A=1071644672,G=1043333120;function g(a){var e,r,u,v,i;return H(a)||a<-1||a>1?NaN:(u=f(a),e=(u&q)>>>0,v=u&I|0,v===o?e===0?N:S:v<G?a:(r=E(a,v),v<A?(i=r+r,i=.5*t(i+i*r/(1-r))):i=.5*t((r+r)/(1-r)),e===0?i:-i))}_.exports=g
});var h=n();module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
