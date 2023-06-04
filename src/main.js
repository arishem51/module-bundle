
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
          return require(mapping[name]);
        }

        const module = { exports : {} };

        fn(localRequire, module, module.exports);

        return module.exports;
      }

      require(0);
    })({0: [
        function (require,module,exports){
            "use strict";

var _Header = require("./component/Header.js");

var _Header2 = _interopRequireDefault(_Header);

var _Home = require("./component/Home.js");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.getElementById("root");

var Components = [_Header2.default, _Home2.default];

Components.forEach(function (child) {
  container.appendChild(child());
});
        },
        {"./component/Header.js":1,"./component/Home.js":2}
    ]1: [
        function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _index = require("../module/index.js");

function Header() {
  var id = (0, _index.createId)();
  var div = document.createElement("div");
  var number = 1;
  div.innerHTML = "Header: " + (0, _index.add)(number, id);
  return div;
}
        },
        {"../module/index.js":3}
    ]2: [
        function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _index = require("../module/index.js");

function Home() {
  var id = (0, _index.createId)();
  var number = 2;
  var div = document.createElement("div");
  div.innerText = "Home: " + (0, _index.multiply)(id, number);
  return div;
}
        },
        {"../module/index.js":4}
    ]3: [
        function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = exports.add = function add(x, y) {
  return x + y;
};
var multiply = exports.multiply = function multiply(x, y) {
  return x * y;
};
var id = 0;
var createId = exports.createId = function createId() {
  return Math.random() * 10 + id;
};
        },
        {}
    ]4: [
        function (require,module,exports){
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var add = exports.add = function add(x, y) {
  return x + y;
};
var multiply = exports.multiply = function multiply(x, y) {
  return x * y;
};
var id = 0;
var createId = exports.createId = function createId() {
  return Math.random() * 10 + id;
};
        },
        {}
    ]})
  