import appTools from './app-tools/tool-main.js';
import canvas from './canvas/canvas.js';

const application = () => {
    appTools();
    /* 
        Note:
        When we're going to work on the server side.
        Figure out how to put <script> inside of <noscript data-temporary="true">
        As of now, we can't prevent <script> from executing.
    */
    canvas();
}

export default application;