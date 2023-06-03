"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports._manager = void 0;
const lavaclient_1 = require("lavaclient");
const SpotifyManager_1 = require("./SpotifyManager");
exports._manager = Symbol.for("SpotifyManager");
function load(options) {
    Reflect.defineProperty(lavaclient_1.Node.prototype, "spotify", {
        get() {
            return this instanceof lavaclient_1.ClusterNode
                ? this.cluster.spotify
                : (this[exports._manager] ??= new SpotifyManager_1.SpotifyManager(this, options));
        },
    });
    Reflect.defineProperty(lavaclient_1.Cluster.prototype, "spotify", {
        get() {
            return (this[exports._manager] ??= new SpotifyManager_1.SpotifyManager(this, options));
        },
    });
}
exports.load = load;
