"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeState = void 0;
var NodeState;
(function (NodeState) {
    NodeState[NodeState["Idle"] = 0] = "Idle";
    NodeState[NodeState["Connecting"] = 1] = "Connecting";
    NodeState[NodeState["Connected"] = 2] = "Connected";
    NodeState[NodeState["Disconnecting"] = 3] = "Disconnecting";
    NodeState[NodeState["Disconnected"] = 4] = "Disconnected";
    NodeState[NodeState["Reconnecting"] = 5] = "Reconnecting";
})(NodeState = exports.NodeState || (exports.NodeState = {}));
