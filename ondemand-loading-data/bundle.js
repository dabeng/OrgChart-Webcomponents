/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _orgchartWebcomponentsMin = __webpack_require__(1);
	
	var _orgchartWebcomponentsMin2 = _interopRequireDefault(_orgchartWebcomponentsMin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener('DOMContentLoaded', function () {
	
	  Mock.mock('/orgchart/children/3', { 'children': [{ 'id': '4', 'name': 'Pang Pang', 'title': 'engineer', 'relationship': '110' }, { 'id': '5', 'name': 'Xiang Xiang', 'title': 'UE engineer', 'relationship': '110' }] });
	
	  Mock.mock('/orgchart/parent/1', { 'id': '6', 'name': 'Lao Lao', 'title': 'general manager', 'relationship': '001' });
	
	  Mock.mock('/orgchart/siblings/1', { 'siblings': [{ 'id': '7', 'name': 'Bo Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '8', 'name': 'Yu Jie', 'title': 'department engineer', 'relationship': '110' }, { 'id': '9', 'name': 'Yu Li', 'title': 'department engineer', 'relationship': '110' }, { 'id': '10', 'name': 'Hong Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '11', 'name': 'Yu Wei', 'title': 'department engineer', 'relationship': '110' }, { 'id': '12', 'name': 'Chun Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '13', 'name': 'Yu Tie', 'title': 'department engineer', 'relationship': '110' }] });
	
	  Mock.mock('/orgchart/families/1', {
	    'id': '6',
	    'name': 'Lao Lao',
	    'title': 'general manager',
	    'relationship': '001',
	    'children': [{ 'id': '7', 'name': 'Bo Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '8', 'name': 'Yu Jie', 'title': 'department engineer', 'relationship': '110' }, { 'id': '9', 'name': 'Yu Li', 'title': 'department engineer', 'relationship': '110' }, { 'id': '10', 'name': 'Hong Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '11', 'name': 'Yu Wei', 'title': 'department engineer', 'relationship': '110' }, { 'id': '12', 'name': 'Chun Miao', 'title': 'department engineer', 'relationship': '110' }, { 'id': '13', 'name': 'Yu Tie', 'title': 'department engineer', 'relationship': '110' }]
	  });
	
	  Mock.setup({ timeout: 1000 });
	
	  var datascource = {
	    'id': '1',
	    'name': 'Su Miao',
	    'title': 'department manager',
	    'relationship': '111',
	    'children': [{ 'id': '2', 'name': 'Tie Hua', 'title': 'senior engineer', 'relationship': '110' }, { 'id': '3', 'name': 'Hei Hei', 'title': 'senior engineer', 'relationship': '111' }]
	  },
	      ajaxURLs = {
	    'children': '/orgchart/children/',
	    'parent': '/orgchart/parent/',
	    'siblings': function siblings(nodeData) {
	      return '/orgchart/siblings/' + nodeData.id;
	    },
	    'families': function families(nodeData) {
	      return '/orgchart/families/' + nodeData.id;
	    }
	  },
	      orgchart = new _orgchartWebcomponentsMin2.default({
	    'data': datascource,
	    'ajaxURL': ajaxURLs,
	    'nodeContent': 'title',
	    'nodeId': 'id'
	  });
	
	  document.querySelector('#chart-container').appendChild(orgchart);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _toConsumableArray(e) {
	  if (Array.isArray(e)) {
	    for (var t = 0, n = Array(e.length); t < e.length; t++) {
	      n[t] = e[t];
	    }return n;
	  }return Array.from(e);
	}function _classCallCheck(e, t) {
	  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
	}function _possibleConstructorReturn(e, t) {
	  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != (typeof t === "undefined" ? "undefined" : _typeof2(t)) && "function" != typeof t ? e : t;
	}function _inherits(e, t) {
	  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (typeof t === "undefined" ? "undefined" : _typeof2(t)));e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}Object.defineProperty(exports, "__esModule", { value: !0 });var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
	  return typeof e === "undefined" ? "undefined" : _typeof2(e);
	} : function (e) {
	  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof2(e);
	},
	    _createClass = function () {
	  function e(e, t) {
	    for (var n = 0; n < t.length; n++) {
	      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
	    }
	  }return function (t, n, i) {
	    return n && e(t.prototype, n), i && e(t, i), t;
	  };
	}(),
	    OrgChart = function (e) {
	  function t(e) {
	    _classCallCheck(this, t);var n = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));Promise.prototype.finally = function (e) {
	      var t = this.constructor;return this.then(function (n) {
	        return t.resolve(e()).then(function () {
	          return n;
	        });
	      }, function (n) {
	        return t.resolve(e()).then(function () {
	          throw n;
	        });
	      });
	    };var i = n,
	        r = { nodeTitle: "name", nodeId: "id", toggleSiblingsResp: !1, depth: 999, chartClass: "", parentNodeSymbol: "fa-users", draggable: !1, direction: "t2b", pan: !1, zoom: !1 },
	        s = Object.assign(r, e),
	        o = s.data;document.createElement("div");if (n.options = s, delete n.options.data, n.dataset.options = JSON.stringify(s), n.setAttribute("class", "orgchart" + ("" !== s.chartClass ? " " + s.chartClass : "") + ("t2b" !== s.direction ? " " + s.direction : "")), "object" === ("undefined" == typeof o ? "undefined" : _typeof(o))) n.buildHierarchy(n, s.ajaxURL ? o : n._attachRel(o, "00"), 0);else if ("string" == typeof o && o.startsWith("#")) n.buildHierarchy(n, n._buildJsonDS(document.querySelector(o).children[0]), 0);else {
	      var a = document.createElement("i");a.setAttribute("class", "fa fa-circle-o-notch fa-spin spinner"), n.appendChild(a), n._getJSON(o).then(function (e) {
	        i.buildHierarchy(i, s.ajaxURL ? e : i._attachRel(e, "00"), 0);
	      }).catch(function (e) {
	        console.error("failed to fetch datasource for orgchart", e);
	      }).finally(function () {
	        var e = i.querySelector(".spinner");e.parentNode.removeChild(e);
	      });
	    }if (n.addEventListener("click", n._clickChart.bind(n)), s.pan && s.chartContainer) {
	      var l = document.querySelector(s.chartContainer);l.style.overflow = "hidden", n.addEventListener("mousedown", n._onPanStart.bind(n)), n.addEventListener("touchstart", n._onPanStart.bind(n)), document.body.addEventListener("mouseup", n._onPanEnd.bind(n)), document.body.addEventListener("touchend", n._onPanEnd.bind(n));
	    }if (s.zoom && s.chartContainer) {
	      var d = document.querySelector(s.chartContainer);d.addEventListener("wheel", n._onWheeling.bind(n)), d.addEventListener("touchstart", n._onTouchStart.bind(n)), document.body.addEventListener("touchmove", n._onTouchMove.bind(n)), document.body.addEventListener("touchend", n._onTouchEnd.bind(n));
	    }return n;
	  }return _inherits(t, e), _createClass(t, [{ key: "connectedCallback", value: function value() {} }, { key: "disconnectedCallback", value: function value() {} }, { key: "attributeChangedCallback", value: function value(e, t, n) {} }, { key: "_closest", value: function value(e, t) {
	      return e && (t(e) && e !== this ? e : this._closest(e.parentNode, t));
	    } }, { key: "_siblings", value: function value(e, t) {
	      return Array.from(e.parentNode.children).filter(function (n) {
	        return n !== e && (!t || e.matches(t));
	      });
	    } }, { key: "_prevAll", value: function value(e, t) {
	      for (var n = [], i = e.previousElementSibling; i;) {
	        t && !i.matches(t) || n.push(i), i = i.previousElementSibling;
	      }return n;
	    } }, { key: "_nextAll", value: function value(e, t) {
	      for (var n = [], i = e.nextElementSibling; i;) {
	        t && !i.matches(t) || n.push(i), i = i.nextElementSibling;
	      }return n;
	    } }, { key: "_isVisible", value: function value(e) {
	      return null !== e.offsetParent;
	    } }, { key: "_addClass", value: function value(e, t) {
	      e.forEach(function (e) {
	        t.indexOf(" ") > 0 ? t.split(" ").forEach(function (t) {
	          return e.classList.add(t);
	        }) : e.classList.add(t);
	      });
	    } }, { key: "_removeClass", value: function value(e, t) {
	      e.forEach(function (e) {
	        t.indexOf(" ") > 0 ? t.split(" ").forEach(function (t) {
	          return e.classList.remove(t);
	        }) : e.classList.remove(t);
	      });
	    } }, { key: "_css", value: function value(e, t, n) {
	      e.forEach(function (e) {
	        e.style[t] = n;
	      });
	    } }, { key: "_removeAttr", value: function value(e, t) {
	      e.forEach(function (e) {
	        e.removeAttribute(t);
	      });
	    } }, { key: "_one", value: function value(e, t, n, i) {
	      var r = function r(s) {
	        try {
	          n.call(i, s);
	        } finally {
	          e.removeEventListener(t, r);
	        }
	      };e.addEventListener(t, r);
	    } }, { key: "_getDescElements", value: function value(e, t) {
	      var n = [];return e.forEach(function (e) {
	        return n.push.apply(n, _toConsumableArray(e.querySelectorAll(t)));
	      }), n;
	    } }, { key: "_getJSON", value: function value(e) {
	      return new Promise(function (t, n) {
	        function i() {
	          4 === this.readyState && (200 === this.status ? t(JSON.parse(this.response)) : n(new Error(this.statusText)));
	        }var r = new XMLHttpRequest();r.open("GET", e), r.onreadystatechange = i, r.responseType = "json", r.setRequestHeader("Content-Type", "application/json"), r.send();
	      });
	    } }, { key: "_buildJsonDS", value: function value(e) {
	      var t = this,
	          n = { name: e.firstChild.textContent.trim(), relationship: ("LI" === e.parentNode.parentNode.nodeName ? "1" : "0") + (e.parentNode.children.length > 1 ? 1 : 0) + (e.children.length ? 1 : 0) };return e.id && (n.id = e.id), e.querySelector("ul") && Array.from(e.querySelector("ul").children).forEach(function (e) {
	        n.children || (n.children = []), n.children.push(t._buildJsonDS(e));
	      }), n;
	    } }, { key: "_attachRel", value: function value(e, t) {
	      if (e.relationship = t + (e.children && e.children.length > 0 ? 1 : 0), e.children) {
	        var n = !0,
	            i = !1,
	            r = void 0;try {
	          for (var s, o = e.children[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
	            var a = s.value;this._attachRel(a, "1" + (e.children.length > 1 ? 1 : 0));
	          }
	        } catch (e) {
	          i = !0, r = e;
	        } finally {
	          try {
	            !n && o.return && o.return();
	          } finally {
	            if (i) throw r;
	          }
	        }
	      }return e;
	    } }, { key: "_repaint", value: function value(e) {
	      e && (e.style.offsetWidth = e.offsetWidth);
	    } }, { key: "_isInAction", value: function value(e) {
	      return e.querySelector(":scope > .edge").className.indexOf("fa-") > -1;
	    } }, { key: "_getNodeState", value: function value(e, t) {
	      var n = this,
	          i = void 0,
	          r = { exist: !1, visible: !1 };return "parent" === t ? (i = this._closest(e, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }), i && (r.exist = !0), r.exist && this._isVisible(i.parentNode.children[0]) && (r.visible = !0)) : "children" === t ? (i = this._closest(e, function (e) {
	        return "TR" === e.nodeName;
	      }).nextElementSibling, i && (r.exist = !0), r.exist && this._isVisible(i) && (r.visible = !0)) : "siblings" === t && (i = this._siblings(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode), i.length && (r.exist = !0), r.exist && i.some(function (e) {
	        return n._isVisible(e);
	      }) && (r.visible = !0)), r;
	    } }, { key: "getRelatedNodes", value: function value(e, t) {
	      return "parent" === t ? this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }).parentNode.children[0].querySelector(".node") : "children" === t ? Array.from(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).lastChild.children).map(function (e) {
	        return e.querySelector(".node");
	      }) : "siblings" === t ? this._siblings(this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode).map(function (e) {
	        return e.querySelector(".node");
	      }) : [];
	    } }, { key: "_switchHorizontalArrow", value: function value(e) {
	      var t = this.options,
	          n = e.querySelector(".leftEdge"),
	          i = e.querySelector(".rightEdge"),
	          r = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode;if (t.toggleSiblingsResp && ("undefined" == typeof t.ajaxURL || this._closest(e, function (e) {
	        return e.classList.contains(".nodes");
	      }).dataset.siblingsLoaded)) {
	        var s = r.previousElementSibling,
	            o = r.nextElementSibling;s && (s.classList.contains("hidden") ? (n.classList.add("fa-chevron-left"), n.classList.remove("fa-chevron-right")) : (n.classList.add("fa-chevron-right"), n.classList.remove("fa-chevron-left"))), o && (o.classList.contains("hidden") ? (i.classList.add("fa-chevron-right"), i.classList.remove("fa-chevron-left")) : (i.classList.add("fa-chevron-left"), i.classList.remove("fa-chevron-right")));
	      } else {
	        var a = this._siblings(r),
	            l = !!a.length && !a.some(function (e) {
	          return e.classList.contains("hidden");
	        });n.classList.toggle("fa-chevron-right", l), n.classList.toggle("fa-chevron-left", !l), i.classList.toggle("fa-chevron-left", l), i.classList.toggle("fa-chevron-right", !l);
	      }
	    } }, { key: "_hoverNode", value: function value(e) {
	      var t = e.target,
	          n = !1,
	          i = t.querySelector(":scope > .topEdge"),
	          r = t.querySelector(":scope > .bottomEdge"),
	          s = t.querySelector(":scope > .leftEdge");"mouseenter" === e.type ? (i && (n = this._getNodeState(t, "parent").visible, i.classList.toggle("fa-chevron-up", !n), i.classList.toggle("fa-chevron-down", n)), r && (n = this._getNodeState(t, "children").visible, r.classList.toggle("fa-chevron-down", !n), r.classList.toggle("fa-chevron-up", n)), s && this._switchHorizontalArrow(t)) : Array.from(t.querySelectorAll(":scope > .edge")).forEach(function (e) {
	        e.classList.remove("fa-chevron-up", "fa-chevron-down", "fa-chevron-right", "fa-chevron-left");
	      });
	    } }, { key: "_clickNode", value: function value(e) {
	      var t = e.currentTarget,
	          n = this.querySelector(".focused");n && n.classList.remove("focused"), t.classList.add("focused");
	    } }, { key: "_buildParentNode", value: function value(e, t, n) {
	      var i = this,
	          r = document.createElement("table");t.relationship = "001", this._createNode(t, 0).then(function (e) {
	        e.classList.remove("slide-up"), e.classList.add("slide-down");var t = document.createElement("tr"),
	            s = document.createElement("tr"),
	            o = document.createElement("tr"),
	            a = document.createElement("tr");t.setAttribute("class", "hidden"), t.innerHTML = '<td colspan="2"></td>', r.appendChild(t), s.setAttribute("class", "lines hidden"), s.innerHTML = '<td colspan="2"><div class="downLine"></div></td>', r.appendChild(s), o.setAttribute("class", "lines hidden"), o.innerHTML = '<td class="rightLine">&nbsp;</td><td class="leftLine">&nbsp;</td>', r.appendChild(o), a.setAttribute("class", "nodes"), a.innerHTML = '<td colspan="2"></td>', r.appendChild(a), r.querySelector("td").appendChild(e), i.insertBefore(r, i.children[0]), r.children[3].children[0].appendChild(i.lastChild), n();
	      }).catch(function (e) {
	        console.error("Failed to create parent node", e);
	      });
	    } }, { key: "_switchVerticalArrow", value: function value(e) {
	      e.classList.toggle("fa-chevron-up"), e.classList.toggle("fa-chevron-down");
	    } }, { key: "showParent", value: function value(e) {
	      var t = this._prevAll(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }));this._removeClass(t, "hidden"), this._addClass(Array(t[0].children).slice(1, -1), "hidden");var n = t[2].querySelector(".node");this._one(n, "transitionend", function () {
	        n.classList.remove("slide"), this._isInAction(e) && this._switchVerticalArrow(e.querySelector(":scope > .topEdge"));
	      }, this), this._repaint(n), n.classList.add("slide"), n.classList.remove("slide-down");
	    } }, { key: "showSiblings", value: function value(e, t) {
	      var n = this,
	          i = [],
	          r = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode;i = t ? "left" === t ? this._prevAll(r) : this._nextAll(r) : this._siblings(r), this._removeClass(i, "hidden");var s = this._prevAll(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }));if (r = Array.from(s[0].querySelectorAll(":scope > .hidden")), t ? this._removeClass(r.slice(0, 2 * i.length), "hidden") : this._removeClass(r, "hidden"), !this._getNodeState(e, "parent").visible) {
	        this._removeClass(s, "hidden");var o = s[2].querySelector(".node");this._one(o, "transitionend", function (e) {
	          e.target.classList.remove("slide");
	        }, this), this._repaint(o), o.classList.add("slide"), o.classList.remove("slide-down");
	      }i.forEach(function (e) {
	        Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	          n._isVisible(e) && (e.classList.add("slide"), e.classList.remove("slide-left", "slide-right"));
	        });
	      }), this._one(i[0].querySelector(".slide"), "transitionend", function () {
	        var t = this;i.forEach(function (e) {
	          t._removeClass(Array.from(e.querySelectorAll(".slide")), "slide");
	        }), this._isInAction(e) && (this._switchHorizontalArrow(e), e.querySelector(".topEdge").classList.remove("fa-chevron-up"), e.querySelector(".topEdge").classList.add("fa-chevron-down"));
	      }, this);
	    } }, { key: "hideSiblings", value: function value(e, t) {
	      var n = this,
	          i = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode,
	          r = this._siblings(i);if (r.forEach(function (e) {
	        e.querySelector(".spinner") && (n.dataset.inAjax = !1);
	      }), !t || t && "left" === t) {
	        var s = this._prevAll(i);s.forEach(function (e) {
	          Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	            n._isVisible(e) && e.classList.add("slide", "slide-right");
	          });
	        });
	      }if (!t || t && "left" !== t) {
	        var o = this._nextAll(i);o.forEach(function (e) {
	          Array.from(e.querySelectorAll(".node")).forEach(function (e) {
	            n._isVisible(e) && e.classList.add("slide", "slide-left");
	          });
	        });
	      }var a = [];this._siblings(i).forEach(function (e) {
	        Array.prototype.push.apply(a, Array.from(e.querySelectorAll(".slide")));
	      });var l = [],
	          d = !0,
	          c = !1,
	          u = void 0;try {
	        for (var h, f = a[Symbol.iterator](); !(d = (h = f.next()).done); d = !0) {
	          var p = h.value,
	              v = this._closest(p, function (e) {
	            return e.classList.contains("nodes");
	          }).previousElementSibling;l.push(v), l.push(v.previousElementSibling);
	        }
	      } catch (e) {
	        c = !0, u = e;
	      } finally {
	        try {
	          !d && f.return && f.return();
	        } finally {
	          if (c) throw u;
	        }
	      }l = [].concat(_toConsumableArray(new Set(l))), l.forEach(function (e) {
	        e.style.visibility = "hidden";
	      }), this._one(a[0], "transitionend", function (n) {
	        var r = this;l.forEach(function (e) {
	          e.removeAttribute("style");
	        });var s = [];s = t ? "left" === t ? this._prevAll(i, ":not(.hidden)") : this._nextAll(i, ":not(.hidden)") : this._siblings(i);var o = Array.from(this._closest(i, function (e) {
	          return e.classList.contains("nodes");
	        }).previousElementSibling.querySelectorAll(":scope > :not(.hidden)")),
	            d = o.slice(1, t ? 2 * s.length + 1 : -1);this._addClass(d, "hidden"), this._removeClass(a, "slide"), s.forEach(function (e) {
	          Array.from(e.querySelectorAll(".node")).slice(1).forEach(function (e) {
	            r._isVisible(e) && (e.classList.remove("slide-left", "slide-right"), e.classList.add("slide-up"));
	          });
	        }), s.forEach(function (e) {
	          r._addClass(Array.from(e.querySelectorAll(".lines")), "hidden"), r._addClass(Array.from(e.querySelectorAll(".nodes")), "hidden"), r._addClass(Array.from(e.querySelectorAll(".verticalNodes")), "hidden");
	        }), this._addClass(s, "hidden"), this._isInAction(e) && this._switchHorizontalArrow(e);
	      }, this);
	    } }, { key: "hideParent", value: function value(e) {
	      var t = Array.from(this._closest(e, function (e) {
	        return e.classList.contains("nodes");
	      }).parentNode.children).slice(0, 3);t[0].querySelector(".spinner") && (this.dataset.inAjax = !1), this._getNodeState(e, "siblings").visible && this.hideSiblings(e);var n = t.slice(1);this._css(n, "visibility", "hidden");var i = t[0].querySelector(".node"),
	          r = this._getNodeState(i, "parent").visible;i && this._isVisible(i) && (i.classList.add("slide", "slide-down"), this._one(i, "transitionend", function () {
	        i.classList.remove("slide"), this._removeAttr(n, "style"), this._addClass(t, "hidden");
	      }, this)), i && r && this.hideParent(i);
	    } }, { key: "addParent", value: function value(e, t) {
	      var n = this;this._buildParentNode(e, t, function () {
	        if (!e.querySelector(":scope > .topEdge")) {
	          var t = document.createElement("i");t.setAttribute("class", "edge verticalEdge topEdge fa"), e.appendChild(t);
	        }n.showParent(e);
	      });
	    } }, { key: "_startLoading", value: function value(e, t) {
	      this.options;if ("undefined" != typeof this.dataset.inAjax && "true" === this.dataset.inAjax) return !1;e.classList.add("hidden");var n = document.createElement("i");return n.setAttribute("class", "fa fa-circle-o-notch fa-spin spinner"), t.appendChild(n), this._addClass(Array.from(t.querySelectorAll(":scope > *:not(.spinner)")), "hazy"), this.dataset.inAjax = !0, !0;
	    } }, { key: "_endLoading", value: function value(e, t) {
	      this.options;e.classList.remove("hidden"), t.querySelector(":scope > .spinner").remove(), this._removeClass(Array.from(t.querySelectorAll(":scope > .hazy")), "hazy"), this.dataset.inAjax = !1;
	    } }, { key: "_clickTopEdge", value: function value(e) {
	      e.stopPropagation();var t = this,
	          n = e.target,
	          i = n.parentNode,
	          r = this._getNodeState(i, "parent"),
	          s = this.options;if (r.exist) {
	        var o = this._closest(i, function (e) {
	          return e.classList.contains("nodes");
	        }),
	            a = o.parentNode.firstChild.querySelector(".node");if (a.classList.contains("slide")) return;r.visible ? (this.hideParent(i), this._one(a, "transitionend", function () {
	          this._isInAction(i) && (this._switchVerticalArrow(n), this._switchHorizontalArrow(i));
	        }, this)) : this.showParent(i);
	      } else {
	        var l = n.parentNode.id;this._startLoading(n, i) && this._getJSON("function" == typeof s.ajaxURL.parent ? s.ajaxURL.parent(i.dataset.source) : s.ajaxURL.parent + l).then(function (e) {
	          "true" === t.dataset.inAjax && Object.keys(e).length && t.addParent(i, e);
	        }).catch(function (e) {
	          console.error("Failed to get parent node data.", e);
	        }).finally(function () {
	          t._endLoading(n, i);
	        });
	      }
	    } }, { key: "hideChildren", value: function value(e) {
	      var t = this,
	          n = this._nextAll(e.parentNode.parentNode),
	          i = n[n.length - 1],
	          r = [];i.querySelector(".spinner") && (this.dataset.inAjax = !1);var s = Array.from(i.querySelectorAll(".node")).filter(function (e) {
	        return t._isVisible(e);
	      }),
	          o = i.classList.contains("verticalNodes");o || (s.forEach(function (e) {
	        Array.prototype.push.apply(r, t._prevAll(t._closest(e, function (e) {
	          return e.classList.contains("nodes");
	        }), ".lines"));
	      }), r = [].concat(_toConsumableArray(new Set(r))), this._css(r, "visibility", "hidden")), this._one(s[0], "transitionend", function (a) {
	        this._removeClass(s, "slide"), o ? t._addClass(n, "hidden") : (r.forEach(function (e) {
	          e.removeAttribute("style"), e.classList.add("hidden"), e.parentNode.lastChild.classList.add("hidden");
	        }), this._addClass(Array.from(i.querySelectorAll(".verticalNodes")), "hidden")), this._isInAction(e) && this._switchVerticalArrow(e.querySelector(".bottomEdge"));
	      }, this), this._addClass(s, "slide slide-up");
	    } }, { key: "showChildren", value: function value(e) {
	      var t = this,
	          n = this,
	          i = this._nextAll(e.parentNode.parentNode),
	          r = [];this._removeClass(i, "hidden"), i.some(function (e) {
	        return e.classList.contains("verticalNodes");
	      }) ? i.forEach(function (e) {
	        Array.prototype.push.apply(r, Array.from(e.querySelectorAll(".node")).filter(function (e) {
	          return n._isVisible(e);
	        }));
	      }) : Array.from(i[2].children).forEach(function (e) {
	        Array.prototype.push.apply(r, Array.from(e.querySelector("tr").querySelectorAll(".node")).filter(function (e) {
	          return n._isVisible(e);
	        }));
	      }), this._repaint(r[0]), this._one(r[0], "transitionend", function (n) {
	        t._removeClass(r, "slide"), t._isInAction(e) && t._switchVerticalArrow(e.querySelector(".bottomEdge"));
	      }, this), this._addClass(r, "slide"), this._removeClass(r, "slide-up");
	    } }, { key: "_buildChildNode", value: function value(e, t, n) {
	      var i = t.children || t.siblings;e.querySelector("td").setAttribute("colSpan", 2 * i.length), this.buildHierarchy(e, { children: i }, 0, n);
	    } }, { key: "addChildren", value: function value(e, t) {
	      var n = this,
	          i = this.options,
	          r = 0;this.dataset.inEdit = "addChildren", this._buildChildNode.call(this, this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }), t, function () {
	        if (++r === t.children.length) {
	          if (!e.querySelector(".bottomEdge")) {
	            var s = document.createElement("i");s.setAttribute("class", "edge verticalEdge bottomEdge fa"), e.appendChild(s);
	          }if (!e.querySelector(".symbol")) {
	            var o = document.createElement("i");o.setAttribute("class", "fa " + i.parentNodeSymbol + " symbol"), e.querySelector(":scope > .title").appendChild(o);
	          }n.showChildren(e), n.dataset.inEdit = "";
	        }
	      });
	    } }, { key: "_clickBottomEdge", value: function value(e) {
	      var t = this;e.stopPropagation();var n = this,
	          i = this.options,
	          r = e.target,
	          s = r.parentNode,
	          o = this._getNodeState(s, "children");if (o.exist) {
	        var a = this._closest(s, function (e) {
	          return "TR" === e.nodeName;
	        }).parentNode.lastChild;if (Array.from(a.querySelectorAll(".node")).some(function (e) {
	          return t._isVisible(e) && e.classList.contains("slide");
	        })) return;o.visible ? this.hideChildren(s) : this.showChildren(s);
	      } else {
	        var l = r.parentNode.id;this._startLoading(r, s) && this._getJSON("function" == typeof i.ajaxURL.children ? i.ajaxURL.children(s.dataset.source) : i.ajaxURL.children + l).then(function (e) {
	          "true" === n.dataset.inAjax && e.children.length && n.addChildren(s, e);
	        }).catch(function (e) {
	          console.error("Failed to get children nodes data", e);
	        }).finally(function () {
	          n._endLoading(r, s);
	        });
	      }
	    } }, { key: "_complementLine", value: function value(e, t, n) {
	      var i = e.parentNode.parentNode.children;i[0].children[0].setAttribute("colspan", 2 * t), i[1].children[0].setAttribute("colspan", 2 * t);for (var r = 0; r < n; r++) {
	        var s = document.createElement("td"),
	            o = document.createElement("td");s.setAttribute("class", "rightLine topLine"), s.innerHTML = "&nbsp;", i[2].insertBefore(s, i[2].children[1]), o.setAttribute("class", "leftLine topLine"), o.innerHTML = "&nbsp;", i[2].insertBefore(o, i[2].children[1]);
	      }
	    } }, { key: "_buildSiblingNode", value: function value(e, t, n) {
	      var i = this,
	          r = this,
	          s = t.siblings ? t.siblings.length : t.children.length,
	          o = "TD" === e.parentNode.nodeName ? this._closest(e, function (e) {
	        return "TR" === e.nodeName;
	      }).children.length : 1,
	          a = o + s,
	          l = a > 1 ? Math.floor(a / 2 - 1) : 0;"TD" === e.parentNode.nodeName ? !function () {
	        var d = i._prevAll(e.parentNode.parentNode);d[0].remove(), d[1].remove();var c = 0;r._buildChildNode.call(r, r._closest(e.parentNode, function (e) {
	          return "TABLE" === e.nodeName;
	        }), t, function () {
	          ++c === s && !function () {
	            var t = Array.from(r._closest(e.parentNode, function (e) {
	              return "TABLE" === e.nodeName;
	            }).lastChild.children);if (o > 1) {
	              var i = e.parentNode.parentNode;Array.from(i.children).forEach(function (e) {
	                t[0].parentNode.insertBefore(e, t[0]);
	              }), i.remove(), r._complementLine(t[0], a, o), r._addClass(t, "hidden"), t.forEach(function (e) {
	                r._addClass(e.querySelectorAll(".node"), "slide-left");
	              });
	            } else {
	              var s = e.parentNode.parentNode;t[l].parentNode.insertBefore(e.parentNode, t[l + 1]), s.remove(), r._complementLine(t[l], a, 1), r._addClass(t, "hidden"), r._addClass(r._getDescElements(t.slice(0, l + 1), ".node"), "slide-right"), r._addClass(r._getDescElements(t.slice(l + 1), ".node"), "slide-left");
	            }n();
	          }();
	        });
	      }() : !function () {
	        var s = 0;r.buildHierarchy.call(r, r, t, 0, function () {
	          if (++s === a) {
	            var t = e.nextElementSibling.children[3].children[l],
	                o = document.createElement("td");o.setAttribute("colspan", 2), o.appendChild(e), t.parentNode.insertBefore(o, t.nextElementSibling), r._complementLine(t, a, 1);var d = r._closest(e, function (e) {
	              return e.classList && e.classList.contains("nodes");
	            }).parentNode.children[0];d.classList.add("hidden"), r._addClass(Array.from(d.querySelectorAll(".node")), "slide-down");var c = i._siblings(e.parentNode);r._addClass(c, "hidden"), r._addClass(r._getDescElements(c.slice(0, l), ".node"), "slide-right"), r._addClass(r._getDescElements(c.slice(l), ".node"), "slide-left"), n();
	          }
	        });
	      }();
	    } }, { key: "addSiblings", value: function value(e, t) {
	      var n = this;this.dataset.inEdit = "addSiblings", this._buildSiblingNode.call(this, this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }), t, function () {
	        if (n._closest(e, function (e) {
	          return e.classList && e.classList.contains("nodes");
	        }).dataset.siblingsLoaded = !0, !e.querySelector(".leftEdge")) {
	          var t = document.createElement("i"),
	              i = document.createElement("i");t.setAttribute("class", "edge horizontalEdge rightEdge fa"), e.appendChild(t), i.setAttribute("class", "edge horizontalEdge leftEdge fa"), e.appendChild(i);
	        }n.showSiblings(e), n.dataset.inEdit = "";
	      });
	    } }, { key: "removeNodes", value: function value(e) {
	      var t = this._closest(e, function (e) {
	        return "TABLE" === e.nodeName;
	      }).parentNode,
	          n = this._siblings(t.parentNode);"TD" === t.nodeName ? this._getNodeState(e, "siblings").exist ? (n[2].querySelector(".topLine").nextElementSibling.remove(), n[2].querySelector(".topLine").remove(), n[0].children[0].setAttribute("colspan", n[2].children.length), n[1].children[0].setAttribute("colspan", n[2].children.length), t.remove()) : (n[0].children[0].removeAttribute("colspan"), n[0].querySelector(".bottomEdge").remove(), this._siblings(n[0]).forEach(function (e) {
	        return e.remove();
	      })) : Array.from(t.parentNode.children).forEach(function (e) {
	        return e.remove();
	      });
	    } }, { key: "_clickHorizontalEdge", value: function value(e) {
	      var t = this;e.stopPropagation();var n = this,
	          i = this.options,
	          r = e.target,
	          s = r.parentNode,
	          o = this._getNodeState(s, "siblings");if (o.exist) {
	        var a = this._closest(s, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode,
	            l = this._siblings(a);if (l.some(function (e) {
	          var n = e.querySelector(".node");return t._isVisible(n) && n.classList.contains("slide");
	        })) return;if (i.toggleSiblingsResp) {
	          var d = this._closest(s, function (e) {
	            return "TABLE" === e.nodeName;
	          }).parentNode.previousElementSibling,
	              c = this._closest(s, function (e) {
	            return "TABLE" === e.nodeName;
	          }).parentNode.nextElementSibling;r.classList.contains("leftEdge") ? d.classList.contains("hidden") ? this.showSiblings(s, "left") : this.hideSiblings(s, "left") : c.classList.contains("hidden") ? this.showSiblings(s, "right") : this.hideSiblings(s, "right");
	        } else o.visible ? this.hideSiblings(s) : this.showSiblings(s);
	      } else {
	        var u = r.parentNode.id,
	            h = this._getNodeState(s, "parent").exist ? "function" == typeof i.ajaxURL.siblings ? i.ajaxURL.siblings(JSON.parse(s.dataset.source)) : i.ajaxURL.siblings + u : "function" == typeof i.ajaxURL.families ? i.ajaxURL.families(JSON.parse(s.dataset.source)) : i.ajaxURL.families + u;this._startLoading(r, s) && this._getJSON(h).then(function (e) {
	          "true" === n.dataset.inAjax && (e.siblings || e.children) && n.addSiblings(s, e);
	        }).catch(function (e) {
	          console.error("Failed to get sibling nodes data", e);
	        }).finally(function () {
	          n._endLoading(r, s);
	        });
	      }
	    } }, { key: "_clickToggleButton", value: function value(e) {
	      var t = this,
	          n = e.target,
	          i = n.parentNode.nextElementSibling,
	          r = Array.from(i.querySelectorAll(".node")),
	          s = Array.from(i.children).map(function (e) {
	        return e.querySelector(".node");
	      });s.some(function (e) {
	        return e.classList.contains("slide");
	      }) || (n.classList.toggle("fa-plus-square"), n.classList.toggle("fa-minus-square"), r[0].classList.contains("slide-up") ? (i.classList.remove("hidden"), this._repaint(s[0]), this._addClass(s, "slide"), this._removeClass(s, "slide-up"), this._one(s[0], "transitionend", function () {
	        t._removeClass(s, "slide");
	      })) : (this._addClass(r, "slide slide-up"), this._one(r[0], "transitionend", function () {
	        t._removeClass(r, "slide"), r.forEach(function (e) {
	          var n = t._closest(e, function (e) {
	            return "UL" === e.nodeName;
	          });n.classList.add("hidden");
	        });
	      }), r.forEach(function (e) {
	        var n = Array.from(e.querySelectorAll(".toggleBtn"));t._removeClass(n, "fa-minus-square"), t._addClass(n, "fa-plus-square");
	      })));
	    } }, { key: "_dispatchClickEvent", value: function value(e) {
	      var t = e.target.classList;t.contains("topEdge") ? this._clickTopEdge(e) : t.contains("rightEdge") || t.contains("leftEdge") ? this._clickHorizontalEdge(e) : t.contains("bottomEdge") ? this._clickBottomEdge(e) : t.contains("toggleBtn") ? this._clickToggleButton(e) : this._clickNode(e);
	    } }, { key: "_onDragStart", value: function value(e) {
	      var t = e.target,
	          n = this.options,
	          i = /firefox/.test(window.navigator.userAgent.toLowerCase());if (i && e.dataTransfer.setData("text/html", "hack for firefox"), this.style.transform) {
	        var r = void 0,
	            s = void 0;document.querySelector(".ghost-node") ? (r = this.querySelector(":scope > .ghost-node"), s = r.children[0]) : (r = document.createElementNS("http://www.w3.org/2000/svg", "svg"), r.classList.add("ghost-node"), s = document.createElementNS("http://www.w3.org/2000/svg", "rect"), r.appendChild(s), this.appendChild(r));var o = this.style.transform.split(","),
	            a = Math.abs(window.parseFloat("t2b" === n.direction || "b2t" === n.direction ? o[0].slice(o[0].indexOf("(") + 1) : o[1]));r.setAttribute("width", t.offsetWidth), r.setAttribute("height", t.offsetHeight), s.setAttribute("x", 5 * a), s.setAttribute("y", 5 * a), s.setAttribute("width", 120 * a), s.setAttribute("height", 40 * a), s.setAttribute("rx", 4 * a), s.setAttribute("ry", 4 * a), s.setAttribute("stroke-width", 1 * a);var l = e.offsetX * a,
	            d = e.offsetY * a;if ("l2r" === n.direction ? (l = e.offsetY * a, d = e.offsetX * a) : "r2l" === n.direction ? (l = t.offsetWidth - e.offsetY * a, d = e.offsetX * a) : "b2t" === n.direction && (l = t.offsetWidth - e.offsetX * a, d = t.offsetHeight - e.offsetY * a), i) {
	          var c = document.createElement("img");c.src = "data:image/svg+xml;utf8," + new XMLSerializer().serializeToString(r), e.dataTransfer.setDragImage(c, l, d), s.setAttribute("fill", "rgb(255, 255, 255)"), s.setAttribute("stroke", "rgb(191, 0, 0)");
	        } else e.dataTransfer.setDragImage(r, l, d);
	      }var u = e.target,
	          h = this._closest(u, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }).parentNode.children[0].querySelector(".node"),
	          f = Array.from(this._closest(u, function (e) {
	        return "TABLE" === e.nodeName;
	      }).querySelectorAll(".node"));this.dragged = u, Array.from(this.querySelectorAll(".node")).forEach(function (e) {
	        f.includes(e) || (n.dropCriteria ? n.dropCriteria(u, h, e) && e.classList.add("allowedDrop") : e.classList.add("allowedDrop"));
	      });
	    } }, { key: "_onDragOver", value: function value(e) {
	      e.preventDefault();var t = e.currentTarget;t.classList.contains("allowedDrop") || (e.dataTransfer.dropEffect = "none");
	    } }, { key: "_onDragEnd", value: function value(e) {
	      Array.from(this.querySelectorAll(".allowedDrop")).forEach(function (e) {
	        e.classList.remove("allowedDrop");
	      });
	    } }, { key: "_onDrop", value: function value(e) {
	      var t = e.currentTarget,
	          n = this.dragged,
	          i = this._closest(n, function (e) {
	        return e.classList && e.classList.contains("nodes");
	      }).parentNode.children[0].children[0];if (this._removeClass(Array.from(this.querySelectorAll(".allowedDrop")), "allowedDrop"), t.parentNode.parentNode.nextElementSibling) {
	        var r = window.parseInt(t.parentNode.colSpan) + 2;if (t.parentNode.setAttribute("colspan", r), t.parentNode.parentNode.nextElementSibling.children[0].setAttribute("colspan", r), !n.querySelector(".horizontalEdge")) {
	          var s = document.createElement("i"),
	              o = document.createElement("i");s.setAttribute("class", "edge horizontalEdge rightEdge fa"), n.appendChild(s), o.setAttribute("class", "edge horizontalEdge leftEdge fa"), n.appendChild(o);
	        }var a = t.parentNode.parentNode.nextElementSibling.nextElementSibling,
	            l = document.createElement("td"),
	            d = document.createElement("td");l.setAttribute("class", "leftLine topLine"), l.innerHTML = "&nbsp;", a.insertBefore(l, a.children[1]), d.setAttribute("class", "rightLine topLine"), d.innerHTML = "&nbsp;", a.insertBefore(d, a.children[2]), a.nextElementSibling.appendChild(this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode);var c = this._siblings(this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode).map(function (e) {
	          return e.querySelector(".node");
	        });if (1 === c.length) {
	          var u = document.createElement("i"),
	              h = document.createElement("i");u.setAttribute("class", "edge horizontalEdge rightEdge fa"), c[0].appendChild(u), h.setAttribute("class", "edge horizontalEdge leftEdge fa"), c[0].appendChild(h);
	        }
	      } else {
	        var f = document.createElement("i");f.setAttribute("class", "edge verticalEdge bottomEdge fa"), t.appendChild(f), t.parentNode.setAttribute("colspan", 2);var p = this._closest(t, function (e) {
	          return "TABLE" === e.nodeName;
	        }),
	            v = document.createElement("tr"),
	            g = document.createElement("tr"),
	            m = document.createElement("tr");v.setAttribute("class", "lines"), v.innerHTML = '<td colspan="2"><div class="downLine"></div></td>', p.appendChild(v), g.setAttribute("class", "lines"), g.innerHTML = '<td class="rightLine">&nbsp;</td><td class="leftLine">&nbsp;</td>', p.appendChild(g), m.setAttribute("class", "nodes"), p.appendChild(m), Array.from(n.querySelectorAll(".horizontalEdge")).forEach(function (e) {
	          n.removeChild(e);
	        });var y = this._closest(n, function (e) {
	          return "TABLE" === e.nodeName;
	        }).parentNode;m.appendChild(y);
	      }var b = window.parseInt(i.colSpan);if (b > 2) {
	        i.setAttribute("colspan", b - 2), i.parentNode.nextElementSibling.children[0].setAttribute("colspan", b - 2);var _ = i.parentNode.nextElementSibling.nextElementSibling;_.children[1].remove(), _.children[1].remove();var E = Array.from(i.parentNode.parentNode.children[3].children).map(function (e) {
	          return e.querySelector(".node");
	        });1 === E.length && (E[0].querySelector(".leftEdge").remove(), E[0].querySelector(".rightEdge").remove());
	      } else i.removeAttribute("colspan"), i.querySelector(".node").removeChild(i.querySelector(".bottomEdge")), Array.from(i.parentNode.parentNode.children).slice(1).forEach(function (e) {
	        return e.remove();
	      });var L = new CustomEvent("nodedropped.orgchart", { detail: { draggedNode: n, dragZone: i.children[0], dropZone: t } });this.dispatchEvent(L);
	    } }, { key: "_createNode", value: function value(e, t) {
	      var n = this,
	          i = this.options;return new Promise(function (r, s) {
	        if (e.children) {
	          var o = !0,
	              a = !1,
	              l = void 0;try {
	            for (var d, c = e.children[Symbol.iterator](); !(o = (d = c.next()).done); o = !0) {
	              var u = d.value;u.parentId = e.id;
	            }
	          } catch (e) {
	            a = !0, l = e;
	          } finally {
	            try {
	              !o && c.return && c.return();
	            } finally {
	              if (a) throw l;
	            }
	          }
	        }var h = document.createElement("div");delete e.children, h.dataset.source = JSON.stringify(e), e[i.nodeId] && (h.id = e[i.nodeId]);var f = n.dataset.inEdit,
	            p = void 0;p = f ? "addChildren" === f ? " slide-up" : "" : t >= i.depth ? " slide-up" : "", h.setAttribute("class", "node " + (e.className || "") + p), i.draggable && h.setAttribute("draggable", !0), e.parentId && h.setAttribute("data-parent", e.parentId), h.innerHTML = '\n        <div class="title">' + e[i.nodeTitle] + "</div>\n        " + (i.nodeContent ? '<div class="content">' + e[i.nodeContent] + "</div>" : "") + "\n      ";var v = e.relationship || "";if (i.verticalDepth && t + 2 > i.verticalDepth) {
	          if (t + 1 >= i.verticalDepth && Number(v.substr(2, 1))) {
	            var g = document.createElement("i"),
	                m = t + 1 >= i.depth ? "plus" : "minus";g.setAttribute("class", "toggleBtn fa fa-" + m + "-square"), h.appendChild(g);
	          }
	        } else {
	          if (Number(v.substr(0, 1))) {
	            var y = document.createElement("i");y.setAttribute("class", "edge verticalEdge topEdge fa"), h.appendChild(y);
	          }if (Number(v.substr(1, 1))) {
	            var b = document.createElement("i"),
	                _ = document.createElement("i");b.setAttribute("class", "edge horizontalEdge rightEdge fa"), h.appendChild(b), _.setAttribute("class", "edge horizontalEdge leftEdge fa"), h.appendChild(_);
	          }if (Number(v.substr(2, 1))) {
	            var E = document.createElement("i"),
	                L = document.createElement("i"),
	                A = h.querySelector(":scope > .title");E.setAttribute("class", "edge verticalEdge bottomEdge fa"), h.appendChild(E), L.setAttribute("class", "fa " + i.parentNodeSymbol + " symbol"), A.insertBefore(L, A.children[0]);
	          }
	        }h.addEventListener("mouseenter", n._hoverNode.bind(n)), h.addEventListener("mouseleave", n._hoverNode.bind(n)), h.addEventListener("click", n._dispatchClickEvent.bind(n)), i.draggable && (h.addEventListener("dragstart", n._onDragStart.bind(n)), h.addEventListener("dragover", n._onDragOver.bind(n)), h.addEventListener("dragend", n._onDragEnd.bind(n)), h.addEventListener("drop", n._onDrop.bind(n))), i.createNode && i.createNode(h, e), r(h);
	      });
	    } }, { key: "buildHierarchy", value: function value(e, t, n, i) {
	      var r = this,
	          s = this.options,
	          o = void 0,
	          a = t.children,
	          l = s.verticalDepth && n + 1 >= s.verticalDepth;Object.keys(t).length > 1 && (o = l ? e : document.createElement("table"), l || e.appendChild(o), this._createNode(t, n).then(function (e) {
	        if (l) o.insertBefore(e, o.firstChild);else {
	          var t = document.createElement("tr");t.innerHTML = "\n            <td " + (a ? 'colspan="' + 2 * a.length + '"' : "") + ">\n            </td>\n          ", t.children[0].appendChild(e), o.insertBefore(t, o.children[0] ? o.children[0] : null);
	        }i && i();
	      }).catch(function (e) {
	        console.error("Failed to creat node", e);
	      })), a && !function () {
	        1 === Object.keys(t).length && (o = e);var l = void 0,
	            d = s.verticalDepth && n + 2 >= s.verticalDepth,
	            c = r.dataset.inEdit;if (l = c ? "addSiblings" === c ? "" : " hidden" : n + 1 >= s.depth ? " hidden" : "", !d) {
	          var u = document.createElement("tr");u.setAttribute("class", "lines" + l), u.innerHTML = '\n          <td colspan="' + 2 * a.length + '">\n            <div class="downLine"></div>\n          </td>\n        ', o.appendChild(u);
	        }var h = document.createElement("tr");h.setAttribute("class", "lines" + l), h.innerHTML = '\n        <td class="rightLine">&nbsp;</td>\n        ' + a.slice(1).map(function () {
	          return '\n          <td class="leftLine topLine">&nbsp;</td>\n          <td class="rightLine topLine">&nbsp;</td>\n          ';
	        }).join("") + '\n        <td class="leftLine">&nbsp;</td>\n      ';var f = void 0;if (d) {
	          if (f = document.createElement("ul"), l && f.classList.add(l.trim()), n + 2 === s.verticalDepth) {
	            var p = document.createElement("tr");p.setAttribute("class", "verticalNodes" + l), p.innerHTML = "<td></td>", p.firstChild.appendChild(f), o.appendChild(p);
	          } else o.appendChild(f);
	        } else f = document.createElement("tr"), f.setAttribute("class", "nodes" + l), o.appendChild(h), o.appendChild(f);a.forEach(function (e) {
	          var t = void 0;d ? t = document.createElement("li") : (t = document.createElement("td"), t.setAttribute("colspan", 2)), f.appendChild(t), r.buildHierarchy(t, e, n + 1, i);
	        });
	      }();
	    } }, { key: "_clickChart", value: function value(e) {
	      var t = this._closest(e.target, function (e) {
	        return e.classList && e.classList.contains("node");
	      });!t && this.querySelector(".node.focused") && this.querySelector(".node.focused").classList.remove("focused");
	    } }, { key: "_loopChart", value: function value(e) {
	      var t = this,
	          n = { id: e.querySelector(".node").id };return e.children[3] && Array.from(e.children[3].children).forEach(function (e) {
	        n.children || (n.children = []), n.children.push(t._loopChart(e.firstChild));
	      }), n;
	    } }, { key: "getHierarchy", value: function value() {
	      return this.querySelector(".node").id ? this._loopChart(this.querySelector("table")) : "Error: Nodes of orghcart to be exported must have id attribute!";
	    } }, { key: "_onPanStart", value: function value(e) {
	      var t = e.currentTarget;if (this._closest(e.target, function (e) {
	        return e.classList && e.classList.contains("node");
	      }) || e.touches && e.touches.length > 1) return void (t.dataset.panning = !1);t.style.cursor = "move", t.dataset.panning = !0;var n = 0,
	          i = 0,
	          r = window.getComputedStyle(t).transform;if ("none" !== r) {
	        var s = r.split(",");r.includes("3d") ? (n = Number.parseInt(s[12], 10), i = Number.parseInt(s[13], 10)) : (n = Number.parseInt(s[4], 10), i = Number.parseInt(s[5], 10));
	      }var o = 0,
	          a = 0;if (e.targetTouches) {
	        if (1 === e.targetTouches.length) o = e.targetTouches[0].pageX - n, a = e.targetTouches[0].pageY - i;else if (e.targetTouches.length > 1) return;
	      } else o = e.pageX - n, a = e.pageY - i;t.dataset.panStart = JSON.stringify({ startX: o, startY: a }), t.addEventListener("mousemove", this._onPanning.bind(this)), t.addEventListener("touchmove", this._onPanning.bind(this));
	    } }, { key: "_onPanning", value: function value(e) {
	      var t = e.currentTarget;if ("false" !== t.dataset.panning) {
	        var n = 0,
	            i = 0,
	            r = JSON.parse(t.dataset.panStart),
	            s = r.startX,
	            o = r.startY;if (e.targetTouches) {
	          if (1 === e.targetTouches.length) n = e.targetTouches[0].pageX - s, i = e.targetTouches[0].pageY - o;else if (e.targetTouches.length > 1) return;
	        } else n = e.pageX - s, i = e.pageY - o;var a = window.getComputedStyle(t).transform;if ("none" === a) a.includes("3d") ? t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, " + n + ", " + i + ", 0, 1)" : t.style.transform = "matrix(1, 0, 0, 1, " + n + ", " + i + ")";else {
	          var l = a.split(",");a.includes("3d") ? (l[12] = n, l[13] = i) : (l[4] = n, l[5] = i + ")"), t.style.transform = l.join(",");
	        }
	      }
	    } }, { key: "_onPanEnd", value: function value(e) {
	      "true" === this.dataset.panning && (this.dataset.panning = !1, this.style.cursor = "default", document.body.removeEventListener("mousemove", this._onPanning), document.body.removeEventListener("touchmove", this._onPanning));
	    } }, { key: "_setChartScale", value: function value(e, t) {
	      var n = window.getComputedStyle(e).transform;if ("none" === n) e.style.transform = "scale(" + t + "," + t + ")";else {
	        var i = n.split(",");n.includes("3d") ? e.style.transform = n + " scale3d(" + t + "," + t + ", 1)" : (i[0] = "matrix(" + t, i[3] = t, e.style.transform = n + " scale(" + t + "," + t + ")");
	      }e.dataset.scale = t;
	    } }, { key: "_onWheeling", value: function value(e) {
	      e.preventDefault();var t = e.deltaY > 0 ? .8 : 1.2;this._setChartScale(this, t);
	    } }, { key: "_getPinchDist", value: function value(e) {
	      return Math.sqrt((e.touches[0].clientX - e.touches[1].clientX) * (e.touches[0].clientX - e.touches[1].clientX) + (e.touches[0].clientY - e.touches[1].clientY) * (e.touches[0].clientY - e.touches[1].clientY));
	    } }, { key: "_onTouchStart", value: function value(e) {
	      if (e.touches && 2 === e.touches.length) {
	        var t = this._getPinchDist(e);this.dataset.pinching = !0, this.dataset.pinchDistStart = t;
	      }
	    } }, { key: "_onTouchMove", value: function value(e) {
	      if (this.dataset.pinching) {
	        var t = this._getPinchDist(e);this.dataset.pinchDistEnd = t;
	      }
	    } }, { key: "_onTouchEnd", value: function value(e) {
	      if (this.dataset.pinching) {
	        this.dataset.pinching = !1;var t = this.dataset.pinchDistEnd - this.dataset.pinchDistStart;t > 0 ? this._setChartScale(this, 1) : t < 0 && this._setChartScale(this, -1);
	      }
	    } }]), t;
	}(HTMLElement);exports.default = OrgChart, window.customElements.define("org-chart", OrgChart);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map