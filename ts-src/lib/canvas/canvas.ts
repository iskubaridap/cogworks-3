import File from './File.js';

interface CanvasFile {
    src: string;
    id: number;
    title: string;
}

const canvas = () => {
    const canvasElem = document.getElementById('canvas') as HTMLElement;
    const files: File[] = [];
    const handler2 = {
        get: function(target: any, prop: any, receiver: any) {
          return "world";
        }
      };
    (<any> globalThis).elementClicked = new Object();
    (<any> globalThis).elementClicked.element = null;
    // (<any> globalThis).elementClicked
    let test = new Proxy((<any> globalThis).elementClicked, handler2);
    let fileIndex = 0; // for now
    // this will come from the server
    const canvasFiles: CanvasFile[] = [{src: './file-holder/index.html', id: 1, title: 'Album example · Bootstrap v5.0'}];
    
    canvasFiles.forEach((value, index) => {
        let iframeElem = document.createElement('iframe');
        iframeElem.classList.add('canvas-file');
        iframeElem.src = value.src;
        iframeElem.title = value.title;
        canvasElem.appendChild(iframeElem);
        files.push(new File(iframeElem as HTMLIFrameElement, value.id));
    });

    // Temporary
    const undoBtn = document.getElementById('undo');
    const redoBtn = document.getElementById('redo');

    undoBtn?.addEventListener('click', () => {
      files[fileIndex].undo();
    });
    redoBtn?.addEventListener('click', () => {
      files[fileIndex].redo();
    });
}

export default canvas;