var e,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,u=f||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return u.Date.now()};function v(e,t,n){var i,o,r,a,f,l,u=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,u=t,a=e.apply(r,n)}function j(e){return u=e,f=setTimeout(S,t),c?y(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-u>=r}function S(){var e=d();if(O(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-l);return v?m(n,r-(e-u)):n}(e))}function h(e){return f=void 0,b&&i?y(e):(i=o=void 0,a)}function w(){var e=d(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(S,t),y(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==f&&clearTimeout(f),u=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(d())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=o.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}e=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),y=JSON.parse(localStorage.getItem("feedback-form-state"));b.addEventListener("input",(0,e.default)((function(){const e={email:b.elements.email.value,message:b.elements.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),y&&(b.elements.email.value=y.email,b.elements.message.value=y.message),b.addEventListener("submit",(function(e){if(e.preventDefault(),""===b.elements.email.value||""===b.elements.message.value)return alert("Please fill in all fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),b.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.2ab5528e.js.map
