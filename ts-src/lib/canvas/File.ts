declare const $: any;

import {triggerAppWinUpdateDataEvent} from '../utils/app-window/window-helper.js';
import {setCanvasFileElementClicked, getAllowedElements, getTextEditableElements} from '../utils/global-value/elements.js';
import {getCSSIntergerValue, getCSSStringValue} from '../utils/css/extract-value.js';
import {getTagInfo} from '../utils/html-tags/identify-tag.js';
interface undoRedoObj {
    id: number;
    name: string;
    head: string;
    body: string;
    redo: any; // keeping this for now
    undo: any; // keeping this for now
}

export default class File {
    // private elementSelected: any = null;
    private undoRedoAry:undoRedoObj[] = [];
    private iframeElem: any;
    private mouseOverElem: any;
    private undoRedoId: number = 0;
    private undoRedoIndex: number = 0;
    private elemToMove: any = null;
    public contentWin: any;
    
    constructor(readonly element: HTMLIFrameElement, readonly id: number, callback?: Function) {
        const _this = this;
        element.addEventListener('load', function(e){
            // const elem = e.target as HTMLIFrameElement;
            _this.iframeElem = e.target as HTMLIFrameElement;
            _this.contentWin = (<any> _this.iframeElem.contentWindow);
            const tagName = _this.contentWin.document.createElement('tag-name');
            const dragElem = _this.contentWin.document.createElement('drag-elem');
            const arrowOnHover = _this.contentWin.document.createElement('arrow-on-hover-wrap');
            const arrowUp = _this.contentWin.document.createElement('arrow-up');
            const arrowRight = _this.contentWin.document.createElement('arrow-right');
            const arrowDown = _this.contentWin.document.createElement('arrow-down');
            const arrowLeft = _this.contentWin.document.createElement('arrow-left');
            dragElem.setAttribute('data-status', 'temp');
            arrowOnHover.setAttribute('data-status', 'temp');
            arrowUp.setAttribute('data-status', 'temp');
            arrowRight.setAttribute('data-status', 'temp');
            arrowDown.setAttribute('data-status', 'temp');
            arrowLeft.setAttribute('data-status', 'temp');
            _this.contentWin.document.body.appendChild(tagName);
            _this.contentWin.document.body.appendChild(dragElem);
            _this.contentWin.document.body.appendChild(arrowOnHover);
            _this.contentWin.document.querySelector('arrow-on-hover-wrap').appendChild(arrowUp);
            _this.contentWin.document.querySelector('arrow-on-hover-wrap').appendChild(arrowRight);
            _this.contentWin.document.querySelector('arrow-on-hover-wrap').appendChild(arrowDown);
            _this.contentWin.document.querySelector('arrow-on-hover-wrap').appendChild(arrowLeft);
            _this.addCanvasFileStyle();
            _this.setUndoRedo('File Opened');
            _this.setupFile();
            if(callback) {
                callback()
            }
        });
    }
    public redo() {
        const _this = this;
        const index = _this.undoRedoIndex < (_this.undoRedoAry.length - 1) ? _this.undoRedoIndex = _this.undoRedoIndex + 1 : (_this.undoRedoAry.length - 1);
        const undoRedoObj = _this.undoRedoAry[index];
        if(undoRedoObj.redo) {
            undoRedoObj.redo();
        } else {
            _this.contentWin.document.body.innerHTML = (undoRedoObj.body);
            _this.setupFile();
        }
        _this.removeAllContentEditableElements();
    }
    public undo() {
        const _this = this;
        const index = _this.undoRedoIndex > 0 ? _this.undoRedoIndex = _this.undoRedoIndex - 1 : 0;
        const undoRedoObj = _this.undoRedoAry[index];
        if(undoRedoObj.undo) {
            undoRedoObj.undo();
        } else {
            _this.contentWin.document.body.innerHTML = (undoRedoObj.body);
            _this.setupFile();
        }
        _this.removeAllContentEditableElements();
    }
    private getAllUndoRedo = () => {
        return this.undoRedoAry;
    }
    private getUndoRedo = (id: number) => {
        const _this = this;
        const undoRedoAryIndex = _this.undoRedoAry.findIndex(val => val.id == id);
        if(undoRedoAryIndex >= 0) {
            return _this.undoRedoAry[undoRedoAryIndex];
        } else {
            return [];
        }
    }
    public setUndoRedo = (_name: string, _undo?: Function, _redo?: Function) => {
        const _this = this;
        if((_this.undoRedoIndex + 1) < _this.undoRedoAry.length - 1) {
            _this.undoRedoAry.splice((_this.undoRedoIndex + 1), (_this.undoRedoAry.length  - (_this.undoRedoIndex + 1)));
        }
        _this.undoRedoAry.push({
            id: _this.undoRedoId, 
            name: _name, 
            head: (_this.contentWin.document).getElementsByTagName('head')[0].innerHTML,
            body: (_this.contentWin.document).getElementsByTagName('body')[0].innerHTML,
            redo: _redo,
            undo: _undo,
        });
        _this.undoRedoId = _this.undoRedoId + 1;
        _this.undoRedoIndex = (_this.undoRedoAry.length - 1);
    }
    private setupFile() {
        const _this = this;
        _this.getElementSelected();
    }
    private addCanvasFileStyle = () => {
        const styleElem = this.contentWin.document.createElement('style');
        styleElem.setAttribute('data-status', 'temp');
        styleElem.innerHTML = `
            :root {
                --hover-color: #007bff;
                --drag-over: #007bff;
                --contenteditable-outline: #f00;
                --drag-elem-bg-color: #007bff;
                --red: #dc3545;
                /* --drag-over: #007bff; */
                /* --contenteditable-outline: #6c757d; */
            }
            /* .elem-on-hover-arrow-up:before {
                content: '\\25B4';
            }
            .elem-on-hover-arrow-down:before {
                content: '\\25BE';
            }
            .elem-on-hover-arrow-left:before {
                content: '\\25C2';
            }
            .elem-on-hover-arrow-right:before {
                content: '\\25B8';
            }
            .elem-on-hover-arrow-up:before, 
            .elem-on-hover-arrow-down:before,
            .elem-on-hover-arrow-left:before,
            .elem-on-hover-arrow-right:before {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: var(--drag-over);
                width: inherit;
                height: inherit;
                position: absolute;
            }
            .elem-on-hover-arrow-up.invalid:before, 
            .elem-on-hover-arrow-down.invalid:before,
            .elem-on-hover-arrow-left.invalid:before,
            .elem-on-hover-arrow-right.invalid:before {
                color: var(--red);
            } */


            arrow-up:before {
                content: '\\25B4';
            }
            arrow-down:before {
                content: '\\25BE';
            }
            arrow-left:before {
                content: '\\25C2';
            }
            arrow-right:before {
                content: '\\25B8';
            }
            arrow-up:before, 
            arrow-down:before,
            arrow-left:before,
            arrow-right:before {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                color: var(--drag-over);
                width: inherit;
                height: inherit;
                position: absolute;
            }
            arrow-up.invalid:before, 
            arrow-down.invalid:before,
            arrow-left.invalid:before,
            arrow-right.invalid:before {
                color: var(--red);
            }
            arrow-up, 
            arrow-down,
            arrow-left,
            arrow-right {
                display: none;
            }
            arrow-up.show, 
            arrow-down.show,
            arrow-left.show,
            arrow-right.show {
                display: block;
            }
            arrow-on-hover-wrap {
                position: absolute;
                display: block;
            }


            .elem-on-hover {
                outline: 1px solid var(--hover-color);
            }
            .elem-on-hover.invalid {
                outline: 1px solid var(--red);
            }
            .elem-on-drag-over {
                outline: 1px solid var(--drag-over);
            }
            tag-name {
                padding: 2px 5px;
                background-color: var(--hover-color);
                position: fixed;
                left: 0;
                top: 0;
                color: #fff;
                display: none;
                font-size: 10px;
                z-index: 1000;
                min-width: 20px;
                text-align: center;
            }
            tag-name.invalid {
                background-color: var(--red);
            }
            tag-name.drag-over {
                background-color: var(--drag-over);
            }
            tag-name.show {
                display: block;
            }
            [contenteditable="true"]:active,
            [contenteditable="true"]:focus{
                border: none;
                outline: 1px solid var(--contenteditable-outline);
            }
            drag-elem {
                top: 0;
                left: 0;
                min-width: 100px;
                min-height: 20px;
                background-color: var(--drag-elem-bg-color);
                color: #ffffff;
                position: fixed;
                z-index: 1000;
                display: none;
                justify-content: center;
                align-items: center;
                font-size: 12px;
            }
        `;
        this.contentWin.document.head.appendChild(styleElem);
    }
    private removeOnHoverArrowEffect = () => {
        const _this = this;
        _this.contentWin.document.querySelector('arrow-up').classList.remove('show');
        _this.contentWin.document.querySelector('arrow-right').classList.remove('show');
        _this.contentWin.document.querySelector('arrow-down').classList.remove('show');
        _this.contentWin.document.querySelector('arrow-left').classList.remove('show');

        _this.contentWin.document.querySelector('arrow-up').removeAttribute('style');
        _this.contentWin.document.querySelector('arrow-right').removeAttribute('style');
        _this.contentWin.document.querySelector('arrow-down').removeAttribute('style');
        _this.contentWin.document.querySelector('arrow-left').removeAttribute('style');
    }
    private removeAllContentEditableElements() {
        const _this = this;
        const win = this.contentWin;
        const elemCollection = win.document.body.getElementsByTagName('*') as HTMLCollection;
        const outlineElems = win.document.querySelectorAll('.elem-on-hover');
        const tagName = win.document.querySelector('tag-name');
        const dragElem = win.document.querySelector('drag-elem');
        tagName.classList.remove('show');
        tagName.classList.remove('drag-over');
        dragElem.style.display = 'none';
        
        for(const elem of elemCollection) {
            getAllowedElements().forEach(value => {
                if((elem.tagName).toLowerCase() == value) {
                    elem.classList.remove('elem-on-drag-over');
                    _this.removeOnHoverArrowEffect();
                    if((<any> elem).contentEditable !== undefined) {
                        (<any> elem).contentEditable = false;
                        (<any> elem).removeAttribute('contenteditable');
                    }
                }
            });
        }
        for(const elem of outlineElems) {
            elem.classList.remove('elem-on-hover');
        }
    }
    
