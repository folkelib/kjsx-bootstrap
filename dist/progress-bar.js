"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var kjsx_1 = require("kjsx");
var ProgressBar = /** @class */ (function () {
    function ProgressBar() {
    }
    ProgressBar.prototype.render = function () {
        var _this = this;
        var progressPercent = ko.pureComputed(function () {
            var progress = _this.props.progress() * 100;
            var max = _this.props.max !== undefined ? _this.props.max() : 100;
            var min = _this.props.min !== undefined ? _this.props.min() : 0;
            return (progress / (max - min)) + "%";
        });
        return kjsx_1.React.createElement("div", { class: "progress" },
            kjsx_1.React.createElement("div", { class: "progress-bar", role: "progressbar", "aria-valuenow": this.props.progress, "aria-valuemin": this.props.min, "aria-valuemax": this.props.max, style: { width: progressPercent } }, this.children));
    };
    return ProgressBar;
}());
exports.ProgressBar = ProgressBar;
