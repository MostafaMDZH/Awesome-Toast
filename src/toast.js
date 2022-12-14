"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Toast {
    //constructor:
    constructor(message, option) {
        var _a, _b;
        this.bornTime = Date.now();
        this.hideEventHandler = this.handleHideEvent.bind(this);
        //append CSS styles to DOM:
        Toast.appendCSS(); //comment at dev mode
        //the view:
        this.viewID = Toast.generateViewID();
        let view = Toast.getHtml(this.viewID);
        document.body.appendChild(view);
        this.view = document.getElementById(this.viewID.toString()) || document.createElement('div');
        //set properties:
        this.setMessage(this.message = message);
        this.setPosition(this.position = (option === null || option === void 0 ? void 0 : option.position) || Toast.DEFAULT_POSITION);
        this.setTheme(option === null || option === void 0 ? void 0 : option.theme);
        this.setStyle(option === null || option === void 0 ? void 0 : option.style);
        this.waitForEvent = (_a = option === null || option === void 0 ? void 0 : option.waitForEvent) !== null && _a !== void 0 ? _a : false;
        this.timeout = (_b = option === null || option === void 0 ? void 0 : option.timeout) !== null && _b !== void 0 ? _b : Toast.DEFAULT_HIDING_TIMEOUT;
        this.isWaitingForHide = false;
        this.afterHide = option === null || option === void 0 ? void 0 : option.afterHide;
        //hide events:
        this.addHideEventListener();
        //don't wait for an event:
        if (!this.waitForEvent)
            this.startHidingTimer(this.timeout);
        //finally show:
        this.show();
    }
    //appendCSS:
    static appendCSS() {
        if (document.getElementById('toast-style') === null) {
            let head = document.head || document.getElementsByTagName('head')[0];
            let style = document.createElement('style');
            style.id = 'toast-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }
    //generateViewID:
    static generateViewID() {
        let id = Math.floor(Math.random() * 1000000000) + 100000000;
        let element = document.getElementById(id.toString());
        if (element === null)
            return id;
        return Toast.generateViewID();
    }
    //getHtml:
    static getHtml(viewId) {
        const DOM = `
            <div class="toast" id="${viewId}">
                <div class="container">
                    <p class="message"></p>
                </div>
            </div>
        `;
        let div = document.createElement('div');
        div.innerHTML = DOM.trim();
        return div.firstChild || div;
    }
    //setMessage:
    setMessage(message) {
        this.message = message;
        let messageEl = this.view.getElementsByClassName('message')[0];
        messageEl.innerHTML = this.message;
    }
    //setPosition:
    setPosition(position) {
        this.position = position;
        this.view.classList.remove('bottom');
        this.view.classList.remove('top');
        this.view.classList.add(position);
    }
    //setTheme:
    setTheme(theme) {
        if (theme === undefined)
            return;
        this.theme == theme;
        this.view.classList.remove('light');
        this.view.classList.remove('dark');
        this.view.classList.add(theme);
    }
    //setStyle:
    setStyle(style) {
        if (style === undefined)
            return;
        this.style = style;
        for (const [className, style] of Object.entries(this.style)) {
            let root = document.getElementById(this.viewID.toString());
            let element = root.getElementsByClassName(className)[0];
            if (element !== undefined)
                for (const property of style)
                    element.style.setProperty(property[0], property[1]);
        }
    }
    //show:
    show() {
        let thisView = this;
        setTimeout(() => {
            thisView.view.classList.add('visible');
        }, 50); //slight delay between adding to DOM and running css animation
    }
    //addHideEventListener:
    addHideEventListener() {
        const thisView = this;
        'mousemove mousedown mouseup touchmove click keydown keyup scroll'.split(' ').forEach((eventName) => {
            window.addEventListener(eventName, thisView.hideEventHandler);
        });
    }
    //addHideEventListener:
    removeHideEventListener() {
        const thisView = this;
        'mousemove mousedown mouseup touchmove click keydown keyup scroll'.split(' ').forEach((eventName) => {
            window.removeEventListener(eventName, thisView.hideEventHandler);
        });
    }
    //handleHideEvent:
    handleHideEvent() {
        let timeout = this.timeout;
        let currentTime = Date.now();
        if (currentTime - this.bornTime > this.timeout)
            timeout = this.timeout / 2;
        this.startHidingTimer(timeout);
        this.removeHideEventListener();
    }
    //startHidingTimer:
    startHidingTimer(timeout) {
        if (timeout > 0 && !this.isWaitingForHide) {
            this.isWaitingForHide = true;
            setTimeout(() => {
                this.hide();
            }, timeout);
        }
    }
    //hide:
    hide() {
        this.view.classList.remove('visible');
        const thisView = this;
        setTimeout(() => {
            thisView.view.remove();
            if (thisView.afterHide !== undefined)
                thisView.afterHide();
        }, 800); //long enough to make sure that it is hidden
    }
}
exports.default = Toast;
//default values:
Toast.DEFAULT_HIDING_TIMEOUT = 4000;
Toast.DEFAULT_POSITION = 'bottom';
const Style = `
.toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: top 400ms ease-in-out 0s, bottom 400ms ease-in-out 0s, opacity 500ms ease-in-out 0ms;
    z-index: 999999995;
  }
  .toast > .container {
    box-sizing: border-box;
    max-width: 350px;
    border-radius: 23px;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
  .toast > .container > .message {
    box-sizing: border-box;
    padding: 10px 20px;
    text-align: center;
    font-size: 0.9375rem;
    color: rgb(240, 240, 240);
    margin: 0;
  }
  
  .toast.visible {
    opacity: 1;
  }
  
  .toast.bottom {
    bottom: 25px;
  }
  
  .toast.top {
    top: 25px;
  }
  
  .toast.light > .container {
    background-color: #fbfbfb;
  }
  .toast.light > .container > .message {
    color: #555;
  }
  
  @media only screen and (max-width: 500px) {
    .toast {
      width: calc(100% - 24px);
      max-width: unset;
      left: 12px;
      transform: translate(0, 0);
      display: flex;
      justify-content: center;
    }
  }
`;
