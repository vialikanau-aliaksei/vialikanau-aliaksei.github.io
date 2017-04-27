var frame = document.getElementById('frame');
var builder = elements.builder(frame);
var boxes = [];
for (var i = 0; i < 5; i++) {
  boxes.push(builder.addElement("textarea"));
}
builder.build();

var onload = (function (name) {
  return function () {
    var value = name + "> " + this.responseText;
    boxes.pop().innerHTML = value;
    console.log(value);
  }
});

var onerror = (function (name) {
  return function () {
    boxes.pop().innerHTML = name + " error> " + this.statusText;
  }
});

http.doGet(api.topArtist, onload('topArtist'), onerror('topArtist'));

http.doGet(api.searchArtist('Dire+Straits'), onload('searchArtist'), onerror('searchArtist'));

http.doGet(api.getArtistInfo('Dire+Straits'), onload('getArtistInfo'), onerror('getArtistInfo'));

http.doGet(api.getArtistTopAlbums('Dire+Straits'), onload('getArtistTopAlbums'), onerror('getArtistTopAlbums'));

http.doGet(api.getInfoAlbum('Dire+Straits', 'Dire+Straits'), onload('getInfoAlbum'), onerror('getInfoAlbum'));
