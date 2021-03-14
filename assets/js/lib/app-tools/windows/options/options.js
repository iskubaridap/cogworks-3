import AppWindow from '../../AppWindow.js';
import { getCanvasFileElementClicked } from '../../../utils/global-value/elements.js';
const optionsTool = () => {
    const appWindow = new AppWindow('.app-window-wrap[data-window="options"]');
    const selector = appWindow.selector;
    const element = appWindow.getElement();
    element.addEventListener('update-data', function (evt) {
        console.log(getCanvasFileElementClicked());
    });
};
export default optionsTool;
