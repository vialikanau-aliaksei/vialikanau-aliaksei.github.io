var pages = (function () {

  var frame = document.getElementById('wrapper');
  var rateImageSource = 'img/heart.png';

  var _onerror = (function (name) {
    return function () {
      frame.innerHTML = name + " error> " + this.statusText;
    }
  });


  var _clearNode = (function (node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  });


  var _addCardDivs = function (builder, array, onclick) {
    for (var i = 0; i < array.length; i++) {
      (function () {
        if (array[i].name && array[i].image[3]['#text']) {
          var card = builder.addCard(array[i].name, array[i].image[3]['#text'], function () {
            onclick(card.data);
          });
          card.data = array[i];
        }
      })();
    }
  };

  var topPage = function (params) {
    var pageNo = locations.top.parse(params).page
    _clearNode(frame);
    var builder = elements.builder(frame);
    builder.addSearch('Search', 'Dire Straits', function (text) {
      locations.changeLocation(locations.artist.getHash(text));
    });
    builder.build();
    http.doGet(api.topArtist(pageNo), function () {
      var artists = JSON.parse(this.responseText).topartists;
      if (!artists && !Array.isArray(artists.artist)) return;
      var builder = elements.builder(frame);
      _addCardDivs(builder, artists.artist, function (data) {
        locations.changeLocation(locations.artist.getHash(data.name));
      });
      var attr = artists['@attr'];
      var pageInfo = builder.addCaption('Page ' + attr.page + " from " + attr.totalPages);
      pageInfo.style.textAlign = 'center';

      var search = builder.addSearch('Go', '', function (page) {
        locations.changeLocation(locations.top.getHash(page));
      });
      search.input.type = 'number';
      search.input.value = attr.page;
      search.input.style.width = '4rem';

      if (+attr.page > 1) {
        var prev = builder.addButton('prev', function () {
          locations.changeLocation(locations.top.getHash(attr.page - 1));
        });
        prev.style.display = 'inline-block';
        search.element.insertBefore(prev, search.input);
      }

      if (+attr.page < +attr.totalPages) {
        var next = builder.addButton('next', function () {
          locations.changeLocation(locations.top.getHash(+attr.page + 1));
        }, search.element);
        next.style.display = 'inline-block';
      }
      builder.build();
    }, _onerror('topPage'));
  };

  var _getArtistTopAlbum = function (name) {
    http.doGet(api.getArtistTopAlbums(name), function () {
      var albums = JSON.parse(this.responseText).topalbums.album;
      var builder = elements.builder(frame);
      builder.addCaption('Top albums:');
      _addCardDivs(builder, albums, function (data) {
        locations.changeLocation(locations.album.getHash(data.artist.name, data.name));
      });
      builder.build();

    }, _onerror('getArtistTopAlbums'));
  };

  var _getRate = function () {
    return Math.random() * 5;
  };

  var artistInfoPage = function (params) {
    var name = locations.artist.parse(params).name;
    http.doGet(api.createArtistInfoPage(name), function () {
      var artist = JSON.parse(this.responseText).artist;
      _clearNode(frame);
      var builder = elements.builder(frame);
      var caption = builder.addCaption(artist.name);
      builder.addRate(_getRate(), rateImageSource, caption);
      builder.addTextedImage(artist.bio.summary, artist.image[2]['#text']);
      builder.build();
      _getArtistTopAlbum(name);

    }, _onerror('createArtistInfoPage'));
  };

  var _addAudioTracks = function (builder, tracks) {
    var mainDiv = builder.addElement();
    for (var i = 0; i < tracks.length; i++) {
      var source = tracks[i].streamable.value = '1' ? tracks[i].url : '';
      builder.addMedia(tracks[i]['@attr'].rank + '. ' + tracks[i].name, source, mainDiv);
    }
  };

  var albumPage = function (params) {
    var artist = locations.album.parse(params).artist;
    var album = locations.album.parse(params).album;
    http.doGet(api.getInfoAlbum(artist, album), function () {
      var album = JSON.parse(this.responseText).album;
      _clearNode(frame);
      var builder = elements.builder(frame);
      var caption = builder.addCaption(album.name);
      builder.addRate(_getRate(), rateImageSource, caption);
      var tags = album.tags.tag;
      var tagsText = '';
      for (var i = 0; i < tags.length; i++) {
        tagsText += tags[i].name + ', ';
      }
      if (tagsText.length > 2) {
        tagsText = tagsText.substring(0, tagsText.length - 2);
      }
      var year = album.wiki ? album.wiki.published : '';
      var text = album.artist + '<br/><br/>' + year + '<br/><br/>' + tagsText;
      builder.addTextedImage(text, album.image[2]['#text']);
      builder.addCaption('Tracks:');
      _addAudioTracks(builder, album.tracks.track);
      builder.build();
    }, _onerror('createArtistInfoPage'));
  };

  return {
    createTopPage: topPage,
    createArtistInfoPage: artistInfoPage,
    createAlbumPage: albumPage
  }
})();