    private getElementSelected() {
        const _this = this;
        const win = this.contentWin;
        const elemCollection = win.document.body.getElementsByTagName('*') as HTMLCollection;
        const tagName = win.document.querySelector('tag-name');
        const dragElem = win.document.querySelector('drag-elem');
        const arrowOnHover = win.document.querySelector('arrow-on-hover-wrap');
        let elemSelected: any = null;
        let elemEvtHover: any = null;
        let elemHover: any = null;
        let elemDragOver: any = null;
        let elemDbClick: any = null;
        let dragDropReady: boolean = false;
        let range: any = null;
        let textNode: any = null;
        let elemToMove: any = null;
        let offset: any = null;
        let pointerPosition: string;

        const hideOnHoverEffect = (_elem: HTMLElement) => {
            if(_elem.classList.contains('invalid')) _elem.classList.remove('invalid');
            if(_elem !== elemSelected) _elem.classList.remove('elem-on-hover');
        }
        const showOnHoverEffect = (_elem: HTMLElement) => {
            _elem.classList.add('elem-on-hover');
        }
        const getValidParent = (_elem: HTMLElement, parent: HTMLElement, action: Function) => {
            if(_elem !== null && parent !== null) {
                const vPElem = getTagInfo(_elem.tagName).validParent;
                for (let val = 0; val < vPElem.length; val++) {
                    if(vPElem[val] == (parent.tagName).toLowerCase()) {
                        action();
                        break;
                    }
                }
            }
        }

        const showHoverElement = (evt: Event) => {
            evt.preventDefault();
            const elemTarget = (<any> evt.target);
            const tag = (elemTarget.tagName).toLowerCase();
            if(elemHover != elemTarget && !elemTarget.hasAttribute('data-status')) {
                elemEvtHover = (<any> evt);
                elemHover = elemTarget;
                let elemLeft = elemHover.getBoundingClientRect().left;
                let elemTop = elemHover.getBoundingClientRect().top;
                showOnHoverEffect(elemHover);
                tagName.style.left = `${elemLeft - 1}px`;
                tagName.style.top = (elemTop <= 19 ) ? `0px` : `${elemTop - 19}px`;
                tagName.innerText = tag.toUpperCase();
                tagName.classList.add('show');
            }
        }
        const hideHoverElement = (evt: Event) => {
            if(elemHover !== null) {
                tagName.classList.remove('show');
                tagName.classList.remove('drag-over');
                if(tagName.classList.contains('invalid')) tagName.classList.remove('invalid');
                hideOnHoverEffect(elemHover);
                _this.removeOnHoverArrowEffect();
            }
        }

        const selectElemEvent = (evt:Event) => {
            evt.preventDefault();
            if(elemSelected != evt.target) {
                elemSelected = (<any> evt.target);
                const tag = (elemSelected.tagName).toLowerCase();
                showOnHoverEffect(elemSelected);
                setCanvasFileElementClicked(elemSelected);
                const appWinList = document.querySelectorAll('.app-window-wrap');
                appWinList.forEach((value, index) => {
                    const elem = value as HTMLDivElement;
                    if(getCSSStringValue(elem, 'display') !== 'none' && !elem.classList.contains('minimize')) {
                        triggerAppWinUpdateDataEvent(elem);
                    }
                });

                if(elemDbClick !== null) {
                    _this.removeAllContentEditableElements();
                    elemDbClick = null;
                    for(const elem of elemCollection) {
                        let elemTag = (elem.tagName).toLowerCase();
                        (getAllowedElements()).forEach((value) => {
                            if(elemTag == value) {
                                elem.addEventListener('mousedown', setElemToMoveEvent);
                                elem.addEventListener('mouseup', unsetElemToMoveEvent);
                                elem.addEventListener('mousemove', elemOnDragEvent);
                            }
                        });
                    }
                }
            }
        }
        const setElemToMoveEvent = (evt: Event) => {
            evt.preventDefault();
            if(elemToMove == null) {
                elemToMove = (<any> evt.target);
                dragElem.innerText = elemToMove.tagName;
            }
        }
        
        const insertAfter = (newNode: HTMLElement, existingNode: HTMLElement) => {
            (<any> existingNode).parentNode.insertBefore(newNode, existingNode.nextSibling);
        }
        const insertBefore = (newNode: HTMLElement, existingNode: HTMLElement) => {
            (<any> existingNode).parentNode.insertBefore(newNode, existingNode);
        }
       
        const elemOnDragEvent = (evt: Event) => {
            evt.preventDefault();
            let vPElem: string[];
            let foundValidParent: boolean;
            if(elemToMove !== null) {
                const dragElemWidth = getCSSIntergerValue(dragElem, 'width', 'px');
                const dragElemHeight = getCSSIntergerValue(dragElem, 'height', 'px');
                const evtElem = <any> evt;
                const DOMRect = elemHover.getBoundingClientRect();
                showOnHoverEffect(elemToMove);
                // https://developer.mozilla.org/en-US/docs/Web/API/Document/caretRangeFromPoint
                if (_this.contentWin.document.caretPositionFromPoint) {
                    range = _this.contentWin.document.caretPositionFromPoint((<any> evt).clientX, (<any> evt).clientY);
                        textNode = range.offsetNode;
                        offset = range.offset;
                } else if (_this.contentWin.document.caretRangeFromPoint) {
                    range = _this.contentWin.document.caretRangeFromPoint((<any> evt).clientX, (<any> evt).clientY);
                    textNode = range.startContainer;
                    offset = range.startOffset;
                }
                dragElem.style.display = 'flex';
                if(evtElem.clientX >= (document.body.clientWidth - dragElemWidth)) {
                    dragElem.style.left = `${((evtElem.clientX - dragElemWidth) - 5)}px`;
                } else {
                    dragElem.style.left = `${(evtElem.clientX + 5)}px`;
                }
                if(evtElem.clientY >= (document.body.clientHeight - dragElemHeight)) {
                    dragElem.style.top = `${((evtElem.clientY - dragElemHeight) - 5)}px`;
                } else {
                    dragElem.style.top = `${(evtElem.clientY + 5)}px`;
                }
                _this.removeOnHoverArrowEffect();
                arrowOnHover.style.left = `${(DOMRect.x)}px`;
                arrowOnHover.style.top = `${(DOMRect.y)}px`;

                if(evtElem.clientX >= DOMRect.x && evtElem.clientX <= (DOMRect.x + (DOMRect.width * 0.1))) {
                    // left
                    pointerPosition = 'left';
                    arrowOnHover.style.left = `${(DOMRect.x - 13)}px`;
                    _this.contentWin.document.querySelector('arrow-left').classList.add('show');
                    _this.contentWin.document.querySelector('arrow-left').style.height = `${(DOMRect.height - 6)}px`;
                    getValidParent(elemToMove, elemHover.parentNode, () => {
                        elemHover.classList.remove('invalid');
                        tagName.classList.remove('invalid');
                        tagName.innerText = elemHover.parentNode.tagName;
                    });
                    // keeping for now
                    // hideOnHoverEffect(elemHover);
                    // showOnHoverEffect(elemHover.parentNode);
                } else if(evtElem.clientX <= (DOMRect.x + DOMRect.width) && evtElem.clientX >= (DOMRect.x + (DOMRect.width * 0.9))) {
                    // right
                    pointerPosition = 'right';
                    arrowOnHover.style.left = `${((DOMRect.x + DOMRect.width) + 5)}px`;
                    _this.contentWin.document.querySelector('arrow-right').classList.add('show');
                    _this.contentWin.document.querySelector('arrow-right').style.height = `${(DOMRect.height - 6)}px`;
                    getValidParent(elemToMove, elemHover.parentNode, () => {
                        elemHover.classList.remove('invalid');
                        tagName.classList.remove('invalid');
                        tagName.innerText = elemHover.parentNode.tagName;
                    });
                    // keeping for now
                    // hideOnHoverEffect(elemHover);
                    // showOnHoverEffect(elemHover.parentNode);
                } else if(evtElem.clientY >= DOMRect.y && evtElem.clientY <= (DOMRect.y + (DOMRect.height * 0.1))) {
                    // top
                    pointerPosition = 'up';
                    arrowOnHover.style.top = `${(DOMRect.y - 18)}px`;
                    _this.contentWin.document.querySelector('arrow-up').classList.add('show');
                    _this.contentWin.document.querySelector('arrow-up').style.width = `${(DOMRect.width - 6)}px`;
                    getValidParent(elemToMove, elemHover.parentNode, () => {
                        elemHover.classList.remove('invalid');
                        tagName.classList.remove('invalid');
                        tagName.innerText = elemHover.parentNode.tagName;
                    });
                    // keeping for now
                    // hideOnHoverEffect(elemHover);
                    // showOnHoverEffect(elemHover.parentNode);
                } else if(evtElem.clientY <= (DOMRect.y + DOMRect.height) && evtElem.clientY >= (DOMRect.y + (DOMRect.height * 0.9))) {
                    // bottom
                    pointerPosition = 'down';
                    arrowOnHover.style.top = `${(DOMRect.y + DOMRect.height)}px`;
                    _this.contentWin.document.querySelector('arrow-down').classList.add('show');
                    _this.contentWin.document.querySelector('arrow-down').style.width = `${(DOMRect.width - 6)}px`;
                    getValidParent(elemToMove, elemHover.parentNode, () => {
                        elemHover.classList.remove('invalid');
                        tagName.classList.remove('invalid');
                        tagName.innerText = elemHover.parentNode.tagName;
                    });
                    // keeping for now
                    // hideOnHoverEffect(elemHover);
                    // showOnHoverEffect(elemHover.parentNode);
                } else {
                    pointerPosition = 'center';
                    vPElem = getTagInfo(elemToMove.tagName).validParent;
                    foundValidParent = false;
                    for (let val = 0; val < vPElem.length; val++) {
                        if(vPElem[val] == (elemHover.tagName).toLowerCase()) {
                            elemHover.classList.remove('invalid');
                            tagName.classList.remove('invalid');
                            foundValidParent = true;
                            break;
                        }
                    }
                    if(!foundValidParent){
                        elemHover.classList.add('invalid');
                        tagName.classList.add('invalid');
                    }
                    tagName.innerText = elemHover.tagName;
                    // keeping for now
                    // hideOnHoverEffect(elemHover.parentNode);
                    // showOnHoverEffect(elemHover);
                }
            }
        }
        const unsetElemToMoveEvent = (evt: Event) => {
            evt.preventDefault();
            let elemPresent = false;
            let elemParent:any = null;
            const elem = (<any> evt.target);
            if(elemToMove != null && elem !== elemToMove) {
                if(pointerPosition !== 'center') {
                    elemParent = (<any> evt.target).parentNode;
                } else {
                    elemParent = (<any> evt.target);
                }
                getValidParent(elemToMove, elemParent, () => {
                    switch(pointerPosition) {
                        case 'left':
                            insertBefore(elemToMove, elem);
                            break;
                        case 'right':
                            insertAfter(elemToMove, elem);
                            break;
                        case 'up':
                            insertBefore(elemToMove, elem);
                            break;
                        case 'down':
                            insertAfter(elemToMove, elem);
                            break;
                        default:
                            elem.appendChild(elemToMove);
                    }
                    _this.removeAllContentEditableElements();
                    _this.setUndoRedo('Move Text');
                    elemPresent = true;
                })
            }
            _this.removeOnHoverArrowEffect();
            if(!elemPresent) _this.removeAllContentEditableElements();
            elemToMove = null;
            pointerPosition = '';
        }
        const setElemContentEditable = (evt: Event) => {
            elemSelected = (<any> evt.target);
            elemDbClick = (<any> evt.target);
            elemDbClick.activeElement;
            elemDbClick.contentEditable = true;
            elemDbClick.focus();

            for(const elem of elemCollection) {
                let elemTag = (elem.tagName).toLowerCase();
                (getAllowedElements()).forEach((value) => {
                    if(elemTag == value) {
                        elem.removeEventListener('mousedown', setElemToMoveEvent);
                        elem.removeEventListener('mouseup', unsetElemToMoveEvent);
                        elem.removeEventListener('mousemove', elemOnDragEvent);
                    }
                });
            }
        }
        for(const elem of elemCollection) {
            let elemTag = (elem.tagName).toLowerCase();
            (getAllowedElements()).forEach((value) => {
                if(elemTag == value) {
                    elem.addEventListener('click', selectElemEvent);
                    elem.addEventListener('mousedown', setElemToMoveEvent);
                    elem.addEventListener('mouseup', unsetElemToMoveEvent);
                    elem.addEventListener('mousemove', elemOnDragEvent);
                    elem.addEventListener('dblclick', setElemContentEditable);
                    elem.addEventListener('mouseover', showHoverElement);
                    elem.addEventListener('mouseout', hideHoverElement);
                }
            });
        }
    }
    getWindowContent() {
        return this.contentWin;
    }
    getScource() {
        return this.element.src;
    }
}