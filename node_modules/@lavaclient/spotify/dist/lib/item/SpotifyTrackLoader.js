"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyTrackLoader = void 0;
const Loader_1 = require("../abstract/Loader");
const SpotifyItem_1 = require("../abstract/SpotifyItem");
const SpotifyTrack_1 = require("./SpotifyTrack");
class SpotifyTrackLoader extends Loader_1.Loader {
    constructor() {
        super(...arguments);
        this.itemType = SpotifyItem_1.SpotifyItemType.Track;
        this.matchers = [
            /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/track\/([a-zA-Z\d-_]+)/,
            /spotify:track:([a-zA-Z\d-_]+)$/,
        ];
    }
    async load(manager, [, id]) {
        const track = await manager.makeRequest(`/tracks/${id}`);
        return new SpotifyTrack_1.SpotifyTrack(manager, track);
    }
}
exports.SpotifyTrackLoader = SpotifyTrackLoader;
