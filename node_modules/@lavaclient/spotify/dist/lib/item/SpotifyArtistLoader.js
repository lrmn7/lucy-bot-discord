"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotifyArtistLoader = void 0;
const Loader_1 = require("../abstract/Loader");
const SpotifyItem_1 = require("../abstract/SpotifyItem");
const SpotifyArtist_1 = require("./SpotifyArtist");
class SpotifyArtistLoader extends Loader_1.Loader {
    constructor() {
        super(...arguments);
        this.itemType = SpotifyItem_1.SpotifyItemType.Artist;
        this.matchers = [
            /^(?:https?:\/\/|)?(?:www\.)?open\.spotify\.com\/artist\/([a-zA-Z\d-_]+)/,
            /^spotify:artist:([a-zA-Z\d-_]+)$/,
        ];
    }
    async load(manager, [, id]) {
        const artist = await manager.makeRequest(`/artists/${id}`);
        const { tracks } = await manager.makeRequest(`/artists/${id}/top-tracks?market=${manager.options.market}`);
        return new SpotifyArtist_1.SpotifyArtist(manager, artist, tracks);
    }
}
exports.SpotifyArtistLoader = SpotifyArtistLoader;
