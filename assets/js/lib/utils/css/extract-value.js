function getCSSIntergerValue(element, property, type) {
    return parseInt(((window.getComputedStyle(element)).getPropertyValue(property)).replace(type, ''));
}
function getCSSStringValue(element, property) {
    return (window.getComputedStyle(element)).getPropertyValue(property);
}
export { getCSSIntergerValue, getCSSStringValue };
