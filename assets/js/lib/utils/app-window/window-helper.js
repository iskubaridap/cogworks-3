import { getCanvasFileElementClicked } from '../global-value/elements.js';
function openCloseElemTarget(element, target) {
    element.addEventListener('click', function (evt) {
        evt.preventDefault();
        if (element.classList.contains('show')) {
            element.classList.remove('show');
            element.classList.add('hide');
            target.classList.remove('show');
            target.classList.add('hide');
        }
        else {
            element.classList.remove('hide');
            element.classList.add('show');
            target.classList.remove('hide');
            target.classList.add('show');
        }
    });
}
;
function triggerAppWinUpdateDataEvent(element) {
    const appWinEvent = new CustomEvent('update-data', {
        detail: getCanvasFileElementClicked()
    });
    element.dispatchEvent(appWinEvent);
}
;
function openAppWindow(selector) {
    const elem = document.querySelector(selector);
    triggerAppWinUpdateDataEvent(elem);
    $(selector).show();
    if (elem === null || elem === void 0 ? void 0 : elem.classList.contains('minimize')) {
        const appWrapper = document.getElementById('app-wrapper');
        const windowLeft = parseInt(elem.getAttribute('data-left'));
        const windowTop = parseInt(elem.getAttribute('data-top'));
        const windowWidth = parseInt(elem.getAttribute('data-width'));
        const windowHeight = parseInt(elem.getAttribute('data-height'));
        const appWrapperWidth = appWrapper.clientWidth;
        const appWrapperHeight = appWrapper.clientHeight;
        if (windowLeft > (appWrapperWidth - windowWidth)) {
            elem.style.left = appWrapperWidth - windowWidth + 'px';
        }
        if (windowTop > (appWrapperHeight - windowHeight)) {
            elem.style.top = appWrapperHeight - windowHeight + 'px';
        }
        elem.classList.remove('minimize');
    }
}
export { openAppWindow, triggerAppWinUpdateDataEvent, openCloseElemTarget };
