(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3678)}])},3678:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return m}});var d=c(5893),e=c(9008),f=c.n(e),g=c(5885),h=c(1664),i=c.n(h),j=c(7967),k=!1,l=null;function m(){var a=function(a){navigator.clipboard?navigator.clipboard.writeText(a).then(function(){new j.Z("Copied to clipboard \uD83D\uDC4D")},function(a){new j.Z("cannot copy \uD83D\uDC4E")}):b(a)},b=function(a){var b=document.createElement("textarea");b.value=a,b.style.top="0",b.style.left="0",b.style.position="fixed",document.body.appendChild(b),b.focus(),b.select();try{document.execCommand("copy"),new j.Z("Copied to clipboard \uD83D\uDC4D")}catch(c){new j.Z("cannot copy \uD83D\uDC4E")}document.body.removeChild(b)},c=new g.Z;return setTimeout(function(){!k&& void 0===c.get("WelcomeTst")&&(k=!0,new j.Z("Welcome to Awesome Toast! \uD83D\uDC4B",{position:"top",timeout:3e3,theme:"light",afterHide:function(){new j.Z("Click on code sections to run the demo",{position:"top",theme:"light",waitForEvent:!0,afterHide:function(){return c.set("WelcomeTst","yes",{path:"/",maxAge:864e5})}})}}))},2e3),(0,d.jsxs)("div",{id:"window",style:{scrollBehavior:"smooth"},children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Awesome Toast | React, Angular, Vue, and Typescript compatible toast"}),(0,d.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,d.jsxs)("header",{id:"header",children:[(0,d.jsx)(i(),{href:"https://awesome-components.demos.mostafa-mdzh.ir/",children:(0,d.jsx)("a",{className:"headerLink",children:"Awesome Components"})}),(0,d.jsx)(i(),{href:"https://www.buymeacoffee.com/mostafamdzh",children:(0,d.jsx)("a",{className:"headerLink",id:"coffee",children:"buy me a coffee! :)"})})]}),(0,d.jsx)("div",{className:"container",id:"intro",children:(0,d.jsxs)("div",{id:"main",children:[(0,d.jsx)("div",{id:"navigation",children:(0,d.jsxs)("div",{id:"navigationWrapper",children:[(0,d.jsx)("a",{className:"navLink",href:"#intro",children:"intro         "}),(0,d.jsx)("a",{className:"navLink",href:"#installation",children:"installation  "}),(0,d.jsx)("a",{className:"navLink",href:"#position",children:"position      "}),(0,d.jsx)("a",{className:"navLink",href:"#theme",children:"theme         "}),(0,d.jsx)("a",{className:"navLink",href:"#custom-style",children:"custom style  "}),(0,d.jsx)("a",{className:"navLink",href:"#timing",children:"timing        "}),(0,d.jsx)("a",{className:"navLink",href:"#wait-for-event",children:"wait for event"}),(0,d.jsx)("a",{className:"navLink",href:"#update-on-fly",children:"update on fly "}),(0,d.jsx)("a",{className:"navLink",href:"#after-hide",children:"after hide    "})]})}),(0,d.jsxs)("div",{id:"content",children:[(0,d.jsx)("a",{href:"https://github.com/MostafaMDZH/Awesome-Toast",id:"github",children:"Github"}),(0,d.jsx)("h3",{id:"awesome",children:(0,d.jsx)(i(),{href:"/",children:"Awesome"})}),(0,d.jsxs)("div",{id:"name-versionWrapper",children:[(0,d.jsx)("h1",{id:"appName",children:(0,d.jsx)(i(),{href:"/",children:"Toast"})}),(0,d.jsx)("a",{id:"version",children:"V2.0.0"})]}),(0,d.jsx)("p",{className:"sectionDescription",children:"React, Javascript, and Typescript compatible toast"}),(0,d.jsx)("h3",{className:"sectionName",id:"features",children:(0,d.jsx)("a",{children:"# Features"})}),(0,d.jsxs)("ul",{className:"features",children:[(0,d.jsx)("li",{children:"Custom Position"}),(0,d.jsx)("li",{children:"Dark/Light Theme"}),(0,d.jsx)("li",{children:"Custom Style"}),(0,d.jsx)("li",{children:"Custom Markup"}),(0,d.jsx)("li",{children:"Update On Fly"}),(0,d.jsx)("li",{children:"User Event Detection"}),(0,d.jsx)("li",{children:"Custom Timeout"}),(0,d.jsx)("li",{children:"Manual Hiding"}),(0,d.jsx)("li",{children:"Callback After Hide"}),(0,d.jsx)("li",{children:"Responsive Design"}),(0,d.jsx)("li",{children:"Dynamic HTML"}),(0,d.jsx)("li",{children:"Lightweight"})]}),(0,d.jsx)("h3",{className:"sectionName",id:"installation",children:(0,d.jsx)("a",{href:"#installation",children:"# Installation"})}),(0,d.jsxs)("p",{className:"step",children:[(0,d.jsxs)("a",{className:"bold",children:[">"," step 1 : "]}),"you can use either npm or yarn, or import the main file with the script tag."]}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("p",{className:"comment",children:"# npm"}),(0,d.jsx)("button",{className:"codeSection copyable",onClick:function(){return a("npm i awesome-toast-component")},children:(0,d.jsxs)("p",{children:["npm i ",(0,d.jsx)("span",{children:"awesome-toast-component"})]})}),(0,d.jsx)("p",{className:"comment",children:"# yarn"}),(0,d.jsx)("button",{className:"codeSection copyable",onClick:function(){return a("yarn add awesome-toast-component")},children:(0,d.jsxs)("p",{children:["yarn add ",(0,d.jsx)("span",{children:"awesome-toast-component"})]})}),(0,d.jsxs)("p",{className:"comment",children:["# html (download the toast.js file from the\xa0",(0,d.jsx)("a",{href:"https://github.com/MostafaMDZH/Awesome-Toast/tree/main/src",children:"src"}),"\xa0directory)"]}),(0,d.jsx)("button",{className:"codeSection copyable",onClick:function(){return a('<script src="toast.js"></script>')},children:(0,d.jsxs)("p",{children:['<script src="',(0,d.jsx)("span",{children:"toast.js"}),'"></script>']})})]}),(0,d.jsxs)("p",{className:"step",children:[(0,d.jsxs)("a",{className:"bold",children:[">"," step 2 : "]}),"include the package in your code:"]}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("p",{className:"comment",children:"# npm and yarn"}),(0,d.jsx)("button",{className:"codeSection copyable",onClick:function(){return a("import Toast from 'awesome-toast-component'")},children:(0,d.jsxs)("p",{children:["import ",(0,d.jsx)("span",{children:"Toast"})," from ",(0,d.jsx)("span",{children:"'awesome-toast-component'"})]})})]}),(0,d.jsxs)("p",{className:"step",children:[(0,d.jsxs)("a",{className:"bold",children:[">"," step 3 : "]}),"start making toasts!"]}),(0,d.jsx)("div",{className:"codeWrapper",children:(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){return new j.Z("Hello World! \uD83D\uDC4B")},children:(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"new Toast"}),"('Hello world! \uD83D\uDC4B');"]})})}),(0,d.jsx)("h3",{className:"sectionName",id:"position",children:(0,d.jsx)("a",{href:"#position",children:"# Position"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"You can position the toast by setting the position parameter:"}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("p",{className:"comment",children:"# bottom(default)"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){return new j.Z("I'm at the bottom",{position:"bottom"})},children:(0,d.jsxs)("p",{children:["new Toast(`I'm at the bottom`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"position: 'bottom'"}),(0,d.jsx)("br",{})," });"]})}),(0,d.jsx)("p",{className:"comment",children:"# top"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){return new j.Z("I'm at the top",{position:"top"})},children:(0,d.jsxs)("p",{children:["new Toast(`I'm at the top`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"position: 'top'"}),(0,d.jsx)("br",{})," });"]})})]}),(0,d.jsx)("h3",{className:"sectionName",id:"theme",children:(0,d.jsx)("a",{href:"#theme",children:"# Theme"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"The default theme is dark, but you can enable the light theme with the theme parameter:"}),(0,d.jsx)("div",{className:"codeWrapper",children:(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){return new j.Z("Today is sunday!",{theme:"light"})},children:(0,d.jsxs)("p",{children:["new Toast(`Today is sunday!`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"theme: 'light'"}),(0,d.jsx)("br",{})," });"]})})}),(0,d.jsx)("h3",{className:"sectionName",id:"custom-style",children:(0,d.jsx)("a",{href:"#custom-style",children:"# Custom Style"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"The Awesome Toast's html markup is equivalent to below:"}),(0,d.jsx)("div",{className:"codeWrapper",children:(0,d.jsx)("button",{className:"codeSection",children:(0,d.jsxs)("p",{children:["<div class='",(0,d.jsx)("span",{children:"container"}),"'>",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0","<p class='",(0,d.jsx)("span",{children:"message"}),"'></p>",(0,d.jsx)("br",{}),"</div>"]})})}),(0,d.jsx)("p",{className:"sectionDescription",children:"So you can apply your custom style in a form of an array of classes:"}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("p",{className:"comment",children:"# you can even add your custom markup (like the 'bold' class below)"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){new j.Z("Your account has been <a class='bold'>removed!</a>",{style:{container:[["background-color","red"]],message:[["color","#eee"]],bold:[["font-weight","bold"]]}})},children:(0,d.jsxs)("p",{children:["new Toast(`Your account has been ",(0,d.jsx)("span",{children:"<a class='bold'>"}),"removed!",(0,d.jsx)("span",{children:"</a>"}),"`, { ",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"style: {"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"container: ["}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"['background-color', 'red']"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"],"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"message: ["}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"['color', '#eee'],"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"],"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"bold: ["}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"['font-weight', 'bold'],"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"]"}),(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"}"}),(0,d.jsx)("br",{})," });"]})})]}),(0,d.jsx)("h3",{className:"sectionName",id:"timing",children:(0,d.jsx)("a",{href:"#timing",children:"# Timing"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"The default timeout for hiding is 4 seconds but you can customize it with the timeout parameter:"}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){return new j.Z("Give me a second please...",{timeout:1e3})},children:(0,d.jsxs)("p",{children:["new Toast(`Give me a second please...`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"timeout: 1000"}),(0,d.jsx)("br",{})," });"]})}),(0,d.jsx)("p",{className:"comment",children:"# Notice: when the waitForEvent is set to true, if an event happens after the timeout value after creating the Snackbar, the timeout value divides by two."}),(0,d.jsx)("p",{className:"comment",children:"# For example, if the timeout value is 4 seconds and an event happens 3 seconds after the Snackbar is created, 4 seconds later the hide animation starts, but if that event happens 5 seconds after the Snackbar is created, the hide animation starts in 2 seconds."})]}),(0,d.jsx)("p",{className:"sectionDescription",children:"Or you can set the timeout to zero so the auto-hide would be disabled (hiding would be available with the hide() function)"}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){null===l&&(l=new j.Z("I'm not going anywhere!",{timeout:0}))},children:(0,d.jsxs)("p",{children:["let tst = new Toast(`I'm not going anywhere!`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"timeout: 0"}),(0,d.jsx)("br",{})," });"]})}),(0,d.jsx)("p",{className:"comment",children:"# click to hide"}),(0,d.jsxs)("button",{className:"codeSection executable",onClick:function(){null==l||l.hide(),l=null},children:[(0,d.jsx)("p",{children:(0,d.jsx)("span",{children:"tst.hide();"})}),(0,d.jsx)("br",{})]})]}),(0,d.jsx)("h3",{className:"sectionName",id:"wait-for-event",children:(0,d.jsx)("a",{href:"#wait-for-event",children:"# Wait For Event"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"By default, a toast doesn't wait for any events to hide, but if you want to ensure that the user has seen your message, you can enable this feature with the waitForEvent parameter, so until the user does not interact with the page, the toast doesn't hide:"}),(0,d.jsx)("div",{className:"codeWrapper",children:(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){setTimeout(function(){new j.Z("I'm not going to hide until an event happens",{waitForEvent:!0})},100)},children:(0,d.jsxs)("p",{children:["new Toast(`I'm not going to hide until an event happens`), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"waitForEvent: true"}),(0,d.jsx)("br",{})," });"]})})}),(0,d.jsx)("h3",{className:"sectionName",id:"update-on-fly",children:(0,d.jsx)("a",{href:"#update-on-fly",children:"# Update On Fly"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"If you store the returned object from the new Toast() function, you can set some of its attributes after its created:"}),(0,d.jsxs)("div",{className:"codeWrapper",children:[(0,d.jsx)("p",{className:"comment",children:"# create a simple toast"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){null===l&&(l=new j.Z("I'm a simple toast",{timeout:0}))},children:(0,d.jsxs)("p",{children:["let ",(0,d.jsx)("span",{children:"tst"})," = new Toast(`I'm a simple toast`), { timeout: 0 });"]})}),(0,d.jsx)("p",{className:"comment",children:"# update the text"}),(0,d.jsxs)("button",{className:"codeSection executable",onClick:function(){return null==l?void 0:l.setMessage("I can change my message")},children:[(0,d.jsxs)("p",{children:["tst.",(0,d.jsx)("span",{children:"setMessage"}),"('I can change my message');"]}),(0,d.jsx)("br",{})]}),(0,d.jsx)("p",{className:"comment",children:"# change the position"}),(0,d.jsxs)("button",{className:"codeSection executable",onClick:function(){null==l||l.setMessage("Or change my position!"),null==l||l.setPosition("top")},children:[(0,d.jsxs)("p",{children:["tst.",(0,d.jsx)("span",{children:"setPosition"}),"('top');"]}),(0,d.jsx)("br",{})]}),(0,d.jsx)("p",{className:"comment",children:"# change the theme"}),(0,d.jsxs)("button",{className:"codeSection executable",onClick:function(){null==l||l.setMessage("Or change my theme"),null==l||l.setTheme("light")},children:[(0,d.jsxs)("p",{children:["tst.",(0,d.jsx)("span",{children:"setTheme"}),"('light');"]}),(0,d.jsx)("br",{})]}),(0,d.jsx)("p",{className:"comment",children:"# change the style"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){null==l||l.setMessage("Even the style!"),null==l||l.setStyle({container:[["background-color","#072"]],message:[["color","#fd0"]]})},children:(0,d.jsxs)("p",{children:["tst.",(0,d.jsx)("span",{children:"setStyle"}),"({",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0","container: [['background-color', '#072']],",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0","message: [['color', '#fd0']],",(0,d.jsx)("br",{}),"});"]})}),(0,d.jsx)("p",{className:"comment",children:"# and hide"}),(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){null==l||l.hide(),l=null},children:(0,d.jsxs)("p",{children:["tst.",(0,d.jsx)("span",{children:"hide();"})]})})]}),(0,d.jsx)("h3",{className:"sectionName",id:"after-hide",children:(0,d.jsx)("a",{href:"#after-hide",children:"# After Hide"})}),(0,d.jsx)("p",{className:"sectionDescription",children:"When the waitForEvent is set to true, the hide function is waiting for an event to start hiding timeout, so it may not occur exactly after the specified timeout after toast creation, so if you want to run a function after your toast hides, you can use the afterHide parameter for it:"}),(0,d.jsx)("div",{className:"codeWrapper",children:(0,d.jsx)("button",{className:"codeSection executable",onClick:function(){new j.Z("Marco...",{afterHide:function(){return new j.Z("Polo!")}})},children:(0,d.jsxs)("p",{children:["new Toast('Marco...'), {",(0,d.jsx)("br",{}),"\xa0\xa0\xa0\xa0",(0,d.jsx)("span",{children:"afterHide"}),": () => new Toast('Polo!')",(0,d.jsx)("br",{}),"});"]})})})]})]})}),(0,d.jsxs)("footer",{id:"footer",children:[(0,d.jsxs)("p",{children:["Made with ♡ by ",(0,d.jsx)("a",{href:"https://github.com/MostafaMDZH",children:"Mostafa Mohammadzadeh"})]}),(0,d.jsx)("p",{id:"dash",children:"-"}),(0,d.jsxs)("p",{id:"githubLink",children:["Source on ",(0,d.jsx)("a",{href:"https://github.com/MostafaMDZH/Awesome-Toast",children:"Github"})]}),(0,d.jsxs)("p",{id:"awesomeComponents",children:["From ",(0,d.jsx)(i(),{href:"https://awesome-components.demos.mostafa-mdzh.ir/",children:(0,d.jsx)("a",{children:"Awesome Components"})})]})]})]})}}},function(a){a.O(0,[886,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])