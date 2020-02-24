function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

const fetchDataPromises = _async(function (url) {
  return _await(fetch(url), function (response) {
    return _await(response.json(), function (json) {
      debugger;
      return json;
    });
  });
});

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

fetchDataPromises('/foo.json').then(data => {
  console.log(data);
}, error => {
  console.error(error);
});

//# sourceMappingURL=promises.js.map