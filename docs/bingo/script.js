"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDrop = exports.onDragOver = exports.onDragStart = void 0;
function onDragStart(event) {
    const item = event.currentTarget;
    const parent = item.parentElement;
    item.style.backgroundColor = "yellow";
    const data = {
        "item": item.id,
        "parent": parent.id
    };
    event.dataTransfer.setData("application/json", JSON.stringify(data));
}
exports.onDragStart = onDragStart;
function onDragOver(event) {
    event.preventDefault();
}
exports.onDragOver = onDragOver;
function onDrop(event) {
    const droppedOn = event.target;
    if (droppedOn.classList.contains("option"))
        return;
    const data = JSON.parse(event.dataTransfer.getData("application/json"));
    const item = document.getElementById(data.item);
    const previous = document.getElementById(data.parent);
    if (droppedOn.classList.contains("cell")) {
        while (droppedOn.firstChild) {
            if (droppedOn.firstChild.classList?.contains("option")) {
                previous.appendChild(droppedOn.firstChild);
            }
            else {
                droppedOn.removeChild(droppedOn.firstChild);
            }
        }
        droppedOn.appendChild(item);
    }
    else {
        droppedOn.appendChild(item);
    }
    event.dataTransfer.clearData();
}
exports.onDrop = onDrop;
