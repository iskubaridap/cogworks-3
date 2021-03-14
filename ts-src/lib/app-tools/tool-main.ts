declare const Draggable: any;
declare const $: any;

import { getCSSIntergerValue, getCSSStringValue } from '../utils/css/extract-value.js';
import fileTool from './windows/file/file.js';
import lookFeelTool from './windows/look-feel/look-feel.js';
import optionsTool from './windows/options/options.js';
import animationsTool from './windows/animations/animations.js';
import htmlTool from './windows/html/html.js';
import stylesTool from './windows/styles/styles.js';
import podsTool from './windows/pods/pods.js';
import widgetTool from './windows/widget/widget.js';
import whatNotsTool from './windows/what-nots/what-nots.js';
import overviewTool from './windows/overview/overview.js';
import { openAppWindow } from '../utils/app-window/window-helper.js'

const appWrapper = document.getElementById('app-wrapper') as HTMLDivElement;
const gearElem = document.getElementById('app-tool-gear') as HTMLDivElement;
const gearWrapElem = document.getElementById('app-tool-gear-wrap') as HTMLDivElement;
const appToolsWrap = document.getElementById('app-tools-wrap') as HTMLDivElement;
const appToolsMenuWrap = document.getElementById('app-tools-menu-wrap') as HTMLDivElement;
const appToolsMenuWrapUl = document.querySelector('#app-tools-menu-wrap ul') as HTMLUListElement;
const appToolsMenuWrapWidth = getCSSIntergerValue(appToolsMenuWrap, 'width', 'px');
const appToolsMenuWrapHeight = getCSSIntergerValue(appToolsMenuWrap, 'height', 'px');
const menuSpaceMargin = 10;
let gearWrapElemRect = null;
let appWrapperWidth = 0;
let appWrapperHeight = 0;
let gearElemX = 0;
let gearElemY = 0;
let gearElemWidth = 0;
let gearElemHeight = 0;

