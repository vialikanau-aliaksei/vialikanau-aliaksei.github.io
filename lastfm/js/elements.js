var elements = (function () {

  var builder = function (parent) {
    if (!parent || !(parent instanceof Node)) return;
    var fragment = document.createDocumentFragment();

    /**
     * Append current fragment to parent Node
     * @private
     */
    var build = function () {
      parent.appendChild(fragment);
    };

    /**
     * Add HTMLElement
     * @param tagName tag name of addElement
     * @param parent parent Node of addElement or current fragment if null
     * @return {Element}
     * @private
     */
    var addElement = function (tagName, parent) {
      var element = document.createElement(!tagName ? 'div' : tagName);
      element.className = 'addElement';
      var parent = parent ? parent : fragment;
      parent.appendChild(element);
      return element;
    };

    /**
     * Add element displaying rate
     * @param rate rate value
     * @param imageSource image source for rate items
     * @param parent parent Node of addElement or current fragment if null
     * @return {{element: Element, items: Array}}
     */
    var addRate = function (rate, imageSource, parent) {
      var element = addElement('div', parent);
      element.className = 'rate';
      var items = [];
      for (var i = 0; i < 5; i++) {
        items[i] = document.createElement('img');
        items[i].src = imageSource;
        items[i].style.opacity = rate > i ? '1' : '0.2';
        element.appendChild(items[i]);
      }
      return {
        element: element,
        items: items
      }
    };

    /**
     * Add addElement with image and text at bottom
     * @param text text of addElement
     * @param imageSource source of image
     * @param onclick callback for 'click' event
     * @param parent parent Node of addElement or current fragment if null
     * @return {{addElement: Element, image: Element, text: Element}}
     * @private
     */
    var addCard = function (text, imageSource, onclick, parent) {
      var element = addElement('div', parent);
      element.className = 'card';
      var imageNode = document.createElement('img');
      imageNode.className = 'cardImage';
      imageNode.src = imageSource;
      imageNode.addEventListener('click', onclick);
      element.appendChild(imageNode);
      var textNode = document.createElement('parentNode');
      textNode.className = 'cardText';
      textNode.innerHTML = text;
      textNode.addEventListener('click', onclick);
      element.appendChild(textNode);
      return {
        element: element,
        image: imageNode,
        text: textNode
      };
    };

    /**
     * Add image wrapped by text
     * @param text text to of addElement
     * @param imageSource source of image
     * @param parent parent Node of addElement or current fragment if null
     * @return {{addElement: Element, image: Element}}
     * @private
     */
    var addTextedImage = function (text, imageSource, parent) {
      var element = addElement('div', parent);
      element.className = 'textedImage';
      var image = document.createElement('img');
      image.src = imageSource;
      element.appendChild(image);
      element.innerHTML = element.innerHTML + text;
      return {
        element: element,
        image: image
      };
    };


    /**
     * Add addCaption
     * @param text text of addCaption
     * @param parent parent Node or current fragment if null
     * @return {Element}
     * @private
     */
    var addCaption = function (text, parent) {
      var element = addElement('div', parent);
      element.className = 'caption';
      element.innerHTML = text;
      return element;
    };

    /**
     * Add addElement for playing media
     * @param text name of media
     * @param source source of media
     * @param parent parent Node of addElement or current fragment if null
     * @return {Element}
     * @private
     */
    var addMedia = function (text, source, parent) {
      var element = addElement('div', parent);
      element.innerHTML = text;
      element.className = 'track';
      if (source) {
        if (source.toLowerCase().search('(youtube.com){1}') >= 0) {
          var video = document.createElement('iframe');
          video.className = 'video';
          video.src = source;
          element.appendChild(video);
        } else {
          var link = document.createElement('a');
          link.text = "  link";
          link.href = source;
          element.appendChild(link);
        }
      }
      return element;
    };

    /**
     * Add search addElement with input and button
     * @param buttonText text for button
     * @param placeholder tip for input
     * @param onclick callback for 'click' event
     * @param parent parent parent Node of addElement or current fragment if null
     * @return {{addElement: Element, input: Element, button: Element}}
     * @private
     */
    var addSearch = function (buttonText, placeholder, onclick, parent) {
      var element = addElement('div', parent);
      element.className = 'search';
      var input = document.createElement('input');
      input.type = 'text';
      input.placeholder = placeholder;
      var button = document.createElement('button');
      button.innerHTML = buttonText;
      button.type = 'button';
      button.addEventListener('click', function () {
        onclick(input.value);
      });
      element.appendChild(input);
      element.appendChild(button);
      return {
        element: element,
        input: input,
        button: button
      };
    };

    /**
     * Add button
     * @param buttonText text on button
     * @param onclick callback for 'click' event
     * @param parent parent Node or current fragment if null
     * @return {Element}
     * @private
     */
    var addButton = function (buttonText, onclick, parent) {
      var element = document.createElement('button');
      element.innerHTML = buttonText;
      element.addEventListener('click', onclick);
      var parent = parent ? parent : fragment;
      parent.appendChild(element);
      return element;
    };

    return {
      addElement: addElement,

      addCaption: addCaption,

      addTextedImage: addTextedImage,

      addMedia: addMedia,

      addCard: addCard,

      addSearch: addSearch,

      addButton: addButton,

      addRate: addRate,

      build: build
    }
  };

  return {
    /**
     * Create fragment for Elements adding
     * @param parent parent Node
     * @return {{addInlineElement: _element, build: append}}
     */
    builder: builder
  };
})();
