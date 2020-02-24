function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function fetchDataRegenerator(_x) {
  return _fetchDataRegenerator.apply(this, arguments);
}

function _fetchDataRegenerator() {
  _fetchDataRegenerator = _asyncToGenerator(function* (url) {
    const response = yield fetch(url);
    const json = yield response.json();
    debugger;
    return json;
  });
  return _fetchDataRegenerator.apply(this, arguments);
}

fetchDataRegenerator('/foo.json').then(data => {
  console.log(data);
}, error => {
  console.error(error);
});

//# sourceMappingURL=regenerator.js.map