export default class Toast {
    static readonly DEFAULT_HIDING_TIMEOUT: number;
    static readonly DEFAULT_POSITION: string;
    protected viewID: number;
    protected view: HTMLElement;
    protected message: string;
    protected position: string;
    protected theme: string | undefined;
    protected style: object | undefined;
    protected bornTime: number;
    protected waitForEvent: boolean;
    protected hideEventHandler: EventListenerOrEventListenerObject;
    protected timeout: number;
    protected isWaitingForHide: boolean;
    protected afterHide: (() => void) | undefined;
    constructor(message: string, option?: {
        position?: string;
        theme?: string;
        style?: object;
        waitForEvent?: boolean;
        timeout?: number;
        afterHide?: () => void;
    });
    protected static appendCSS(): void;
    protected static generateViewID(): number;
    protected static getHtml(viewId: number): ChildNode;
    setMessage(message: string): void;
    setPosition(position: string): void;
    setTheme(theme?: string): void;
    setStyle(style?: object): void;
    protected show(): void;
    protected addHideEventListener(): void;
    protected removeHideEventListener(): void;
    protected handleHideEvent(): void;
    protected startHidingTimer(timeout: number): void;
    protected hide(): void;
}
