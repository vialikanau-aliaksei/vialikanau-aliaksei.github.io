var locations = (function () {

  var _parseParams = function (querieStr) {
    if (!querieStr)return;
    var queries = querieStr.split("&");
    var result = {}, temp;
    for (var i = 0; i < queries.length; i++) {
      temp = queries[i].split('=');
      result[temp[0]] = temp[1];
    }
    return result;
  };

  var top = {
    name: 'top',
    getHash: (function (pageNo) {
      return 'top?page=' + (pageNo ? pageNo : 1);
    }),
    parse: (function (params) {
      return {
        page: params ? params.page : ''
      }
    })
  };
  var artist = {
    name: 'artist',
    getHash: (function (name) {
      return 'artist?name=' + encodeURIComponent(name);
    }),
    parse: (function (params) {
      return {
        name: params ? params.name : ''
      }
    })
  };
  var album = {
    name: 'album',
    getHash: (function (artist, album) {
      return 'album?artist=' + encodeURIComponent(artist) + '&album=' + encodeURIComponent(album);
    }),
    parse: (function (params) {
      return {
        artist: params ? params.artist : '',
        album: params ? params.album : ''
      }
    })
  };

  var currentPage = function () {
    var hash = window.location.hash.substr(1);
    var paramIndex = hash.indexOf('?');
    return {
      name: hash.substr(0, paramIndex),
      params: _parseParams(hash.substr(paramIndex + 1, hash.length))
    };

  };

  var changeLocation = function (hash) {
    window.location.hash = hash;
  };

  return {
    top: top,
    artist: artist,
    album: album,
    currentPage: currentPage,
    changeLocation: changeLocation
  }
})();


(function () {
  pages.createTopPage(1);
  var changeHandle = function () {
    var page = locations.currentPage();
    switch (page.name) {
      case locations.artist.name: {
        pages.createArtistInfoPage(page.params);
        break;
      }
      case locations.album.name: {
        pages.createAlbumPage(page.params);
        break;
      }
      default: {
        pages.createTopPage(page.params);
      }
    }
  };
  if ('onhashchange' in window) {
    window.onhashchange = changeHandle;
  } else {
    var oldHash = '';
    setInterval(function () {
      if (window.location.hash !== oldHash) {
        oldHash = window.location.hash;
        changeHandle();
      }
    }, 100);
  }
})();
