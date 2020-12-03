var http = (function () {
  /**
   * Create and send async GET request to given url
   * @param url of request
   * @param onload callback for onload event
   * @param onerror callback for onerror event
   * @param onabort callback for onabort event
   * @return XMLHttpRequest
   */
  var doGet = function (url, onload, onerror, onabort) {
    if (_isEmpty(url)) return;
    var request = getRequest("GET", url, onload, onerror, onabort);
    request.send();
    return request;
  };

  /**
   * Create and send async POST request to given url
   * @param url of request
   * @param data for sending in request
   * @param onload callback for onload event
   * @param onerror callback for onerror event
   * @param onabort callback for onabort event
   * @return XMLHttpRequest
   */
  var doPost = function (url, data, onload, onerror, onabort) {
    if (_isEmpty(url, data)) return;
    var request = getRequest("POST", url, onload, onerror, onabort);
    request.send(data);
    return request;
  };

  /**
   * Create request of given type to url.
   * @param method
   * @param url of request
   * @param onload callback for onload event
   * @param onerror callback for onerror event
   * @param onabort callback for onabort event
   * @return XMLHttpRequest
   */
  var getRequest = function (method, url, onload, onerror, onabort) {
    var request = _getXMLHttpRequest();
    if (_isFunction(onload)) {
      request.onload = onload;
    }
    if (_isFunction(onerror)) {
      request.onerror = onerror;
    }
    if (_isFunction(onabort)) {
      request.onabort = onabort;
    }
    request.open(method, url, true);
    return request;
  };

  var _isEmpty = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (!arguments[i]) {
        return true;
      }
    }
    return false;
  };

  var _isFunction = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (!arguments[i] || typeof arguments[i] !== "function") {
        return false;
      }
    }
    return true;
  };

  function _getXMLHttpRequest() {
    var xhr;
    try {
      xhr = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (E) {
        xhr = false;
      }
    }
    if (!xhr && typeof XMLHttpRequest != 'undefined') {
      xhr = new XMLHttpRequest();
    }
    return xhr;
  }

  return {
    doGet: doGet,
    doPost: doPost,
    getRequest: getRequest
  }
})();
