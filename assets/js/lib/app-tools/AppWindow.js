import { triggerAppWinUpdateDataEvent } from '../utils/app-window/window-helper.js';
// import { getCanvasFileElementClicked } from '../utils/global-value/elements.js'
export default class AppWindow {
    constructor(selector) {
        this.selector = selector;
        const _this = this;
        $(selector).draggable({
            start: (event, ui) => {
                var _a;
                $(event.target).data('dragging', true);
                (_a = document.getElementById('canvas-blocker')) === null || _a === void 0 ? void 0 : _a.classList.add('show');
            },
            stop: (event, ui) => {
                var _a;
                (_a = document.getElementById('canvas-blocker')) === null || _a === void 0 ? void 0 : _a.classList.remove('show');
                setTimeout(() => {
                    $(event.target).data('dragging', false);
                }, 1);
            },
            drag: (event, ui) => {
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
    appWindowClose() {
        const elemWindow = this.selector;
        const _this = this;
        _this.getElement().querySelectorAll('.app-window-close-btn').forEach((value) => {
            const elem = value;
            elem.addEventListener('click', function () {
                $(elemWindow).hide();
            });
        });
    }
    getElement() {
        return document.querySelector(this.selector);
    }
    setPosition() {
        const _this = this;
        const appWrapper = document.getElementById('app-wrapper');
        const windowLeft = parseInt(_this.getElement().getAttribute('data-left'));
        const windowTop = parseInt(_this.getElement().getAttribute('data-top'));
        const windowWidth = parseInt(_this.getElement().getAttribute('data-width'));
        const windowHeight = parseInt(_this.getElement().getAttribute('data-height'));
        const appWrapperWidth = appWrapper.clientWidth;
        const appWrapperHeight = appWrapper.clientHeight;
        if (windowLeft > (appWrapperWidth - windowWidth)) {
            _this.getElement().style.left = appWrapperWidth - windowWidth + 'px';
        }
        if (windowTop > (appWrapperHeight - windowHeight)) {
            _this.getElement().style.top = appWrapperHeight - windowHeight + 'px';
        }
    }
    recordPosition() {
        const _this = this;
        _this.getElement().setAttribute('data-left', _this.getElement().getBoundingClientRect().left);
        _this.getElement().setAttribute('data-top', _this.getElement().getBoundingClientRect().top);
    }
    appWindowMaximize() {
        var _a;
        const _this = this;
        (_a = _this.getElement().querySelector('.app-window-icon')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (evt) {
            if ($(_this.selector).data('dragging')) {
                return;
            }
            ;
            _this.setPosition();
            triggerAppWinUpdateDataEvent(_this.getElement());
            _this.getElement().classList.remove('minimize');
        });
    }
    appWindowMinimize() {
        var _a;
        const _this = this;
        (_a = _this.getElement().querySelector('.app-window-header-minimize-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (evt) {
            _this.recordPosition();
            _this.getElement().setAttribute('data-width', _this.getElement().getBoundingClientRect().width);
            _this.getElement().setAttribute('data-height', _this.getElement().getBoundingClientRect().height);
            _this.getElement().classList.add('minimize');
        });
    }
    // adding for now. not sure if this is necessary
    appWindowOpen() {
        $(this.selector).show();
    }
}
