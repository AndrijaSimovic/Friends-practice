function elementGenerator(element) {
    const newElement = document.createElement(element);
    return newElement;
}

function doAppendChild(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function setInnerText(element, text) {
    element.setInnerText = text;
}

export { elementGenerator, doAppendChild, setInnerText };