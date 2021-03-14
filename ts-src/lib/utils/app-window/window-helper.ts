declare const $:any;

import {getCanvasFileElementClicked} from '../global-value/elements.js';
import {getCSSIntergerValue, getCSSStringValue} from '../css/extract-value.js';

function openCloseElemTarget (element: HTMLElement, target: HTMLElement) {
    element.addEventListener('click', function(evt) {
        evt.preventDefault();
        if(element.classList.contains('show')) {
            element.classList.remove('show')
            element.classList.add('hide');
    
            target.classList.remove('show')
            target.classList.add('hide');
        } else {
            element.classList.remove('hide')
            element.classList.add('show');
            
            target.classList.remove('hide')
            target.classList.add('show');
        }
    })
};

function triggerAppWinUpdateDataEvent (element: HTMLElement) {
    const appWinEvent = new CustomEvent('update-data', {
        detail: getCanvasFileElementClicked()
    });
    element.dispatchEvent(appWinEvent);
};

function openAppWindow(selector: string) {
    const elem = document.querySelector(selector) as HTMLDivElement;
    triggerAppWinUpdateDataEvent(elem);
    $(selector).show();
    if(elem?.classList.contains('minimize')) {
        const appWrapper = document.getElementById('app-wrapper') as HTMLDivElement;
        const windowLeft = parseInt(<any> elem.getAttribute('data-left'));
        const windowTop = parseInt(<any> elem.getAttribute('data-top'));
        const windowWidth = parseInt(<any> elem.getAttribute('data-width'));
        const windowHeight = parseInt(<any> elem.getAttribute('data-height'));
        const appWrapperWidth = appWrapper.clientWidth;
        const appWrapperHeight = appWrapper.clientHeight;

        if(windowLeft > (appWrapperWidth - windowWidth)) {
            elem.style.left = appWrapperWidth - windowWidth + 'px';
        }
        if(windowTop > (appWrapperHeight - windowHeight)) {
            elem.style.top = appWrapperHeight - windowHeight + 'px';
        }
        elem.classList.remove('minimize');
    }
}

export { openAppWindow, triggerAppWinUpdateDataEvent, openCloseElemTarget }