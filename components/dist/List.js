"use strict";
exports.__esModule = true;
var React = require("react");
var ListItem_1 = require("./ListItem");
var List = function (_a) {
    var items = _a.items;
    return (React.createElement("ul", null, items.map(function (item) { return (React.createElement("li", { key: item.id },
        React.createElement(ListItem_1["default"], { data: item }))); })));
};
exports["default"] = List;
