import File from './File.js';
const canvas = () => {
    const canvasElem = document.getElementById('canvas');
    const files = [];
    const handler2 = {
        get: function (target, prop, receiver) {
            return "world";
        }
    };
    globalThis.elementClicked = new Object();
    globalThis.elementClicked.element = null;
    // (<any> globalThis).elementClicked
    let test = new Proxy(globalThis.elementClicked, handler2);
    let fileIndex = 0; // for now
    // this will come from the server
    const canvasFiles = [{ src: './file-holder/index.html', id: 1, title: 'Album example · Bootstrap v5.0' }];
    canvasFiles.forEach((value, index) => {
        let iframeElem = document.createElement('iframe');
        iframeElem.classList.add('canvas-file');
        iframeElem.src = value.src;
        iframeElem.title = value.title;
        canvasElem.appendChild(iframeElem);
        files.push(new File(iframeElem, value.id));
    });
    // Temporary
    const undoBtn = document.getElementById('undo');
    const redoBtn = document.getElementById('redo');
    undoBtn === null || undoBtn === void 0 ? void 0 : undoBtn.addEventListener('click', () => {
        files[fileIndex].undo();
    });
    redoBtn === null || redoBtn === void 0 ? void 0 : redoBtn.addEventListener('click', () => {
        files[fileIndex].redo();
    });
};
export default canvas;
