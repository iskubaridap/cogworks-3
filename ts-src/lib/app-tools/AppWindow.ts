declare const $: any;

import { triggerAppWinUpdateDataEvent } from '../utils/app-window/window-helper.js';
// import { getCanvasFileElementClicked } from '../utils/global-value/elements.js'

export default class AppWindow {
    constructor(readonly selector: String) {
        const _this = this;
        $(selector).draggable({
            start: (event:Event, ui:any) => {
                $(event.target).data('dragging', true);
                document.getElementById('canvas-blocker')?.classList.add('show');
            },
            stop: (event:Event, ui:any) => {
                document.getElementById('canvas-blocker')?.classList.remove('show');
                setTimeout(() => {
                    $(event.target).data('dragging', false);
                }, 1);
            },
            drag: ( event:Event, ui:any ) => {
                _this.recordPosition();
            },
            containment: "parent",
            handle: '.app-window-header'
        });
        this.appWindowClose();
        this.appWindowMinimize();
        this.appWindowMaximize();
        // (this.getElement()).addEventListener('update-data', function(evt: Event) {
        //     console.log(getCanvasFileElementClicked());
        // });
    }
    private appWindowClose() {
        const elemWindow = this.selector;
        const _this = this;
        _this.getElement().querySelectorAll('.app-window-close-btn').forEach((value: HTMLElement) => {
            const elem = value;
            elem.addEventListener('click', function(){
                $(elemWindow).hide();
            });
        })
    }
    public getElement() {
        return document.querySelector(<any> this.selector);
    }
    private setPosition() {
        const _this = this;
        const appWrapper = document.getElementById('app-wrapper') as HTMLDivElement;
        const windowLeft = parseInt(<any> _this.getElement().getAttribute('data-left'));
        const windowTop = parseInt(<any> _this.getElement().getAttribute('data-top'));
        const windowWidth = parseInt(<any> _this.getElement().getAttribute('data-width'));
        const windowHeight = parseInt(<any> _this.getElement().getAttribute('data-height'));
        const appWrapperWidth = appWrapper.clientWidth;
        const appWrapperHeight = appWrapper.clientHeight;

        if(windowLeft > (appWrapperWidth - windowWidth)) {
            _this.getElement().style.left = appWrapperWidth - windowWidth + 'px';
        }
        if(windowTop > (appWrapperHeight - windowHeight)) {
            _this.getElement().style.top = appWrapperHeight - windowHeight + 'px';
        }
    }
    
    private recordPosition() {
        const _this = this;
        _this.getElement().setAttribute('data-left', _this.getElement().getBoundingClientRect().left);
        _this.getElement().setAttribute('data-top', _this.getElement().getBoundingClientRect().top);
    }
    appWindowMaximize() {
        const _this = this;
        _this.getElement().querySelector('.app-window-icon')?.addEventListener('click', function(evt: Event) {
            if($(_this.selector).data('dragging')) { return };
            _this.setPosition();
            triggerAppWinUpdateDataEvent(_this.getElement());
            _this.getElement().classList.remove('minimize');
        });
    }
    appWindowMinimize() {
        const _this = this;
        _this.getElement().querySelector('.app-window-header-minimize-btn')?.addEventListener('click', function(evt: Event) {
            _this.recordPosition();
            _this.getElement().setAttribute('data-width', _this.getElement().getBoundingClientRect().width);
            _this.getElement().setAttribute('data-height', _this.getElement().getBoundingClientRect().height);
            _this.getElement().classList.add('minimize');
        })
    }
    // adding for now. not sure if this is necessary
    appWindowOpen() {
        $(<any> this.selector).show();
    }
}