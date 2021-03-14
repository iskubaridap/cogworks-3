import AppWindow from '../../AppWindow.js';
import { getCanvasFileElementClicked } from '../../../utils/global-value/elements.js';
import { openCloseElemTarget } from '../../../utils/app-window/window-helper.js';
import { getCSSIntergerValue } from '../../../utils/css/extract-value.js';
function renderBasicPalette(type) {
    const palette = document.createElement('div');
    const header = document.createElement('div');
    const handle = document.createElement('div');
    const repsIconWrap = document.createElement('div');
    const repsIcon = document.createElement('div');
    const title = document.createElement('div');
    const minMax = document.createElement('div');
    const duplicate = document.createElement('div');
    const close = document.createElement('div');
    const body = document.createElement('div');
    const appendChildAddClass = (parent, element, classNames, txt) => {
        const elem = document.createElement(element);
        elem.classList.add(...classNames);
        if (txt !== undefined) {
            elem.innerText = txt;
        }
        parent.appendChild(elem);
    };
    palette.classList.add('app-window-palette');
    header.classList.add('app-window-palette-header');
    handle.classList.add('app-window-palette-header-item', 'app-window-palette-header-handle-wrap');
    appendChildAddClass(handle, 'span', ['material-icons', 'app-window-palette-header-handle'], 'drag_handle');
    repsIconWrap.classList.add('app-window-palette-header-item', 'app-window-palette-header-reps-icon-wrap');
    repsIcon.classList.add('app-window-palette-header-reps-icon');
    repsIconWrap.appendChild(repsIcon);
    title.classList.add('app-window-palette-header-item', 'app-window-palette-header-title-wrap');
    appendChildAddClass(title, 'div', ['app-window-palette-header-title'], 'foobar');
    minMax.classList.add('app-window-palette-header-item', 'app-window-palette-header-min-max-wrap', 'show');
    appendChildAddClass(minMax, 'span', ['material-icons', 'app-window-palette-header-max'], 'maximize');
    appendChildAddClass(minMax, 'span', ['material-icons', 'app-window-palette-header-min'], 'minimize');
    duplicate.classList.add('app-window-palette-header-item', 'app-window-palette-header-duplicate-wrap');
    appendChildAddClass(duplicate, 'span', ['material-icons', 'app-window-palette-header-duplicate'], 'content_copy');
    close.classList.add('app-window-palette-header-item', 'app-window-palette-header-close-wrap');
    appendChildAddClass(close, 'span', ['material-icons', 'app-window-palette-header-close'], 'clear');
    body.classList.add('app-window-palette-body', 'show');
    switch (type) {
        case 'bg-image':
            palette.classList.add('background-image-palette');
            title.classList.add('background-palette-header-title-wrap');
            appendChildAddClass(repsIcon, 'span', ['material-icons', 'background-palette-header-reps-icon-image'], 'image');
            break;
        case 'bg-gradient':
            palette.classList.add('background-gradient-palette');
            title.classList.add('background-palette-header-title-wrap');
            appendChildAddClass(repsIcon, 'div', ['background-palette-header-reps-icon-gradient']);
            break;
    }
    header.appendChild(handle);
    header.appendChild(repsIcon);
    header.appendChild(title);
    header.appendChild(minMax);
    header.appendChild(duplicate);
    header.appendChild(close);
    palette.appendChild(header);
    palette.appendChild(body);
    openCloseElemTarget(minMax, body);
    close.addEventListener('click', function (evt) {
        evt.preventDefault();
        palette.remove();
    });
    return palette;
}
function addGradient(evt) {
    evt.preventDefault();
    const bgWrapper = document.getElementById('background-add-image-gradient-wrap');
    const panel = renderBasicPalette('bg-gradient');
    bgWrapper.appendChild(panel);
    $('#background-add-image-gradient-wrap').sortable({
        handle: ".app-window-palette-header-handle-wrap",
        update: function (event, ui) {
            // reserve code
            console.log('foo');
        }
    });
    // console.log(panel);
}
function addImage(evt) {
    evt.preventDefault();
    const bgWrapper = document.getElementById('background-add-image-gradient-wrap');
    const panel = renderBasicPalette('bg-image');
    bgWrapper.appendChild(panel);
    $('#background-add-image-gradient-wrap').sortable({
        handle: ".app-window-palette-header-handle-wrap",
        update: function (event, ui) {
            // reserve code
            console.log('bar');
        }
    });
    // console.log(panel);
}
function setColorPicker(picker, target) {
    const colorTarget = document.querySelector(target);
    const colorPicker = document.querySelector(picker);
    colorPicker === null || colorPicker === void 0 ? void 0 : colorPicker.addEventListener('change', function (evt) {
        evt.preventDefault();
        colorTarget.value = evt.target.value;
    });
}
const lookFeelTool = () => {
    var _a, _b;
    const appWindow = new AppWindow('.app-window-wrap[data-window="look-feel"]');
    const selector = appWindow.selector;
    const element = appWindow.getElement();
    (_a = document.getElementById('background-add-image')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', addImage);
    (_b = document.getElementById('background-add-gradient')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', addGradient);
    setColorPicker('#font-elem-color-picker', '#font-elem-color-main');
    openCloseElemTarget(document.getElementById('layout-title-caret'), document.getElementById('layout-elem-content'));
    openCloseElemTarget(document.getElementById('layout-elem-width-main'), document.getElementById('layout-elem-width-min-max'));
    openCloseElemTarget(document.getElementById('layout-elem-height-main'), document.getElementById('layout-elem-height-min-max'));
    openCloseElemTarget(document.getElementById('layout-elem-margin-main'), document.getElementById('layout-elem-margin-trbl'));
    openCloseElemTarget(document.getElementById('font-title-caret'), document.getElementById('font-elem-content'));
    openCloseElemTarget(document.getElementById('font-elem-size-main'), document.getElementById('font-elem-size-line-height-letter-space'));
    openCloseElemTarget(document.getElementById('font-elem-family-main'), document.getElementById('font-elem-family-weight-style'));
    openCloseElemTarget(document.getElementById('background-title-caret'), document.getElementById('background-elem-content'));
    element.addEventListener('update-data', function (evt) {
        if (getCanvasFileElementClicked() !== null) {
            const elem = getCanvasFileElementClicked();
            const boundingClientRect = elem.getBoundingClientRect();
            const css = window.getComputedStyle(elem);
            const setLookFeelElemRectInfoTxt = (selector, value) => {
                document.getElementById(selector).innerText = value;
            };
            setLookFeelElemRectInfoTxt('look-feel-element-rect-info-text-x', Number.isInteger(boundingClientRect.x) ? boundingClientRect.x : (boundingClientRect.x).toFixed(2));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-info-text-y', Number.isInteger(boundingClientRect.y) ? boundingClientRect.y : (boundingClientRect.y).toFixed(2));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-info-text-width', Number.isInteger(boundingClientRect.width) ? boundingClientRect.width : (boundingClientRect.width).toFixed(2));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-info-text-height', Number.isInteger(boundingClientRect.height) ? boundingClientRect.height : (boundingClientRect.height).toFixed(2));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-margin-top', getCSSIntergerValue(elem, 'margin-top', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-margin-right', getCSSIntergerValue(elem, 'margin-right', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-margin-bottom', getCSSIntergerValue(elem, 'margin-bottom', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-margin-left', getCSSIntergerValue(elem, 'margin-left', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-padding-top', getCSSIntergerValue(elem, 'padding-top', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-padding-right', getCSSIntergerValue(elem, 'padding-right', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-padding-bottom', getCSSIntergerValue(elem, 'padding-bottom', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-padding-left', getCSSIntergerValue(elem, 'padding-left', 'px'));
            setLookFeelElemRectInfoTxt('look-feel-element-rect-name', elem.tagName);
        }
    });
};
export default lookFeelTool;