// app-wrapper
const positionToolsMenu = () => {
    const ulMarginBottom = getCSSIntergerValue(appToolsMenuWrapUl, 'margin-bottom', 'px');
    const toolCenterMin = (((appToolsMenuWrapWidth / 2) - (gearElemWidth / 2)) * -1);
    const toolLeftMin = menuSpaceMargin;
    const toolRightMin = appWrapperWidth - (gearElemX + appToolsMenuWrapWidth + menuSpaceMargin);
    const toolTopMin = gearElemHeight + menuSpaceMargin;
    const toolBottomMin = (appToolsMenuWrapHeight + ulMarginBottom) * -1;

    if(Math.round(gearElemX) > appToolsMenuWrapWidth && Math.round(gearElemX) < (appWrapperWidth - appToolsMenuWrapWidth)) {
        // somewhere center
        appToolsMenuWrap.style.left = `${toolCenterMin}px`;
    } else if(Math.round(gearElemX) <= appToolsMenuWrapWidth) {
        // left side
        appToolsMenuWrap.style.left = `${toolLeftMin}px`;
    } else if(Math.round((gearElemX - appToolsMenuWrapWidth)) <= Math.round(appWrapperWidth)) {
        // right side
        appToolsMenuWrap.style.left = `${toolRightMin}px`;
    }
    if(Math.round(gearElemY) <= (appWrapperHeight / 2)) {
        // half-top
        appToolsMenuWrap.style.top = `${toolTopMin}px`;
    } else if(Math.round(gearElemY) >= (appWrapperHeight / 2)) {
        // half-bottom
        appToolsMenuWrap.style.top = `${toolBottomMin}px`;
    }

    // gear is center-middle
    if(Math.round(gearElemX) == 0 && Math.round(gearElemY) == 0) {
        // for now
        appToolsMenuWrap.style.left = `${toolCenterMin}px`;
        appToolsMenuWrap.style.top = `${toolBottomMin}px`;
    }
    
    /* if(Math.round(gearElemX) > appToolsMenuWrapWidth && Math.round(gearElemX) < (appWrapperWidth - appToolsMenuWrapWidth) &&
        Math.round(gearElemY) <= (appWrapperHeight / 2)) {
        // somewhere half-top center
        appToolsMenuWrap.style.left = `${toolCenterMin}px`;
        appToolsMenuWrap.style.top = `${toolTopMin}px`;
    } else if (Math.round(gearElemX) > appToolsMenuWrapWidth && Math.round(gearElemX) < (appWrapperWidth - appToolsMenuWrapWidth) &&
        Math.round(gearElemY) >= (appWrapperHeight / 2)) {
        // somewhere half-bottom center
        appToolsMenuWrap.style.left = `${toolCenterMin}px`;
        appToolsMenuWrap.style.top = `${toolBottomMin}px`;
    }
    else if(Math.round(gearElemX) <= appToolsMenuWrapWidth && 
        Math.round(gearElemY) <= appToolsMenuWrapHeight) {
        // top left
        appToolsMenuWrap.style.left = `${toolLeftMin}px`;
        appToolsMenuWrap.style.top = `${toolTopMin}px`;
    } else if (Math.round((gearElemX - appToolsMenuWrapWidth)) <= Math.round(appWrapperWidth) && 
        Math.round(gearElemY) <= appToolsMenuWrapHeight) {
        // top right
        appToolsMenuWrap.style.left = `${toolRightMin}px`;
        appToolsMenuWrap.style.top = `${toolTopMin}px`;
    } else if(Math.round(gearElemX) <= appToolsMenuWrapWidth && 
        Math.round(gearElemY) >= Math.round(appWrapperHeight - (gearElemHeight + appToolsMenuWrapHeight + ulMarginBottom))) {
        // bottom left
        appToolsMenuWrap.style.left = `${toolLeftMin}px`;
        appToolsMenuWrap.style.top = `${toolBottomMin}px`;
    } else if (Math.round((gearElemX - appToolsMenuWrapWidth)) <= Math.round(appWrapperWidth) && 
        Math.round(gearElemY) >= Math.round(appWrapperHeight - (gearElemHeight + appToolsMenuWrapHeight + ulMarginBottom))) {
        // bottom right
        appToolsMenuWrap.style.left = `${toolRightMin}px`;
        appToolsMenuWrap.style.top = `${toolBottomMin}px`;
    } */
}
const appGear = () => {
    const hideMenu = () => {
        $('#app-tools-menu-wrap').slideUp(() => {
            gearWrapElem.classList.remove('active');
        });
    };
    const showMenu = () => {
        if($('#app-tools-wrap').data('dragging')) { return };
        positionToolsMenu();
        if(gearWrapElem.classList.contains('active')) {
            gearWrapElem.classList.remove('active');
            $('#app-tools-menu-wrap').slideUp();
        } else {
            gearWrapElem.classList.add('active');
            $('#app-tools-menu-wrap').slideDown();
        }
    };
    gearElem.addEventListener('click', showMenu);
    window.addEventListener('click', (e:Event) => {
        // for now
        if (e.target != gearElem && !(e.target as HTMLElement).classList.contains('app-menu')) {
            hideMenu();
        }
    });
}
const appTools = () => {
    fileTool();
    lookFeelTool();
    optionsTool();
    animationsTool();
    htmlTool();
    stylesTool();
    podsTool();
    widgetTool();
    whatNotsTool();
    overviewTool();
    appToolsMenuWrap.querySelectorAll('.app-menu').forEach((elem) => {
        elem.addEventListener('click', (evt: Event) => {
            const winAttr = elem.getAttribute('data-window');
            openAppWindow(`.app-window-wrap[data-window="${winAttr}"]`);
        });
    });
    $('#app-tools-wrap').draggable({
        start: (event:Event, ui:any) => {
            $(event.target).data('dragging', true);
            document.getElementById('canvas-blocker')?.classList.add('show');
        },
        stop: (event:Event, ui:any) => {
            gearWrapElemRect = gearWrapElem.getBoundingClientRect();
            gearElemX = gearWrapElemRect.x;
            gearElemY = gearWrapElemRect.y;
            gearElemWidth = gearWrapElemRect.width;
            gearElemHeight = gearWrapElemRect.height;
            appWrapperWidth = appWrapper.clientWidth;
            appWrapperHeight = appWrapper.clientHeight;
            document.getElementById('canvas-blocker')?.classList.remove('show');
            
            setTimeout(() => {
                $(event.target).data('dragging', false);
            }, 1);
        },
        drag: ( event:Event, ui:any ) => {
            if(gearWrapElem.classList.contains('active')) {
                gearWrapElemRect = gearWrapElem.getBoundingClientRect();
                gearElemX = gearWrapElemRect.x;
                gearElemY = gearWrapElemRect.y;
                gearElemWidth = gearWrapElemRect.width;
                gearElemHeight = gearWrapElemRect.height;
                appWrapperWidth = appWrapper.clientWidth;
                appWrapperHeight = appWrapper.clientHeight;
                positionToolsMenu();
            }
        },
        containment: "parent"
    });
    appGear();
}

export default appTools;