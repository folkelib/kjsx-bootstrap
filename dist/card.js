"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kjsx_1 = require("kjsx");
var Card = /** @class */ (function () {
    function Card() {
    }
    Card.prototype.render = function () {
        return kjsx_1.React.createElement("div", { class: "card" }, this.children);
    };
    return Card;
}());
exports.Card = Card;
var CardHeader = /** @class */ (function () {
    function CardHeader() {
    }
    CardHeader.prototype.render = function () {
        return kjsx_1.React.createElement("div", { class: "card-header" }, this.children);
    };
    return CardHeader;
}());
exports.CardHeader = CardHeader;
var CardBody = /** @class */ (function () {
    function CardBody() {
    }
    CardBody.prototype.render = function () {
        return kjsx_1.React.createElement("div", { class: "card-body" }, this.children);
    };
    return CardBody;
}());
exports.CardBody = CardBody;
