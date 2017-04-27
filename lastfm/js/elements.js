var elements = (function () {

  var builder = function (parent) {
    if (!parent || !(parent instanceof Node)) return;
    var fragment = document.createDocumentFragment();

    var append = function () {
      parent.appendChild(fragment);
    };


    var _element = function (type, value) {
      var element = document.createElement(!type ? 'div' : type);
      element.className = 'element';
      if (value) {
        element.value = value;
      }
      fragment.appendChild(element);
      return element;
    };

    return {
      /**
       * Add Node element to fragment
       * @param type type of Node
       * @param value value of Node
       * @return {Element}
       * @private
       */
      addElement: _element,
      /**
       * Add fragment to parent Node
       */
      build: append
    }
  };

  return {
    /**
     * Create fragment for Nodes adding
     * @param parent parent Node
     * @return {{addElement: _element, build: append}}
     */
    builder: builder
  };
})();
