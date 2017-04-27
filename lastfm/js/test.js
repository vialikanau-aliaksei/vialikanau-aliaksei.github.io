var assert = chai.assert;

describe("getRequest.doGet", function () {
  it("(getRequest.doGet(api.searchArtist('Cher'), function(){}) exec onload", function (done) {
    http.doGet(api.searchArtist('Cher'), function () {
      done();
    }, function () {
      done(new Error("onerror reached"));
    });
  });

  it("(getRequest.doGet('http://www.msftncsi.com/aaa.txt', function(){}) exec onerror", function (done) {
    http.doGet("http://www.msftncsi.com/aaa.txt", function () {
      done(new Error("onload reached"))
    }, function () {
      done();
    });
  });

  it("http.doGet(api.topArtist, function(){}) exec onload", function (done) {
    http.doGet(api.topArtist, function () {
      done()
    }, function () {
      done(new Error("onerror reached"));
    });
  });

  it("http.doGet(api.searchArtist('Dire+Straits'), function(){}) exec onload", function (done) {
    http.doGet(api.searchArtist('Dire+Straits'), function () {
      done()
    }, function () {
      done(new Error("onerror reached"));
    });
  });

  it("http.doGet(api.getArtistInfo('Dire+Straits'), function(){}) exec onload", function (done) {
    http.doGet(api.getArtistInfo('Dire+Straits'), function () {
      done()
    }, function () {
      done(new Error("onerror reached"));
    });
  });

  it("http.doGet(api.getArtistTopAlbums('Dire+Straits'), function(){}) exec onload", function (done) {
    http.doGet(api.getArtistTopAlbums('Dire+Straits'), function () {
      done()
    }, function () {
      done(new Error("onerror reached"));
    });
  });

  it("http.doGet(api.getInfoAlbum('Dire+Straits', 'Dire+Straits'), function(){}) exec onload", function (done) {
    http.doGet(api.getInfoAlbum('Dire+Straits', 'Dire+Straits'), function () {
      done()
    }, function () {
      done(new Error("onerror reached"));
    });
  });

});
