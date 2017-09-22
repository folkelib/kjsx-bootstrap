"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var kjsx_1 = require("kjsx");
function ProgressBar(props, children) {
    var progressPercent = ko.pureComputed(function () {
        var progress = props.progress() * 100;
        var max = props.max !== undefined ? props.max() : 100;
        var min = props.min !== undefined ? props.min() : 0;
        return (progress / (max - min)) + "%";
    });
    return kjsx_1.React.createElement("div", { class: "progress" },
        kjsx_1.React.createElement("div", { class: "progress-bar", role: "progressbar", "aria-valuenow": props.progress, "aria-valuemin": props.min, "aria-valuemax": props.max, style: { width: progressPercent } }, children));
}
exports.ProgressBar = ProgressBar;
