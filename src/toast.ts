module.exports = (message: string, parameters: object) => {return new Toast({message, ...parameters});}

class Toast{
    
    //default values:
    public static readonly DEFAULT_HIDING_TIMEOUT: number = 4000;
    public static readonly DEFAULT_POSITION: string = 'bottom';

    //object properties:
    protected viewID:       number;
    protected view:         HTMLElement;
    protected message:      string;
    protected position:     string;
    protected theme:        string | undefined;
    protected style:        object | undefined;
    protected bornTime:     number;
    protected waitForEvent: boolean;
    protected eventHandler: EventListenerOrEventListenerObject;
    protected timeout:      number;
    protected isWaitingForHide: boolean;
    protected afterHide:    (() => void) | undefined;

    //constructor:
    constructor(parameters: {
            message:       string,
            position?:     string,
            theme?:        string,
            style?:        object,
            waitForEvent?: boolean,
            timeout?:      number,
            afterHide?:() => void
        }){

        this.bornTime = Date.now();
        this.eventHandler = this.onHideEvent.bind(this);

        //append CSS styles to DOM:
        Toast.appendCSS();//comment at dev mode

        //the view:
        this.viewID = Toast.generateViewID();
        let view = Toast.getDOM(this.viewID);
        document.body.appendChild(view);
        this.view = document.getElementById(this.viewID.toString()) || document.createElement('div');
        
        //set properties:
        this.setMessage(this.message = parameters.message);
        this.setPosition(this.position = parameters.position || Toast.DEFAULT_POSITION);
        this.setTheme(parameters.theme);
        this.setStyle(parameters.style);
        this.waitForEvent = parameters.waitForEvent ?? false;
        this.timeout = parameters.timeout ?? Toast.DEFAULT_HIDING_TIMEOUT;
        this.isWaitingForHide = false;
        this.afterHide = parameters.afterHide;
        
        //events:
        this.addHideEventListener();

        //don't wait for an event:
        if(!this.waitForEvent)
            this.startHidingTimer(this.timeout);
        
        //finally show:
        this.show();

	}

    //appendCSS:
    protected static appendCSS():void{
        if(document.getElementById('toast-style') === null){
            let head = document.head || document.getElementsByTagName('head')[0];
            let style = document.createElement('style');
            style.id = 'toast-style';
            head.appendChild(style);
            style.appendChild(document.createTextNode(Style));
        }
    }

    //generateViewID:
    protected static generateViewID():number{
		let id = Math.floor(Math.random() * 1000000000) + 100000000;
        let element = document.getElementById(id.toString());
        if(element === null)
            return id;
        return Toast.generateViewID();
	}

    //getDOM:
    protected static getDOM(viewId: number):ChildNode{
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
    public setMessage(message:string):void{
        this.message = message;
        let messageEl = <HTMLElement> this.view.getElementsByClassName('message')[0];
        messageEl.innerHTML = this.message;
    }

    //setPosition:
    public setPosition(position:string):void{
        this.position = position;
        this.view.classList.remove('bottom');
        this.view.classList.remove('top');
        this.view.classList.add(position);
    }

    //setTheme:
    public setTheme(theme?:string):void{
        if(theme === undefined) return;
        this.theme == theme;
        this.view.classList.remove('light');
        this.view.classList.remove('dark');
        this.view.classList.add(theme);
    }

    //setStyle:
    public setStyle(style?:object):void{
        if(style === undefined) return;
        this.style = style;
        for(const [className, style] of Object.entries(this.style)){
            let root = document.getElementById(this.viewID.toString());
            let element = <HTMLElement> root!.getElementsByClassName(className)[0];
            if(element !== undefined) for(const property of style)
                element.style.setProperty(property[0], property[1]);
        }
    }

    //addHideEventListener:
    protected addHideEventListener():void{
        const thisView = this;
        'mousemove mousedown mouseup touchmove click keydown keyup'.split(' ').forEach((eventName) => {
            window.addEventListener(eventName, thisView.eventHandler);
        });
    }

    //addHideEventListener:
    protected removeHideEventListener():void{
        const thisView = this;
        'mousemove mousedown mouseup touchmove click keydown keyup'.split(' ').forEach((eventName) => {
            window.removeEventListener(eventName, thisView.eventHandler);
        });
    }

    protected onHideEvent():void{
        let timeout = this.timeout;
        let currentTime = Date.now();
        if(currentTime - this.bornTime > this.timeout)
            timeout = this.timeout / 3;
        this.startHidingTimer(timeout);
        this.removeHideEventListener();
    }

    //show:
    protected show():void{
        let thisView = this;
        setTimeout(() => {
            thisView.view.classList.add('visible');
        }, 50);//slight delay between adding to DOM and running css animation
    }

    //startHidingTimer:
	protected startHidingTimer(timeout: number):void{
		if(this.timeout > 0 && !this.isWaitingForHide){
            this.isWaitingForHide = true;
			setTimeout(() => {
				this.hide();
			}, timeout);
        }
	}

    //hide:
    protected hide():void{
        this.view.classList.remove('visible');
        const thisView = this;
        setTimeout(() => {
            thisView.view.remove();
            if(thisView.afterHide !== undefined)
                thisView.afterHide();
        }, 800);//long enough to make sure that it is hidden
    }

}

const Style = `
.toast {
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    opacity: 0;
    transition: top 400ms ease-in-out 0s, bottom 400ms ease-in-out 0s, opacity 500ms ease-in-out 0ms;
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
  }/*# sourceMappingURL=toast.css.map */
`;