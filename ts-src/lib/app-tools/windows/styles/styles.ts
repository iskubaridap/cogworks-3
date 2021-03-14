import AppWindow from '../../AppWindow.js';
import { getCanvasFileElementClicked } from '../../../utils/global-value/elements.js';

const stylesTool = () => {
    const appWindow = new AppWindow('.app-window-wrap[data-window="styles"]');
    const selector = appWindow.selector;
    const element = appWindow.getElement();
    element.addEventListener('update-data', function(evt: Event) {
        console.log(getCanvasFileElementClicked());
    });
}

export default stylesTool;