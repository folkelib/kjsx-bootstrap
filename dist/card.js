"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
function Card(props, children) {
    return kjsx_1.React.createElement("div", { class: "card" }, children);
}
exports.Card = Card;
function CardHeader(props, children) {
    return kjsx_1.React.createElement("div", { class: "card-header" }, children);
}
exports.CardHeader = CardHeader;
function CardBody(props, children) {
    return kjsx_1.React.createElement("div", { class: "card-body" }, children);
}
exports.CardBody = CardBody;
