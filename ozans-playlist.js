

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
function removeDuplicates(playlist) {
    // return Array.from(new Set(playlist))

    const setPlaylist = new Set();
    playlist.forEach(item => setPlaylist.add(item));

    return Array.from(setPlaylist);
}

/**
   * Checks whether a playlist includes a track.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {boolean} whether the track is in the playlist
   */
function hasTrack(playlist, track) {
    // return new Set(playlist).has(track)

    const setPlaylist = new Set(playlist);

    return setPlaylist.has(track);
}

/**
   * Adds a track to a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
function addTrack(playlist, track) {
    const setPlaylist = new Set(playlist);
    setPlaylist.add(track);

    return Array.from(setPlaylist);
}

/**
   * Deletes a track from a playlist.
   *
   * @param {string[]} playlist
   * @param {string} track
   * @returns {string[]} new playlist
   */
function deleteTrack(playlist, track) {
    const setPlaylist = new Set(playlist);
    setPlaylist.delete(track);

    return Array.from(setPlaylist);
}

/**
   * Lists the unique artists in a playlist.
   *
   * @param {string[]} playlist
   * @returns {string[]} list of artists
   */
function listArtists(playlist) {
    // return Array.from(new Set(playlist.map((track) => track.split(' - ').pop())))
    
    const setPlaylist = new Set();
    playlist.forEach(item => setPlaylist.add(item.split(/\s-\s/)[1]));

    return Array.from(setPlaylist);
}

const playlist = [
    'All Mine - Portishead',
    'Sight to Behold - Devendra Banhart',
    'Sour Times - Portishead',
];

console.log(listArtists(playlist));
