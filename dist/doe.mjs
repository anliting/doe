/*
© An-Li Ting (anliting.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
let e=(e,...t)=>{let n=0,o={function:t=>t(e),number(e){n=e},object(t){let o=e=>t.map(d);t instanceof Array?o():t instanceof Node?e[n?"removeChild":"appendChild"](t):"length"in t||t[Symbol.iterator]?(t=Array.from(t),o()):n?Object.entries(t).map((([t,n])=>e.setAttribute(t,n))):Object.assign(e,t)},string(t){e.appendChild(document.createTextNode(t))}};return d(t),e;function d(e){for(let t;t=o[typeof e];e=t(e));}},t={html:(...t)=>e(document.documentElement,...t),head:(...t)=>e(document.head,...t),body:(...t)=>e(document.body,...t)};export default new Proxy(e,{get:(n,o)=>t[o]||e.bind(0,document.createElement(o))});