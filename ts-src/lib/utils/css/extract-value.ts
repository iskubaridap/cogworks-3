function getCSSIntergerValue(element:HTMLElement, property:string , type:string) {
    return parseInt(((window.getComputedStyle(element)).getPropertyValue(property)).replace(type, ''));
}
function getCSSStringValue(element:HTMLElement, property:string) {
    return (window.getComputedStyle(element)).getPropertyValue(property);
}

export {getCSSIntergerValue, getCSSStringValue}