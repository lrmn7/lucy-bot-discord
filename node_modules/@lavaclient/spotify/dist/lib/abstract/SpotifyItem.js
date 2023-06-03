"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyItemType = exports.SpotifyItem = void 0;
class SpotifyItem {
    constructor(manager) {
        Object.defineProperty(this, "manager", {
            value: manager,
            configurable: false,
            enumerable: false,
            writable: false,
        });
    }
}
exports.SpotifyItem = SpotifyItem;
var SpotifyItemType;
(function (SpotifyItemType) {
    SpotifyItemType[SpotifyItemType["Artist"] = 0] = "Artist";
    SpotifyItemType[SpotifyItemType["Playlist"] = 1] = "Playlist";
    SpotifyItemType[SpotifyItemType["Track"] = 2] = "Track";
    SpotifyItemType[SpotifyItemType["Album"] = 3] = "Album";
})(SpotifyItemType = exports.SpotifyItemType || (exports.SpotifyItemType = {}));
