var api = (function () {
  var service = "http://ws.audioscrobbler.com/2.0/?method=";
  var key = "&api_key=2e6d7cc15d6b7121b49b5ef82db711b0";
  var format = "&format=json";
  var apiUrls = {
    topArtist: function (page) {
      if (!page){
        page = 1;
      }
      return service + "geo.gettopartists&country=Belarus&limit=12&page=" + page + key + format;
    },
    searchArtist: function (artist) {
      return service + "artist.search&artist=" + artist + key + format;
    },
    createArtistInfoPage: function (artist) {
      return service + "artist.getinfo&artist=" + artist + key + format;
    },
    getArtistTopAlbums: function (artist) {
      return service + "artist.gettopalbums&artist=" + artist + key + format;
    },
    getInfoAlbum: function (artist, album) {
      return service + "album.getinfo&artist=" + artist + "&album=" + album + key + format;
    }
  };

  if (Object.freeze) {
    Object.freeze(apiUrls);
  }
  return apiUrls;
})();
