(self["webpackChunkaj_port"] = self["webpackChunkaj_port"] || []).push([[179],{

/***/ 9713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPropertyKey = __webpack_require__(3696);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7154:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5318:
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(9713);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 7316:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8)["default"]);
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3696:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8)["default"]);
var toPrimitive = __webpack_require__(8868);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 1539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ emotion_is_prop_valid_esm)
});

;// CONCATENATED MODULE: ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const emotion_memoize_esm = (memoize);

;// CONCATENATED MODULE: ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */emotion_memoize_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const emotion_is_prop_valid_esm = (isPropValid);


/***/ }),

/***/ 6940:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

exports["default"] = stylis_min;


/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

exports["default"] = unitlessKeys;


/***/ }),

/***/ 8105:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/umd/react-router-dom.production.min.js
var react_router_dom_production_min = __webpack_require__(2876);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(7424);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(7389);
;// CONCATENATED MODULE: ./src/store/athlete.slice.js

const ATHLETE_FEATURE_KEY = 'athlete';
const BASE_URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?`;
const fetchPlayerByName = (0,redux_toolkit_cjs_production_min.createAsyncThunk)(`${ATHLETE_FEATURE_KEY}/fetchPlayer`, async lastname => {
  try {
    const response = await fetch(`${BASE_URL}p=${lastname}`);
    return response.json();
  } catch (x) {
    console.log('Error: ', x);
    return Promise.reject(x);
  }
});
const convertKgToPounds = weightInKg => {
  return Math.floor(weightInKg * 2.20462);
};
const athleteSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
  name: ATHLETE_FEATURE_KEY,
  initialState: {
    players: [],
    error: null
  },
  reducers: {
    clearPlayers: state => {
      state.players = [];
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchPlayerByName.pending, state => {
      state.loadingStatus = 'loading';
    }).addCase(fetchPlayerByName.fulfilled, (state, action) => {
      if (!action.payload.player) {
        state.error = 'Error: Athletes not found for this name. Please try again.';
      } else {
        action.payload.player.map(player => {
          state.players.push({
            id: player.idPlayer,
            teamId: player.idTeam,
            name: player.strPlayer,
            teamName: player.strTeam,
            DOB: player.dateBorn,
            kitNumber: parseInt(player.strNumber),
            wage: player.strWage,
            height: player.strHeight,
            weight: convertKgToPounds(parseInt(player.strWeight.substring(0, 3))),
            position: player.strPosition,
            imageLink: player.strCutout
          });
          return true;
        });
        state.error = null;
      }
      state.loadingStatus = 'loaded';
    }).addCase(fetchPlayerByName.rejected, (state, action) => {
      state.loadingStatus = 'error';
      state.error = action.error.message;
    });
  }
});
const athleteReducer = athleteSlice.reducer;
const athleteActions = athleteSlice.actions;
const athleteSelectors = {
  getAllPlayers: state => state.athlete.players ? state.athlete.players : [],
  getError: state => state.athlete.error,
  getLoadingStatus: state => state.athlete.loadingStatus
};
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.cjs.production.min.js
var rtk_query_react_cjs_production_min = __webpack_require__(7378);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/app/services/sleeper_api.ts

const api = axios_default().create({
  baseURL: 'https://api.sleeper.app/v1/'
});
const axiosBaseQuery = () => async ({
  url,
  method,
  data,
  params
}) => {
  try {
    const result = await api({
      url,
      method,
      data,
      params
    });
    return {
      data: result.data
    };
  } catch (axiosError) {
    var _err$response, _err$response2;
    const err = axiosError;
    return {
      error: {
        status: (_err$response = err.response) == null ? void 0 : _err$response.status,
        data: ((_err$response2 = err.response) == null ? void 0 : _err$response2.data) || err.message
      }
    };
  }
};
;// CONCATENATED MODULE: ./src/store/sleeperAPI.ts


const sleeperAPI = (0,rtk_query_react_cjs_production_min.createApi)({
  reducerPath: 'sleeperAPI',
  baseQuery: axiosBaseQuery(),
  tagTypes: [],
  endpoints: builder => ({
    getUserInfoById: builder.query({
      query: ({
        id
      }) => ({
        url: `user/${id}`,
        method: 'GET'
      })
    }),
    getLeagueRosters: builder.query({
      query: ({
        leagueId
      }) => ({
        url: `league/${leagueId}/rosters`,
        method: 'GET'
      }),
      transformResponse: rosters => {
        const formattedData = rosters.map(({
          owner_id,
          players,
          starters,
          settings
        }) => ({
          players,
          owner_id,
          starters,
          total_fp: settings.fpts,
          total_pp: settings.ppts,
          waiver_budget_used: settings.waiver_budget_used,
          wins: settings.wins
        }));
        return formattedData;
      }
    }),
    getLeagueUsers: builder.query({
      query: ({
        leagueId
      }) => ({
        url: `league/${leagueId}/users`,
        method: 'GET'
      }),
      transformResponse: users => {
        const formattedData = users.map(({
          metadata,
          display_name,
          user_id
        }) => ({
          team_name: metadata.team_name,
          display_name,
          user_id
        }));
        return formattedData;
      }
    }),
    getAllNFLPlayers: builder.query({
      query: () => ({
        url: `/players/nfl`,
        method: 'GET'
      })
    })
  })
});
const {
  useGetUserInfoByIdQuery,
  useGetLeagueRostersQuery,
  useGetAllNFLPlayersQuery,
  useGetLeagueUsersQuery
} = sleeperAPI;
;// CONCATENATED MODULE: ./src/store/index.js



const storeConfig = {
  reducer: {
    [ATHLETE_FEATURE_KEY]: athleteReducer,
    [sleeperAPI.reducerPath]: sleeperAPI.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sleeperAPI.middleware),
  enhancers: []
};
const store = (0,redux_toolkit_cjs_production_min.configureStore)(storeConfig);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.cjs.js
var styled_components_browser_cjs = __webpack_require__(8384);
;// CONCATENATED MODULE: ./src/app/styles/styledcomps.js

const colors = {
  mainBlue: '#1b7fcc',
  darkBlue: '#103191',
  mainGray: '#dddddd'
};
const flyIn = /*#__PURE__*/(0,styled_components_browser_cjs/* keyframes */.F4)(["from{transform:translateX(-100%);}to{transform:translateX(0);}"]);
const Header1 = /*#__PURE__*/styled_components_browser_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "styledcomps__Header1",
  componentId: "g3xuhs-0"
})(["color:", ";width:fit-content;font-family:Barlow;margin:0;font-weight:800;display:inline-flex;font-size:65px;animation:", " 1s ease-out;@media (max-width:500px){font-size:45px;}"], props => props.color ? props.color : 'black', flyIn);
const SubHeader1 = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "styledcomps__SubHeader1",
  componentId: "g3xuhs-1"
})(["margin:0;display:inline-flex;width:fit-content;font-family:Barlow;color:", ";font-size:20px;animation:", " 1s ease-out;"], props => props.color ? props.color : 'black', flyIn);
const BodyText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "styledcomps__BodyText",
  componentId: "g3xuhs-2"
})(["margin:0;display:inline-flex;width:fit-content;font-family:Barlow;color:", ";font-size:15px;font-weight:", ";"], props => props.color ? props.color : 'black', props => props.weight);
const FlexRow = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledcomps__FlexRow",
  componentId: "g3xuhs-3"
})(["display:flex;flex-direction:row;align-items:center;gap:", ";margin:", ";flex-wrap:wrap;"], props => props.gap, props => props.margin);
const FlexColumn = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styledcomps__FlexColumn",
  componentId: "g3xuhs-4"
})(["display:flex;flex-direction:column;justify-content:", ";align-items:", ";gap:", ";width:", ";"], props => props.justifyContent, props => props.alignItems, props => props.gap, props => props.width);
const Button = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "styledcomps__Button",
  componentId: "g3xuhs-5"
})(["display:flex;width:fit-content;height:45px;border-radius:25px;color:white;background:", ";justify-content:center;align-items:center;font-family:Barlow;font-weight:bold;border:1px solid white;padding:15px;font-size:20px;box-shadow:1px 1px #ccc6c6;animation:", " 1s ease-out;:hover{color:", ";background:white;border:1px solid ", ";}"], colors.darkBlue, flyIn, colors.darkBlue, colors.darkBlue);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/app/components/navigation/NavBar.jsx





const NavBar = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledBar, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledName, {
      children: "AJ Milbauer"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledAbbrv, {
      children: "AJM"
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NavSection, {
      style: {
        justifyContent: 'end'
      },
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink, {
        to: "/home",
        children: "Home"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink, {
        to: "/resume",
        children: "Resume"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink, {
        to: "/projects",
        children: "Projects"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink, {
        to: "https://github.com/AJM19/aj",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledImage, {
          height: "50px",
          src: './assets/images/github.png',
          alt: "react"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLink, {
        to: "https://www.linkedin.com/in/aj-milbauer/",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledImage, {
          height: "50px",
          src: './assets/images/linkedin.png',
          alt: "react"
        })
      })]
    })]
  });
};
/* harmony default export */ const navigation_NavBar = (NavBar);
const NavBar_flyIn = /*#__PURE__*/(/* unused pure expression or super */ null && (keyframes(["from{transform:translateX(-100%);}to{transform:translateX(0);}"])));
const StyledBar = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "NavBar__StyledBar",
  componentId: "sc-1bi283n-0"
})(["display:grid;height:60px;width:100%;background:white;align-items:center;grid-template-columns:1fr 1fr;gap:25px;border-bottom:2px solid ", ";z-index:500;"], colors.darkBlue);
const StyledLink = /*#__PURE__*/(0,styled_components_browser_cjs/* default */.ZP)(react_router_dom_production_min.Link).withConfig({
  displayName: "NavBar__StyledLink",
  componentId: "sc-1bi283n-1"
})(["display:flex;width:100%;font-size:18px;color:", ";text-decoration:none;width:fit-content;font-family:Barlow;font-weight:400;margin:0;"], colors.darkBlue);
const StyledImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "NavBar__StyledImage",
  componentId: "sc-1bi283n-2"
})(["height:30px;width:30px;@media (max-width:500px){height:20px;width:20px;}"]);
const NavSection = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "NavBar__NavSection",
  componentId: "sc-1bi283n-3"
})(["display:inline-flex;align-items:center;gap:5%;margin:0 15px;"]);
const StyledName = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "NavBar__StyledName",
  componentId: "sc-1bi283n-4"
})(["font-family:Quicksand;color:", ";font-weight:700;margin:0 0 0 15px;font-size:24px;@media (max-width:700px){display:none;}"], colors.darkBlue);
const StyledAbbrv = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "NavBar__StyledAbbrv",
  componentId: "sc-1bi283n-5"
})(["display:none;@media (max-width:700px){display:block;font-family:Quicksand;color:", ";font-weight:700;margin:0 0 0 15px;font-size:24px;}"], colors.darkBlue);
;// CONCATENATED MODULE: ./src/app/components/Layout.jsx





const StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Layout__StyledContainer",
  componentId: "sc-1objwso-0"
})(["display:grid;grid-template-rows:60px auto;height:100vh;overflow:hidden;background:#1b7fcc;"]);
const StyledContent = /*#__PURE__*/styled_components_browser_cjs/* default.main.withConfig */.ZP.main.withConfig({
  displayName: "Layout__StyledContent",
  componentId: "sc-1objwso-1"
})(["overflow-y:auto;flex-grow:1;"]);
const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(StyledContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(navigation_NavBar, {}), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledContent, {
      children: children
    })]
  });
};
/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./src/app/components/Journey.jsx





const Journey = () => {
  const [activeTab, setActiveTab] = (0,react.useState)(0);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Journey_StyledContainer, {
    id: "journey",
    children: [activeTab !== 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(NavButton, {
      onClick: () => {
        setActiveTab(activeTab - 1);
      },
      top: "50%",
      left: '3%',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: '<'
      })
    }), activeTab !== 2 && /*#__PURE__*/(0,jsx_runtime.jsx)(NavButton, {
      onClick: () => {
        setActiveTab(activeTab + 1);
      },
      top: "50%",
      right: '3%',
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
        children: '>'
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Header, {
      color: colors.mainBlue,
      children: "Developer Journey"
    }), activeTab === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)(SectionContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        gap: "5px",
        id: "tab1",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
            color: "#ee7132",
            children: "University"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
            color: "#015030",
            children: "\xA0of\xA0"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
            color: "#ee7132",
            children: "Miami"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "2017 - 2021"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
          height: '100px',
          width: '150px',
          src: './assets/images/UM.png',
          alt: "UM"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          style: {
            textAlign: 'center'
          },
          children: "Bachelors in Computer Science"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          style: {
            textAlign: 'center'
          },
          children: "Minors in Game Design & Criminology"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(FlexRow, {
          margin: "10px 0",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '65px',
            width: '65px',
            src: './assets/images/java.png',
            alt: "java"
          })
        })]
      })
    }), activeTab === 1 && /*#__PURE__*/(0,jsx_runtime.jsx)(SectionContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        gap: "5px",
        id: "tab1",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          color: colors.mainBlue,
          children: "Capgemini"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          style: {
            textAlign: 'center'
          },
          color: colors.darkBlue,
          children: "2021 - 2022"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
          height: '130px',
          width: '130px',
          src: './assets/images/capgemini.png',
          alt: "cap"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          children: "Software Engineer"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
          margin: "10px 0",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '50px',
            width: '50px',
            src: './assets/images/angular.png',
            alt: "angular"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '50px',
            width: '65px',
            src: './assets/images/typescript.png',
            alt: "type"
          })]
        })]
      })
    }), activeTab === 2 && /*#__PURE__*/(0,jsx_runtime.jsx)(SectionContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        gap: "5px",
        id: "tab3",
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Title, {
          color: '#f88930',
          children: "Golf PDI"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          style: {
            textAlign: 'center'
          },
          color: colors.darkBlue,
          children: "2022 - Current"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
          height: '150px',
          width: '150px',
          src: './assets/images/pdi.png',
          alt: "pdi"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          children: "UI Developer"
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
          margin: "10px 0",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '55px',
            width: '55px',
            src: './assets/images/react.png',
            alt: "react"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '50px',
            width: '50px',
            src: './assets/images/javascript.png',
            alt: "javascript"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Journey_StyledImage, {
            height: '50px',
            width: '65px',
            src: './assets/images/typescript.png',
            alt: "typescript"
          })]
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(CircleContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
        gap: "20px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TabCircle, {
          onClick: () => {
            setActiveTab(0);
          },
          isActive: activeTab === 0
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabCircle, {
          onClick: () => {
            setActiveTab(1);
          },
          isActive: activeTab === 1
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(TabCircle, {
          onClick: () => {
            setActiveTab(2);
          },
          isActive: activeTab === 2
        })]
      })
    })]
  });
};
/* harmony default export */ const components_Journey = (Journey);
const popUp = /*#__PURE__*/(0,styled_components_browser_cjs/* keyframes */.F4)(["from{transform:scale(0);}to{transform:scale(1);}"]);
const Journey_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Journey__StyledContainer",
  componentId: "sc-1hstold-0"
})(["display:flex;position:relative;flex-direction:column;height:450px;background:white;margin:50px;align-items:center;gap:10px;border-radius:10px;box-shadow:5px 4px 9px 1px #73707099;"]);
const Journey_StyledImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "Journey__StyledImage",
  componentId: "sc-1hstold-1"
})(["width:", ";height:", ";"], props => props.width, props => props.height);
const NavButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "Journey__NavButton",
  componentId: "sc-1hstold-2"
})(["display:flex;position:absolute;top:", ";left:", ";right:", ";width:45px;height:45px;background:", ";color:white;border-radius:100%;border:none;font-size:30px;font-weight:bold;font-family:Barlow;justify-content:center;align-items:center;box-shadow:1px 1px #ccc6c6;p{margin:0;height:100%;}@media (max-width:500px){width:18px;height:18px;font-size:12px;}:hover{color:", ";background:white;border:1px solid ", ";}"], props => props.top, props => props.left, props => props.right, colors.darkBlue, colors.darkBlue, colors.darkBlue);
const SectionContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Journey__SectionContainer",
  componentId: "sc-1hstold-3"
})(["animation:", " 1s ease-out;"], popUp);
const Header = /*#__PURE__*/styled_components_browser_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "Journey__Header",
  componentId: "sc-1hstold-4"
})(["color:", ";width:fit-content;font-family:Barlow;margin:0;font-weight:800;display:inline-flex;font-size:60px;t text-align:center;@media (max-width:500px){font-size:18px;}"], props => props.color ? props.color : 'black');
const Title = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "Journey__Title",
  componentId: "sc-1hstold-5"
})(["margin:0;display:inline-flex;width:fit-content;font-family:Barlow;font-weight:700;color:", ";font-size:25px;"], props => props.color ? props.color : 'black');
const TabCircle = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Journey__TabCircle",
  componentId: "sc-1hstold-6"
})(["height:8px;width:8px;border-radius:100%;border:1px solid ", ";background:white;", ";:hover{cursor:pointer;}"], colors.darkBlue, ({
  isActive
}) => isActive && `  
      background: ${colors.darkBlue};
    `);
const CircleContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Journey__CircleContainer",
  componentId: "sc-1hstold-7"
})(["position:absolute;bottom:10px;"]);
;// CONCATENATED MODULE: ./src/app/components/Contact.jsx




const Contact = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Contact_StyledContainer, {
    id: "contactMe",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header1, {
      color: colors.mainBlue,
      children: "Let's get in touch."
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
      color: colors.darkBlue,
      children: "ajmilbauer@gmail.com"
    })]
  });
};
/* harmony default export */ const components_Contact = (Contact);
const Contact_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Contact__StyledContainer",
  componentId: "sc-2ffhxs-0"
})(["display:flex;position:relative;flex-direction:column;background:white;margin:50px;align-items:center;gap:10px;border-radius:10px;padding:10px 0;box-shadow:5px 4px 9px 1px #73707099;height:175px;justify-content:center;text-align:center;"]);
;// CONCATENATED MODULE: ./src/app/pages/HomePage.jsx









const HomePage = () => {
  const [isJourneySelected, setJourneySelected] = (0,react.useState)(false);
  const [isContactShowing, setContactShowing] = (0,react.useState)(false);
  const journeyRef = (0,react.useRef)(null);
  const contactRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    const handleScroll = () => {
      if (isJourneySelected && journeyRef.current) {
        journeyRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    handleScroll();
  }, [isJourneySelected, journeyRef]);
  (0,react.useEffect)(() => {
    const handleScroll = () => {
      if (isContactShowing && contactRef.current) {
        contactRef.current.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };
    handleScroll();
  }, [isContactShowing, contactRef]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ProfileSection, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(WelcomeSection, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header1, {
            withAnimation: true,
            color: "#1b7fcc",
            children: "Hi, I'm AJ Milbauer!"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(FlexRow, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(SubHeader1, {
              withAnimation: true,
              children: "A Front-end Developer passionate about creating web applications for all to enjoy."
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
          gap: "3px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(HomePage_StyledLink, {
            to: "/resume",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button, {
              children: "Resume"
            })
          }), !isJourneySelected && /*#__PURE__*/(0,jsx_runtime.jsx)(Button, {
            onClick: () => {
              setJourneySelected(true);
            },
            children: "Follow my journey..."
          }), !isContactShowing && /*#__PURE__*/(0,jsx_runtime.jsx)(Button, {
            onClick: () => {
              setContactShowing(true);
            },
            children: "Contact Me!"
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ImageContainer, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(IconContainer, {
          top: "-10%",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomePage_StyledImage, {
            src: './assets/images/react.png',
            alt: "react"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(IconContainer, {
          left: "-10%",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomePage_StyledImage, {
            src: './assets/images/html.png',
            alt: "react"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(IconContainer, {
          bottom: "-10%",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomePage_StyledImage, {
            src: './assets/images/javascript.png',
            alt: "react"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(IconContainer, {
          right: "-10%",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(HomePage_StyledImage, {
            src: './assets/images/css3.png',
            alt: "react"
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Bitmoji, {
          position: "absolute",
          src: './assets/images/bitmoji-computer.png',
          alt: "something else"
        })]
      })]
    }), isJourneySelected && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: journeyRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Journey, {})
    }), isContactShowing && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: contactRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_Contact, {})
    })]
  });
};
/* harmony default export */ const pages_HomePage = (HomePage);
const HomePage_popUp = /*#__PURE__*/(0,styled_components_browser_cjs/* keyframes */.F4)(["from{transform:scale(0);}to{transform:scale(1);}"]);
const ProfileSection = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HomePage__ProfileSection",
  componentId: "sc-1humxyv-0"
})(["display:grid;height:70%;background:white;grid-template-columns:1fr 1fr;align-items:center;justify-items:center;margin:50px;border-radius:10px;box-shadow:5px 4px 9px 1px #73707099;overflow-x:auto;@media (max-width:800px){grid-template-columns:1fr;grid-template-rows:1fr 1fr;height:calc(100% + 100px);width:100%;margin:0;border-radius:0;}"]);
const WelcomeSection = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HomePage__WelcomeSection",
  componentId: "sc-1humxyv-1"
})(["display:flex;width:80%;flex-direction:column;gap:10px;"]);
const ImageContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HomePage__ImageContainer",
  componentId: "sc-1humxyv-2"
})(["height:400px;width:400px;border-radius:100%;align-items:center;justify-content:center;display:flex;border:4px solid #1b7fcc;position:relative;animation:", " 1s ease-out;@media (max-width:1000px){height:350px;width:350px;}@media (max-width:800px){height:300px;width:300px;}"], HomePage_popUp);
const IconContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "HomePage__IconContainer",
  componentId: "sc-1humxyv-3"
})(["display:flex;align-items:center;justify-content:center;height:80px;width:80px;background:white;border:2px dashed #1b7fcc;position:absolute;border-radius:100%;top:", ";right:", ";bottom:", ";left:", ";@media (max-width:500px){height:65px;width:65px;}"], props => props.top, props => props.right, props => props.bottom, props => props.left);
const HomePage_StyledImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "HomePage__StyledImage",
  componentId: "sc-1humxyv-4"
})(["height:65px;width:65px;@media (max-width:500px){height:40px;width:40px;}"]);
const Bitmoji = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "HomePage__Bitmoji",
  componentId: "sc-1humxyv-5"
})(["height:250px;width:250px;@media (max-width:500px){height:100px;width:100px;}"]);
const HomePage_StyledLink = /*#__PURE__*/(0,styled_components_browser_cjs/* default */.ZP)(react_router_dom_production_min.Link).withConfig({
  displayName: "HomePage__StyledLink",
  componentId: "sc-1humxyv-6"
})(["width:fit-content;text-decoration:none;"]);
;// CONCATENATED MODULE: ./src/app/pages/Resume.jsx



const Resume = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Layout, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ResumeContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("iframe", {
        width: '80%',
        title: "resume",
        src: "./assets/files/RESUME.pdf"
      })
    })
  });
};
/* harmony default export */ const pages_Resume = (Resume);
const ResumeContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Resume__ResumeContainer",
  componentId: "sc-1dp4hfl-0"
})(["display:flex;width:100%;justify-content:center;height:100%;"]);
;// CONCATENATED MODULE: ./src/app/components/SearchBar.jsx




const SearchBar = ({
  setValue,
  enterToggle,
  placeholder
}) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      enterToggle();
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SearchBar_StyledContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledInputBar, {
      placeholder: placeholder,
      onChange: e => {
        setValue(e.target.value);
      },
      onKeyPress: handleKeyPress
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledIcon, {
      src: './assets/icons/search.png',
      alt: "search"
    })]
  });
};
/* harmony default export */ const components_SearchBar = (SearchBar);
const StyledInputBar = /*#__PURE__*/styled_components_browser_cjs/* default.input.withConfig */.ZP.input.withConfig({
  displayName: "SearchBar__StyledInputBar",
  componentId: "ndxctt-0"
})(["display:flex;width:200px;height:25px;color:black;border-radius:5px;background:#f0f2f5;border:1px solid transparent;padding-left:25px;font-size:12px;font-family:Barlow;:hover{border:1px solid ", ";}"], colors.darkBlue);
const StyledIcon = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "SearchBar__StyledIcon",
  componentId: "ndxctt-1"
})(["position:absolute;height:15px;width:15px;top:25%;left:5px;"]);
const SearchBar_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SearchBar__StyledContainer",
  componentId: "ndxctt-2"
})(["position:relative;height:fit-content;width:fit-content;"]);
;// CONCATENATED MODULE: ./node_modules/d3-axis/src/identity.js
/* harmony default export */ function src_identity(x) {
  return x;
}

;// CONCATENATED MODULE: ./node_modules/d3-axis/src/axis.js


var axis_top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + x + ",0)";
}

function translateY(y) {
  return "translate(0," + y + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale, offset) {
  offset = Math.max(0, scale.bandwidth() - offset * 2) / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => +scale(d) + offset;
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      offset = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 0 : 0.5,
      k = orient === axis_top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === axis_top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : src_identity) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + offset,
        range1 = +range[range.length - 1] + offset,
        position = (scale.bandwidth ? center : number)(scale.copy(), offset),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === axis_top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d + offset) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform((p && isFinite(p = p(d)) ? p : position(d)) + offset); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient === right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H" + offset + "V" + range1 + "H" + k * tickSizeOuter : "M" + offset + "," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V" + offset + "H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + "," + offset + "H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d) + offset); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = Array.from(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : Array.from(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : Array.from(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  axis.offset = function(_) {
    return arguments.length ? (offset = +_, axis) : offset;
  };

  return axis;
}

function axisTop(scale) {
  return axis(axis_top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}

;// CONCATENATED MODULE: ./node_modules/d3-axis/src/index.js


;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selector.js
function none() {}

/* harmony default export */ function selector(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/select.js



/* harmony default export */ function selection_select(select) {
  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/array.js
// Given something array like (or null), returns something that is strictly an
// array. This is used to ensure that array-like objects passed to d3.selectAll
// or selection.selectAll are converted into proper arrays when creating a
// selection; we don’t ever want to create a selection backed by a live
// HTMLCollection or NodeList. However, note that selection.selectAll will use a
// static NodeList as a group, since it safely derived from querySelectorAll.
function array(x) {
  return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selectorAll.js
function empty() {
  return [];
}

/* harmony default export */ function selectorAll(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectAll.js




function arrayAll(select) {
  return function() {
    return array(select.apply(this, arguments));
  };
}

/* harmony default export */ function selectAll(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new Selection(subgroups, parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/matcher.js
/* harmony default export */ function matcher(selector) {
  return function() {
    return this.matches(selector);
  };
}

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}


;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChild.js


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ function selectChild(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : childMatcher(match)));
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/selectChildren.js


var filter = Array.prototype.filter;

function children() {
  return Array.from(this.children);
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ function selectChildren(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/filter.js



/* harmony default export */ function selection_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Selection(subgroups, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sparse.js
/* harmony default export */ function sparse(update) {
  return new Array(update.length);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/enter.js



/* harmony default export */ function enter() {
  return new Selection(this._enter || this._groups.map(sparse), this._parents);
}

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/constant.js
/* harmony default export */ function src_constant(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/data.js




function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new EnterNode(parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ function data(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = src_constant(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new Selection(update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
}

// Given some data, this returns an array-like view of it: an object that
// exposes a length property and allows numeric indexing. Note that unlike
// selectAll, this isn’t worried about “live” collections because the resulting
// array will only be used briefly while data is being bound. (It is possible to
// cause the data to change while iterating by using a key function, but please
// don’t; we’d rather avoid a gratuitous copy.)
function arraylike(data) {
  return typeof data === "object" && "length" in data
    ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/exit.js



/* harmony default export */ function exit() {
  return new Selection(this._exit || this._groups.map(sparse), this._parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/join.js
/* harmony default export */ function join(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  if (typeof onenter === "function") {
    enter = onenter(enter);
    if (enter) enter = enter.selection();
  } else {
    enter = enter.append(onenter + "");
  }
  if (onupdate != null) {
    update = onupdate(update);
    if (update) update = update.selection();
  }
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/merge.js


/* harmony default export */ function merge(context) {
  var selection = context.selection ? context.selection() : context;

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Selection(merges, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/order.js
/* harmony default export */ function order() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/sort.js


/* harmony default export */ function sort(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new Selection(sortgroups, this._parents).order();
}

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/call.js
/* harmony default export */ function call() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/nodes.js
/* harmony default export */ function nodes() {
  return Array.from(this);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/node.js
/* harmony default export */ function node() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/size.js
/* harmony default export */ function size() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/empty.js
/* harmony default export */ function selection_empty() {
  return !this.node();
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/each.js
/* harmony default export */ function each(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespaces.js
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ const namespaces = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/namespace.js


/* harmony default export */ function namespace(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/attr.js


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ function attr(name, value) {
  var fullname = namespace(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/window.js
/* harmony default export */ function src_window(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/style.js


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ function style(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
}

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || src_window(node).getComputedStyle(node, null).getPropertyValue(name);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ function property(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ function classed(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/text.js
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ function selection_text(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ function html(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/raise.js
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ function selection_raise() {
  return this.each(raise);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/lower.js
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ function selection_lower() {
  return this.each(lower);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/creator.js



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === xhtml && document.documentElement.namespaceURI === xhtml
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ function creator(name) {
  var fullname = namespace(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/append.js


/* harmony default export */ function append(name) {
  var create = typeof name === "function" ? name : creator(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/insert.js



function constantNull() {
  return null;
}

/* harmony default export */ function insert(name, before) {
  var create = typeof name === "function" ? name : creator(name),
      select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/remove.js
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ function selection_remove() {
  return this.each(remove);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ function clone(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/datum.js
/* harmony default export */ function selection_datum(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ function on(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/dispatch.js


function dispatchEvent(node, type, params) {
  var window = src_window(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ function selection_dispatch(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/iterator.js
/* harmony default export */ function* iterator() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/selection/index.js



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: selection_select,
  selectAll: selectAll,
  selectChild: selectChild,
  selectChildren: selectChildren,
  filter: selection_filter,
  data: data,
  enter: enter,
  exit: exit,
  join: join,
  merge: merge,
  selection: selection_selection,
  order: order,
  sort: sort,
  call: call,
  nodes: nodes,
  node: node,
  size: size,
  empty: selection_empty,
  each: each,
  attr: attr,
  style: style,
  property: property,
  classed: classed,
  text: selection_text,
  html: html,
  raise: selection_raise,
  lower: selection_lower,
  append: append,
  insert: insert,
  remove: selection_remove,
  clone: clone,
  datum: selection_datum,
  on: on,
  dispatch: selection_dispatch,
  [Symbol.iterator]: iterator
};

/* harmony default export */ const src_selection = (selection);

;// CONCATENATED MODULE: ./node_modules/d3-dispatch/src/dispatch.js
var noop = {value: () => {}};

function dispatch_dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function dispatch_parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch_dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = dispatch_parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const src_dispatch = (dispatch_dispatch);

;// CONCATENATED MODULE: ./node_modules/d3-timer/src/timer.js
var timer_frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++timer_frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --timer_frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  timer_frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    timer_frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (timer_frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    timer_frame = 1, setFrame(wake);
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-timer/src/timeout.js


/* harmony default export */ function src_timeout(callback, delay, time) {
  var t = new Timer;
  delay = delay == null ? 0 : +delay;
  t.restart(elapsed => {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/schedule.js



var emptyOn = src_dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ function schedule(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
}

function init(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function schedule_set(node, id) {
  var schedule = schedule_get(node, id);
  if (schedule.state > STARTED) throw new Error("too late; already running");
  return schedule;
}

function schedule_get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = timer(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return src_timeout(start);

      // Interrupt the active transition, if any.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions.
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("cancel", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    src_timeout(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(node, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/interrupt.js


/* harmony default export */ function src_interrupt(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > STARTING && schedule.state < ENDING;
    schedule.state = ENDED;
    schedule.timer.stop();
    schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/interrupt.js


/* harmony default export */ function selection_interrupt(name) {
  return this.each(function() {
    src_interrupt(this, name);
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/number.js
/* harmony default export */ function src_number(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;

var decompose_identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ function decompose(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/parse.js


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? decompose_identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return decompose_identity;
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return decompose_identity;
  value = value.matrix;
  return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/transform/index.js



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: src_number(xa, xb)}, {i: i - 2, x: src_number(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: src_number(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: src_number(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: src_number(xa, xb)}, {i: i - 2, x: src_number(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/tween.js


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = schedule_set(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ function tween(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = schedule_get(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = schedule_set(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return schedule_get(node, id).value[name];
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-color/src/define.js
/* harmony default export */ function src_define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

;// CONCATENATED MODULE: ./node_modules/d3-color/src/color.js


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`),
    reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`),
    reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`),
    reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`),
    reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`),
    reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

src_define(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHex8() {
  return this.rgb().formatHex8();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function color_rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

src_define(Rgb, color_rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}

function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}

function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}

function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}

function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}

function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

src_define(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));

function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}

function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ function src_basis(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/basisClosed.js


/* harmony default export */ function basisClosed(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/constant.js
/* harmony default export */ const d3_interpolate_src_constant = (x => () => x);

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/color.js


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : d3_interpolate_src_constant(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : d3_interpolate_src_constant(isNaN(a) ? b : a);
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/rgb.js





/* harmony default export */ const rgb = ((function rgbGamma(y) {
  var color = gamma(y);

  function rgb(start, end) {
    var r = color((start = color_rgb(start)).r, (end = color_rgb(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = color_rgb(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(src_basis);
var rgbBasisClosed = rgbSpline(basisClosed);

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/string.js


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: src_number(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/interpolate.js



/* harmony default export */ function transition_interpolate(a, b) {
  var c;
  return (typeof b === "number" ? src_number
      : b instanceof color ? rgb
      : (c = color(b)) ? (b = c, rgb)
      : string)(a, b);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attr.js





function attr_attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attr_attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attr_attrConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttribute(name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attr_attrConstantNS(fullname, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = this.getAttributeNS(fullname.space, fullname.local);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function attr_attrFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttribute(name);
    string0 = this.getAttribute(name);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function attr_attrFunctionNS(fullname, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0, value1 = value(this), string1;
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    string0 = this.getAttributeNS(fullname.space, fullname.local);
    string1 = value1 + "";
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

/* harmony default export */ function transition_attr(name, value) {
  var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : transition_interpolate;
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attr_attrFunctionNS : attr_attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
      : value == null ? (fullname.local ? attr_attrRemoveNS : attr_attrRemove)(fullname)
      : (fullname.local ? attr_attrConstantNS : attr_attrConstant)(fullname, i, value));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/attrTween.js


function attrInterpolate(name, i) {
  return function(t) {
    this.setAttribute(name, i.call(this, t));
  };
}

function attrInterpolateNS(fullname, i) {
  return function(t) {
    this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
  };
}

function attrTweenNS(fullname, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_attrTween(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = namespace(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/delay.js


function delayFunction(id, value) {
  return function() {
    init(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    init(this, id).delay = value;
  };
}

/* harmony default export */ function delay(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : schedule_get(this.node(), id).delay;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/duration.js


function durationFunction(id, value) {
  return function() {
    schedule_set(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    schedule_set(this, id).duration = value;
  };
}

/* harmony default export */ function duration(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : schedule_get(this.node(), id).duration;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/ease.js


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    schedule_set(this, id).ease = value;
  };
}

/* harmony default export */ function ease(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : schedule_get(this.node(), id).ease;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/easeVarying.js


function easeVarying(id, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (typeof v !== "function") throw new Error;
    schedule_set(this, id).ease = v;
  };
}

/* harmony default export */ function transition_easeVarying(value) {
  if (typeof value !== "function") throw new Error;
  return this.each(easeVarying(this._id, value));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/filter.js



/* harmony default export */ function transition_filter(match) {
  if (typeof match !== "function") match = matcher(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new Transition(subgroups, this._parents, this._name, this._id);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/merge.js


/* harmony default export */ function transition_merge(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new Transition(merges, this._parents, this._name, this._id);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/on.js


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? init : schedule_set;
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_on(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? schedule_get(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ function transition_remove() {
  return this.on("end.remove", removeFunction(this._id));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/select.js




/* harmony default export */ function transition_select(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selector(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        schedule(subgroup[i], name, id, i, subgroup, schedule_get(node, id));
      }
    }
  }

  return new Transition(subgroups, this._parents, name, id);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selectAll.js




/* harmony default export */ function transition_selectAll(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = selectorAll(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = schedule_get(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            schedule(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new Transition(subgroups, parents, name, id);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/selection.js


var selection_Selection = src_selection.prototype.constructor;

/* harmony default export */ function transition_selection() {
  return new selection_Selection(this._groups, this._parents);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/style.js






function styleNull(name, interpolate) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        string1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, string10 = string1);
  };
}

function style_styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function style_styleConstant(name, interpolate, value1) {
  var string00,
      string1 = value1 + "",
      interpolate0;
  return function() {
    var string0 = styleValue(this, name);
    return string0 === string1 ? null
        : string0 === string00 ? interpolate0
        : interpolate0 = interpolate(string00 = string0, value1);
  };
}

function style_styleFunction(name, interpolate, value) {
  var string00,
      string10,
      interpolate0;
  return function() {
    var string0 = styleValue(this, name),
        value1 = value(this),
        string1 = value1 + "";
    if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
    return string0 === string1 ? null
        : string0 === string00 && string1 === string10 ? interpolate0
        : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
  };
}

function styleMaybeRemove(id, name) {
  var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
  return function() {
    var schedule = schedule_set(this, id),
        on = schedule.on,
        listener = schedule.value[key] == null ? remove || (remove = style_styleRemove(name)) : undefined;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

    schedule.on = on1;
  };
}

/* harmony default export */ function transition_style(name, value, priority) {
  var i = (name += "") === "transform" ? interpolateTransformCss : transition_interpolate;
  return value == null ? this
      .styleTween(name, styleNull(name, i))
      .on("end.style." + name, style_styleRemove(name))
    : typeof value === "function" ? this
      .styleTween(name, style_styleFunction(name, i, tweenValue(this, "style." + name, value)))
      .each(styleMaybeRemove(this._id, name))
    : this
      .styleTween(name, style_styleConstant(name, i, value), priority)
      .on("end.style." + name, null);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
  return function(t) {
    this.style.setProperty(name, i.call(this, t), priority);
  };
}

function styleTween(name, value, priority) {
  var t, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
    return t;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_styleTween(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/text.js


function text_textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function text_textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ function transition_text(value) {
  return this.tween("text", typeof value === "function"
      ? text_textFunction(tweenValue(this, "text", value))
      : text_textConstant(value == null ? "" : value + ""));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
  return function(t) {
    this.textContent = i.call(this, t);
  };
}

function textTween(value) {
  var t0, i0;
  function tween() {
    var i = value.apply(this, arguments);
    if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
    return t0;
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ function transition_textTween(value) {
  var key = "text";
  if (arguments.length < 1) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, textTween(value));
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/transition.js



/* harmony default export */ function transition() {
  var name = this._name,
      id0 = this._id,
      id1 = newId();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = schedule_get(node, id0);
        schedule(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new Transition(groups, this._parents, name, id1);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/end.js


/* harmony default export */ function end() {
  var on0, on1, that = this, id = that._id, size = that.size();
  return new Promise(function(resolve, reject) {
    var cancel = {value: reject},
        end = {value: function() { if (--size === 0) resolve(); }};

    that.each(function() {
      var schedule = schedule_set(this, id),
          on = schedule.on;

      // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) {
        on1 = (on0 = on).copy();
        on1._.cancel.push(cancel);
        on1._.interrupt.push(cancel);
        on1._.end.push(end);
      }

      schedule.on = on1;
    });

    // The selection was empty, resolve end immediately
    if (size === 0) resolve();
  });
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/transition/index.js






















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition_transition(name) {
  return src_selection().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = src_selection.prototype;

Transition.prototype = transition_transition.prototype = {
  constructor: Transition,
  select: transition_select,
  selectAll: transition_selectAll,
  selectChild: selection_prototype.selectChild,
  selectChildren: selection_prototype.selectChildren,
  filter: transition_filter,
  merge: transition_merge,
  selection: transition_selection,
  transition: transition,
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: transition_on,
  attr: transition_attr,
  attrTween: transition_attrTween,
  style: transition_style,
  styleTween: transition_styleTween,
  text: transition_text,
  textTween: transition_textTween,
  remove: transition_remove,
  tween: tween,
  delay: delay,
  duration: duration,
  ease: ease,
  easeVarying: transition_easeVarying,
  end: end,
  [Symbol.iterator]: selection_prototype[Symbol.iterator]
};

;// CONCATENATED MODULE: ./node_modules/d3-ease/src/cubic.js
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/transition.js





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: cubicInOut
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      throw new Error(`transition ${id} not found`);
    }
  }
  return timing;
}

/* harmony default export */ function selection_transition(name) {
  var id,
      timing;

  if (name instanceof Transition) {
    id = name._id, name = name._name;
  } else {
    id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        schedule(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new Transition(groups, this._parents, name, id);
}

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/selection/index.js




src_selection.prototype.interrupt = selection_interrupt;
src_selection.prototype.transition = selection_transition;

;// CONCATENATED MODULE: ./node_modules/d3-transition/src/index.js





;// CONCATENATED MODULE: ./node_modules/d3-brush/src/brush.js









var MODE_DRAG = {name: "drag"},
    MODE_SPACE = {name: "space"},
    MODE_HANDLE = {name: "handle"},
    MODE_CENTER = {name: "center"};

const {abs, max, min} = Math;

function number1(e) {
  return [+e[0], +e[1]];
}

function number2(e) {
  return [number1(e[0]), number1(e[1])];
}

var X = {
  name: "x",
  handles: ["w", "e"].map(type),
  input: function(x, e) { return x == null ? null : [[+x[0], e[0][1]], [+x[1], e[1][1]]]; },
  output: function(xy) { return xy && [xy[0][0], xy[1][0]]; }
};

var Y = {
  name: "y",
  handles: ["n", "s"].map(type),
  input: function(y, e) { return y == null ? null : [[e[0][0], +y[0]], [e[1][0], +y[1]]]; },
  output: function(xy) { return xy && [xy[0][1], xy[1][1]]; }
};

var XY = {
  name: "xy",
  handles: ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(type),
  input: function(xy) { return xy == null ? null : number2(xy); },
  output: function(xy) { return xy; }
};

var cursors = {
  overlay: "crosshair",
  selection: "move",
  n: "ns-resize",
  e: "ew-resize",
  s: "ns-resize",
  w: "ew-resize",
  nw: "nwse-resize",
  ne: "nesw-resize",
  se: "nwse-resize",
  sw: "nesw-resize"
};

var flipX = {
  e: "w",
  w: "e",
  nw: "ne",
  ne: "nw",
  se: "sw",
  sw: "se"
};

var flipY = {
  n: "s",
  s: "n",
  nw: "sw",
  ne: "se",
  se: "ne",
  sw: "nw"
};

var signsX = {
  overlay: +1,
  selection: +1,
  n: null,
  e: +1,
  s: null,
  w: -1,
  nw: -1,
  ne: +1,
  se: +1,
  sw: -1
};

var signsY = {
  overlay: +1,
  selection: +1,
  n: -1,
  e: null,
  s: +1,
  w: null,
  nw: -1,
  ne: -1,
  se: +1,
  sw: +1
};

function type(t) {
  return {type: t};
}

// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultExtent() {
  var svg = this.ownerSVGElement || this;
  if (svg.hasAttribute("viewBox")) {
    svg = svg.viewBox.baseVal;
    return [[svg.x, svg.y], [svg.x + svg.width, svg.y + svg.height]];
  }
  return [[0, 0], [svg.width.baseVal.value, svg.height.baseVal.value]];
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

// Like d3.local, but with the name “__brush” rather than auto-generated.
function local(node) {
  while (!node.__brush) if (!(node = node.parentNode)) return;
  return node.__brush;
}

function brush_empty(extent) {
  return extent[0][0] === extent[1][0]
      || extent[0][1] === extent[1][1];
}

function brushSelection(node) {
  var state = node.__brush;
  return state ? state.dim.output(state.selection) : null;
}

function brushX() {
  return brush_brush(X);
}

function brushY() {
  return brush_brush(Y);
}

/* harmony default export */ function brush() {
  return brush_brush(XY);
}

function brush_brush(dim) {
  var extent = defaultExtent,
      filter = defaultFilter,
      touchable = defaultTouchable,
      keys = true,
      listeners = dispatch("start", "brush", "end"),
      handleSize = 6,
      touchending;

  function brush(group) {
    var overlay = group
        .property("__brush", initialize)
      .selectAll(".overlay")
      .data([type("overlay")]);

    overlay.enter().append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", cursors.overlay)
      .merge(overlay)
        .each(function() {
          var extent = local(this).extent;
          select(this)
              .attr("x", extent[0][0])
              .attr("y", extent[0][1])
              .attr("width", extent[1][0] - extent[0][0])
              .attr("height", extent[1][1] - extent[0][1]);
        });

    group.selectAll(".selection")
      .data([type("selection")])
      .enter().append("rect")
        .attr("class", "selection")
        .attr("cursor", cursors.selection)
        .attr("fill", "#777")
        .attr("fill-opacity", 0.3)
        .attr("stroke", "#fff")
        .attr("shape-rendering", "crispEdges");

    var handle = group.selectAll(".handle")
      .data(dim.handles, function(d) { return d.type; });

    handle.exit().remove();

    handle.enter().append("rect")
        .attr("class", function(d) { return "handle handle--" + d.type; })
        .attr("cursor", function(d) { return cursors[d.type]; });

    group
        .each(redraw)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mousedown.brush", started)
      .filter(touchable)
        .on("touchstart.brush", started)
        .on("touchmove.brush", touchmoved)
        .on("touchend.brush touchcancel.brush", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  brush.move = function(group, selection, event) {
    if (group.tween) {
      group
          .on("start.brush", function(event) { emitter(this, arguments).beforestart().start(event); })
          .on("interrupt.brush end.brush", function(event) { emitter(this, arguments).end(event); })
          .tween("brush", function() {
            var that = this,
                state = that.__brush,
                emit = emitter(that, arguments),
                selection0 = state.selection,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent),
                i = interpolate(selection0, selection1);

            function tween(t) {
              state.selection = t === 1 && selection1 === null ? null : i(t);
              redraw.call(that);
              emit.brush();
            }

            return selection0 !== null && selection1 !== null ? tween : tween(1);
          });
    } else {
      group
          .each(function() {
            var that = this,
                args = arguments,
                state = that.__brush,
                selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent),
                emit = emitter(that, args).beforestart();

            interrupt(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start(event).brush(event).end(event);
          });
    }
  };

  brush.clear = function(group, event) {
    brush.move(group, null, event);
  };

  function redraw() {
    var group = select(this),
        selection = local(this).selection;

    if (selection) {
      group.selectAll(".selection")
          .style("display", null)
          .attr("x", selection[0][0])
          .attr("y", selection[0][1])
          .attr("width", selection[1][0] - selection[0][0])
          .attr("height", selection[1][1] - selection[0][1]);

      group.selectAll(".handle")
          .style("display", null)
          .attr("x", function(d) { return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2; })
          .attr("y", function(d) { return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2; })
          .attr("width", function(d) { return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize; })
          .attr("height", function(d) { return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize; });
    }

    else {
      group.selectAll(".selection,.handle")
          .style("display", "none")
          .attr("x", null)
          .attr("y", null)
          .attr("width", null)
          .attr("height", null);
    }
  }

  function emitter(that, args, clean) {
    var emit = that.__brush.emitter;
    return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
  }

  function Emitter(that, args, clean) {
    this.that = that;
    this.args = args;
    this.state = that.__brush;
    this.active = 0;
    this.clean = clean;
  }

  Emitter.prototype = {
    beforestart: function() {
      if (++this.active === 1) this.state.emitter = this, this.starting = true;
      return this;
    },
    start: function(event, mode) {
      if (this.starting) this.starting = false, this.emit("start", event, mode);
      else this.emit("brush", event);
      return this;
    },
    brush: function(event, mode) {
      this.emit("brush", event, mode);
      return this;
    },
    end: function(event, mode) {
      if (--this.active === 0) delete this.state.emitter, this.emit("end", event, mode);
      return this;
    },
    emit: function(type, event, mode) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new BrushEvent(type, {
          sourceEvent: event,
          target: brush,
          selection: dim.output(this.state.selection),
          mode,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function started(event) {
    if (touchending && !event.touches) return;
    if (!filter.apply(this, arguments)) return;

    var that = this,
        type = event.target.__data__.type,
        mode = (keys && event.metaKey ? type = "overlay" : type) === "selection" ? MODE_DRAG : (keys && event.altKey ? MODE_CENTER : MODE_HANDLE),
        signX = dim === Y ? null : signsX[type],
        signY = dim === X ? null : signsY[type],
        state = local(that),
        extent = state.extent,
        selection = state.selection,
        W = extent[0][0], w0, w1,
        N = extent[0][1], n0, n1,
        E = extent[1][0], e0, e1,
        S = extent[1][1], s0, s1,
        dx = 0,
        dy = 0,
        moving,
        shifting = signX && signY && keys && event.shiftKey,
        lockX,
        lockY,
        points = Array.from(event.touches || [event], t => {
          const i = t.identifier;
          t = pointer(t, that);
          t.point0 = t.slice();
          t.identifier = i;
          return t;
        });

    interrupt(that);
    var emit = emitter(that, arguments, true).beforestart();

    if (type === "overlay") {
      if (selection) moving = true;
      const pts = [points[0], points[1] || points[0]];
      state.selection = selection = [[
          w0 = dim === Y ? W : min(pts[0][0], pts[1][0]),
          n0 = dim === X ? N : min(pts[0][1], pts[1][1])
        ], [
          e0 = dim === Y ? E : max(pts[0][0], pts[1][0]),
          s0 = dim === X ? S : max(pts[0][1], pts[1][1])
        ]];
      if (points.length > 1) move(event);
    } else {
      w0 = selection[0][0];
      n0 = selection[0][1];
      e0 = selection[1][0];
      s0 = selection[1][1];
    }

    w1 = w0;
    n1 = n0;
    e1 = e0;
    s1 = s0;

    var group = select(that)
        .attr("pointer-events", "none");

    var overlay = group.selectAll(".overlay")
        .attr("cursor", cursors[type]);

    if (event.touches) {
      emit.moved = moved;
      emit.ended = ended;
    } else {
      var view = select(event.view)
          .on("mousemove.brush", moved, true)
          .on("mouseup.brush", ended, true);
      if (keys) view
          .on("keydown.brush", keydowned, true)
          .on("keyup.brush", keyupped, true)

      dragDisable(event.view);
    }

    redraw.call(that);
    emit.start(event, mode.name);

    function moved(event) {
      for (const p of event.changedTouches || [event]) {
        for (const d of points)
          if (d.identifier === p.identifier) d.cur = pointer(p, that);
      }
      if (shifting && !lockX && !lockY && points.length === 1) {
        const point = points[0];
        if (abs(point.cur[0] - point[0]) > abs(point.cur[1] - point[1]))
          lockY = true;
        else
          lockX = true;
      }
      for (const point of points)
        if (point.cur) point[0] = point.cur[0], point[1] = point.cur[1];
      moving = true;
      noevent(event);
      move(event);
    }

    function move(event) {
      const point = points[0], point0 = point.point0;
      var t;

      dx = point[0] - point0[0];
      dy = point[1] - point0[1];

      switch (mode) {
        case MODE_SPACE:
        case MODE_DRAG: {
          if (signX) dx = max(W - w0, min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
          if (signY) dy = max(N - n0, min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
          break;
        }
        case MODE_HANDLE: {
          if (points[1]) {
            if (signX) w1 = max(W, min(E, points[0][0])), e1 = max(W, min(E, points[1][0])), signX = 1;
            if (signY) n1 = max(N, min(S, points[0][1])), s1 = max(N, min(S, points[1][1])), signY = 1;
          } else {
            if (signX < 0) dx = max(W - w0, min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
            else if (signX > 0) dx = max(W - e0, min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
            if (signY < 0) dy = max(N - n0, min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
            else if (signY > 0) dy = max(N - s0, min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
          }
          break;
        }
        case MODE_CENTER: {
          if (signX) w1 = max(W, min(E, w0 - dx * signX)), e1 = max(W, min(E, e0 + dx * signX));
          if (signY) n1 = max(N, min(S, n0 - dy * signY)), s1 = max(N, min(S, s0 + dy * signY));
          break;
        }
      }

      if (e1 < w1) {
        signX *= -1;
        t = w0, w0 = e0, e0 = t;
        t = w1, w1 = e1, e1 = t;
        if (type in flipX) overlay.attr("cursor", cursors[type = flipX[type]]);
      }

      if (s1 < n1) {
        signY *= -1;
        t = n0, n0 = s0, s0 = t;
        t = n1, n1 = s1, s1 = t;
        if (type in flipY) overlay.attr("cursor", cursors[type = flipY[type]]);
      }

      if (state.selection) selection = state.selection; // May be set by brush.move!
      if (lockX) w1 = selection[0][0], e1 = selection[1][0];
      if (lockY) n1 = selection[0][1], s1 = selection[1][1];

      if (selection[0][0] !== w1
          || selection[0][1] !== n1
          || selection[1][0] !== e1
          || selection[1][1] !== s1) {
        state.selection = [[w1, n1], [e1, s1]];
        redraw.call(that);
        emit.brush(event, mode.name);
      }
    }

    function ended(event) {
      nopropagation(event);
      if (event.touches) {
        if (event.touches.length) return;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
      } else {
        dragEnable(event.view, moving);
        view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
      }
      group.attr("pointer-events", "all");
      overlay.attr("cursor", cursors.overlay);
      if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
      if (brush_empty(selection)) state.selection = null, redraw.call(that);
      emit.end(event, mode.name);
    }

    function keydowned(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          shifting = signX && signY;
          break;
        }
        case 18: { // ALT
          if (mode === MODE_HANDLE) {
            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
            mode = MODE_CENTER;
            move(event);
          }
          break;
        }
        case 32: { // SPACE; takes priority over ALT
          if (mode === MODE_HANDLE || mode === MODE_CENTER) {
            if (signX < 0) e0 = e1 - dx; else if (signX > 0) w0 = w1 - dx;
            if (signY < 0) s0 = s1 - dy; else if (signY > 0) n0 = n1 - dy;
            mode = MODE_SPACE;
            overlay.attr("cursor", cursors.selection);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }

    function keyupped(event) {
      switch (event.keyCode) {
        case 16: { // SHIFT
          if (shifting) {
            lockX = lockY = shifting = false;
            move(event);
          }
          break;
        }
        case 18: { // ALT
          if (mode === MODE_CENTER) {
            if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
            if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
            mode = MODE_HANDLE;
            move(event);
          }
          break;
        }
        case 32: { // SPACE
          if (mode === MODE_SPACE) {
            if (event.altKey) {
              if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
              if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
              mode = MODE_CENTER;
            } else {
              if (signX < 0) e0 = e1; else if (signX > 0) w0 = w1;
              if (signY < 0) s0 = s1; else if (signY > 0) n0 = n1;
              mode = MODE_HANDLE;
            }
            overlay.attr("cursor", cursors[type]);
            move(event);
          }
          break;
        }
        default: return;
      }
      noevent(event);
    }
  }

  function touchmoved(event) {
    emitter(this, arguments).moved(event);
  }

  function touchended(event) {
    emitter(this, arguments).ended(event);
  }

  function initialize() {
    var state = this.__brush || {selection: null};
    state.extent = number2(extent.apply(this, arguments));
    state.dim = dim;
    return state;
  }

  brush.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant(number2(_)), brush) : extent;
  };

  brush.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), brush) : filter;
  };

  brush.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), brush) : touchable;
  };

  brush.handleSize = function(_) {
    return arguments.length ? (handleSize = +_, brush) : handleSize;
  };

  brush.keyModifiers = function(_) {
    return arguments.length ? (keys = !!_, brush) : keys;
  };

  brush.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? brush : value;
  };

  return brush;
}

;// CONCATENATED MODULE: ./node_modules/d3-brush/src/index.js


;// CONCATENATED MODULE: ./node_modules/d3-array/src/range.js
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/init.js
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}

;// CONCATENATED MODULE: ./node_modules/internmap/src/index.js
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (entries != null) for (const [key, value] of entries) this.set(key, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}

class InternSet extends Set {
  constructor(values, key = keyof) {
    super();
    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});
    if (values != null) for (const value of values) this.add(value);
  }
  has(value) {
    return super.has(intern_get(this, value));
  }
  add(value) {
    return super.add(intern_set(this, value));
  }
  delete(value) {
    return super.delete(intern_delete(this, value));
  }
}

function intern_get({_intern, _key}, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}

function intern_set({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}

function intern_delete({_intern, _key}, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}

function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/ordinal.js



const implicit = Symbol("implicit");

function ordinal() {
  var index = new InternMap(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    let i = index.get(d);
    if (i === undefined) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range[i % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  initRange.apply(scale, arguments);

  return scale;
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/band.js




function band() {
  var scale = ordinal().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return initRange.apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/ticks.js
const e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log10(step)),
      error = step / Math.pow(10, power),
      factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}

function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks[i] = (i1 + i) * inc;
  }
  return ticks;
}

function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}

function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/ascending.js
function ascending_ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN
    : b < a ? -1
    : b > a ? 1
    : b >= a ? 0
    : NaN;
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/bisector.js



function bisector(f) {
  let compare1, compare2, delta;

  // If an accessor is specified, promote it to a comparator. In this case we
  // can test whether the search value is (self-) comparable. We can’t do this
  // for a comparator (except for specific, known comparators) because we can’t
  // tell if the comparator is symmetric, and an asymmetric comparator can’t be
  // used to test whether a single value is comparable.
  if (f.length !== 2) {
    compare1 = ascending_ascending;
    compare2 = (d, x) => ascending_ascending(f(d), x);
    delta = (d, x) => f(d) - x;
  } else {
    compare1 = f === ascending_ascending || f === descending ? f : bisector_zero;
    compare2 = f;
    delta = f;
  }

  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0) return hi;
      do {
        const mid = (lo + hi) >>> 1;
        if (compare2(a[mid], x) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }

  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
}

function bisector_zero() {
  return 0;
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/number.js
function number_number(x) {
  return x === null ? NaN : +x;
}

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}

;// CONCATENATED MODULE: ./node_modules/d3-array/src/bisect.js




const ascendingBisect = bisector(ascending_ascending);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = bisector(number_number).center;
/* harmony default export */ const bisect = (bisectRight);

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/array.js



/* harmony default export */ function src_array(a, b) {
  return (isNumberArray(b) ? numberArray : genericArray)(a, b);
}

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = value(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/date.js
/* harmony default export */ function date(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/object.js


/* harmony default export */ function object(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = value(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/numberArray.js
/* harmony default export */ function src_numberArray(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}

function numberArray_isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/value.js










/* harmony default export */ function value(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? d3_interpolate_src_constant(b)
      : (t === "number" ? src_number
      : t === "string" ? ((c = color(b)) ? (b = c, rgb) : string)
      : b instanceof color ? rgb
      : b instanceof Date ? date
      : numberArray_isNumberArray(b) ? src_numberArray
      : Array.isArray(b) ? genericArray
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object
      : src_number)(a, b);
}

;// CONCATENATED MODULE: ./node_modules/d3-interpolate/src/round.js
/* harmony default export */ function round(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/constant.js
function constants(x) {
  return function() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/number.js
function src_number_number(x) {
  return +x;
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/continuous.js





var unit = [0, 1];

function continuous_identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : constants(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = bisect(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = value,
      transform,
      untransform,
      unknown,
      clamp = continuous_identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== continuous_identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), src_number)))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, src_number_number), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = round, rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : continuous_identity, rescale()) : clamp !== continuous_identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(continuous_identity, continuous_identity);
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatSpecifier.js
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatDecimal.js
/* harmony default export */ function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
}

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/exponent.js


/* harmony default export */ function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionPrefix.js


/* harmony default export */ function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatGroup.js
/* harmony default export */ function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatNumerals.js
/* harmony default export */ function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatTrim.js
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ function formatTrim(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatPrefixAuto.js


var prefixExponent;

/* harmony default export */ function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatRounded.js


/* harmony default export */ function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/formatTypes.js




/* harmony default export */ const formatTypes = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});

;// CONCATENATED MODULE: ./node_modules/d3-format/src/identity.js
/* harmony default export */ function d3_format_src_identity(x) {
  return x;
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/locale.js









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ function locale(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? d3_format_src_identity : formatGroup(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? d3_format_src_identity : formatNumerals(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!formatTypes[type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = formatTypes[type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = formatTrim(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/defaultLocale.js


var defaultLocale_locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  defaultLocale_locale = locale(definition);
  format = defaultLocale_locale.format;
  formatPrefix = defaultLocale_locale.formatPrefix;
  return defaultLocale_locale;
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionRound.js


/* harmony default export */ function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}

;// CONCATENATED MODULE: ./node_modules/d3-format/src/precisionFixed.js


/* harmony default export */ function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/tickFormat.js



function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count),
      precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/linear.js





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear_linear() {
  var scale = continuous();

  scale.copy = function() {
    return copy(scale, linear_linear());
  };

  initRange.apply(scale, arguments);

  return linearish(scale);
}

;// CONCATENATED MODULE: ./node_modules/d3-scale/src/index.js


































;// CONCATENATED MODULE: ./node_modules/d3-selection/src/select.js


/* harmony default export */ function src_select(selector) {
  return typeof selector === "string"
      ? new Selection([[document.querySelector(selector)]], [document.documentElement])
      : new Selection([[selector]], root);
}

;// CONCATENATED MODULE: ./node_modules/d3-selection/src/index.js
















;// CONCATENATED MODULE: ./node_modules/d3-shape/src/constant.js
/* harmony default export */ function d3_shape_src_constant(x) {
  return function constant() {
    return x;
  };
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/math.js
const math_abs = Math.abs;
const atan2 = Math.atan2;
const cos = Math.cos;
const math_max = Math.max;
const math_min = Math.min;
const sin = Math.sin;
const sqrt = Math.sqrt;

const math_epsilon = 1e-12;
const pi = Math.PI;
const halfPi = pi / 2;
const tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}

;// CONCATENATED MODULE: ./node_modules/d3-path/src/path.js
const path_pi = Math.PI,
    path_tau = 2 * path_pi,
    path_epsilon = 1e-6,
    tauEpsilon = path_tau - path_epsilon;

function path_append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}

function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return path_append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}

class Path {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
    this._append = digits == null ? path_append : appendRound(digits);
  }
  moveTo(x, y) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x, y) {
    this._append`L${this._x1 = +x},${this._y1 = +y}`;
  }
  quadraticCurveTo(x1, y1, x, y) {
    this._append`Q${+x1},${+y1},${this._x1 = +x},${this._y1 = +y}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x, y) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x},${this._y1 = +y}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > path_epsilon));

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > path_epsilon) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    }

    // Otherwise, draw an arc!
    else {
      let x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((path_pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > path_epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }

      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r, ccw = !!ccw;

    // Is the radius negative? Error.
    if (r < 0) throw new Error(`negative radius: ${r}`);

    let dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > path_epsilon || Math.abs(this._y1 - y0) > path_epsilon) {
      this._append`L${x0},${y0}`;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % path_tau + path_tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x - dx},${y - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > path_epsilon) {
      this._append`A${r},${r},0,${+(da >= path_pi)},${cw},${this._x1 = x + r * Math.cos(a1)},${this._y1 = y + r * Math.sin(a1)}`;
    }
  }
  rect(x, y, w, h) {
    this._append`M${this._x0 = this._x1 = +x},${this._y0 = this._y1 = +y}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
}

function path() {
  return new Path;
}

// Allow instanceof d3.path
path.prototype = Path.prototype;

function pathRound(digits = 3) {
  return new Path(+digits);
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/path.js


function withPath(shape) {
  let digits = 3;

  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };

  return () => new Path(digits);
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/arc.js




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = y32 * x10 - x32 * y10;
  if (t * t < math_epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * sqrt(math_max(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ function src_arc() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = d3_shape_src_constant(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null,
      path = withPath(arc);

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - halfPi,
        a1 = endAngle.apply(this, arguments) - halfPi,
        da = math_abs(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = path();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > math_epsilon)) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > tau - math_epsilon) {
      context.moveTo(r1 * cos(a0), r1 * sin(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > math_epsilon) {
        context.moveTo(r0 * cos(a1), r0 * sin(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > math_epsilon) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
          rc = math_min(math_abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > math_epsilon) {
        var p0 = asin(rp / r0 * sin(ap)),
            p1 = asin(rp / r1 * sin(ap));
        if ((da0 -= p0 * 2) > math_epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > math_epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * cos(a01),
          y01 = r1 * sin(a01),
          x10 = r0 * cos(a10),
          y10 = r0 * sin(a10);

      // Apply rounded corners?
      if (rc > math_epsilon) {
        var x11 = r1 * cos(a11),
            y11 = r1 * sin(a11),
            x00 = r0 * cos(a00),
            y00 = r0 * sin(a00),
            oc;

        // Restrict the corner radius according to the sector angle. If this
        // intersection fails, it’s probably because the arc is too small, so
        // disable the corner radius entirely.
        if (da < pi) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0],
                ay = y01 - oc[1],
                bx = x11 - oc[0],
                by = y11 - oc[1],
                kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
                lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = math_min(rc, (r0 - lc) / (kc - 1));
            rc1 = math_min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > math_epsilon)) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > math_epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > math_epsilon) || !(da0 > math_epsilon)) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > math_epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos(a) * r, sin(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;

/* harmony default export */ function d3_shape_src_array(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/descending.js
/* harmony default export */ function src_descending(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/identity.js
/* harmony default export */ function d3_shape_src_identity(d) {
  return d;
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/pie.js






/* harmony default export */ function src_pie() {
  var value = d3_shape_src_identity,
      sortValues = src_descending,
      sort = null,
      startAngle = d3_shape_src_constant(0),
      endAngle = d3_shape_src_constant(tau),
      padAngle = d3_shape_src_constant(0);

  function pie(data) {
    var i,
        n = (data = d3_shape_src_array(data)).length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : d3_shape_src_constant(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : d3_shape_src_constant(+_), pie) : padAngle;
  };

  return pie;
}

;// CONCATENATED MODULE: ./node_modules/d3-shape/src/index.js




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!
















































;// CONCATENATED MODULE: ./node_modules/d3-zoom/src/transform.js
function transform_Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

transform_Transform.prototype = {
  constructor: transform_Transform,
  scale: function(k) {
    return k === 1 ? this : new transform_Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new transform_Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var transform_identity = new transform_Transform(1, 0, 0);

transform.prototype = transform_Transform.prototype;

function transform(node) {
  while (!node.__zoom) if (!(node = node.parentNode)) return transform_identity;
  return node.__zoom;
}

;// CONCATENATED MODULE: ./node_modules/d3-zoom/src/zoom.js










// Ignore right-click, since that should open the context menu.
// except for pinch-to-zoom, which is sent as a wheel+ctrlKey event
function zoom_defaultFilter(event) {
  return (!event.ctrlKey || event.type === 'wheel') && !event.button;
}

function zoom_defaultExtent() {
  var e = this;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    if (e.hasAttribute("viewBox")) {
      e = e.viewBox.baseVal;
      return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
    }
    return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
  }
  return [[0, 0], [e.clientWidth, e.clientHeight]];
}

function defaultTransform() {
  return this.__zoom || identity;
}

function defaultWheelDelta(event) {
  return -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * (event.ctrlKey ? 10 : 1);
}

function zoom_defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ function zoom() {
  var filter = zoom_defaultFilter,
      extent = zoom_defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = zoom_defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = interpolateZoom,
      listeners = dispatch("start", "zoom", "end"),
      touchstarting,
      touchfirst,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0,
      tapDistance = 10;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled, {passive: false})
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform, point, event) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform, point, event);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
          .event(event)
          .start()
          .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
          .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k, p, event) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    }, p, event);
  };

  zoom.scaleTo = function(selection, k, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p,
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    }, p, event);
  };

  zoom.translateBy = function(selection, x, y, event) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    }, null, event);
  };

  zoom.translateTo = function(selection, x, y, p, event) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
      return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    }, p, event);
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, point, event) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).event(event).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).event(event).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args).event(event),
              e = extent.apply(that, args),
              p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point,
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args, clean) {
    return (!clean && that.__zooming) || new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.active = 0;
    this.sourceEvent = null;
    this.extent = extent.apply(that, args);
    this.taps = 0;
  }

  Gesture.prototype = {
    event: function(event) {
      if (event) this.sourceEvent = event;
      return this;
    },
    start: function() {
      if (++this.active === 1) {
        this.that.__zooming = this;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        delete this.that.__zooming;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      var d = select(this.that).datum();
      listeners.call(
        type,
        this.that,
        new ZoomEvent(type, {
          sourceEvent: this.sourceEvent,
          target: zoom,
          type,
          transform: this.that.__zoom,
          dispatch: listeners
        }),
        d
      );
    }
  };

  function wheeled(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, args).event(event),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = pointer(event);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      interrupt(this);
      g.start();
    }

    noevent(event);
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned(event, ...args) {
    if (touchending || !filter.apply(this, arguments)) return;
    var currentTarget = event.currentTarget,
        g = gesture(this, args, true).event(event),
        v = select(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = pointer(event, currentTarget),
        x0 = event.clientX,
        y0 = event.clientY;

    dragDisable(event.view);
    nopropagation(event);
    g.mouse = [p, this.__zoom.invert(p)];
    interrupt(this);
    g.start();

    function mousemoved(event) {
      noevent(event);
      if (!g.moved) {
        var dx = event.clientX - x0, dy = event.clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.event(event)
       .zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped(event) {
      v.on("mousemove.zoom mouseup.zoom", null);
      dragEnable(event.view, g.moved);
      noevent(event);
      g.event(event).end();
    }
  }

  function dblclicked(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = pointer(event.changedTouches ? event.changedTouches[0] : event, this),
        p1 = t0.invert(p0),
        k1 = t0.k * (event.shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);

    noevent(event);
    if (duration > 0) select(this).transition().duration(duration).call(schedule, t1, p0, event);
    else select(this).call(zoom.transform, t1, p0, event);
  }

  function touchstarted(event, ...args) {
    if (!filter.apply(this, arguments)) return;
    var touches = event.touches,
        n = touches.length,
        g = gesture(this, args, event.changedTouches.length === n).event(event),
        started, i, t, p;

    nopropagation(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
      else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
    }

    if (touchstarting) touchstarting = clearTimeout(touchstarting);

    if (started) {
      if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      interrupt(this);
      g.start();
    }
  }

  function touchmoved(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t, p, l;

    noevent(event);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = pointer(t, this);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;

    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended(event, ...args) {
    if (!this.__zooming) return;
    var g = gesture(this, args).event(event),
        touches = event.changedTouches,
        n = touches.length, i, t;

    nopropagation(event);
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else {
      g.end();
      // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
      if (g.taps === 2) {
        t = pointer(t, this);
        if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
          var p = select(this).on("dblclick.zoom");
          if (p) p.apply(this, arguments);
        }
      }
    }
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : constant(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : constant(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : constant([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  zoom.tapDistance = function(_) {
    return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
  };

  return zoom;
}

;// CONCATENATED MODULE: ./node_modules/d3-zoom/src/index.js



;// CONCATENATED MODULE: ./node_modules/d3/src/index.js































;// CONCATENATED MODULE: ./src/app/components/d3/barChart.jsx





const BarChart = ({
  data,
  height: _height = 800,
  width: _width = 600,
  barColor,
  minValue,
  tick,
  maxValue,
  title,
  caption
}) => {
  const svgRef = (0,react.useRef)();
  const margin = {
    top: 20,
    left: 60,
    bottom: 50,
    right: 60
  };
  (0,react.useEffect)(() => {
    const svg = src_select(svgRef.current);
    const fontSize = '4rem';
    const axisFontSize = '1.5rem';

    // Set up scales
    const xScale = band().domain(data.map(d => d.x)).range([0, _width - margin.right]).padding(0.2);
    const yScale = linear_linear().domain([minValue, maxValue]).range([_height - margin.bottom, margin.bottom]);

    // Draw grid background
    svg.selectAll('.grid').data(yScale.ticks(tick)).enter().append('line').attr('transform', `translate(${margin.right}, 0)`).attr('class', 'grid').attr('x1', 0).attr('x2', _width - margin.right).attr('y1', d => yScale(d) - margin.top).attr('y2', d => yScale(d) - margin.top).style('stroke', 'lightgray').style('stroke-opacity', 0.9).style('stroke-dasharray', '2,2');
    const gradient = svg.append('defs').append('linearGradient').attr('id', 'gradient').attr('x1', '0%').attr('y1', '0%').attr('x2', '100%').attr('y2', '0%');
    gradient.append('stop').attr('offset', '0%').attr('stop-color', `${colors.mainBlue}`);
    gradient.append('stop').attr('offset', '100%').attr('stop-color', `${colors.darkBlue}`);

    //Draw Bar
    svg.selectAll('rect').data(data).join('rect').attr('transform', `translate(${margin.left}, 0)`).attr('x', d => xScale(d.x)).attr('y', d => yScale(d.y) - margin.top).attr('width', xScale.bandwidth()).attr('height', d => _height - yScale(d.y) - margin.bottom).attr('fill', 'url(#gradient)');

    //Value label
    svg.selectAll('text').data(data).join('text').attr('transform', `translate(${margin.left}, 0)`).attr('x', d => xScale(d.x) + xScale.bandwidth() / 2).attr('y', d => yScale(d.y) - 75).text(d => d.y + caption).attr('text-anchor', 'middle').attr('font-size', fontSize).attr('font-weight', '600').style('font-family', 'Barlow').attr('fill', `${colors.mainBlue}`);

    //Title
    svg.append('text').attr('x', _width / 2).attr('y', margin.top / 2).text(title).style('text-anchor', 'middle').style('font-size', '70px').style('font-weight', '900').style('font-family', 'Barlow').attr('fill', `${colors.darkBlue}`);

    // Draw x-axis
    svg.append('g').attr('transform', `translate(${margin.right}, ${_height - margin.bottom - 20})`).call(axisBottom(xScale)).selectAll('text').style('font-size', '2rem').attr('font-weight', '800').style('font-family', 'Barlow');

    // Draw y-axis
    svg.append('g').attr('transform', `translate(${margin.left}, -${margin.top})`).call(axisLeft(yScale).ticks(tick)).selectAll('text').style('font-size', axisFontSize).style('font-family', 'Barlow');
    ////
  }, [data, _height, _width, barColor, minValue, tick, margin.bottom, margin.left, margin.right, margin.top, title, maxValue, caption]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSvg, {
    viewBox: `0 0 ${_width} ${_height}`,
    preserveAspectRatio: "xMidYMid meet",
    ref: svgRef
  });
};
const StyledSvg = /*#__PURE__*/styled_components_browser_cjs/* default.svg.withConfig */.ZP.svg.withConfig({
  displayName: "barChart__StyledSvg",
  componentId: "ftuwnr-0"
})(["overflow:visible;height:100%;width:100%;"]);
/* harmony default export */ const barChart = (BarChart);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/app/components/Modal.jsx




const Modal = ({
  content,
  isOpen,
  closeModal
}) => {
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(Modal_StyledContainer, {
    onClick: closeModal,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledWindow, {
      onClick: event => event.stopPropagation(),
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Modal_StyledContent, {
        children: content
      })
    })
  }), document.body);
};
const Modal_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Modal__StyledContainer",
  componentId: "ecm1ey-0"
})(["width:100vw;height:100vh;position:fixed;top:0;left:0;background:rgba(0,0,0,0.3);z-index:100;"]);
const StyledWindow = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Modal__StyledWindow",
  componentId: "ecm1ey-1"
})(["width:300px;background:white;box-shadow:0px 0px 9px rgba(0,0,0,0.25);border-radius:5px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"]);
const Modal_StyledContent = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Modal__StyledContent",
  componentId: "ecm1ey-2"
})(["box-sizing:border-box;padding:20px 10px;display:flex;align-items:center;justify-content:center;"]);
/* harmony default export */ const components_Modal = (/*#__PURE__*/(0,react.memo)(Modal));
;// CONCATENATED MODULE: ./src/app/pages/projects/AthleteCharts.jsx













const AthleteCharts = () => {
  const [value, setValue] = (0,react.useState)('');
  const dispatch = (0,lib.useDispatch)();
  const [athlete1, setAthlete1] = (0,react.useState)();
  const [athlete2, setAthlete2] = (0,react.useState)();
  const [isModalOpen, setModalOpen] = (0,react.useState)(true);
  const [isChartViewShowing, setChartViewShowing] = (0,react.useState)(false);
  const players = (0,lib.useSelector)(athleteSelectors.getAllPlayers);
  const error = (0,lib.useSelector)(athleteSelectors.getError);
  const loadingStatus = (0,lib.useSelector)(athleteSelectors.getLoadingStatus);
  const searchPlayer = async () => {
    if (value !== '') {
      dispatch(await athleteActions.clearPlayers());
      dispatch(await fetchPlayerByName(value));
    }
  };
  const calculateAge = date => {
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  const clearPlayers = async () => {
    dispatch(athleteActions.clearPlayers());
  };
  const resetSelections = async () => {
    setAthlete1();
    setAthlete2();
    dispatch(await athleteActions.clearPlayers());
  };
  const getAthleteById = id => {
    return players.find(player => player.id === id);
  };
  const selectAthlete = id => {
    if (!athlete1) {
      setAthlete1(getAthleteById(id));
    } else if (!athlete2) {
      setAthlete2(getAthleteById(id));
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Modal, {
      isOpen: isModalOpen,
      closeModal: () => {
        setModalOpen(false);
      },
      content: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        alignItems: "center",
        gap: "20px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: "red",
          children: "DISCLAIMER"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "All information is being fetched from a Public API, which does not have entirely accurate information for all athletes."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "Most accurate results will be from choosing 2 soccer players. Start searching!"
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(TopSectionContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        gap: "5px",
        width: "100%",
        children: [error && /*#__PURE__*/(0,jsx_runtime.jsx)(StyledError, {
          children: error
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
          gap: "5px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_SearchBar, {
            placeholder: 'Search by Last Name',
            enterToggle: searchPlayer,
            setValue: setValue
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SearchButton, {
            isActive: value !== '',
            onClick: searchPlayer,
            children: "Search"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(ClearButton, {
            isActive: players.length > 0,
            onClick: clearPlayers,
            children: "Clear"
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(AthleteList, {
          children: loadingStatus !== 'loading' ? players.length > 0 ? players.map(player => /*#__PURE__*/(0,jsx_runtime.jsxs)(AthleteTile, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              weight: "bold",
              color: colors.mainBlue,
              children: player.name
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectButton, {
              isActive: !athlete1 || !athlete2,
              onClick: () => {
                selectAthlete(player.id);
              },
              children: "Select"
            })]
          }, player.id)) : /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
            children: "No Players"
          }) : /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
            children: "Loading..."
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerContainer, {
      isChartViewShowing: isChartViewShowing,
      children: !isChartViewShowing ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [athlete1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(PlayerProfileTile, {
          id: "athlete1",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(PlayerTitle, {
            children: [" ", athlete1.name]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(AthleteCharts_StyledImage, {
            src: athlete1.imageLink,
            alt: `${athlete1.name}_image`
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Age:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: calculateAge(new Date(athlete1.DOB))
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Team: \xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete1.teamName
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Position:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete1.position
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Height:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete1.height
            })]
          })]
        }), athlete1 && athlete2 && /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
          gap: "5px",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SelectButton, {
            onClick: resetSelections,
            isActive: true,
            children: "Reset"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectButton, {
            onClick: () => {
              setChartViewShowing(true);
            },
            isActive: true,
            children: "Compare"
          })]
        }), athlete2 && /*#__PURE__*/(0,jsx_runtime.jsxs)(PlayerProfileTile, {
          id: "athlete2",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(PlayerTitle, {
            children: [" ", athlete2.name]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(AthleteCharts_StyledImage, {
            src: athlete2.imageLink,
            alt: `${athlete2.name}_image`
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Age:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: calculateAge(new Date(athlete2.DOB))
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Team:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete2.teamName
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Position:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete2.position
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexRow, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
              children: "Height:\xA0"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerDetails, {
              children: athlete2.height
            })]
          })]
        })]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(ChartContainer, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(ViewButton, {
            onClick: () => {
              setChartViewShowing(false);
            },
            children: "Regular View"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(barChart, {
            data: [{
              x: athlete1.name,
              y: calculateAge(new Date(athlete1.DOB))
            }, {
              x: athlete2.name,
              y: calculateAge(new Date(athlete2.DOB))
            }],
            barColor: colors.darkBlue,
            minValue: 0,
            maxValue: 90,
            tick: 10,
            title: 'Age',
            caption: ' yrs'
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ChartContainer, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(barChart, {
            data: [{
              x: athlete1.name,
              y: athlete1.weight
            }, {
              x: athlete2.name,
              y: athlete2.weight
            }],
            barColor: colors.darkBlue,
            minValue: 0,
            maxValue: 300,
            tick: 10,
            title: 'Weight',
            caption: ' lbs'
          })
        })]
      })
    })]
  });
};
/* harmony default export */ const projects_AthleteCharts = (AthleteCharts);
const PlayerContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__PlayerContainer",
  componentId: "sc-1kbejkj-0"
})(["position:relative;height:70%;width:90%;background:white;display:grid;grid-template-columns:40% 10% 40%;justify-content:center;align-items:center;margin:auto;border-radius:10px;margin-bottom:25px;gap:25px;padding:0 15px;justify-items:center;", ""], ({
  isChartViewShowing
}) => isChartViewShowing && `  
       grid-template-columns: repeat(2,1fr);
  `);
const TopSectionContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__TopSectionContainer",
  componentId: "sc-1kbejkj-1"
})(["position:relative;display:flex;width:80%;background:white;border-radius:10px;margin:10px auto;border:3px solid ", ";padding-top:15px;align-items:flex-start;padding:10px 15px;"], colors.darkBlue);
const SearchButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "AthleteCharts__SearchButton",
  componentId: "sc-1kbejkj-2"
})(["display:flex;width:100px;height:25px;border-radius:25px;color:white;background:", ";justify-content:center;align-items:center;font-family:Barlow;font-weight:bold;border:1px solid white;border:1px solid transparent;:hover{color:", ";background:", ";border:1px solid ", ";}", ";"], colors.darkBlue, colors.darkBlue, colors.mainBlue, colors.darkBlue, ({
  isActive
}) => !isActive && `  
      opacity: 0.5;
      pointer-events: none;
  `);
const ClearButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "AthleteCharts__ClearButton",
  componentId: "sc-1kbejkj-3"
})(["display:flex;width:100px;height:25px;border-radius:25px;color:white;background:#bf5353;justify-content:center;align-items:center;font-family:Barlow;font-weight:bold;border:1px solid white;border:1px solid transparent;:hover{color:#bf5353;background:white;border:1px solid #bf5353;}", ";"], ({
  isActive
}) => !isActive && `  
      opacity: 0.5;
      pointer-events: none;
  `);
const ViewButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "AthleteCharts__ViewButton",
  componentId: "sc-1kbejkj-4"
})(["position:absolute;top:15px;right:15px;display:flex;width:fit-content;height:25px;border-radius:25px;color:white;background:", ";justify-content:center;align-items:center;font-family:Barlow;font-weight:bold;border:1px solid white;border:1px solid transparent;:hover{color:", ";background:white;border:1px solid ", ";}"], colors.darkBlue, colors.darkBlue, colors.darkBlue);
const StyledError = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "AthleteCharts__StyledError",
  componentId: "sc-1kbejkj-5"
})(["font-size:8px;color:red;font-family:Barlow;font-weight:bold;margin:0;"]);
const AthleteTile = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__AthleteTile",
  componentId: "sc-1kbejkj-6"
})(["display:flex;border-top:1px dashed ", ";border-bottom:1px dashed ", ";justify-content:space-between;align-items:center;padding:5px 6px 5px 0;"], colors.darkBlue, colors.darkBlue);
const AthleteList = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__AthleteList",
  componentId: "sc-1kbejkj-7"
})(["display:flex;flex-direction:column;overflow-y:scroll;border:1px solid ", ";height:90px;border-radius:10px;padding-left:5px;"], colors.darkBlue);
const SelectButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "AthleteCharts__SelectButton",
  componentId: "sc-1kbejkj-8"
})(["display:flex;width:75px;height:30px;border-radius:25px;color:white;background:", ";justify-content:center;align-items:center;font-family:Barlow;font-weight:bold;border:1px solid white;border:1px solid transparent;:hover{color:", ";background:white;border:1px solid ", ";}", ";"], colors.darkBlue, colors.darkBlue, colors.darkBlue, ({
  isActive
}) => !isActive && `  
      opacity: 0.5;
      pointer-events: none;
  `);
const PlayerProfileTile = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__PlayerProfileTile",
  componentId: "sc-1kbejkj-9"
})(["display:flex;flex-direction:column;border:5px solid ", ";height:90%;border-radius:10px;justify-content:flex-start;align-items:center;width:100%;"], colors.darkBlue);
const PlayerTitle = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "AthleteCharts__PlayerTitle",
  componentId: "sc-1kbejkj-10"
})(["font-family:Barlow;color:", ";font-size:28px;font-weight:800;margin 0;"], colors.mainBlue);
const PlayerDetails = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "AthleteCharts__PlayerDetails",
  componentId: "sc-1kbejkj-11"
})(["font-family:Barlow;color:", ";font-size:16px;margin 0;"], colors.mainBlue);
const AthleteCharts_StyledImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "AthleteCharts__StyledImage",
  componentId: "sc-1kbejkj-12"
})(["width:80px;height:80px;margin-bottom:15px;"]);
const ChartContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "AthleteCharts__ChartContainer",
  componentId: "sc-1kbejkj-13"
})(["display:flex;height:80%;"]);
;// CONCATENATED MODULE: ./src/app/components/ProjectCard.jsx






const ProjectCard = ({
  name,
  titleColor,
  mainColor,
  background,
  logo,
  year,
  logoColor: _logoColor = 'white',
  description,
  link
}) => {
  const [isFlipped, setIsFlipped] = (0,react.useState)(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: !isFlipped ? /*#__PURE__*/(0,jsx_runtime.jsxs)(Card, {
      onClick: handleClick,
      isFlipped: isFlipped,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Logo, {
        color: _logoColor,
        logo: logo
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Frame, {
        background: background,
        color: mainColor
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(NamePlate, {
        color: titleColor,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NameText, {
          children: name
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(YearText, {
          children: ["(", year, ")"]
        })]
      })]
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(Card, {
      onClick: handleClick,
      isFlipped: isFlipped,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Frame, {
        isFlipped: isFlipped,
        color: mainColor,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CardHeader, {
          color: "white",
          children: name
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(DescriptionText, {
          children: description
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(ProjectCard_StyledLink, {
          to: link,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(ContinueButton, {
            isFlipped: isFlipped,
            children: "Continue"
          })
        })]
      })
    })
  });
};
/* harmony default export */ const components_ProjectCard = (ProjectCard);
const Card = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ProjectCard__Card",
  componentId: "f471gr-0"
})(["position:relative;display:flex;height:500px;background:#c5a34c;border-radius:1px;box-shadow:5px 6px 3px 0px #00000042;align-items:flex-start;justify-content:center;border:1px solid black;transition:transform 1s;transform-style:preserve-3d;background-image:url('./assets/images/woodBackground.jpg');", ";"], ({
  isFlipped
}) => isFlipped && `  
     transform: rotateY(180deg);
    `);
const Logo = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ProjectCard__Logo",
  componentId: "f471gr-1"
})(["position:absolute;display:flex;justify-content:center;align-items:center;border:1px solid black;border-radius:100%;top:15px;left:15px;height:100px;width:100px;background:", ";z-index:5;border:1px solid white;background-image:url(", ");background-repeat:no-repeat;background-size:100%;background-position:center;"], props => props.color, props => props.logo);
const NamePlate = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ProjectCard__NamePlate",
  componentId: "f471gr-2"
})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid black;bottom:25px;right:15px;height:50px;width:170px;background:", ";z-index:5;color:white;font-size:12px;"], props => props.color);
const NameText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "ProjectCard__NameText",
  componentId: "f471gr-3"
})(["color:white;font-family:Sigmar One;font-size:16px;margin:0;text-align:center;line-height:100%;"]);
const YearText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "ProjectCard__YearText",
  componentId: "f471gr-4"
})(["color:white;font-family:Sigmar One;font-size:12px;margin:0;"]);
const Frame = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ProjectCard__Frame",
  componentId: "f471gr-5"
})(["display:grid;align-items:center;justify-items:center;grid-template-rows:1fr 2fr 2fr;gap:5px;position:relative;width:300px;height:450px;background-image:url(", ");background-color:", ";margin:15px;z-index:1;border:1px double black;background-repeat:no-repeat;background-size:100%;background-position:left;", ";", ";"], props => props.background, props => props.color, ({
  isFlipped
}) => !isFlipped && `  
      ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 50px solid black;
    border-left: 50px solid transparent;
    rotate: -90deg;
    z-index: 3;
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-top: 50px solid black;
    border-left: 50px solid transparent;
    rotate: 90deg;
    z-index: 3;
  }
    `, ({
  isFlipped
}) => isFlipped && `  
     transform: rotateY(180deg);
    `);
const ProjectCard_StyledLink = /*#__PURE__*/(0,styled_components_browser_cjs/* default */.ZP)(react_router_dom_production_min.Link).withConfig({
  displayName: "ProjectCard__StyledLink",
  componentId: "f471gr-6"
})(["text-decoration:none;width:fit-content;"]);
const ContinueButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "ProjectCard__ContinueButton",
  componentId: "f471gr-7"
})(["width:100px;height:40px;border-radius:10px;background:", ";color:white;border:1px solid transparent;display:flex;align-items:center;justify-content:center;font-size:18px;:hover{background:white;color:", ";border:1px solid ", ";}"], colors.darkBlue, colors.darkBlue, colors.darkBlue);
const DescriptionText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "ProjectCard__DescriptionText",
  componentId: "f471gr-8"
})(["margin:0;display:inline-flex;width:fit-content;font-family:Barlow;text-align:center;color:white;font-size:14px;"]);
const CardHeader = /*#__PURE__*/styled_components_browser_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "ProjectCard__CardHeader",
  componentId: "f471gr-9"
})(["color:white;width:fit-content;font-family:Barlow;margin:0;font-weight:800;display:inline-flex;font-size:33px;text-decoration:underline;text-align:center;"]);
;// CONCATENATED MODULE: ./src/app/pages/Projects.jsx






const Projects = () => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(HeaderContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header1, {
        style: {
          textAlign: 'center'
        },
        color: 'white',
        children: "Project Binder"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(SubHeader1, {
        color: 'white',
        children: ["Click a Project Card to learn more...", ' ']
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
        color: "white",
        children: '(Modeled after Topps Baseball cards )'
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Projects_StyledContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_ProjectCard, {
        titleColor: colors.darkBlue,
        mainColor: colors.mainBlue,
        background: './assets/images/univend.png',
        name: "Univend",
        logo: './assets/images/univendLogo.png',
        year: "2020",
        link: "/projects/univend",
        description: "Univend is a mobile-application (prototype) intended to be used by college students all over the United States. Univend allows users to access useful information about where snack machines, drink machines, and water fountains are located on your campus! Search for specific foods, drinks or filter your view options. Univend is a user-friendly, easy to understand application that fulfills all your vending machine inquiries. Let's start snacking!"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProjectCard, {
        titleColor: '#7d1f00',
        mainColor: '#db5b37',
        background: './assets/images/d3Background.png',
        name: "Athlete Charts",
        logo: './assets/images/d3Logo.png',
        year: "2023",
        logoColor: '#7d1f00',
        link: "/projects/athlete-charts",
        description: 'Athlete Charts is a project using a public API server, allowing a user to select two athletes within the database. These two athletes can then be compared in 2 views. Basic View and Chart View. The chart view is created by using D3js.'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProjectCard, {
        titleColor: '#044759',
        mainColor: '#0a7e9e',
        background: './assets/images/bitmoji-computer.png',
        name: "Finders Keepers",
        logo: './assets/images/flashlight.png',
        year: "2023",
        logoColor: '#044759',
        link: "/projects/finders-keepers",
        description: 'Finders Keepers is a user-interactive game that allows a user to use their mouse like a flashlight to find my icon. Click my icon as many times as you can and rack up a high score!'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProjectCard, {
        titleColor: '#2e355e',
        mainColor: '#142167',
        background: './assets/images/bitmoji-football.png',
        name: "Fantasy Football",
        logo: './assets/images/sleeper.png',
        year: "2024",
        logoColor: 'white',
        link: "/projects/sleeper-dynasty",
        description: 'Fantasy Football App integrates the Sleeper API to track and analyze statistics in my Dynasty Fantasy Football League'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_ProjectCard, {
        titleColor: '#73abe3',
        mainColor: '#5572c3',
        background: './assets/images/bitmoji-frustrated.png',
        name: "Impossible Signup",
        logo: './assets/images/computer.svg',
        year: "2024",
        logoColor: '#73d2e3',
        link: "/projects/impossible-signup",
        description: 'Impossible Signup. Enter your username and password, then click Submit...if you can.'
      })]
    })]
  });
};
/* harmony default export */ const pages_Projects = (Projects);
const Projects_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Projects__StyledContainer",
  componentId: "sc-1m45dox-0"
})(["display:flex;flex-wrap:wrap;padding:0 15px;margin:3%;justify-items:center;row-gap:30px;background:white;padding:50px 15px;border-radius:10px;justify-content:space-around;box-shadow:5px 4px 9px 1px #73707099;"]);
const HeaderContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Projects__HeaderContainer",
  componentId: "sc-1m45dox-1"
})(["display:flex;justify-content:center;align-items:center;margin-top:25px;flex-direction:column;"]);
;// CONCATENATED MODULE: ./src/app/pages/projects/Univend.jsx







const Univend = () => {
  const container = (0,react.useRef)(null);
  const [isModalOpen, setModalOpen] = (0,react.useState)(false);
  const [currentImage, setCurrentImage] = (0,react.useState)('../../assets/univend/Key-Info.jpg');
  const scrollLeft = () => {
    container.current.scrollTo({
      left: container.current.scrollLeft -= 100,
      behavior: 'smooth'
    });
  };
  const scrollRight = () => {
    container.current.scrollTo({
      left: container.current.scrollLeft += 100,
      behavior: 'smooth'
    });
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const setAndOpenModal = url => {
    setCurrentImage(url);
    setModalOpen(true);
  };
  (0,react.useEffect)(() => {
    //doNothing
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Univend_StyledContainer, {
      width: "80%",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header1, {
        color: colors.mainBlue,
        children: "Univend (2020)"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubHeader1, {
        color: colors.darkBlue,
        children: "Univend is a mobile-application (prototype) intended to be used by college students all over the United States. Univend allows users to access useful information about where snack machines, drink machines, and water fountains are located on your campus! Search for specific foods, drinks or filter your view options. Univend is a user-friendly, easy to understand application that fulfills all your vending machine inquiries. Let's start snacking!"
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Univend_StyledContainer, {
      width: "90%",
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Univend_NavButton, {
        onClick: scrollRight,
        top: "50%",
        right: "2%",
        children: '>'
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_NavButton, {
        onClick: scrollLeft,
        top: "50%",
        left: "2%",
        children: '<'
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        alignItems: "center",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Header1, {
          color: colors.mainBlue,
          children: "Hi-Fidelity Mock ups"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(SubHeader1, {
          color: "#949494",
          children: "Click to zoom in"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Univend_ImageContainer, {
        ref: container,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/SplashScreen.jpg',
          alt: "splashScreen"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/ChoosingUniversity.jpg',
          alt: "selectCampus"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/Map-MainMenu.jpg',
          alt: "mainMenu"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/Search.jpg',
          alt: "search"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/List.jpg',
          alt: "listView"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/Filter.jpg',
          alt: "filter"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/Key-Info.jpg',
          alt: "infoKey"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Univend_StyledImage, {
          onClick: e => {
            setAndOpenModal(e.target.src);
          },
          src: './assets/univend/Settings.jpg',
          alt: "settings"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_Modal, {
      isOpen: isModalOpen,
      closeModal: closeModal,
      content: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledPopupImage, {
        src: currentImage,
        alt: "image"
      })
    })]
  });
};
/* harmony default export */ const projects_Univend = (Univend);
const Univend_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Univend__StyledContainer",
  componentId: "sc-1qs3t4z-0"
})(["position:relative;display:flex;flex-direction:column;width:", ";background:white;border-radius:10px;margin:10px auto;border:3px solid ", ";padding-top:15px;align-items:flex-start;padding:10px 15px;align-items:center;gap:15px;text-align:center;"], props => props.width, colors.darkBlue);
const Univend_ImageContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Univend__ImageContainer",
  componentId: "sc-1qs3t4z-1"
})(["display:flex;flex-direction:row;overflow-x:scroll;overflow-y:hidden;width:90%;gap:25px;scroll-behavior:smooth;"]);
const Univend_StyledImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "Univend__StyledImage",
  componentId: "sc-1qs3t4z-2"
})(["height:400px;width:250px;"]);
const Univend_NavButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "Univend__NavButton",
  componentId: "sc-1qs3t4z-3"
})(["display:flex;position:absolute;top:", ";left:", ";right:", ";width:25px;height:25px;background:", ";color:white;border-radius:100%;border:none;font-size:22px;font-weight:bold;font-family:Barlow;justify-content:center;align-items:center;box-shadow:1px 1px #ccc6c6;@media (max-width:500px){width:18px;height:18px;font-size:12px;}:hover{color:", ";background:white;border:1px solid ", ";}"], props => props.top, props => props.left, props => props.right, colors.darkBlue, colors.darkBlue, colors.darkBlue);
const StyledPopupImage = /*#__PURE__*/styled_components_browser_cjs/* default.img.withConfig */.ZP.img.withConfig({
  displayName: "Univend__StyledPopupImage",
  componentId: "sc-1qs3t4z-4"
})(["height:500px;width:250px;"]);
;// CONCATENATED MODULE: ./src/app/pages/projects/FindersKeepers.jsx







const FindersKeepers = () => {
  const [coords, setCoords] = (0,react.useState)({
    x: 0,
    y: 0
  });
  const [isModalOpen, setModalOpen] = (0,react.useState)(true);
  const [iconLocation, setIconLocation] = (0,react.useState)({
    x: 50,
    y: 50
  });
  const [timesFound, setTimesFound] = (0,react.useState)(0);
  const randomizeIconLocation = () => {
    setIconLocation({
      x: Math.floor(Math.random() * 51) + 25,
      y: Math.floor(Math.random() * 51) + 25
    });
    setTimesFound(timesFound + 1);
  };
  const handleMouseMove = event => {
    setCoords({
      x: event.clientX,
      y: event.clientY
    });
    document.documentElement.style.setProperty('--cursorX', coords.x + 'px');
    document.documentElement.style.setProperty('--cursorY', coords.y + 'px');
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(components_Modal, {
      isOpen: isModalOpen,
      closeModal: () => {
        setModalOpen(false);
      },
      content: /*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
        alignItems: "center",
        gap: "20px",
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(FlexColumn, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
            color: "red",
            children: "DISCLAIMER:"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
            color: "red",
            children: "This project will not work properly unless you are using a laptop/desktop. A mouse is required for interactivity."
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          style: {
            fontSize: '20px',
            fontWeight: 'bold'
          },
          color: colors.mainBlue,
          children: "Rules:"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "Use your mouse as a flashlight to locate me!"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "Each time you find me, click the icon, and the icon will then be sent to a new random location."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          color: colors.darkBlue,
          children: "Try to find me as many times as possible!"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(BodyText, {
          children: '(Click out of this pop-up and hover over screen to begin)'
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(FindersKeepers_StyledContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Flashlight, {
        onMouseMove: handleMouseMove,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(ScoreBoard, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(BodyText, {
            style: {
              fontSize: '40px'
            },
            color: colors.mainBlue,
            children: ["Score: ", timesFound]
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(StyledFinder, {
        x: iconLocation.x,
        y: iconLocation.y,
        onClick: randomizeIconLocation
      })]
    })]
  });
};
/* harmony default export */ const projects_FindersKeepers = (FindersKeepers);
const ScoreBoard = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "FindersKeepers__ScoreBoard",
  componentId: "sc-7a6owz-0"
})(["display:flex;position:absolute;width:250px;height:40px;background:white;border-radius:10px;border:1px solid ", ";padding:5px 15px;top:15px;left:15px;align-items:center;justify-content:center;"], colors.darkBlue);
const StyledFinder = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "FindersKeepers__StyledFinder",
  componentId: "sc-7a6owz-1"
})(["position:absolute;top:", "%;right:", "%;height:75px;width:75px;border-radius:100%;border:none;background:black;:hover{background:white;background-image:url('./assets/images/bitmoji.png');background-position:center;background-size:contain;background-repeat:no-repeat;}"], props => props.x, props => props.y);
const FindersKeepers_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "FindersKeepers__StyledContainer",
  componentId: "sc-7a6owz-2"
})(["position:relative;height:100%;"]);
const Flashlight = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "FindersKeepers__Flashlight",
  componentId: "sc-7a6owz-3"
})(["height:100%;position:relative;background:radial-gradient( circle 7vmax at var(--cursorX) var(--cursorY),rgba(0,0,0,0) 0%,rgba(0,0,0,0.5) 100%,rgba(0,0,0,0.95) 100% );"]);
;// CONCATENATED MODULE: ./src/app/components/d3/pieChart.tsx




const PieChart = ({
  data
}) => {
  const svgRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    if (!svgRef.current || !data.length) return;
    const width = 250;
    const height = 250;
    const svg = src_select(svgRef.current).attr('width', width).attr('height', height).append('g').attr('transform', `translate(${width / 2},${height / 2})`);
    const pie = src_pie().value(d => d.total);
    const arc = src_arc().innerRadius(0).outerRadius(Math.min(width, height) / 2 - 1);
    const handleMouseover = (event, d) => {
      const centroid = arc.centroid(d);
      const x = centroid[0];
      const y = centroid[1];
      const percentage = ((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(2);
      const sliceColor = d.data.color;
      svg.append('text').attr('id', 'hover-name').attr('text-anchor', 'middle').attr('font-size', '12px').attr('font-weight', 'bold').style('fill', 'white').style('stroke-width', '2px').text(d.data.name).attr('transform', `translate(${x}, ${y - 30})`);
      svg.insert('rect', '#hover-name').attr('fill', sliceColor).attr('stroke', 'white').attr('stroke-width', 1).attr('width', 60).attr('height', 35).attr('rx', 5).attr('ry', 5).attr('transform', `translate(${x - 30}, ${y - 45})`);
      svg.append('text').attr('id', 'hover-percent').attr('text-anchor', 'middle').attr('font-size', '12px').attr('font-weight', 'bold').style('fill', 'white').style('stroke-width', '2px').text(`${percentage}%`).attr('transform', `translate(${x}, ${y - 15})`);
    };
    const handleClick = () => {
      svg.selectAll('#hover-name').remove();
      svg.selectAll('#hover-percent').remove();
      svg.selectAll('rect').remove();
    };
    const handleTouchStart = (event, d) => {
      handleMouseover(event, d);
    };
    const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g').attr('class', 'arc');
    arcs.append('path').attr('d', arc).attr('fill', d => d.data.color).on('mouseover', handleMouseover).on('click', handleClick).on('touchstart', handleTouchStart).on('touchend', handleClick).on('mouseout', () => {
      svg.selectAll('#hover-name').remove();
      svg.selectAll('#hover-percent').remove();
      svg.selectAll('rect').remove();
    });
  }, [data]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(StyledSVG, {
    ref: svgRef
  });
};
/* harmony default export */ const pieChart = (PieChart);
const StyledSVG = /*#__PURE__*/styled_components_browser_cjs/* default.svg.withConfig */.ZP.svg.withConfig({
  displayName: "pieChart__StyledSVG",
  componentId: "sc-18zbz6k-0"
})(["margin:15px 0;text{font-family:Barlow;fill:white;font-weight:bold;font-size:14px;}"]);
;// CONCATENATED MODULE: ./src/app/helpers/sleeper-dynasty/getManagerRating.ts
const TOTAL_BUDGET = 200;
const TOTAL_GAMES = 14;
const getManagerRating = ({
  total_fp,
  total_pp,
  waiver_budget_used,
  wins
}) => {
  const pointsPercentage = total_fp / total_pp;
  const waiverBudgetPercentage = waiver_budget_used / TOTAL_BUDGET;
  const winPercentage = wins / TOTAL_GAMES;
  const manager_score = pointsPercentage * 0.5 + waiverBudgetPercentage * 0.1 + winPercentage * 0.4;
  if (manager_score > 0) {
    return (manager_score * 100).toFixed(2);
  } else {
    return 'N/A';
  }
};
;// CONCATENATED MODULE: ./src/app/components/Loader.tsx




const Loader = () => /*#__PURE__*/(0,react_dom.createPortal)( /*#__PURE__*/(0,jsx_runtime.jsx)(StyledLoader, {
  "data-test-id": "main-loader",
  children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "loader"
  })
}), document.body);
/* harmony default export */ const components_Loader = (Loader);
const StyledLoader = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "Loader__StyledLoader",
  componentId: "sc-1lr3t1v-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;display:flex;justify-content:center;align-items:center;background:linear-gradient(#1b7fcc,white);.loader,.loader:after{border-radius:50%;width:10em;height:10em;}.loader{margin:60px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:1.1em solid ", ";border-right:1.1em solid ", ";border-bottom:1.1em solid ", ";border-left:1.1em solid ", ";transform:translateZ(0);animation:load8 1.1s infinite linear;}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"], colors.mainBlue, colors.mainBlue, colors.mainBlue, colors.darkBlue);
;// CONCATENATED MODULE: ./src/app/keys/teamColors.ts
const TeamColors = {
  ARI: '#97233F',
  ATL: '#A71930',
  BAL: '#241773',
  BUF: '#00338D',
  CAR: '#0085CA',
  CHI: '#00143F',
  CIN: '#FB4F14',
  CLE: '#311D00',
  DAL: '#041E42',
  DEN: '#002244',
  DET: '#0076B6',
  GB: '#1F5C2A',
  HOU: '#03202F',
  IND: '#002C5F',
  JAX: '#006778',
  KC: '#E31837',
  LV: '#000000',
  LAC: '#002A5E',
  LAR: '#002244',
  MIA: '#008E97',
  MIN: '#4F2683',
  NE: '#002244',
  NO: '#D3BC8D',
  NYG: '#0B2265',
  NYJ: '#125740',
  PHI: '#004C54',
  PIT: '#FFB612',
  SF: '#AA0000',
  SEA: '#002244',
  TB: '#D50A0A',
  TEN: '#4B92DB',
  WAS: '#773141'
};
;// CONCATENATED MODULE: ./src/app/keys/sleeper.ts
const SleeperKeys = {
  ownerId: '937459365982961664',
  leagueId_2023: '959929229892743168',
  leagueId_2024: '1048724777621381120'
};
;// CONCATENATED MODULE: ./src/app/pages/projects/SleeperDynasty.tsx













const YEARS = [{
  title: '2023',
  value: SleeperKeys.leagueId_2023
}, {
  title: '2024',
  value: SleeperKeys.leagueId_2024
}];
const DASH_ITEMS = ['ROSTERS', 'STATS', 'BREAKDOWN', 'SUMMARIES'];
const SleeperDynasty = () => {
  const [currentLeagueId, setCurrentLeaugeId] = (0,react.useState)(YEARS[1].value);
  const {
    data: leagueInfo,
    isFetching: isLeagueFetching
  } = useGetLeagueRostersQuery({
    leagueId: currentLeagueId
  });
  const {
    data: allPlayers
  } = useGetAllNFLPlayersQuery();
  const {
    data: users,
    isFetching
  } = useGetLeagueUsersQuery({
    leagueId: currentLeagueId
  });
  const [currentView, setCurrentView] = (0,react.useState)(0);
  const [isDesc, setIsDesc] = (0,react.useState)(true);
  const [currentFilter, setCurrentFilter] = (0,react.useState)('manager_rating');
  const [allTeamData, setAllTeamData] = (0,react.useState)();
  (0,react.useEffect)(() => {
    if (allPlayers && leagueInfo && users) {
      const replicatedData = users.map((user, index) => {
        var _leagueInfo$find, _teamInfo$waiver_budg, _teamInfo$wins;
        const playersData = (_leagueInfo$find = leagueInfo.find(team => team.owner_id === user.user_id)) == null ? void 0 : _leagueInfo$find.players.map(playerID => ({
          id: playerID,
          position: allPlayers[playerID].position,
          full_name: allPlayers[playerID].full_name,
          team: allPlayers[playerID].team,
          age: allPlayers[playerID].age
        }));
        if (!playersData) {
          return;
        }
        const avgAge = playersData.reduce((total, player) => total + player.age, 0) / playersData.length;
        const teamInfo = leagueInfo.find(team => team.owner_id === user.user_id);
        const total_fp = teamInfo == null ? void 0 : teamInfo.total_fp;
        const total_pp = teamInfo == null ? void 0 : teamInfo.total_pp;
        const teamCounts = {};
        playersData.forEach(player => {
          if (teamCounts[player.team]) {
            teamCounts[player.team]++;
          } else {
            teamCounts[player.team] = 1;
          }
        });
        const pieData = Object.entries(teamCounts).map(([name, total]) => ({
          name,
          total,
          color: TeamColors[name]
        })).sort((a, b) => b.total - a.total);
        const teamData = {
          teamName: user.display_name.toUpperCase(),
          players: playersData.sort((a, b) => {
            const positionOrder = {
              QB: 0,
              RB: 1,
              WR: 2,
              TE: 3,
              K: 4
            };
            return positionOrder[a.position] - positionOrder[b.position];
          }),
          avgAge: avgAge.toFixed(2),
          total_fp: total_fp,
          total_pp: total_pp,
          manager_rating: getManagerRating({
            waiver_budget_used: (_teamInfo$waiver_budg = teamInfo == null ? void 0 : teamInfo.waiver_budget_used) != null ? _teamInfo$waiver_budg : 0,
            wins: (_teamInfo$wins = teamInfo == null ? void 0 : teamInfo.wins) != null ? _teamInfo$wins : 0,
            total_fp: total_fp != null ? total_fp : 0,
            total_pp: total_pp != null ? total_pp : 0
          }),
          pieData
        };
        return teamData;
      }).filter(Boolean);
      replicatedData.sort(
      //@ts-ignore
      (a, b) => b[currentFilter] - a[currentFilter]);
      if (!isDesc) {
        replicatedData.reverse();
      }

      //@ts-ignore
      setAllTeamData(replicatedData);
    }
  }, [allPlayers, leagueInfo, users, currentFilter]);
  if (!leagueInfo || !users || !allPlayers || !allTeamData || isFetching || isLeagueFetching) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Loader, {});
  }

  // console.log('PLayer: ', allPlayers[8126]);
  // console.log('Team Data: ', allTeamData);
  // console.log('Current Filter: ', currentFilter);

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(components_Layout, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledHeader, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(StyledTitle, {
        children: "Sleeper Dynasty"
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(YearSelector, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "Year:"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("select", {
          value: currentLeagueId,
          defaultValue: YEARS[1].value,
          onChange: y => setCurrentLeaugeId(y.target.value),
          children: YEARS.map((year, index) => /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: year.value,
            children: year.title
          }, index))
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(DashboardItems, {
        children: DASH_ITEMS.map((item, index) => /*#__PURE__*/(0,jsx_runtime.jsx)(DashItem, {
          isActive: currentView === index,
          onClick: () => setCurrentView(index),
          children: item
        }, item))
      }), currentView === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(FilterText, {
          children: "Filters: "
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Dropdown, {
          onChange: x => setCurrentFilter(x.target.value),
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "manager_rating",
            children: "Manager Rating"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "total_fp",
            children: "Total Points"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "total_pp",
            children: "Total Potental Points"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("option", {
            value: "avgAge",
            children: "Avg. Age"
          })]
        })]
      })]
    }), currentView !== 3 ? /*#__PURE__*/(0,jsx_runtime.jsx)(SleeperDynasty_StyledContainer, {
      children: allTeamData.map((team, index) => {
        var _team$manager_rating, _team$avgAge, _team$total_fp, _team$total_pp;
        return /*#__PURE__*/(0,jsx_runtime.jsxs)(TeamContainer, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(TeamName, {
            children: team.teamName
          }), currentView === 0 && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            style: {
              paddingLeft: '10px'
            },
            children: team.players.map(player => /*#__PURE__*/(0,jsx_runtime.jsxs)(SleeperDynasty_PlayerContainer, {
              id: player.id,
              children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(PositionText, {
                children: [player.position, ": "]
              }), /*#__PURE__*/(0,jsx_runtime.jsx)(PlayerName, {
                children: player.full_name
              }), player.team && /*#__PURE__*/(0,jsx_runtime.jsx)(NFLText, {
                color: TeamColors[player.team],
                children: player.team
              })]
            }, player.id))
          }), currentView === 1 && /*#__PURE__*/(0,jsx_runtime.jsxs)(StatsContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(StatText, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                children: "Manager Rating: "
              }), (_team$manager_rating = team.manager_rating) != null ? _team$manager_rating : 'N/A']
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StatText, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                children: "Avg. Age: "
              }), (_team$avgAge = team.avgAge) != null ? _team$avgAge : 'N/A']
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StatText, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                children: "Total Points: "
              }), (_team$total_fp = team.total_fp) != null ? _team$total_fp : 'N/A']
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)(StatText, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("b", {
                children: "Total Potential Points: "
              }), (_team$total_pp = team.total_pp) != null ? _team$total_pp : 'N/A']
            })]
          }), currentView === 2 && /*#__PURE__*/(0,jsx_runtime.jsxs)(StatsContainer, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(NFLText, {
              style: {
                margin: 0
              },
              color: TeamColors[team.pieData[0].name],
              children: ["Most Popular: ", team.pieData[0].name]
            }), /*#__PURE__*/(0,jsx_runtime.jsx)("label", {
              style: {
                fontFamily: 'Barlow',
                fontSize: '12px'
              },
              children: "(hover for more info)"
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(pieChart, {
              data: team.pieData
            })]
          })]
        }, index);
      })
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(ComingSoon, {
      children: "Coming soon!"
    })]
  });
};
/* harmony default export */ const projects_SleeperDynasty = (SleeperDynasty);
const FilterText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__FilterText",
  componentId: "sc-12ryx3f-0"
})(["margin:0;font-family:Barlow;font-size:18px;font-weight:bold;color:white;"]);
const StatsContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__StatsContainer",
  componentId: "sc-12ryx3f-1"
})(["width:100%;display:flex;flex-direction:column;align-items:center;"]);
const StatText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__StatText",
  componentId: "sc-12ryx3f-2"
})(["font-family:Barlow;font-size:24px;color:", ";text-align:center;"], colors.darkBlue);
const StyledTitle = /*#__PURE__*/styled_components_browser_cjs/* default.h1.withConfig */.ZP.h1.withConfig({
  displayName: "SleeperDynasty__StyledTitle",
  componentId: "sc-12ryx3f-3"
})(["font-family:Barlow;text-align:center;font-size:40px;font-weight:bold;"]);
const SleeperDynasty_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__StyledContainer",
  componentId: "sc-12ryx3f-4"
})(["display:grid;grid-template-columns:repeat(4,minmax(250px,1fr));grid-template-rows:repeat(3,1fr);justify-content:center;margin:20px;gap:10px;@media (max-width:1000px){grid-template-columns:repeat(2,minmax(250px,1fr));}@media (max-width:1000px){display:flex;flex-direction:column;align-items:center;}"]);
const TeamContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__TeamContainer",
  componentId: "sc-12ryx3f-5"
})(["border:3px solid ", ";display:flex;flex-direction:column;align-items:center;background:white;border-radius:25px;box-shadow:0px 17px 20px 8px #0000006b;@media (max-width:1000px){align-items:center;width:80%;}"], colors.darkBlue);
const TeamName = /*#__PURE__*/styled_components_browser_cjs/* default.label.withConfig */.ZP.label.withConfig({
  displayName: "SleeperDynasty__TeamName",
  componentId: "sc-12ryx3f-6"
})(["font-family:Barlow;color:black;font-weight:bold;font-size:22px;width:100%;background:", ";border-top-right-radius:22px;border-top-left-radius:22px;height:50px;display:flex;align-items:center;justify-content:center;border-bottom:1px solid ", ";"], colors.mainGray, colors.darkBlue);
const PlayerName = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__PlayerName",
  componentId: "sc-12ryx3f-7"
})(["font-family:Barlow;color:black;font-weight:normal;font-size:18px;"]);
const PositionText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__PositionText",
  componentId: "sc-12ryx3f-8"
})(["font-family:Barlow;font-size:18px;font-weight:bold;"]);
const NFLText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__NFLText",
  componentId: "sc-12ryx3f-9"
})(["font-family:Barlow;font-weight:bold;color:", " !important;"], ({
  color
}) => color);
const SleeperDynasty_PlayerContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__PlayerContainer",
  componentId: "sc-12ryx3f-10"
})(["display:grid;grid-template-columns:1fr 3fr 1fr;align-items:center;width:100%;gap:5px;"]);
const DashboardItems = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__DashboardItems",
  componentId: "sc-12ryx3f-11"
})(["display:flex;flex-wrap:wrap;align-items:center;background:white;border:1px solid ", ";width:fit-content;border-radius:10px;gap:10px;padding:5px 10px;margin:0 15px;justify-content:center;"], colors.darkBlue);
const DashItem = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "SleeperDynasty__DashItem",
  componentId: "sc-12ryx3f-12"
})(["font-size:18px;font-family:Barlow;font-weight:bold;color:", ";background:white;cursor:pointer;margin:0;border-radius:25px;border:1px solid black;", "}"], colors.darkBlue, ({
  isActive
}) => isActive && `
      background: ${colors.darkBlue};
      color: white;
  `);
const StyledHeader = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__StyledHeader",
  componentId: "sc-12ryx3f-13"
})(["display:flex;align-items:center;justify-content:center;flex-direction:column;position:sticky;top:0;background:#1b7fcc;padding-bottom:15px;border-bottom:2px solid ", ";@media (max-width:750px){position:relative;}"], colors.darkBlue);
const Dropdown = /*#__PURE__*/styled_components_browser_cjs/* default.select.withConfig */.ZP.select.withConfig({
  displayName: "SleeperDynasty__Dropdown",
  componentId: "sc-12ryx3f-14"
})(["border:1px solid blue;font-family:Barlow;font-weight:bold;width:200px;border-radius:5px;"]);
const YearSelector = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "SleeperDynasty__YearSelector",
  componentId: "sc-12ryx3f-15"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:15px;select{border:1px solid ", ";font-family:Barlow;font-weight:bold;width:100px;border-radius:5px;}p{margin:0;font-family:Barlow;font-size:18px;font-weight:bold;color:white;}"], colors.darkBlue);
const ComingSoon = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "SleeperDynasty__ComingSoon",
  componentId: "sc-12ryx3f-16"
})(["font-family:Barlow;font-weight:bold;color:white;font-size:30px;text-align:center;"]);
;// CONCATENATED MODULE: ./src/app/pages/projects/ImpossibleSignup.tsx





const ImpossibleSignup = () => {
  const [isWild, setIsWild] = (0,react.useState)(false);
  const [top, setTop] = (0,react.useState)(0);
  const [left, setLeft] = (0,react.useState)(0);
  const [attempts, setAttempts] = (0,react.useState)(0);
  const mouseEnter = () => {
    if (!isWild) {
      setIsWild(true);
    }
    const randTop = Math.random() * 100;
    const randLeft = Math.random() * 100;
    setTop(randTop);
    setLeft(randLeft);
    setAttempts(attempts + 1);
  };
  console.log('attempts: ', attempts);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(components_Layout, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(ImpossibleSignup_StyledContainer, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(SignUpContainer, {
        children: [attempts === 3 && /*#__PURE__*/(0,jsx_runtime.jsx)(TeaseText, {
          children: "Almost got it!"
        }), attempts === 5 && /*#__PURE__*/(0,jsx_runtime.jsx)(TeaseText, {
          children: "Keep Trying!"
        }), attempts === 7 && /*#__PURE__*/(0,jsx_runtime.jsx)(TeaseText, {
          children: "Next one you'll get it!"
        }), attempts === 10 && /*#__PURE__*/(0,jsx_runtime.jsx)(TeaseText, {
          children: "Getting embarrassing..."
        }), attempts >= 15 && /*#__PURE__*/(0,jsx_runtime.jsx)(TeaseText, {
          children: "Just give up..."
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("h1", {
          children: "Sign Up"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("hr", {}), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          placeholder: "Username"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          type: "password",
          placeholder: "Password"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(WildButton, {
          isWild: isWild,
          top: top,
          left: left,
          onMouseEnter: mouseEnter,
          onClick: mouseEnter,
          children: "Submit"
        })]
      })
    })
  });
};
/* harmony default export */ const projects_ImpossibleSignup = (ImpossibleSignup);
const TeaseText = /*#__PURE__*/styled_components_browser_cjs/* default.p.withConfig */.ZP.p.withConfig({
  displayName: "ImpossibleSignup__TeaseText",
  componentId: "qcx7wd-0"
})(["position:absolute;top:15px;font-family:Barlow;color:#0e7de9;font-size:25px;font-weight:bold;"]);
const ImpossibleSignup_StyledContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ImpossibleSignup__StyledContainer",
  componentId: "qcx7wd-1"
})(["display:flex;align-items:center;justify-content:center;height:100%;width:100%;"]);
const SignUpContainer = /*#__PURE__*/styled_components_browser_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "ImpossibleSignup__SignUpContainer",
  componentId: "qcx7wd-2"
})(["position:relative;display:flex;align-items:center;flex-direction:column;justify-content:center;height:500px;width:80%;margin:auto;background:linear-gradient(0deg,#fff9f9,#68eeef);border-radius:25px;box-shadow:3px 9px 17px -4px #22292b;h1{margin:0;font-size:50px;font-family:Sansita;}hr{border:1px solid #9f7fa6;width:100px;border-radius:25px;}input{border:2px solid #0e7de9;border-radius:15px;background:white;height:25px;width:200px;margin-bottom:10px;padding-left:5px;box-shadow:3px 9px 17px -4px #22292b;cursor:pointer;font-family:Sansita;}input::placeholder{color:lightgrey;}input:focus{outline:none;border:2px solid #0e7de9;}"]);
const WildButton = /*#__PURE__*/styled_components_browser_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "ImpossibleSignup__WildButton",
  componentId: "qcx7wd-3"
})(["background:white;color:#0e7de9;box-shadow:3px 9px 17px -4px #22292b;border:1px solid #0e7de9;width:100px;height:30px;border-radius:15px;font-size:16px;margin:15px 0;display:flex;align-items:center;justify-content:center;cursor:pointer;font-family:Sansita;:hover{background:#0e7de9;color:white;}", ""], ({
  isWild,
  top,
  left
}) => isWild && `
    position: absolute;
    top: ${top}%;
    left: ${left}%;
  `);
;// CONCATENATED MODULE: ./src/app/app.tsx











function App() {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(react_router_dom_production_min.Routes, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "*",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Navigate, {
          to: "/home"
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/home",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(pages_HomePage, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/resume",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(pages_Resume, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(pages_Projects, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects/athlete-charts",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(projects_AthleteCharts, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects/univend",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(projects_Univend, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects/finders-keepers",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(projects_FindersKeepers, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects/sleeper-dynasty",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(projects_SleeperDynasty, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.Route, {
        path: "/projects/impossible-signup",
        element: /*#__PURE__*/(0,jsx_runtime.jsx)(projects_ImpossibleSignup, {})
      })]
    })
  });
}
/* harmony default export */ const app = (App);
;// CONCATENATED MODULE: ./src/main.tsx






const main_root = client/* createRoot */.s(document.getElementById('root'));
main_root.render( /*#__PURE__*/(0,jsx_runtime.jsx)(lib.Provider, {
  store: store,
  children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dom_production_min.HashRouter, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(app, {})
  })
}));

/***/ }),

/***/ 7939:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
  module.exports = __webpack_require__(7389)
} else {}

/***/ }),

/***/ 3349:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
  module.exports = __webpack_require__(9493)
} else {}

/***/ }),

/***/ 7378:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var e=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,u=e.length;t<n;t++,u++)e[u]=r[t];return e},r=Object.create,t=Object.defineProperty,n=Object.defineProperties,u=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,l=function(e,r,n){return r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n},d=function(e,r){for(var t in r||(r={}))a.call(r,t)&&l(e,t,r[t]);if(s)for(var n=0,u=s(r);n<u.length;n++)f.call(r,t=u[n])&&l(e,t,r[t]);return e},p=function(e,r){return n(e,i(r))},v=function(e){return t(e,"__esModule",{value:!0})},y=function(e,r,n){if(r&&"object"==typeof r||"function"==typeof r)for(var i=function(i){a.call(e,i)||"default"===i||t(e,i,{get:function(){return r[i]},enumerable:!(n=u(r,i))||n.enumerable})},s=0,c=o(r);s<c.length;s++)i(c[s]);return e},b=function(e){return y(v(t(null!=e?r(c(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0})),e)};v(exports),function(e,r){for(var n in r)t(e,n,{get:r[n],enumerable:!0})}(exports,{ApiProvider:function(){return V},createApi:function(){return J},reactHooksModule:function(){return N}});var h=b(__webpack_require__(3349)),g=b(__webpack_require__(7939)),m=b(__webpack_require__(7294)),q=b(__webpack_require__(3349)),S=b(__webpack_require__(7424)),O=b(__webpack_require__(7294));function k(e,r,t,n){var u=(0,O.useMemo)((function(){return{queryArgs:e,serialized:"object"==typeof e?r({queryArgs:e,endpointDefinition:t,endpointName:n}):e}}),[e,r,t,n]),i=(0,O.useRef)(u);return(0,O.useEffect)((function(){i.current.serialized!==u.serialized&&(i.current=u)}),[u]),i.current.serialized===u.serialized?i.current.queryArgs:e}var E=Symbol(),j=b(__webpack_require__(7294)),x=b(__webpack_require__(7424));function Q(e){var r=(0,j.useRef)(e);return(0,j.useEffect)((function(){(0,x.shallowEqual)(r.current,e)||(r.current=e)}),[e]),(0,x.shallowEqual)(r.current,e)?r.current:e}var M,w,A=b(__webpack_require__(7939)),R=function(e){return e.endpointName+"("+JSON.stringify(e.queryArgs,(function(e,r){return(0,A.isPlainObject)(r)?Object.keys(r).sort().reduce((function(e,t){return e[t]=r[t],e}),{}):r}))+")"},L="undefined"!=typeof window&&window.document&&window.document.createElement?m.useLayoutEffect:m.useEffect,z=function(e){return e},C=function(e){return e.isUninitialized?p(d({},e),{isUninitialized:!1,isFetching:!0,isLoading:void 0===e.data,status:q.QueryStatus.pending}):e};function D(e){return e.replace(e[0],e[0].toUpperCase())}function P(r){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];Object.assign.apply(Object,e([r],t))}(w=M||(M={})).query="query",w.mutation="mutation";var I=b(__webpack_require__(7424)),_=Symbol(),N=function(e){var r=void 0===e?{}:e,t=r.batch,n=void 0===t?I.batch:t,u=r.useDispatch,i=void 0===u?I.useDispatch:u,o=r.useSelector,s=void 0===o?I.useSelector:o,c=r.useStore,a=void 0===c?I.useStore:c,f=r.unstable__sideEffectsInRender,l=void 0!==f&&f;return{name:_,init:function(e,r,t){var u=e,o=function(e){var r=e.api,t=e.moduleOptions,n=t.batch,u=t.useDispatch,i=t.useSelector,o=t.useStore,s=e.serializeQueryArgs,c=e.context,a=t.unstable__sideEffectsInRender?function(e){return e()}:m.useEffect;return{buildQueryHooks:function(e){var t=function(t,n){var i=void 0===n?{}:n,o=i.refetchOnReconnect,s=i.refetchOnFocus,f=i.refetchOnMountOrArgChange,l=i.skip,d=void 0!==l&&l,p=i.pollingInterval,v=void 0===p?0:p,y=r.endpoints[e].initiate,b=u(),h=k(d?q.skipToken:t,R,c.endpointDefinitions[e],e),g=Q({refetchOnReconnect:o,refetchOnFocus:s,pollingInterval:v}),S=(0,m.useRef)(!1),O=(0,m.useRef)(),E=O.current||{},j=E.queryCacheKey,x=E.requestId,M=!1;if(j&&x){var w=b(r.internalActions.internal_probeSubscription({queryCacheKey:j,requestId:x}));M=!!w}var A=!M&&S.current;return a((function(){S.current=M})),a((function(){O.current=void 0}),[A]),a((function(){var e,r=O.current;if(h===q.skipToken)return null==r||r.unsubscribe(),void(O.current=void 0);var t=null==(e=O.current)?void 0:e.subscriptionOptions;if(r&&r.arg===h)g!==t&&r.updateSubscriptionOptions(g);else{null==r||r.unsubscribe();var n=b(y(h,{subscriptionOptions:g,forceRefetch:f}));O.current=n}}),[b,y,f,h,g,A]),(0,m.useEffect)((function(){return function(){var e;null==(e=O.current)||e.unsubscribe(),O.current=void 0}}),[]),(0,m.useMemo)((function(){return{refetch:function(){var e;if(!O.current)throw new Error("Cannot refetch a query that has not been started yet.");return null==(e=O.current)?void 0:e.refetch()}}}),[])},l=function(t){var i=void 0===t?{}:t,o=i.refetchOnReconnect,s=i.refetchOnFocus,c=i.pollingInterval,f=void 0===c?0:c,l=r.endpoints[e].initiate,d=u(),p=(0,m.useState)(E),v=p[0],y=p[1],b=(0,m.useRef)(),h=Q({refetchOnReconnect:o,refetchOnFocus:s,pollingInterval:f});a((function(){var e,r,t=null==(e=b.current)?void 0:e.subscriptionOptions;h!==t&&(null==(r=b.current)||r.updateSubscriptionOptions(h))}),[h]);var g=(0,m.useRef)(h);a((function(){g.current=h}),[h]);var q=(0,m.useCallback)((function(e,r){var t;return void 0===r&&(r=!1),n((function(){var n;null==(n=b.current)||n.unsubscribe(),b.current=t=d(l(e,{subscriptionOptions:g.current,forceRefetch:!r})),y(e)})),t}),[d,l]);return(0,m.useEffect)((function(){return function(){var e;null==(e=null==b?void 0:b.current)||e.unsubscribe()}}),[]),(0,m.useEffect)((function(){v===E||b.current||q(v,!0)}),[v,q]),(0,m.useMemo)((function(){return[q,v]}),[q,v])},v=function(t,n){var u=void 0===n?{}:n,a=u.skip,l=u.selectFromResult,d=r.endpoints[e].select,p=k(void 0!==a&&a?q.skipToken:t,s,c.endpointDefinitions[e],e),v=(0,m.useRef)(),y=(0,m.useMemo)((function(){return(0,g.createSelector)([d(p),function(e,r){return r},function(e){return p}],f)}),[d,p]),b=(0,m.useMemo)((function(){return l?(0,g.createSelector)([y],l):y}),[y,l]),h=i((function(e){return b(e,v.current)}),S.shallowEqual),O=o(),E=y(O.getState(),v.current);return L((function(){v.current=E}),[E]),h};return{useQueryState:v,useQuerySubscription:t,useLazyQuerySubscription:l,useLazyQuery:function(e){var r=l(e),t=r[0],n=r[1],u=v(n,p(d({},e),{skip:n===E})),i=(0,m.useMemo)((function(){return{lastArg:n}}),[n]);return(0,m.useMemo)((function(){return[t,u,i]}),[t,u,i])},useQuery:function(e,r){var n=t(e,r),u=v(e,d({selectFromResult:e===q.skipToken||(null==r?void 0:r.skip)?void 0:C},r));return(0,m.useDebugValue)({data:u.data,status:u.status,isLoading:u.isLoading,isSuccess:u.isSuccess,isError:u.isError,error:u.error}),(0,m.useMemo)((function(){return d(d({},u),n)}),[u,n])}}},buildMutationHook:function(e){return function(t){var o=void 0===t?{}:t,s=o.selectFromResult,c=void 0===s?z:s,a=o.fixedCacheKey,f=r.endpoints[e],l=f.select,v=f.initiate,y=u(),b=(0,m.useState)(),h=b[0],q=b[1];(0,m.useEffect)((function(){return function(){(null==h?void 0:h.arg.fixedCacheKey)||null==h||h.reset()}}),[h]);var O=(0,m.useCallback)((function(e){var r=y(v(e,{fixedCacheKey:a}));return q(r),r}),[y,v,a]),k=(h||{}).requestId,E=(0,m.useMemo)((function(){return(0,g.createSelector)([l({fixedCacheKey:a,requestId:null==h?void 0:h.requestId})],c)}),[l,h,c,a]),j=i(E,S.shallowEqual),x=null==a?null==h?void 0:h.arg.originalArgs:void 0,Q=(0,m.useCallback)((function(){n((function(){h&&q(void 0),a&&y(r.internalActions.removeMutationResult({requestId:k,fixedCacheKey:a}))}))}),[y,a,h,k]);(0,m.useDebugValue)({endpointName:j.endpointName,data:j.data,status:j.status,isLoading:j.isLoading,isSuccess:j.isSuccess,isError:j.isError,error:j.error});var M=(0,m.useMemo)((function(){return p(d({},j),{originalArgs:x,reset:Q})}),[j,x,Q]);return(0,m.useMemo)((function(){return[O,M]}),[O,M])}},usePrefetch:function(e,t){var n=u(),i=Q(t);return(0,m.useCallback)((function(t,u){return n(r.util.prefetch(e,t,d(d({},i),u)))}),[e,n,i])}};function f(e,r,t){if((null==r?void 0:r.endpointName)&&e.isUninitialized){var n=r.endpointName,u=c.endpointDefinitions[n];s({queryArgs:r.originalArgs,endpointDefinition:u,endpointName:n})===s({queryArgs:t,endpointDefinition:u,endpointName:n})&&(r=void 0)}t===q.skipToken&&(r=void 0);var i=e.isSuccess?e.data:null==r?void 0:r.data;void 0===i&&(i=e.data);var o=void 0!==i,a=e.isLoading,f=!o&&a,l=e.isSuccess||a&&o;return p(d({},e),{data:i,currentData:e.data,isFetching:a,isLoading:f,isSuccess:l})}}({api:e,moduleOptions:{batch:n,useDispatch:i,useSelector:s,useStore:a,unstable__sideEffectsInRender:l},serializeQueryArgs:r.serializeQueryArgs,context:t}),c=o.buildQueryHooks,f=o.buildMutationHook;return P(u,{usePrefetch:o.usePrefetch}),P(t,{batch:n}),{injectEndpoint:function(r,t){if(t.type===M.query){var n=c(r),i=n.useQuery,o=n.useLazyQuery;P(u.endpoints[r],{useQuery:i,useLazyQuery:o,useLazyQuerySubscription:n.useLazyQuerySubscription,useQueryState:n.useQueryState,useQuerySubscription:n.useQuerySubscription}),e["use"+D(r)+"Query"]=i,e["useLazy"+D(r)+"Query"]=o}else if(t.type===M.mutation){var s=f(r);P(u.endpoints[r],{useMutation:s}),e["use"+D(r)+"Mutation"]=s}}}}}};y(exports,b(__webpack_require__(3349)));var F=b(__webpack_require__(7939)),K=b(__webpack_require__(7294)),H=b(__webpack_require__(7294)),T=b(__webpack_require__(7424)),U=b(__webpack_require__(3349));function V(e){var r=H.default.useState((function(){var r;return(0,F.configureStore)({reducer:(r={},r[e.api.reducerPath]=e.api.reducer,r),middleware:function(r){return r().concat(e.api.middleware)}})}))[0];return(0,K.useEffect)((function(){return!1===e.setupListeners?void 0:(0,U.setupListeners)(r.dispatch,e.setupListeners)}),[e.setupListeners,r.dispatch]),H.default.createElement(T.Provider,{store:r,context:e.context},e.children)}var J=(0,h.buildCreateApi)((0,h.coreModule)(),N());
//# sourceMappingURL=rtk-query-react.cjs.production.min.js.map

/***/ }),

/***/ 9493:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var e,t,n=this&&this.__generator||function(e,t){var n,r,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},r=this&&this.__spreadArray||function(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e},i=Object.create,a=Object.defineProperty,u=Object.defineProperties,o=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=function(e,t,n){return t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},v=function(e,t){for(var n in t||(t={}))f.call(t,n)&&h(e,n,t[n]);if(l)for(var r=0,i=l(t);r<i.length;r++)p.call(t,n=i[r])&&h(e,n,t[n]);return e},y=function(e,t){return u(e,c(t))},m=function(e){return a(e,"__esModule",{value:!0})},g=function(e,t){var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var i=0,a=l(e);i<a.length;i++)t.indexOf(r=a[i])<0&&p.call(e,r)&&(n[r]=e[r]);return n},b=function(e){return function(e,t,n){if(t&&"object"==typeof t||"function"==typeof t)for(var r=function(r){f.call(e,r)||"default"===r||a(e,r,{get:function(){return t[r]},enumerable:!(n=o(t,r))||n.enumerable})},i=0,u=s(t);i<u.length;i++)r(u[i]);return e}(m(a(null!=e?i(d(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0})),e)},q=function(e,t,n){return new Promise((function(r,i){var a=function(e){try{o(n.next(e))}catch(e){i(e)}},u=function(e){try{o(n.throw(e))}catch(e){i(e)}},o=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(a,u)};o((n=n.apply(e,t)).next())}))};m(exports),function(e,t){for(var n in t)a(e,n,{get:t[n],enumerable:!0})}(exports,{QueryStatus:function(){return e},buildCreateApi:function(){return ye},copyWithStructuralSharing:function(){return A},coreModule:function(){return De},createApi:function(){return Ne},defaultSerializeQueryArgs:function(){return pe},fakeBaseQuery:function(){return me},fetchBaseQuery:function(){return x},retry:function(){return I},setupListeners:function(){return F},skipSelector:function(){return ce},skipToken:function(){return oe}}),(t=e||(e={})).uninitialized="uninitialized",t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected";var S=function(e){return[].concat.apply([],e)},O=b(__webpack_require__(7939)).isPlainObject;function A(e,t){if(e===t||!(O(e)&&O(t)||Array.isArray(e)&&Array.isArray(t)))return t;for(var n=Object.keys(t),r=Object.keys(e),i=n.length===r.length,a=Array.isArray(t)?[]:{},u=0,o=n;u<o.length;u++){var c=o[u];a[c]=A(e[c],t[c]),i&&(i=e[c]===a[c])}return i?e:a}var T=b(__webpack_require__(7939)),R=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return fetch.apply(void 0,e)},j=function(e){return e.status>=200&&e.status<=299},w=function(e){return/ion\/(vnd\.api\+)?json/.test(e.get("content-type")||"")};function k(e){if(!(0,T.isPlainObject)(e))return e;for(var t=v({},e),n=0,r=Object.entries(t);n<r.length;n++){var i=r[n];void 0===i[1]&&delete t[i[0]]}return t}function x(e){var t=this;void 0===e&&(e={});var r=e.baseUrl,i=e.prepareHeaders,a=void 0===i?function(e){return e}:i,u=e.fetchFn,o=void 0===u?R:u,c=e.paramsSerializer,s=e.isJsonContentType,l=void 0===s?w:s,d=e.jsonContentType,f=void 0===d?"application/json":d,p=e.jsonReplacer,h=e.timeout,m=e.validateStatus,b=g(e,["baseUrl","prepareHeaders","fetchFn","paramsSerializer","isJsonContentType","jsonContentType","jsonReplacer","timeout","validateStatus"]);return"undefined"==typeof fetch&&o===R&&console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."),function(e,i){return q(t,null,(function(){var t,u,s,d,q,O,A,R,w,x,Q,P,C,I,M,D,N,E,K,_,F,z,U,L,W,H,B,J,V,G,Y,$,X,Z,ee,te;return n(this,(function(n){switch(n.label){case 0:return t=i.signal,u=i.getState,s=i.extra,d=i.endpoint,q=i.forced,O=i.type,w=(R="string"==typeof e?{url:e}:e).url,Q=void 0===(x=R.headers)?new Headers(b.headers):x,C=void 0===(P=R.params)?void 0:P,M=void 0===(I=R.responseHandler)?"json":I,N=void 0===(D=R.validateStatus)?null!=m?m:j:D,K=void 0===(E=R.timeout)?h:E,_=g(R,["url","headers","params","responseHandler","validateStatus","timeout"]),F=v(y(v({},b),{signal:t}),_),Q=new Headers(k(Q)),z=F,[4,a(Q,{getState:u,extra:s,endpoint:d,forced:q,type:O})];case 1:z.headers=n.sent()||Q,U=function(e){return"object"==typeof e&&((0,T.isPlainObject)(e)||Array.isArray(e)||"function"==typeof e.toJSON)},!F.headers.has("content-type")&&U(F.body)&&F.headers.set("content-type",f),U(F.body)&&l(F.headers)&&(F.body=JSON.stringify(F.body,p)),C&&(L=~w.indexOf("?")?"&":"?",W=c?c(C):new URLSearchParams(k(C)),w+=L+W),w=function(e,t){if(!e)return t;if(!t)return e;if(function(e){return new RegExp("(^|:)//").test(e)}(t))return t;var n=e.endsWith("/")||!t.startsWith("?")?"/":"";return e=function(e){return e.replace(/\/$/,"")}(e),""+e+n+function(e){return e.replace(/^\//,"")}(t)}(r,w),H=new Request(w,F),B=H.clone(),A={request:B},V=!1,G=K&&setTimeout((function(){V=!0,i.abort()}),K),n.label=2;case 2:return n.trys.push([2,4,5,6]),[4,o(H)];case 3:return J=n.sent(),[3,6];case 4:return Y=n.sent(),[2,{error:{status:V?"TIMEOUT_ERROR":"FETCH_ERROR",error:String(Y)},meta:A}];case 5:return G&&clearTimeout(G),[7];case 6:$=J.clone(),A.response=$,Z="",n.label=7;case 7:return n.trys.push([7,9,,10]),[4,Promise.all([S(J,M).then((function(e){return X=e}),(function(e){return ee=e})),$.text().then((function(e){return Z=e}),(function(){}))])];case 8:if(n.sent(),ee)throw ee;return[3,10];case 9:return te=n.sent(),[2,{error:{status:"PARSING_ERROR",originalStatus:J.status,data:Z,error:String(te)},meta:A}];case 10:return[2,N(J,X)?{data:X,meta:A}:{error:{status:J.status,data:X},meta:A}]}}))}))};function S(e,t){return q(this,null,(function(){var r;return n(this,(function(n){switch(n.label){case 0:return"function"==typeof t?[2,t(e)]:("content-type"===t&&(t=l(e.headers)?"json":"text"),"json"!==t?[3,2]:[4,e.text()]);case 1:return[2,(r=n.sent()).length?JSON.parse(r):null];case 2:return[2,e.text()]}}))}))}}var Q=function(e,t){void 0===t&&(t=void 0),this.value=e,this.meta=t};function P(e,t){return void 0===e&&(e=0),void 0===t&&(t=5),q(this,null,(function(){var r,i;return n(this,(function(n){switch(n.label){case 0:return r=Math.min(e,t),i=~~((Math.random()+.4)*(300<<r)),[4,new Promise((function(e){return setTimeout((function(t){return e(t)}),i)}))];case 1:return n.sent(),[2]}}))}))}var C={},I=Object.assign((function(e,t){return function(r,i,a){return q(void 0,null,(function(){var u,o,c,s,l,d,f;return n(this,(function(n){switch(n.label){case 0:u=[5,(t||C).maxRetries,(a||C).maxRetries].filter((function(e){return void 0!==e})),o=u.slice(-1)[0],c=function(e,t,n){return n.attempt<=o},s=v(v({maxRetries:o,backoff:P,retryCondition:c},t),a),l=0,n.label=1;case 1:n.label=2;case 2:return n.trys.push([2,4,,6]),[4,e(r,i,a)];case 3:if((d=n.sent()).error)throw new Q(d);return[2,d];case 4:if(f=n.sent(),l++,f.throwImmediately){if(f instanceof Q)return[2,f.value];throw f}return f instanceof Q&&!s.retryCondition(f.value.error,r,{attempt:l,baseQueryApi:i,extraOptions:a})?[2,f.value]:[4,s.backoff(l,s.maxRetries)];case 5:return n.sent(),[3,6];case 6:return[3,1];case 7:return[2]}}))}))}}),{fail:function(e){throw Object.assign(new Q({error:e}),{throwImmediately:!0})}}),M=b(__webpack_require__(7939)),D=(0,M.createAction)("__rtkq/focused"),N=(0,M.createAction)("__rtkq/unfocused"),E=(0,M.createAction)("__rtkq/online"),K=(0,M.createAction)("__rtkq/offline"),_=!1;function F(e,t){return t?t(e,{onFocus:D,onFocusLost:N,onOffline:K,onOnline:E}):(n=function(){return e(D())},r=function(){return e(E())},i=function(){return e(K())},a=function(){"visible"===window.document.visibilityState?n():e(N())},_||"undefined"!=typeof window&&window.addEventListener&&(window.addEventListener("visibilitychange",a,!1),window.addEventListener("focus",n,!1),window.addEventListener("online",r,!1),window.addEventListener("offline",i,!1),_=!0),function(){window.removeEventListener("focus",n),window.removeEventListener("visibilitychange",a),window.removeEventListener("online",r),window.removeEventListener("offline",i),_=!1});var n,r,i,a}var z,U,L=b(__webpack_require__(7939));function W(e){return e.type===z.query}function H(e,t,n,r,i,a){return"function"==typeof e?e(t,n,r,i).map(B).map(a):Array.isArray(e)?e.map(B).map(a):[]}function B(e){return"string"==typeof e?{type:e}:e}(U=z||(z={})).query="query",U.mutation="mutation";var J=b(__webpack_require__(7939));function V(e){return null!=e}var G=Symbol("forceQueryFn"),Y=function(e){return"function"==typeof e[G]},$=b(__webpack_require__(7939)),X=b(__webpack_require__(6312)),Z=b(__webpack_require__(7939));function ee(e){return e}function te(e,t,n,r){return H(n[e.meta.arg.endpointName][t],(0,$.isFulfilled)(e)?e.payload:void 0,(0,$.isRejectedWithValue)(e)?e.payload:void 0,e.meta.arg.originalArgs,"baseQueryMeta"in e.meta?e.meta.baseQueryMeta:void 0,r)}var ne=b(__webpack_require__(6312));function re(e,t,n){var r=e[t];r&&n(r)}function ie(e){var t;return null!=(t="arg"in e?e.arg.fixedCacheKey:e.fixedCacheKey)?t:e.requestId}function ae(e,t,n){var r=e[ie(t)];r&&n(r)}var ue={},oe=Symbol.for("RTKQ/skipToken"),ce=oe,se={status:e.uninitialized},le=(0,L.createNextState)(se,(function(){})),de=(0,L.createNextState)(se,(function(){})),fe=b(__webpack_require__(7939)),pe=function(e){return e.endpointName+"("+JSON.stringify(e.queryArgs,(function(e,t){return(0,fe.isPlainObject)(t)?Object.keys(t).sort().reduce((function(e,n){return e[n]=t[n],e}),{}):t}))+")"},he=b(__webpack_require__(7939)),ve=b(__webpack_require__(2279));function ye(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(t){var n=(0,ve.defaultMemoize)((function(e){var n,r;return null==(r=t.extractRehydrationInfo)?void 0:r.call(t,e,{reducerPath:null!=(n=t.reducerPath)?n:"api"})})),i=y(v({reducerPath:"api",keepUnusedDataFor:60,refetchOnMountOrArgChange:!1,refetchOnFocus:!1,refetchOnReconnect:!1},t),{extractRehydrationInfo:n,serializeQueryArgs:function(e){var n=pe;if("serializeQueryArgs"in e.endpointDefinition){var r=e.endpointDefinition.serializeQueryArgs;n=function(e){var t=r(e);return"string"==typeof t?t:pe(y(v({},e),{queryArgs:t}))}}else t.serializeQueryArgs&&(n=t.serializeQueryArgs);return n(e)},tagTypes:r([],t.tagTypes||[])}),a={endpointDefinitions:{},batch:function(e){e()},apiUid:(0,he.nanoid)(),extractRehydrationInfo:n,hasRehydrationInfo:(0,ve.defaultMemoize)((function(e){return null!=n(e)}))},u={injectEndpoints:function(e){for(var t=e.endpoints({query:function(e){return y(v({},e),{type:z.query})},mutation:function(e){return y(v({},e),{type:z.mutation})}}),n=0,r=Object.entries(t);n<r.length;n++){var i=r[n],c=i[0],s=i[1];if(e.overrideExisting||!(c in a.endpointDefinitions)){a.endpointDefinitions[c]=s;for(var l=0,d=o;l<d.length;l++)d[l].injectEndpoint(c,s)}}return u},enhanceEndpoints:function(e){var t=e.addTagTypes,n=e.endpoints;if(t)for(var r=0,o=t;r<o.length;r++){var c=o[r];i.tagTypes.includes(c)||i.tagTypes.push(c)}if(n)for(var s=0,l=Object.entries(n);s<l.length;s++){var d=l[s],f=d[0],p=d[1];"function"==typeof p?p(a.endpointDefinitions[f]):Object.assign(a.endpointDefinitions[f]||{},p)}return u}},o=e.map((function(e){return e.init(u,i,a)}));return u.injectEndpoints({endpoints:t.endpoints})}}function me(){return function(){throw new Error("When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.")}}var ge,be=b(__webpack_require__(7939)),qe=function(e){var t=e.reducerPath,n=e.api,r=e.context,i=e.internalState,a=n.internalActions,u=a.removeQueryResult,o=a.unsubscribeQueryResult;function c(e){var t=i.currentSubscriptions[e];return!!t&&!function(e){for(var t in e)return!1;return!0}(t)}var s={};function l(e,t,n,i){var a,o=r.endpointDefinitions[t],l=null!=(a=null==o?void 0:o.keepUnusedDataFor)?a:i.keepUnusedDataFor;if(Infinity!==l){var d=Math.max(0,Math.min(l,2147482.647));if(!c(e)){var f=s[e];f&&clearTimeout(f),s[e]=setTimeout((function(){c(e)||n.dispatch(u({queryCacheKey:e})),delete s[e]}),1e3*d)}}}return function(e,i,a){var u;if(o.match(e)){var c=i.getState()[t];l(b=e.payload.queryCacheKey,null==(u=c.queries[b])?void 0:u.endpointName,i,c.config)}if(n.util.resetApiState.match(e))for(var d=0,f=Object.entries(s);d<f.length;d++){var p=f[d],h=p[0],v=p[1];v&&clearTimeout(v),delete s[h]}if(r.hasRehydrationInfo(e)){c=i.getState()[t];for(var y=r.extractRehydrationInfo(e).queries,m=0,g=Object.entries(y);m<g.length;m++){var b,q=g[m],S=q[1];l(b=q[0],null==S?void 0:S.endpointName,i,c.config)}}}},Se=b(__webpack_require__(7939)),Oe=function(t){var n=t.reducerPath,r=t.context,i=t.context.endpointDefinitions,a=t.mutationThunk,u=t.api,o=t.assertTagType,c=t.refetchQuery,s=u.internalActions.removeQueryResult,l=(0,Se.isAnyOf)((0,Se.isFulfilled)(a),(0,Se.isRejectedWithValue)(a));function d(t,i){var a=i.getState(),o=a[n],l=u.util.selectInvalidatedBy(a,t);r.batch((function(){for(var t,n=0,r=Array.from(l.values());n<r.length;n++){var a=r[n].queryCacheKey,u=o.queries[a],d=null!=(t=o.subscriptions[a])?t:{};u&&(0===Object.keys(d).length?i.dispatch(s({queryCacheKey:a})):u.status!==e.uninitialized&&i.dispatch(c(u,a)))}}))}return function(e,t){l(e)&&d(te(e,"invalidatesTags",i,o),t),u.util.invalidateTags.match(e)&&d(H(e.payload,void 0,void 0,void 0,void 0,o),t)}},Ae=function(t){var n=t.reducerPath,r=t.queryThunk,i=t.api,a=t.refetchQuery,u=t.internalState,o={};function c(t,r){var i=t.queryCacheKey,c=r.getState()[n].queries[i];if(c&&c.status!==e.uninitialized){var s=d(u.currentSubscriptions[i]);if(Number.isFinite(s)){var l=o[i];(null==l?void 0:l.timeout)&&(clearTimeout(l.timeout),l.timeout=void 0);var f=Date.now()+s,p=o[i]={nextPollTimestamp:f,pollingInterval:s,timeout:setTimeout((function(){p.timeout=void 0,r.dispatch(a(c,i))}),s)}}}}function s(t,r){var i=t.queryCacheKey,a=r.getState()[n].queries[i];if(a&&a.status!==e.uninitialized){var s=d(u.currentSubscriptions[i]);if(Number.isFinite(s)){var f=o[i],p=Date.now()+s;(!f||p<f.nextPollTimestamp)&&c({queryCacheKey:i},r)}else l(i)}}function l(e){var t=o[e];(null==t?void 0:t.timeout)&&clearTimeout(t.timeout),delete o[e]}function d(e){void 0===e&&(e={});var t=Number.POSITIVE_INFINITY;for(var n in e)e[n].pollingInterval&&(t=Math.min(e[n].pollingInterval,t));return t}return function(e,t){(i.internalActions.updateSubscriptionOptions.match(e)||i.internalActions.unsubscribeQueryResult.match(e))&&s(e.payload,t),(r.pending.match(e)||r.rejected.match(e)&&e.meta.condition)&&s(e.meta.arg,t),(r.fulfilled.match(e)||r.rejected.match(e)&&!e.meta.condition)&&c(e.meta.arg,t),i.util.resetApiState.match(e)&&function(){for(var e=0,t=Object.keys(o);e<t.length;e++)l(t[e])}()}},Te=b(__webpack_require__(7939)),Re=new Error("Promise never resolved before cacheEntryRemoved."),je=function(e){var t=e.api,n=e.reducerPath,r=e.context,i=e.queryThunk,a=e.mutationThunk,u=(0,Te.isAsyncThunkAction)(i),o=(0,Te.isAsyncThunkAction)(a),c=(0,Te.isFulfilled)(i,a),s={};function l(e,n,i,a,u){var o=r.endpointDefinitions[e],c=null==o?void 0:o.onCacheEntryAdded;if(c){var l={},d=new Promise((function(e){l.cacheEntryRemoved=e})),f=Promise.race([new Promise((function(e){l.valueResolved=e})),d.then((function(){throw Re}))]);f.catch((function(){})),s[i]=l;var p=t.endpoints[e].select(o.type===z.query?n:i),h=a.dispatch((function(e,t,n){return n})),m=y(v({},a),{getCacheEntry:function(){return p(a.getState())},requestId:u,extra:h,updateCachedData:o.type===z.query?function(r){return a.dispatch(t.util.updateQueryData(e,n,r))}:void 0,cacheDataLoaded:f,cacheEntryRemoved:d}),g=c(n,m);Promise.resolve(g).catch((function(e){if(e!==Re)throw e}))}}return function(e,r,d){var f=function(e){return u(e)?e.meta.arg.queryCacheKey:o(e)?e.meta.requestId:t.internalActions.removeQueryResult.match(e)?e.payload.queryCacheKey:t.internalActions.removeMutationResult.match(e)?ie(e.payload):""}(e);if(i.pending.match(e)){var p=d[n].queries[f],h=r.getState()[n].queries[f];!p&&h&&l(e.meta.arg.endpointName,e.meta.arg.originalArgs,f,r,e.meta.requestId)}else if(a.pending.match(e))(h=r.getState()[n].mutations[f])&&l(e.meta.arg.endpointName,e.meta.arg.originalArgs,f,r,e.meta.requestId);else if(c(e))(null==(g=s[f])?void 0:g.valueResolved)&&(g.valueResolved({data:e.payload,meta:e.meta.baseQueryMeta}),delete g.valueResolved);else if(t.internalActions.removeQueryResult.match(e)||t.internalActions.removeMutationResult.match(e))(g=s[f])&&(delete s[f],g.cacheEntryRemoved());else if(t.util.resetApiState.match(e))for(var v=0,y=Object.entries(s);v<y.length;v++){var m=y[v],g=m[1];delete s[m[0]],g.cacheEntryRemoved()}}},we=b(__webpack_require__(7939)),ke=function(e){var t=e.api,n=e.context,r=e.queryThunk,i=e.mutationThunk,a=(0,we.isPending)(r,i),u=(0,we.isRejected)(r,i),o=(0,we.isFulfilled)(r,i),c={};return function(e,r){var i,s,l;if(a(e)){var d=e.meta,f=d.requestId,p=d.arg,h=p.endpointName,m=p.originalArgs,g=n.endpointDefinitions[h],b=null==g?void 0:g.onQueryStarted;if(b){var q={},S=new Promise((function(e,t){q.resolve=e,q.reject=t}));S.catch((function(){})),c[f]=q;var O=t.endpoints[h].select(g.type===z.query?m:f),A=r.dispatch((function(e,t,n){return n})),T=y(v({},r),{getCacheEntry:function(){return O(r.getState())},requestId:f,extra:A,updateCachedData:g.type===z.query?function(e){return r.dispatch(t.util.updateQueryData(h,m,e))}:void 0,queryFulfilled:S});b(m,T)}}else if(o(e)){var R=e.meta,j=R.baseQueryMeta;null==(i=c[f=R.requestId])||i.resolve({data:e.payload,meta:j}),delete c[f]}else if(u(e)){var w=e.meta;j=w.baseQueryMeta,null==(l=c[f=w.requestId])||l.reject({error:null!=(s=e.payload)?s:e.error,isUnhandledError:!w.rejectedWithValue,meta:j}),delete c[f]}}},xe=function(e){var t=e.api,n=e.context.apiUid;return function(e,r){t.util.resetApiState.match(e)&&r.dispatch(t.internalActions.middlewareRegistered(n))}},Qe=b(__webpack_require__(6312)),Pe="function"==typeof queueMicrotask?queueMicrotask.bind("undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:globalThis):function(e){return(ge||(ge=Promise.resolve())).then(e).catch((function(e){return setTimeout((function(){throw e}),0)}))};function Ce(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];Object.assign.apply(Object,r([e],t))}var Ie=b(__webpack_require__(6312)),Me=Symbol(),De=function(){return{name:Me,init:function(t,i,a){var u=i.baseQuery,o=i.reducerPath,c=i.serializeQueryArgs,s=i.keepUnusedDataFor,l=i.refetchOnMountOrArgChange,d=i.refetchOnFocus,f=i.refetchOnReconnect;(0,Ie.enablePatches)();var p=function(e){return e};Object.assign(t,{reducerPath:o,endpoints:{},internalActions:{onOnline:E,onOffline:K,onFocus:D,onFocusLost:N},util:{}});var h=function(t){var r=this,i=t.reducerPath,a=t.baseQuery,u=t.context.endpointDefinitions,o=t.serializeQueryArgs,c=t.api,s=function(e,t){return q(r,[e,t],(function(e,t){var r,i,o,c,s,d,f,p,h,v,y,m,g,b=t.signal,q=t.abort,S=t.rejectWithValue,O=t.fulfillWithValue,A=t.dispatch,T=t.getState,R=t.extra;return n(this,(function(t){switch(t.label){case 0:r=u[e.endpointName],t.label=1;case 1:return t.trys.push([1,8,,13]),i=ee,o=void 0,c={signal:b,abort:q,dispatch:A,getState:T,extra:R,endpoint:e.endpointName,type:e.type,forced:"query"===e.type?l(e,T()):void 0},(s="query"===e.type?e[G]:void 0)?(o=s(),[3,6]):[3,2];case 2:return r.query?[4,a(r.query(e.originalArgs),c,r.extraOptions)]:[3,4];case 3:return o=t.sent(),r.transformResponse&&(i=r.transformResponse),[3,6];case 4:return[4,r.queryFn(e.originalArgs,c,r.extraOptions,(function(e){return a(e,c,r.extraOptions)}))];case 5:o=t.sent(),t.label=6;case 6:if(o.error)throw new Q(o.error,o.meta);return d=O,[4,i(o.data,o.meta,e.originalArgs)];case 7:return[2,d.apply(void 0,[t.sent(),(m={fulfilledTimeStamp:Date.now(),baseQueryMeta:o.meta},m[Z.SHOULD_AUTOBATCH]=!0,m)])];case 8:if(f=t.sent(),!((p=f)instanceof Q))return[3,12];h=ee,r.query&&r.transformErrorResponse&&(h=r.transformErrorResponse),t.label=9;case 9:return t.trys.push([9,11,,12]),v=S,[4,h(p.value,p.meta,e.originalArgs)];case 10:return[2,v.apply(void 0,[t.sent(),(g={baseQueryMeta:p.meta},g[Z.SHOULD_AUTOBATCH]=!0,g)])];case 11:return y=t.sent(),p=y,[3,12];case 12:throw console.error(p),p;case 13:return[2]}}))}))};function l(e,t){var n,r,a,u,o=null==(r=null==(n=t[i])?void 0:n.queries)?void 0:r[e.queryCacheKey],c=null==(a=t[i])?void 0:a.config.refetchOnMountOrArgChange,s=null==o?void 0:o.fulfilledTimeStamp,l=null!=(u=e.forceRefetch)?u:e.subscribe&&c;return!!l&&(!0===l||(Number(new Date)-Number(s))/1e3>=l)}var d=(0,Z.createAsyncThunk)(i+"/executeQuery",s,{getPendingMeta:function(){var e;return(e={startedTimeStamp:Date.now()})[Z.SHOULD_AUTOBATCH]=!0,e},condition:function(e,t){var n,r,a,o=(0,t.getState)(),c=null==(r=null==(n=o[i])?void 0:n.queries)?void 0:r[e.queryCacheKey],s=null==c?void 0:c.fulfilledTimeStamp,d=e.originalArgs,f=null==c?void 0:c.originalArgs,p=u[e.endpointName];return!(!Y(e)&&("pending"===(null==c?void 0:c.status)||!l(e,o)&&(!W(p)||!(null==(a=null==p?void 0:p.forceRefetch)?void 0:a.call(p,{currentArg:d,previousArg:f,endpointState:c,state:o})))&&s))},dispatchConditionRejection:!0}),f=(0,Z.createAsyncThunk)(i+"/executeMutation",s,{getPendingMeta:function(){var e;return(e={startedTimeStamp:Date.now()})[Z.SHOULD_AUTOBATCH]=!0,e}});function p(e){return function(t){var n,r;return(null==(r=null==(n=null==t?void 0:t.meta)?void 0:n.arg)?void 0:r.endpointName)===e}}return{queryThunk:d,mutationThunk:f,prefetch:function(e,t,n){return function(r,i){var a=function(e){return"force"in e}(n)&&n.force,u=function(e){return"ifOlderThan"in e}(n)&&n.ifOlderThan,o=function(n){return void 0===n&&(n=!0),c.endpoints[e].initiate(t,{forceRefetch:n})},s=c.endpoints[e].select(t)(i());if(a)r(o());else if(u){var l=null==s?void 0:s.fulfilledTimeStamp;if(!l)return void r(o());(Number(new Date)-Number(new Date(l)))/1e3>=u&&r(o())}else r(o(!1))}},updateQueryData:function(t,n,r){return function(i,a){var u,o,s=c.endpoints[t].select(n)(a()),l={patches:[],inversePatches:[],undo:function(){return i(c.util.patchQueryData(t,n,l.inversePatches))}};if(s.status===e.uninitialized)return l;if("data"in s)if((0,X.isDraftable)(s.data)){var d=(0,X.produceWithPatches)(s.data,r),f=d[2];(u=l.patches).push.apply(u,d[1]),(o=l.inversePatches).push.apply(o,f)}else{var p=r(s.data);l.patches.push({op:"replace",path:[],value:p}),l.inversePatches.push({op:"replace",path:[],value:s.data})}return i(c.util.patchQueryData(t,n,l.patches)),l}},upsertQueryData:function(e,t,n){return function(r){var i;return r(c.endpoints[e].initiate(t,((i={subscribe:!1,forceRefetch:!0})[G]=function(){return{data:n}},i)))}},patchQueryData:function(e,t,n){return function(r){r(c.internalActions.queryResultPatched({queryCacheKey:o({queryArgs:t,endpointDefinition:u[e],endpointName:e}),patches:n}))}},buildMatchThunkActions:function(e,t){return{matchPending:(0,$.isAllOf)((0,$.isPending)(e),p(t)),matchFulfilled:(0,$.isAllOf)((0,$.isFulfilled)(e),p(t)),matchRejected:(0,$.isAllOf)((0,$.isRejected)(e),p(t))}}}}({baseQuery:u,reducerPath:o,context:a,api:t,serializeQueryArgs:c}),m=h.queryThunk,g=h.mutationThunk,b=h.patchQueryData,O=h.updateQueryData,T=h.upsertQueryData,R=h.prefetch,j=h.buildMatchThunkActions,w=function(t){var n=t.reducerPath,r=t.queryThunk,i=t.mutationThunk,a=t.context,u=a.endpointDefinitions,o=a.apiUid,c=a.extractRehydrationInfo,s=a.hasRehydrationInfo,l=t.assertTagType,d=t.config,f=(0,J.createAction)(n+"/resetApiState"),p=(0,J.createSlice)({name:n+"/queries",initialState:ue,reducers:{removeQueryResult:{reducer:function(e,t){delete e[t.payload.queryCacheKey]},prepare:(0,J.prepareAutoBatched)()},queryResultPatched:function(e,t){var n=t.payload,r=n.patches;re(e,n.queryCacheKey,(function(e){e.data=(0,ne.applyPatches)(e.data,r.concat())}))}},extraReducers:function(t){t.addCase(r.pending,(function(t,n){var r,i=n.meta,a=n.meta.arg,u=Y(a);(a.subscribe||u)&&(null!=t[r=a.queryCacheKey]||(t[r]={status:e.uninitialized,endpointName:a.endpointName})),re(t,a.queryCacheKey,(function(t){t.status=e.pending,t.requestId=u&&t.requestId?t.requestId:i.requestId,void 0!==a.originalArgs&&(t.originalArgs=a.originalArgs),t.startedTimeStamp=i.startedTimeStamp}))})).addCase(r.fulfilled,(function(t,n){var r=n.meta,i=n.payload;re(t,r.arg.queryCacheKey,(function(t){var n;if(t.requestId===r.requestId||Y(r.arg)){var a=u[r.arg.endpointName].merge;if(t.status=e.fulfilled,a)if(void 0!==t.data){var o=r.fulfilledTimeStamp,c=r.arg,s=r.baseQueryMeta,l=r.requestId,d=(0,J.createNextState)(t.data,(function(e){return a(e,i,{arg:c.originalArgs,baseQueryMeta:s,fulfilledTimeStamp:o,requestId:l})}));t.data=d}else t.data=i;else t.data=null==(n=u[r.arg.endpointName].structuralSharing)||n?A(t.data,i):i;delete t.error,t.fulfilledTimeStamp=r.fulfilledTimeStamp}}))})).addCase(r.rejected,(function(t,n){var r=n.meta,i=r.condition,a=r.requestId,u=n.error,o=n.payload;re(t,r.arg.queryCacheKey,(function(t){if(i);else{if(t.requestId!==a)return;t.status=e.rejected,t.error=null!=o?o:u}}))})).addMatcher(s,(function(t,n){for(var r=c(n).queries,i=0,a=Object.entries(r);i<a.length;i++){var u=a[i],o=u[1];(null==o?void 0:o.status)!==e.fulfilled&&(null==o?void 0:o.status)!==e.rejected||(t[u[0]]=o)}}))}}),h=(0,J.createSlice)({name:n+"/mutations",initialState:ue,reducers:{removeMutationResult:{reducer:function(e,t){var n=ie(t.payload);n in e&&delete e[n]},prepare:(0,J.prepareAutoBatched)()}},extraReducers:function(t){t.addCase(i.pending,(function(t,n){var r=n.meta,i=r.requestId,a=r.arg,u=r.startedTimeStamp;a.track&&(t[ie(n.meta)]={requestId:i,status:e.pending,endpointName:a.endpointName,startedTimeStamp:u})})).addCase(i.fulfilled,(function(t,n){var r=n.payload,i=n.meta;i.arg.track&&ae(t,i,(function(t){t.requestId===i.requestId&&(t.status=e.fulfilled,t.data=r,t.fulfilledTimeStamp=i.fulfilledTimeStamp)}))})).addCase(i.rejected,(function(t,n){var r=n.payload,i=n.error,a=n.meta;a.arg.track&&ae(t,a,(function(t){t.requestId===a.requestId&&(t.status=e.rejected,t.error=null!=r?r:i)}))})).addMatcher(s,(function(t,n){for(var r=c(n).mutations,i=0,a=Object.entries(r);i<a.length;i++){var u=a[i],o=u[0],s=u[1];(null==s?void 0:s.status)!==e.fulfilled&&(null==s?void 0:s.status)!==e.rejected||o===(null==s?void 0:s.requestId)||(t[o]=s)}}))}}),m=(0,J.createSlice)({name:n+"/invalidation",initialState:ue,reducers:{},extraReducers:function(e){e.addCase(p.actions.removeQueryResult,(function(e,t){for(var n=t.payload.queryCacheKey,r=0,i=Object.values(e);r<i.length;r++)for(var a=0,u=Object.values(i[r]);a<u.length;a++){var o=u[a],c=o.indexOf(n);-1!==c&&o.splice(c,1)}})).addMatcher(s,(function(e,t){for(var n,r,i,a,u=c(t).provided,o=0,s=Object.entries(u);o<s.length;o++)for(var l=s[o],d=l[0],f=0,p=Object.entries(l[1]);f<p.length;f++)for(var h=p[f],v=h[0],y=h[1],m=null!=(a=(r=null!=(n=e[d])?n:e[d]={})[i=v||"__internal_without_id"])?a:r[i]=[],g=0,b=y;g<b.length;g++){var q=b[g];m.includes(q)||m.push(q)}})).addMatcher((0,J.isAnyOf)((0,J.isFulfilled)(r),(0,J.isRejectedWithValue)(r)),(function(e,t){for(var n,r,i,a,o=te(t,"providesTags",u,l),c=t.meta.arg.queryCacheKey,s=0,d=Object.values(e);s<d.length;s++)for(var f=0,p=Object.values(d[s]);f<p.length;f++){var h=p[f],v=h.indexOf(c);-1!==v&&h.splice(v,1)}for(var y=0,m=o;y<m.length;y++){var g=m[y],b=g.type,q=g.id,S=null!=(a=(r=null!=(n=e[b])?n:e[b]={})[i=q||"__internal_without_id"])?a:r[i]=[];S.includes(c)||S.push(c)}}))}}),g=(0,J.createSlice)({name:n+"/subscriptions",initialState:ue,reducers:{updateSubscriptionOptions:function(e,t){},unsubscribeQueryResult:function(e,t){},internal_probeSubscription:function(e,t){}}}),b=(0,J.createSlice)({name:n+"/internalSubscriptions",initialState:ue,reducers:{subscriptionsUpdated:function(e,t){return(0,ne.applyPatches)(e,t.payload)}}}),q=(0,J.createSlice)({name:n+"/config",initialState:v({online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine,focused:"undefined"==typeof document||"hidden"!==document.visibilityState,middlewareRegistered:!1},d),reducers:{middlewareRegistered:function(e,t){e.middlewareRegistered="conflict"!==e.middlewareRegistered&&o===t.payload||"conflict"}},extraReducers:function(e){e.addCase(E,(function(e){e.online=!0})).addCase(K,(function(e){e.online=!1})).addCase(D,(function(e){e.focused=!0})).addCase(N,(function(e){e.focused=!1})).addMatcher(s,(function(e){return v({},e)}))}}),S=(0,J.combineReducers)({queries:p.reducer,mutations:h.reducer,provided:m.reducer,subscriptions:b.reducer,config:q.reducer});return{reducer:function(e,t){return S(f.match(t)?void 0:e,t)},actions:y(v(v(v(v(v({},q.actions),p.actions),g.actions),b.actions),h.actions),{unsubscribeMutationResult:h.actions.removeMutationResult,resetApiState:f})}}({context:a,queryThunk:m,mutationThunk:g,reducerPath:o,assertTagType:p,config:{refetchOnFocus:d,refetchOnReconnect:f,refetchOnMountOrArgChange:l,keepUnusedDataFor:s,reducerPath:o}}),k=w.reducer,x=w.actions;Ce(t.util,{patchQueryData:b,updateQueryData:O,upsertQueryData:T,prefetch:R,resetApiState:x.resetApiState}),Ce(t.internalActions,x);var P=function(t){var n=t.reducerPath,r=t.queryThunk,i=t.api,a=t.context,u=a.apiUid,o={invalidateTags:(0,be.createAction)(n+"/invalidateTags")},c=[xe,qe,Oe,Ae,je,ke];return{middleware:function(r){var o=!1,l=y(v({},t),{internalState:{currentSubscriptions:{}},refetchQuery:s}),d=c.map((function(e){return e(l)})),f=function(e){var t=e.api,n=e.queryThunk,r=e.internalState,i=t.reducerPath+"/subscriptions",a=null,u=!1,o=t.internalActions,c=o.updateSubscriptionOptions,s=o.unsubscribeQueryResult;return function(e,o){var l,d;if(a||(a=JSON.parse(JSON.stringify(r.currentSubscriptions))),t.internalActions.internal_probeSubscription.match(e)){var f=e.payload;return[!1,!!(null==(l=r.currentSubscriptions[f.queryCacheKey])?void 0:l[f.requestId])]}var p=function(e,r){var i,a,u,o,l,d,f,p,h;if(c.match(r)){var v=r.payload,y=v.queryCacheKey,m=v.requestId;return(null==(i=null==e?void 0:e[y])?void 0:i[m])&&(e[y][m]=v.options),!0}if(s.match(r)){var g=r.payload;return m=g.requestId,e[y=g.queryCacheKey]&&delete e[y][m],!0}if(t.internalActions.removeQueryResult.match(r))return delete e[r.payload.queryCacheKey],!0;if(n.pending.match(r)){var b=r.meta;if(m=b.requestId,(O=b.arg).subscribe)return(q=null!=(u=e[a=O.queryCacheKey])?u:e[a]={})[m]=null!=(l=null!=(o=O.subscriptionOptions)?o:q[m])?l:{},!0}if(n.rejected.match(r)){var q,S=r.meta,O=S.arg;if(m=S.requestId,S.condition&&O.subscribe)return(q=null!=(f=e[d=O.queryCacheKey])?f:e[d]={})[m]=null!=(h=null!=(p=O.subscriptionOptions)?p:q[m])?h:{},!0}return!1}(r.currentSubscriptions,e);if(p){u||(Pe((function(){var e=JSON.parse(JSON.stringify(r.currentSubscriptions)),n=(0,Qe.produceWithPatches)(a,(function(){return e}));o.next(t.internalActions.subscriptionsUpdated(n[1])),a=e,u=!1})),u=!0);var h=!!(null==(d=e.type)?void 0:d.startsWith(i)),v=n.rejected.match(e)&&e.meta.condition&&!!e.meta.arg.subscribe;return[!h&&!v,!1]}return[!0,!1]}}(l),p=function(t){var n=t.reducerPath,r=t.context,i=t.refetchQuery,a=t.internalState,u=t.api.internalActions.removeQueryResult;function o(t,o){var c=t.getState()[n],s=c.queries,l=a.currentSubscriptions;r.batch((function(){for(var n=0,r=Object.keys(l);n<r.length;n++){var a=r[n],d=s[a],f=l[a];f&&d&&(Object.values(f).some((function(e){return!0===e[o]}))||Object.values(f).every((function(e){return void 0===e[o]}))&&c.config[o])&&(0===Object.keys(f).length?t.dispatch(u({queryCacheKey:a})):d.status!==e.uninitialized&&t.dispatch(i(d,a)))}}))}return function(e,t){D.match(e)&&o(t,"refetchOnFocus"),E.match(e)&&o(t,"refetchOnReconnect")}}(l);return function(e){return function(t){o||(o=!0,r.dispatch(i.internalActions.middlewareRegistered(u)));var c,s=y(v({},r),{next:e}),l=r.getState(),h=f(t,s,l),m=h[1];if(c=h[0]?e(t):m,r.getState()[n]&&(p(t,s,l),function(e){return!!e&&"string"==typeof e.type&&e.type.startsWith(n+"/")}(t)||a.hasRehydrationInfo(t)))for(var g=0,b=d;g<b.length;g++)(0,b[g])(t,s,l);return c}}},actions:o};function s(e,t,n){return void 0===n&&(n={}),r(v({type:"query",endpointName:e.endpointName,originalArgs:e.originalArgs,subscribe:!1,forceRefetch:!0,queryCacheKey:t},n))}}({reducerPath:o,context:a,queryThunk:m,mutationThunk:g,api:t,assertTagType:p}),C=P.middleware;Ce(t.util,P.actions),Ce(t,{reducer:k,middleware:C});var I=function(t){var n=t.serializeQueryArgs,r=t.reducerPath,i=function(e){return le},a=function(e){return de};return{buildQuerySelector:function(e,t){return function(r){var a=n({queryArgs:r,endpointDefinition:t,endpointName:e});return(0,L.createSelector)(r===oe?i:function(e){var t,n,r;return null!=(r=null==(n=null==(t=o(e))?void 0:t.queries)?void 0:n[a])?r:le},u)}},buildMutationSelector:function(){return function(e){var t,n;return n="object"==typeof e?null!=(t=ie(e))?t:oe:e,(0,L.createSelector)(n===oe?a:function(e){var t,r,i;return null!=(i=null==(r=null==(t=o(e))?void 0:t.mutations)?void 0:r[n])?i:de},u)}},selectInvalidatedBy:function(e,t){for(var n,i=e[r],a=new Set,u=0,o=t.map(B);u<o.length;u++){var c=o[u],s=i.provided[c.type];if(s)for(var l=0,d=null!=(n=void 0!==c.id?s[c.id]:S(Object.values(s)))?n:[];l<d.length;l++)a.add(d[l])}return S(Array.from(a.values()).map((function(e){var t=i.queries[e];return t?[{queryCacheKey:e,endpointName:t.endpointName,originalArgs:t.originalArgs}]:[]})))}};function u(t){return v(v({},t),{status:n=t.status,isUninitialized:n===e.uninitialized,isLoading:n===e.pending,isSuccess:n===e.fulfilled,isError:n===e.rejected});var n}function o(e){return e[r]}}({serializeQueryArgs:c,reducerPath:o}),M=I.buildQuerySelector,_=I.buildMutationSelector;Ce(t.util,{selectInvalidatedBy:I.selectInvalidatedBy});var F=function(e){var t=e.serializeQueryArgs,i=e.queryThunk,a=e.mutationThunk,u=e.api,o=e.context,c=new Map,s=new Map,l=u.internalActions,d=l.unsubscribeQueryResult,f=l.removeMutationResult,p=l.updateSubscriptionOptions;return{buildInitiateQuery:function(e,r){var a=function(o,s){var l=void 0===s?{}:s,f=l.subscribe,h=void 0===f||f,v=l.forceRefetch,y=l.subscriptionOptions,m=l[G];return function(s,l){var f,g,b=t({queryArgs:o,endpointDefinition:r,endpointName:e}),S=i(((f={type:"query",subscribe:h,forceRefetch:v,subscriptionOptions:y,endpointName:e,originalArgs:o,queryCacheKey:b})[G]=m,f)),O=u.endpoints[e].select(o),A=s(S),T=O(l()),R=A.requestId,j=A.abort,w=T.requestId!==R,k=null==(g=c.get(s))?void 0:g[b],x=function(){return O(l())},Q=Object.assign(m?A.then(x):w&&!k?Promise.resolve(T):Promise.all([k,A]).then(x),{arg:o,requestId:R,subscriptionOptions:y,queryCacheKey:b,abort:j,unwrap:function(){return q(this,null,(function(){var e;return n(this,(function(t){switch(t.label){case 0:return[4,Q];case 1:if((e=t.sent()).isError)throw e.error;return[2,e.data]}}))}))},refetch:function(){return s(a(o,{subscribe:!1,forceRefetch:!0}))},unsubscribe:function(){h&&s(d({queryCacheKey:b,requestId:R}))},updateSubscriptionOptions:function(t){Q.subscriptionOptions=t,s(p({endpointName:e,requestId:R,queryCacheKey:b,options:t}))}});if(!k&&!w&&!m){var P=c.get(s)||{};P[b]=Q,c.set(s,P),Q.then((function(){delete P[b],Object.keys(P).length||c.delete(s)}))}return Q}};return a},buildInitiateMutation:function(e){return function(t,n){var r=void 0===n?{}:n,i=r.track,u=void 0===i||i,o=r.fixedCacheKey;return function(n,r){var i=a({type:"mutation",endpointName:e,originalArgs:t,track:u,fixedCacheKey:o}),c=n(i),l=c.requestId,d=c.abort,p=c.unwrap,h=c.unwrap().then((function(e){return{data:e}})).catch((function(e){return{error:e}})),v=function(){n(f({requestId:l,fixedCacheKey:o}))},y=Object.assign(h,{arg:c.arg,requestId:l,abort:d,unwrap:p,unsubscribe:v,reset:v}),m=s.get(n)||{};return s.set(n,m),m[l]=y,y.then((function(){delete m[l],Object.keys(m).length||s.delete(n)})),o&&(m[o]=y,y.then((function(){m[o]===y&&(delete m[o],Object.keys(m).length||s.delete(n))}))),y}}},getRunningQueryThunk:function(e,n){return function(r){var i,a=t({queryArgs:n,endpointDefinition:o.endpointDefinitions[e],endpointName:e});return null==(i=c.get(r))?void 0:i[a]}},getRunningMutationThunk:function(e,t){return function(e){var n;return null==(n=s.get(e))?void 0:n[t]}},getRunningQueriesThunk:function(){return function(e){return Object.values(c.get(e)||{}).filter(V)}},getRunningMutationsThunk:function(){return function(e){return Object.values(s.get(e)||{}).filter(V)}},getRunningOperationPromises:function(){var e=function(e){return Array.from(e.values()).flatMap((function(e){return e?Object.values(e):[]}))};return r(r([],e(c)),e(s)).filter(V)},removalWarning:function(){throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.")}}}({queryThunk:m,mutationThunk:g,api:t,serializeQueryArgs:c,context:a}),U=F.buildInitiateQuery,H=F.buildInitiateMutation;return Ce(t.util,{getRunningOperationPromises:F.getRunningOperationPromises,getRunningOperationPromise:F.removalWarning,getRunningMutationThunk:F.getRunningMutationThunk,getRunningMutationsThunk:F.getRunningMutationsThunk,getRunningQueryThunk:F.getRunningQueryThunk,getRunningQueriesThunk:F.getRunningQueriesThunk}),{name:Me,injectEndpoint:function(e,n){var r,i=t;null!=(r=i.endpoints)[e]||(r[e]={}),W(n)?Ce(i.endpoints[e],{name:e,select:M(e,n),initiate:U(e,n)},j(m,e)):n.type===z.mutation&&Ce(i.endpoints[e],{name:e,select:_(),initiate:H(e)},j(g,e))}}}}},Ne=ye(De());
//# sourceMappingURL=rtk-query.cjs.production.min.js.map

/***/ }),

/***/ 7389:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var e,n=this&&this.__extends||(e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),t=this&&this.__generator||function(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},r=this&&this.__spreadArray||function(e,n){for(var t=0,r=n.length,i=e.length;t<r;t++,i++)e[i]=n[t];return e},i=Object.create,o=Object.defineProperty,u=Object.defineProperties,a=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,v=function(e,n,t){return n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},h=function(e,n){for(var t in n||(n={}))d.call(n,t)&&v(e,t,n[t]);if(l)for(var r=0,i=l(n);r<i.length;r++)p.call(n,t=i[r])&&v(e,t,n[t]);return e},y=function(e,n){return u(e,c(n))},g=function(e){return o(e,"__esModule",{value:!0})},b=function(e,n,t){if(n&&"object"==typeof n||"function"==typeof n)for(var r=function(r){d.call(e,r)||"default"===r||o(e,r,{get:function(){return n[r]},enumerable:!(t=a(n,r))||t.enumerable})},i=0,u=f(n);i<u.length;i++)r(u[i]);return e},m=function(e){return b(g(o(null!=e?i(s(e)):{},"default",e&&e.__esModule&&"default"in e?{get:function(){return e.default},enumerable:!0}:{value:e,enumerable:!0})),e)},w=function(e,n,t){return new Promise((function(r,i){var o=function(e){try{a(t.next(e))}catch(e){i(e)}},u=function(e){try{a(t.throw(e))}catch(e){i(e)}},a=function(e){return e.done?r(e.value):Promise.resolve(e.value).then(o,u)};a((t=t.apply(e,n)).next())}))};g(exports),function(e,n){for(var t in n)o(e,t,{get:n[t],enumerable:!0})}(exports,{MiddlewareArray:function(){return T},SHOULD_AUTOBATCH:function(){return Ue},TaskAbortError:function(){return Ae},addListener:function(){return Le},autoBatchEnhancer:function(){return He},clearAllListeners:function(){return Re},configureStore:function(){return U},createAction:function(){return W},createAsyncThunk:function(){return ce},createDraftSafeSelector:function(){return _},createEntityAdapter:function(){return te},createImmutableStateInvariantMiddleware:function(){return L},createListenerMiddleware:function(){return Ve},createNextState:function(){return j.default},createReducer:function(){return K},createSelector:function(){return E.createSelector},createSerializableStateInvariantMiddleware:function(){return V},createSlice:function(){return J},current:function(){return j.current},findNonSerializableValue:function(){return z},freeze:function(){return j.freeze},getDefaultMiddleware:function(){return B},getType:function(){return F},isAllOf:function(){return de},isAnyOf:function(){return se},isAsyncThunkAction:function(){return me},isDraft:function(){return j.isDraft},isFulfilled:function(){return be},isImmutableDefault:function(){return D},isPending:function(){return he},isPlain:function(){return R},isPlainObject:function(){return k},isRejected:function(){return ye},isRejectedWithValue:function(){return ge},miniSerializeError:function(){return ae},nanoid:function(){return re},original:function(){return j.original},prepareAutoBatched:function(){return We},removeListener:function(){return ze},unwrapResult:function(){return fe}});var O=m(__webpack_require__(6312));b(exports,m(__webpack_require__(5281)));var j=m(__webpack_require__(6312)),E=m(__webpack_require__(2279)),S=m(__webpack_require__(6312)),A=m(__webpack_require__(2279)),_=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=A.createSelector.apply(void 0,e),i=function(e){for(var n=[],i=1;i<arguments.length;i++)n[i-1]=arguments[i];return t.apply(void 0,r([(0,S.isDraft)(e)?(0,S.current)(e):e],n))};return i},P=m(__webpack_require__(5281)),q=m(__webpack_require__(5281)),x="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?q.compose:q.compose.apply(null,arguments)};function k(e){if("object"!=typeof e||null===e)return!1;var n=Object.getPrototypeOf(e);if(null===n)return!0;for(var t=n;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return n===t}"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window;var M=m(__webpack_require__(9681)),I=m(__webpack_require__(6312)),T=function(e){function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=e.apply(this,n)||this;return Object.setPrototypeOf(i,t.prototype),i}return n(t,e),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?new(t.bind.apply(t,r([void 0],e[0].concat(this)))):new(t.bind.apply(t,r([void 0],e.concat(this))))},t}(Array);function C(e){return(0,I.isDraftable)(e)?(0,I.default)(e,(function(){})):e}function D(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function L(e){return void 0===e&&(e={}),function(){return function(e){return function(n){return e(n)}}}}function R(e){var n=typeof e;return null==e||"string"===n||"boolean"===n||"number"===n||Array.isArray(e)||k(e)}function z(e,n,t,r,i,o){var u;if(void 0===n&&(n=""),void 0===t&&(t=R),void 0===i&&(i=[]),!t(e))return{keyPath:n||"<root>",value:e};if("object"!=typeof e||null===e)return!1;if(null==o?void 0:o.has(e))return!1;for(var a=null!=r?r(e):Object.entries(e),c=i.length>0,f=function(e,a){var f=n?n+"."+e:e;return c&&i.some((function(e){return e instanceof RegExp?e.test(f):f===e}))?"continue":t(a)?"object"==typeof a&&(u=z(a,f,t,r,i,o))?{value:u}:void 0:{value:{keyPath:f,value:a}}},l=0,s=a;l<s.length;l++){var d=s[l],p=f(d[0],d[1]);if("object"==typeof p)return p.value}return o&&N(e)&&o.add(e),!1}function N(e){if(!Object.isFrozen(e))return!1;for(var n=0,t=Object.values(e);n<t.length;n++){var r=t[n];if("object"==typeof r&&null!==r&&!N(r))return!1}return!0}function V(e){return void 0===e&&(e={}),function(){return function(e){return function(n){return e(n)}}}}function B(e){void 0===e&&(e={});var n=e.thunk,t=void 0===n||n,r=new T;return t&&r.push("boolean"==typeof t?M.default:M.default.withExtraArgument(t.extraArgument)),r}function U(e){var n,t=function(e){return B(e)},i=e||{},o=i.reducer,u=void 0===o?void 0:o,a=i.middleware,c=void 0===a?t():a,f=i.devTools,l=void 0===f||f,s=i.preloadedState,d=void 0===s?void 0:s,p=i.enhancers,v=void 0===p?void 0:p;if("function"==typeof u)n=u;else{if(!k(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');n=(0,P.combineReducers)(u)}var y=c;"function"==typeof y&&(y=y(t));var g=P.applyMiddleware.apply(void 0,y),b=P.compose;l&&(b=x(h({trace:!1},"object"==typeof l&&l)));var m=[g];Array.isArray(v)?m=r([g],v):"function"==typeof v&&(m=v(m));var w=b.apply(void 0,m);return(0,P.createStore)(n,d,w)}function W(e,n){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(n){var i=n.apply(void 0,t);if(!i)throw new Error("prepareAction did not return an object");return h(h({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:t[0]}}return t.toString=function(){return""+e},t.type=e,t.match=function(n){return n.type===e},t}function X(e){return["type","payload","error","meta"].indexOf(e)>-1}function F(e){return""+e}var G=m(__webpack_require__(6312));function H(e){var n,t={},r=[],i={addCase:function(e,n){var r="string"==typeof e?e:e.type;if(r in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[r]=n,i},addMatcher:function(e,n){return r.push({matcher:e,reducer:n}),i},addDefaultCase:function(e){return n=e,i}};return e(i),[t,r,n]}function K(e,n,t,i){void 0===t&&(t=[]);var o,u="function"==typeof n?H(n):[n,t,i],a=u[0],c=u[1],f=u[2];if("function"==typeof e)o=function(){return C(e())};else{var l=C(e);o=function(){return l}}function s(e,n){void 0===e&&(e=o());var t=r([a[n.type]],c.filter((function(e){return(0,e.matcher)(n)})).map((function(e){return e.reducer})));return 0===t.filter((function(e){return!!e})).length&&(t=[f]),t.reduce((function(e,t){if(t){var r;if((0,G.isDraft)(e))return void 0===(r=t(e,n))?e:r;if((0,G.isDraftable)(e))return(0,G.default)(e,(function(e){return t(e,n)}));if(void 0===(r=t(e,n))){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return e}),e)}return s.getInitialState=o,s}function J(e){var n=e.name;if(!n)throw new Error("`name` is a required option for createSlice");var t,r="function"==typeof e.initialState?e.initialState:C(e.initialState),i=e.reducers||{},o=Object.keys(i),u={},a={},c={};function f(){var n="function"==typeof e.extraReducers?H(e.extraReducers):[e.extraReducers],t=n[0],i=n[1],o=void 0===i?[]:i,u=n[2],c=void 0===u?void 0:u,f=h(h({},void 0===t?{}:t),a);return K(r,(function(e){for(var n in f)e.addCase(n,f[n]);for(var t=0,r=o;t<r.length;t++){var i=r[t];e.addMatcher(i.matcher,i.reducer)}c&&e.addDefaultCase(c)}))}return o.forEach((function(e){var t,r,o=i[e],f=n+"/"+e;"reducer"in o?(t=o.reducer,r=o.prepare):t=o,u[e]=t,a[f]=t,c[e]=r?W(f,r):W(f)})),{name:n,reducer:function(e,n){return t||(t=f()),t(e,n)},actions:c,caseReducers:u,getInitialState:function(){return t||(t=f()),t.getInitialState()}}}var Q=m(__webpack_require__(6312));function Y(e){return function(n,t){var r=function(n){var r;k(r=t)&&"string"==typeof r.type&&Object.keys(r).every(X)?e(t.payload,n):e(t,n)};return(0,Q.isDraft)(n)?(r(n),n):(0,Q.default)(n,r)}}function Z(e,n){return n(e)}function $(e){return Array.isArray(e)||(e=Object.values(e)),e}function ee(e,n,t){for(var r=[],i=[],o=0,u=e=$(e);o<u.length;o++){var a=u[o],c=Z(a,n);c in t.entities?i.push({id:c,changes:a}):r.push(a)}return[r,i]}function ne(e){function n(n,t){var r=Z(n,e);r in t.entities||(t.ids.push(r),t.entities[r]=n)}function t(e,t){for(var r=0,i=e=$(e);r<i.length;r++)n(i[r],t)}function r(n,t){var r=Z(n,e);r in t.entities||t.ids.push(r),t.entities[r]=n}function i(e,n){var t=!1;e.forEach((function(e){e in n.entities&&(delete n.entities[e],t=!0)})),t&&(n.ids=n.ids.filter((function(e){return e in n.entities})))}function o(n,t){var r={},i={};if(n.forEach((function(e){e.id in t.entities&&(i[e.id]={id:e.id,changes:h(h({},i[e.id]?i[e.id].changes:null),e.changes)})})),(n=Object.values(i)).length>0){var o=n.filter((function(n){return function(n,t,r){var i=Object.assign({},r.entities[t.id],t.changes),o=Z(i,e),u=o!==t.id;return u&&(n[t.id]=o,delete r.entities[t.id]),r.entities[o]=i,u}(r,n,t)})).length>0;o&&(t.ids=Object.keys(t.entities))}}function u(n,r){var i=ee(n,e,r),u=i[0];o(i[1],r),t(u,r)}return{removeAll:(a=function(e){Object.assign(e,{ids:[],entities:{}})},c=Y((function(e,n){return a(n)})),function(e){return c(e,void 0)}),addOne:Y(n),addMany:Y(t),setOne:Y(r),setMany:Y((function(e,n){for(var t=0,i=e=$(e);t<i.length;t++)r(i[t],n)})),setAll:Y((function(e,n){e=$(e),n.ids=[],n.entities={},t(e,n)})),updateOne:Y((function(e,n){return o([e],n)})),updateMany:Y(o),upsertOne:Y((function(e,n){return u([e],n)})),upsertMany:Y(u),removeOne:Y((function(e,n){return i([e],n)})),removeMany:Y(i)};var a,c}function te(e){void 0===e&&(e={});var n=h({sortComparer:!1,selectId:function(e){return e.id}},e),t=n.selectId,r=n.sortComparer,i={getInitialState:function(e){return void 0===e&&(e={}),Object.assign({ids:[],entities:{}},e)}},o={getSelectors:function(e){var n=function(e){return e.ids},t=function(e){return e.entities},r=_(n,t,(function(e,n){return e.map((function(e){return n[e]}))})),i=function(e,n){return n},o=function(e,n){return e[n]},u=_(n,(function(e){return e.length}));if(!e)return{selectIds:n,selectEntities:t,selectAll:r,selectTotal:u,selectById:_(t,i,o)};var a=_(e,t);return{selectIds:_(e,n),selectEntities:a,selectAll:_(e,r),selectTotal:_(e,u),selectById:_(a,i,o)}}},u=r?function(e,n){var t=ne(e);function r(n,t){var r=(n=$(n)).filter((function(n){return!(Z(n,e)in t.entities)}));0!==r.length&&a(r,t)}function i(e,n){0!==(e=$(e)).length&&a(e,n)}function o(n,t){for(var r=!1,i=0,o=n;i<o.length;i++){var u=o[i],a=t.entities[u.id];if(a){r=!0,Object.assign(a,u.changes);var f=e(a);u.id!==f&&(delete t.entities[u.id],t.entities[f]=a)}}r&&c(t)}function u(n,t){var i=ee(n,e,t),u=i[0];o(i[1],t),r(u,t)}function a(n,t){n.forEach((function(n){t.entities[e(n)]=n})),c(t)}function c(t){var r=Object.values(t.entities);r.sort(n);var i=r.map(e);(function(e,n){if(e.length!==n.length)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(e[t]!==n[t])return!1;return!0})(t.ids,i)||(t.ids=i)}return{removeOne:t.removeOne,removeMany:t.removeMany,removeAll:t.removeAll,addOne:Y((function(e,n){return r([e],n)})),updateOne:Y((function(e,n){return o([e],n)})),upsertOne:Y((function(e,n){return u([e],n)})),setOne:Y((function(e,n){return i([e],n)})),setMany:Y(i),setAll:Y((function(e,n){e=$(e),n.entities={},n.ids=[],r(e,n)})),addMany:Y(r),updateMany:Y(o),upsertMany:Y(u)}}(t,r):ne(t);return h(h(h({selectId:t,sortComparer:r},i),o),u)}var re=function(e){void 0===e&&(e=21);for(var n="",t=e;t--;)n+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return n},ie=["name","message","stack","code"],oe=function(e,n){this.payload=e,this.meta=n},ue=function(e,n){this.payload=e,this.meta=n},ae=function(e){if("object"==typeof e&&null!==e){for(var n={},t=0,r=ie;t<r.length;t++){var i=r[t];"string"==typeof e[i]&&(n[i]=e[i])}return n}return{message:String(e)}},ce=function(){function e(e,n,r){var i=W(e+"/fulfilled",(function(e,n,t,r){return{payload:e,meta:y(h({},r||{}),{arg:t,requestId:n,requestStatus:"fulfilled"})}})),o=W(e+"/pending",(function(e,n,t){return{payload:void 0,meta:y(h({},t||{}),{arg:n,requestId:e,requestStatus:"pending"})}})),u=W(e+"/rejected",(function(e,n,t,i,o){return{payload:i,error:(r&&r.serializeError||ae)(e||"Rejected"),meta:y(h({},o||{}),{arg:t,requestId:n,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==e?void 0:e.name),condition:"ConditionError"===(null==e?void 0:e.name)})}})),a="undefined"!=typeof AbortController?AbortController:function(){function e(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return e.prototype.abort=function(){},e}();return Object.assign((function(e){return function(c,f,l){var s,d=(null==r?void 0:r.idGenerator)?r.idGenerator(e):re(),p=new a;function v(e){s=e,p.abort()}var h=function(){return w(this,null,(function(){var a,h,y,g,b,m;return t(this,(function(t){switch(t.label){case 0:return t.trys.push([0,4,,5]),null===(w=g=null==(a=null==r?void 0:r.condition)?void 0:a.call(r,e,{getState:f,extra:l}))||"object"!=typeof w||"function"!=typeof w.then?[3,2]:[4,g];case 1:g=t.sent(),t.label=2;case 2:if(!1===g||p.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return b=new Promise((function(e,n){return p.signal.addEventListener("abort",(function(){return n({name:"AbortError",message:s||"Aborted"})}))})),c(o(d,e,null==(h=null==r?void 0:r.getPendingMeta)?void 0:h.call(r,{requestId:d,arg:e},{getState:f,extra:l}))),[4,Promise.race([b,Promise.resolve(n(e,{dispatch:c,getState:f,extra:l,requestId:d,signal:p.signal,abort:v,rejectWithValue:function(e,n){return new oe(e,n)},fulfillWithValue:function(e,n){return new ue(e,n)}})).then((function(n){if(n instanceof oe)throw n;return n instanceof ue?i(n.payload,d,e,n.meta):i(n,d,e)}))])];case 3:return y=t.sent(),[3,5];case 4:return m=t.sent(),y=m instanceof oe?u(null,d,e,m.payload,m.meta):u(m,d,e),[3,5];case 5:return r&&!r.dispatchConditionRejection&&u.match(y)&&y.meta.condition||c(y),[2,y]}var w}))}))}();return Object.assign(h,{abort:v,requestId:d,arg:e,unwrap:function(){return h.then(fe)}})}}),{pending:o,rejected:u,fulfilled:i,typePrefix:e})}return e.withTypes=function(){return e},e}();function fe(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var le=function(e,n){return(t=e)&&"function"==typeof t.match?e.match(n):e(n);var t};function se(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(n){return e.some((function(e){return le(e,n)}))}}function de(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return function(n){return e.every((function(e){return le(e,n)}))}}function pe(e,n){if(!e||!e.meta)return!1;var t="string"==typeof e.meta.requestId,r=n.indexOf(e.meta.requestStatus)>-1;return t&&r}function ve(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function he(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return pe(e,["pending"])}:ve(e)?function(n){var t=e.map((function(e){return e.pending}));return se.apply(void 0,t)(n)}:he()(e[0])}function ye(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return pe(e,["rejected"])}:ve(e)?function(n){var t=e.map((function(e){return e.rejected}));return se.apply(void 0,t)(n)}:ye()(e[0])}function ge(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=function(e){return e&&e.meta&&e.meta.rejectedWithValue};return 0===e.length||ve(e)?function(n){return de(ye.apply(void 0,e),t)(n)}:ge()(e[0])}function be(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return pe(e,["fulfilled"])}:ve(e)?function(n){var t=e.map((function(e){return e.fulfilled}));return se.apply(void 0,t)(n)}:be()(e[0])}function me(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return 0===e.length?function(e){return pe(e,["pending","fulfilled","rejected"])}:ve(e)?function(n){for(var t=[],r=0,i=e;r<i.length;r++){var o=i[r];t.push(o.pending,o.rejected,o.fulfilled)}return se.apply(void 0,t)(n)}:me()(e[0])}var we=function(e,n){if("function"!=typeof e)throw new TypeError(n+" is not a function")},Oe=function(){},je=function(e,n){return void 0===n&&(n=Oe),e.catch(n),e},Ee=function(e,n){return e.addEventListener("abort",n,{once:!0}),function(){return e.removeEventListener("abort",n)}},Se=function(e,n){var t=e.signal;t.aborted||("reason"in t||Object.defineProperty(t,"reason",{enumerable:!0,value:n,configurable:!0,writable:!0}),e.abort(n))},Ae=function(e){this.code=e,this.name="TaskAbortError",this.message="task cancelled (reason: "+e+")"},_e=function(e){if(e.aborted)throw new Ae(e.reason)};function Pe(e,n){var t=Oe;return new Promise((function(r,i){var o=function(){return i(new Ae(e.reason))};e.aborted?o():(t=Ee(e,o),n.finally((function(){return t()})).then(r,i))})).finally((function(){t=Oe}))}var qe=function(e){return function(n){return je(Pe(e,n).then((function(n){return _e(e),n})))}},xe=function(e){var n=qe(e);return function(e){return n(new Promise((function(n){return setTimeout(n,e)})))}},ke=Object.assign,Me={},Ie="listenerMiddleware",Te=function(e){var n=e.type,t=e.actionCreator,r=e.matcher,i=e.predicate,o=e.effect;if(n)i=W(n).match;else if(t)n=t.type,i=t.match;else if(r)i=r;else if(!i)throw new Error("Creating or removing a listener requires one of the known fields for matching an action");return we(o,"options.listener"),{predicate:i,type:n,effect:o}},Ce=function(e){e.pending.forEach((function(e){Se(e,"listener-cancelled")}))},De=function(e,n,t){try{e(n,t)}catch(e){setTimeout((function(){throw e}),0)}},Le=W(Ie+"/add"),Re=W(Ie+"/removeAll"),ze=W(Ie+"/remove"),Ne=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.error.apply(console,r([Ie+"/error"],e))};function Ve(e){var n=this;void 0===e&&(e={});var r=new Map,i=e.extra,o=e.onError,u=void 0===o?Ne:o;we(u,"onError");var a=function(e){for(var n=0,t=Array.from(r.values());n<t.length;n++){var i=t[n];if(e(i))return i}},c=function(e){var n=a((function(n){return n.effect===e.effect}));return n||(n=function(e){var n=Te(e),t=n.type,r=n.predicate,i=n.effect;return{id:re(),effect:i,type:t,predicate:r,pending:new Set,unsubscribe:function(){throw new Error("Unsubscribe not initialized")}}}(e)),function(e){return e.unsubscribe=function(){return r.delete(e.id)},r.set(e.id,e),function(n){e.unsubscribe(),(null==n?void 0:n.cancelActive)&&Ce(e)}}(n)},f=function(e){var n=Te(e),t=n.type,r=n.effect,i=n.predicate,o=a((function(e){return("string"==typeof t?e.type===t:e.predicate===i)&&e.effect===r}));return o&&(o.unsubscribe(),e.cancelActive&&Ce(o)),!!o},l=function(e,o,a,f){return w(n,null,(function(){var n,l,s;return t(this,(function(d){switch(d.label){case 0:n=new AbortController,l=function(e,n){return function(r,i){return je(function(r,i){return w(void 0,null,(function(){var o,u,a,c;return t(this,(function(t){switch(t.label){case 0:_e(n),o=function(){},u=new Promise((function(n,t){var i=e({predicate:r,effect:function(e,t){t.unsubscribe(),n([e,t.getState(),t.getOriginalState()])}});o=function(){i(),t()}})),a=[u],null!=i&&a.push(new Promise((function(e){return setTimeout(e,i,null)}))),t.label=1;case 1:return t.trys.push([1,,3,4]),[4,Pe(n,Promise.race(a))];case 2:return c=t.sent(),_e(n),[2,c];case 3:return o(),[7];case 4:return[2]}}))}))}(r,i))}}(c,n.signal),d.label=1;case 1:return d.trys.push([1,3,4,5]),e.pending.add(n),[4,Promise.resolve(e.effect(o,ke({},a,{getOriginalState:f,condition:function(e,n){return l(e,n).then(Boolean)},take:l,delay:xe(n.signal),pause:qe(n.signal),extra:i,signal:n.signal,fork:(p=n.signal,function(e){we(e,"taskExecutor");var n,r=new AbortController;n=r,Ee(p,(function(){return Se(n,p.reason)}));var i,o,u=(i=function(){return w(void 0,null,(function(){var n;return t(this,(function(t){switch(t.label){case 0:return _e(p),_e(r.signal),[4,e({pause:qe(r.signal),delay:xe(r.signal),signal:r.signal})];case 1:return n=t.sent(),_e(r.signal),[2,n]}}))}))},o=function(){return Se(r,"task-completed")},w(void 0,null,(function(){var e;return t(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,4,5]),[4,Promise.resolve()];case 1:return n.sent(),[4,i()];case 2:return[2,{status:"ok",value:n.sent()}];case 3:return[2,{status:(e=n.sent())instanceof Ae?"cancelled":"rejected",error:e}];case 4:return null==o||o(),[7];case 5:return[2]}}))})));return{result:qe(p)(u),cancel:function(){Se(r,"task-cancelled")}}}),unsubscribe:e.unsubscribe,subscribe:function(){r.set(e.id,e)},cancelActiveListeners:function(){e.pending.forEach((function(e,t,r){e!==n&&(Se(e,"listener-cancelled"),r.delete(e))}))}})))];case 2:return d.sent(),[3,5];case 3:return(s=d.sent())instanceof Ae||De(u,s,{raisedBy:"effect"}),[3,5];case 4:return Se(n,"listener-completed"),e.pending.delete(n),[7];case 5:return[2]}var p}))}))},s=function(e){return function(){e.forEach(Ce),e.clear()}}(r);return{middleware:function(e){return function(n){return function(t){if(Le.match(t))return c(t.payload);if(!Re.match(t)){if(ze.match(t))return f(t.payload);var i,o=e.getState(),a=function(){if(o===Me)throw new Error(Ie+": getOriginalState can only be called synchronously");return o};try{if(i=n(t),r.size>0)for(var d=e.getState(),p=Array.from(r.values()),v=0,h=p;v<h.length;v++){var y=h[v],g=!1;try{g=y.predicate(t,d,o)}catch(e){g=!1,De(u,e,{raisedBy:"predicate"})}g&&l(y,t,e,a)}}finally{o=Me}return i}s()}}},startListening:c,stopListening:f,clearListeners:s}}var Be,Ue="RTK_autoBatch",We=function(){return function(e){var n;return{payload:e,meta:(n={},n[Ue]=!0,n)}}},Xe="function"==typeof queueMicrotask?queueMicrotask.bind("undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:globalThis):function(e){return(Be||(Be=Promise.resolve())).then(e).catch((function(e){return setTimeout((function(){throw e}),0)}))},Fe=function(e){return function(n){setTimeout(n,e)}},Ge="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Fe(10),He=function(e){return void 0===e&&(e={type:"raf"}),function(n){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=n.apply(void 0,t),o=!0,u=!1,a=!1,c=new Set,f="tick"===e.type?Xe:"raf"===e.type?Ge:"callback"===e.type?e.queueNotification:Fe(e.timeout),l=function(){a=!1,u&&(u=!1,c.forEach((function(e){return e()})))};return Object.assign({},i,{subscribe:function(e){var n=i.subscribe((function(){return o&&e()}));return c.add(e),function(){n(),c.delete(e)}},dispatch:function(e){var n;try{return o=!(null==(n=null==e?void 0:e.meta)?void 0:n[Ue]),(u=!o)&&(a||(a=!0,f(l))),i.dispatch(e)}finally{o=!0}}})}}};(0,O.enableES5)();
//# sourceMappingURL=redux-toolkit.cjs.production.min.js.map

/***/ }),

/***/ 7927:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
exports.Action = void 0;
/**
 * The pathname, search, and hash values of a URL.
 */

(function (Action) {
  Action["Pop"] = "POP";
  Action["Push"] = "PUSH";
  Action["Replace"] = "REPLACE";
})(exports.Action || (exports.Action = {}));

const PopStateEventType = "popstate"; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Memory History
////////////////////////////////////////////////////////////////////////////////

/**
 * A user-supplied object that describes a location. Used when providing
 * entries to `createMemoryHistory` via its `initialEntries` option.
 */

/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */
function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = exports.Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref,

    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = exports.Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },

    replace(to, state) {
      action = exports.Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },

    go(delta) {
      action = exports.Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;

      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Browser History
////////////////////////////////////////////////////////////////////////////////

/**
 * A browser history stores the current location in regular URLs in a web
 * browser environment. This is the standard for most web apps and provides the
 * cleanest URLs the browser's address bar.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#browserhistory
 */

/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hash History
////////////////////////////////////////////////////////////////////////////////

/**
 * A hash history stores the current location in the fragment identifier portion
 * of the URL in a web browser environment.
 *
 * This is ideal for apps that do not control the server for some reason
 * (because the fragment identifier is never sent to the server), including some
 * shared hosting environments that do not provide fine-grained controls over
 * which pages are served at which URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#hashhistory
 */

/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region UTILS
////////////////////////////////////////////////////////////////////////////////

/**
 * @private
 */

function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = exports.Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = exports.Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = exports.Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = exports.Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

/**
 * Map of routeId -> data returned from a loader/action/error
 */

let ResultType;
/**
 * Successful result from a loader or action
 */

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (allIds === void 0) {
    allIds = new Set();
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });

      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }

  return path.replace(/^:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : param;
    }

    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }

    return param;
  }).replace(/\/:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : "/" + param;
    }

    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }

    return "/" + param;
  }) // Remove any optional markers from optional static segments
  .replace(/\?/g, "").replace(/(\/?)\*/, (_, prefix, __, str) => {
    const star = "*";

    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat


    return "" + prefix + params[star];
  });
}
/**
 * A PathPattern is used to match on some portion of a URL pathname.
 */

/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging @remix-run/router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;

/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */
const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});

    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }

    this.init = responseInit;
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeysSet.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }

  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeysSet.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};

/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */
const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */

function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * A Router instance manages all navigation and data loading/mutations
 */

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = exports.Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // We ony support a single active blocker at the moment since we don't have
  // any compelling use cases for multi-blocker yet

  let activeBlocker = null; // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }

      warning(activeBlocker != null && delta === null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });

      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location,

          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },

          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }

        });
        return;
      }

      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(exports.Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh

    for (let [key] of blockerFunctions) {
      deleteBlocker(key);
    } // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect


    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    updateState(_extends({}, newState, {
      // matches, errors, fetchers go through as-is
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers: new Map(state.blockers)
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === exports.Action.Pop) ; else if (pendingAction === exports.Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === exports.Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = exports.Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = exports.Action.Push;

    if (userReplace === true) {
      historyAction = exports.Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = exports.Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });

    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,

        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          }); // Send the same navigation through

          navigate(to, opts);
        },

        reset() {
          deleteBlocker(blockerKey);
          updateState({
            blockers: new Map(state.blockers)
          });
        }

      });
      return;
    }

    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change and not a mutation submission
    // For example, on /page#hash and submit a <Form method="post"> which will
    // default to a navigation to /page


    if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = exports.Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, {
      routeId,
      path,
      match,
      matches
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
      [match.route.id]: actionResult.data
    }, undefined, // No need to send through errors since we short circuit above
    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an external redirect that goes to a new origin

    if (isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let newOrigin = init.history.createURL(redirect.location).origin;

      if (window.location.origin !== newOrigin) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? exports.Action.Replace : exports.Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        },
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(f => callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, router.basename))]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;

    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);

      if (activeBlocker == null) {
        // This is now the active blocker
        activeBlocker = key;
      } else if (key !== activeBlocker) {
        warning(false, "A router only supports one blocker at a time");
      }
    }

    return blocker;
  }

  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);

    if (activeBlocker === key) {
      activeBlocker = null;
    }
  } // Utility function to update blockers, ensuring valid state transitions


  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }

  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;

    if (activeBlocker == null) {
      return;
    } // We only allow a single blocker at the moment.  This will need to be
    // updated if we enhance to support multiple blockers in the future


    let blockerFunction = blockerFunctions.get(activeBlocker);
    invariant(blockerFunction, "Could not find a function for the active blocker");
    let blocker = state.blockers.get(activeBlocker);

    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function


    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return activeBlocker;
    }
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let dataRoutes = convertRoutesToDataRoutes(routes);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head" && method !== "options") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }

    if (result.loaderData) {
      var _result$activeDeferre;

      let data = Object.values(result.loaderData)[0];

      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }

      return data;
    }

    return undefined;
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    } // Process and commit output from loaders


    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);
  let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }

  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let defaultShouldRevalidate = // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations


    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases


    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach((f, key) => {
    if (!matches.some(m => m.route.id === f.routeId)) {
      // This fetcher is not going to be present in the subsequent render so
      // there's no need to revalidate it
      return;
    } else if (cancelledFetcherLoads.includes(key)) {
      // This fetcher was cancelled from a prior action submission - force reload
      revalidatingFetchers.push(_extends({
        key
      }, f));
    } else {
      // Revalidating fetchers are decoupled from the route matches since they
      // hit a static href, so they _always_ check shouldRevalidate and the
      // default is strictly if a revalidation is explicitly required (action
      // submissions, useRevalidator, X-Remix-Revalidate).
      let shouldRevalidate = shouldRevalidateLoader(f.match, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate
      }));

      if (shouldRevalidate) {
        revalidatingFetchers.push(_extends({
          key
        }, f));
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return arg.defaultShouldRevalidate;
}

async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result; // Setup a promise we can race against so that abort signals short circuit

  let reject;
  let abortPromise = new Promise((_, r) => reject = r);

  let onReject = () => reject();

  request.signal.addEventListener("abort", onReject);

  try {
    let handler = match.route[type];
    invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
    result = await Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener("abort", onReject);
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
      let isAbsolute = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(location); // Support relative routing in internal redirects

      if (!isAbsolute) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } else if (!isStaticRequest) {
        // Strip off the protocol+origin for same-origin absolute redirects.
        // If this is a static reques, we can let it go back to the browser
        // as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);

        if (url.origin === currentUrl.origin) {
          location = url.pathname + url.search + url.hash;
        }
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.


      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined) {
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method);
}

function isMutationMethod(method) {
  return validMutationMethods.has(method);
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion

exports.AbortedDeferredError = AbortedDeferredError;
exports.ErrorResponse = ErrorResponse;
exports.IDLE_BLOCKER = IDLE_BLOCKER;
exports.IDLE_FETCHER = IDLE_FETCHER;
exports.IDLE_NAVIGATION = IDLE_NAVIGATION;
exports.UNSAFE_DEFERRED_SYMBOL = UNSAFE_DEFERRED_SYMBOL;
exports.UNSAFE_DeferredData = DeferredData;
exports.UNSAFE_convertRoutesToDataRoutes = convertRoutesToDataRoutes;
exports.UNSAFE_getPathContributingMatches = getPathContributingMatches;
exports.createBrowserHistory = createBrowserHistory;
exports.createHashHistory = createHashHistory;
exports.createMemoryHistory = createMemoryHistory;
exports.createPath = createPath;
exports.createRouter = createRouter;
exports.createStaticHandler = createStaticHandler;
exports.defer = defer;
exports.generatePath = generatePath;
exports.getStaticContextFromError = getStaticContextFromError;
exports.getToPathname = getToPathname;
exports.invariant = invariant;
exports.isRouteErrorResponse = isRouteErrorResponse;
exports.joinPaths = joinPaths;
exports.json = json;
exports.matchPath = matchPath;
exports.matchRoutes = matchRoutes;
exports.normalizePathname = normalizePathname;
exports.parsePath = parsePath;
exports.redirect = redirect;
exports.resolvePath = resolvePath;
exports.resolveTo = resolveTo;
exports.stripBasename = stripBasename;
exports.warning = warning;
//# sourceMappingURL=router.cjs.js.map


/***/ }),

/***/ 9669:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1609);

/***/ }),

/***/ 5448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var settle = __webpack_require__(6026);
var cookies = __webpack_require__(4372);
var buildURL = __webpack_require__(5327);
var buildFullPath = __webpack_require__(4097);
var parseHeaders = __webpack_require__(4109);
var isURLSameOrigin = __webpack_require__(7985);
var createError = __webpack_require__(5061);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 1609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var bind = __webpack_require__(1849);
var Axios = __webpack_require__(321);
var mergeConfig = __webpack_require__(7185);
var defaults = __webpack_require__(5655);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(5263);
axios.CancelToken = __webpack_require__(4972);
axios.isCancel = __webpack_require__(6502);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(8713);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(6268);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ 5263:
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Cancel = __webpack_require__(5263);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 6502:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 321:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var buildURL = __webpack_require__(5327);
var InterceptorManager = __webpack_require__(782);
var dispatchRequest = __webpack_require__(3572);
var mergeConfig = __webpack_require__(7185);
var validator = __webpack_require__(4875);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 4097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(1793);
var combineURLs = __webpack_require__(7303);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5061:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var enhanceError = __webpack_require__(481);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 3572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var transformData = __webpack_require__(8527);
var isCancel = __webpack_require__(6502);
var defaults = __webpack_require__(5655);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 481:
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 7185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ 6026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var createError = __webpack_require__(5061);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 8527:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var defaults = __webpack_require__(5655);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ 5655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);
var normalizeHeaderName = __webpack_require__(6016);
var enhanceError = __webpack_require__(481);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(5448);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(5448);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 1849:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 5327:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 7303:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 4372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 1793:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 6268:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ 7985:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 6016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 4109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(4867);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8713:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 4875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var pkg = __webpack_require__(8593);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ 4867:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(1849);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 8679:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(1296);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 6103:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 1296:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(6103);
} else {}


/***/ }),

/***/ 8041:
/***/ ((__unused_webpack_module, exports) => {

function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[H]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Q}(n)||Array.isArray(n)||!!n[G]||!!(null===(r=n.constructor)||void 0===r?void 0:r[G])||c(n)||v(n))}function e(n,r,t){void 0===t&&(t=!1),0===i(n)?(t?Object.keys:T)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function i(n){var r=n[H];return r?r.t>3?r.t-4:r.t:Array.isArray(n)?1:c(n)?2:v(n)?3:0}function u(n,r){return 2===i(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function o(n,r){return 2===i(n)?n.get(r):n[r]}function f(n,r,t){var e=i(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function a(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function c(n){return W&&n instanceof Map}function v(n){return X&&n instanceof Set}function s(n){return n.i||n.u}function p(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=U(n);delete r[H];for(var t=T(r),e=0;e<t.length;e++){var i=t[e],u=r[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(r[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function l(n,u){return void 0===u&&(u=!1),h(n)||r(n)||!t(n)||(i(n)>1&&(n.set=n.add=n.clear=n.delete=d),Object.freeze(n),u&&e(n,(function(n,r){return l(r,!0)}),!0)),n}function d(){n(2)}function h(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(r){var t=V[r];return t||n(18,r),t}function _(n,r){V[n]||(V[n]=r)}function b(){return I}function m(n,r){r&&(y("Patches"),n.o=[],n.v=[],n.s=r)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===I&&(I=n.l)}function x(n){return I={p:[],l:I,h:n,_:!0,m:0}}function w(n){var r=n[H];0===r.t||1===r.t?r.j():r.O=!0}function S(r,e){e.m=e.p.length;var i=e.p[0],u=void 0!==r&&r!==i;return e.h.S||y("ES5").P(e,r,u),u?(i[H].M&&(j(e),n(4)),t(r)&&(r=P(e,r),e.l||g(e,r)),e.o&&y("Patches").g(i[H].u,r,e.o,e.v)):r=P(e,i,[]),j(e),e.o&&e.s(e.o,e.v),r!==B?r:void 0}function P(n,r,t){if(h(r))return r;var i=r[H];if(!i)return e(r,(function(e,u){return M(n,i,r,e,u,t)}),!0),r;if(i.A!==n)return r;if(!i.M)return g(n,i.u,!0),i.u;if(!i.R){i.R=!0,i.A.m--;var u=4===i.t||5===i.t?i.i=p(i.k):i.i,o=u,f=!1;3===i.t&&(o=new Set(u),u.clear(),f=!0),e(o,(function(r,e){return M(n,i,u,r,e,t,f)})),g(n,u,!1),t&&n.o&&y("Patches").F(i,t,n.o,n.v)}return i.i}function M(n,e,i,o,a,c,v){if(r(a)){var s=P(n,a,c&&e&&3!==e.t&&!u(e.N,o)?c.concat(o):void 0);if(f(i,o,s),!r(s))return;n._=!1}else v&&i.add(a);if(t(a)&&!h(a)){if(!n.h.D&&n.m<1)return;P(n,a),e&&e.A.l||g(n,a)}}function g(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n._&&l(r,t)}function A(n,r){var t=n[H];return(t?s(t):n)[r]}function z(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function E(n){n.M||(n.M=!0,n.l&&E(n.l))}function R(n){n.i||(n.i=p(n.u))}function k(n,r,t){var e=c(r)?y("MapSet").K(r,t):v(r)?y("MapSet").$(r,t):n.S?function(n,r){var t=Array.isArray(n),e={t:t?1:0,A:r?r.A:b(),M:!1,R:!1,N:{},l:r,u:n,k:null,i:null,j:null,C:!1},i=e,u=Y;t&&(i=[e],u=Z);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(r,t):y("ES5").I(r,t);return(t?t.A:b()).p.push(e),e}function F(u){return r(u)||n(22,u),function n(r){if(!t(r))return r;var u,a=r[H],c=i(r);if(a){if(!a.M&&(a.t<4||!y("ES5").J(a)))return a.u;a.R=!0,u=N(r,c),a.R=!1}else u=N(r,c);return e(u,(function(r,t){a&&o(a.u,r)===t||f(u,r,n(t))})),3===c?new Set(u):u}(u)}function N(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return p(n)}function D(){function n(n,r){var t=f[n];return t?t.enumerable=r:f[n]=t={configurable:!0,enumerable:r,get:function(){return Y.get(this[H],n)},set:function(r){Y.set(this[H],n,r)}},t}function t(n){for(var r=n.length-1;r>=0;r--){var t=n[r][H];if(!t.M)switch(t.t){case 5:o(t)&&E(t);break;case 4:i(t)&&E(t)}}}function i(n){for(var r=n.u,t=n.k,e=T(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==H){var f=r[o];if(void 0===f&&!u(r,o))return!0;var c=t[o],v=c&&c[H];if(v?v.u!==f:!a(c,f))return!0}}var s=!!r[H];return e.length!==T(r).length+(s?0:1)}function o(n){var r=n.k;if(r.length!==n.u.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}var f={};_("ES5",{I:function(r,t){var e=Array.isArray(r),i=function(r,t){if(r){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,n(i,!0));return e}var u=U(t);delete u[H];for(var o=T(u),f=0;f<o.length;f++){var a=o[f];u[a]=n(a,r||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(t),u)}(e,r),u={t:e?5:4,A:t?t.A:b(),M:!1,R:!1,N:{},l:t,u:r,k:i,i:null,O:!1,C:!1};return Object.defineProperty(i,H,{value:u,writable:!0}),i},P:function(n,i,f){f?r(i)&&i[H].A===n&&t(n.p):(n.o&&function n(r){if(r&&"object"==typeof r){var t=r[H];if(t){var i=t.u,f=t.k,a=t.N,c=t.t;if(4===c)e(f,(function(r){r!==H&&(void 0!==i[r]||u(i,r)?a[r]||n(f[r]):(a[r]=!0,E(t)))})),e(i,(function(n){void 0!==f[n]||u(f,n)||(a[n]=!1,E(t))}));else if(5===c){if(o(t)&&(E(t),a.length=!0),f.length<i.length)for(var v=f.length;v<i.length;v++)a[v]=!1;else for(var s=i.length;s<f.length;s++)a[s]=!0;for(var p=Math.min(f.length,i.length),l=0;l<p;l++)f.hasOwnProperty(l)||(a[l]=!0),void 0===a[l]&&n(f[l])}}}}(n.p[0]),t(n.p))},J:function(n){return 4===n.t?i(n):o(n)}})}function K(){function f(n){if(!t(n))return n;if(Array.isArray(n))return n.map(f);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],f(n[1])]})));if(v(n))return new Set(Array.from(n).map(f));var r=Object.create(Object.getPrototypeOf(n));for(var e in n)r[e]=f(n[e]);return u(n,G)&&(r[G]=n[G]),r}function a(n){return r(n)?f(n):n}var s="add";_("Patches",{W:function(r,t){return t.forEach((function(t){for(var e=t.path,u=t.op,a=r,c=0;c<e.length-1;c++){var v=i(a),p=""+e[c];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof a&&"prototype"===p&&n(24),"object"!=typeof(a=o(a,p))&&n(15,e.join("/"))}var l=i(a),d=f(t.value),h=e[e.length-1];switch(u){case"replace":switch(l){case 2:return a.set(h,d);case 3:n(16);default:return a[h]=d}case s:switch(l){case 1:return"-"===h?a.push(d):a.splice(h,0,d);case 2:return a.set(h,d);case 3:return a.add(d);default:return a[h]=d}case"remove":switch(l){case 1:return a.splice(h,1);case 2:return a.delete(h);case 3:return a.delete(t.value);default:return delete a[h]}default:n(17,u)}})),r},F:function(n,r,t,i){switch(n.t){case 0:case 4:case 2:return function(n,r,t,i){var f=n.u,c=n.i;e(n.N,(function(n,e){var v=o(f,n),p=o(c,n),l=e?u(f,n)?"replace":s:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),i.push(l===s?{op:"remove",path:d}:"remove"===l?{op:s,path:d,value:a(v)}:{op:"replace",path:d,value:a(v)})}}))}(n,r,t,i);case 5:case 1:return function(n,r,t,e){var i=n.u,u=n.N,o=n.i;if(o.length<i.length){var f=[o,i];i=f[0],o=f[1];var c=[e,t];t=c[0],e=c[1]}for(var v=0;v<i.length;v++)if(u[v]&&o[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:a(o[v])}),e.push({op:"replace",path:p,value:a(i[v])})}for(var l=i.length;l<o.length;l++){var d=r.concat([l]);t.push({op:s,path:d,value:a(o[l])})}i.length<o.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,i);case 3:return function(n,r,t,e){var i=n.u,u=n.i,o=0;i.forEach((function(n){if(!u.has(n)){var i=r.concat([o]);t.push({op:"remove",path:i,value:n}),e.unshift({op:s,path:i,value:n})}o++})),o=0,u.forEach((function(n){if(!i.has(n)){var u=r.concat([o]);t.push({op:s,path:u,value:n}),e.unshift({op:"remove",path:u,value:n})}o++}))}(n,r,t,i)}},g:function(n,r,t,e){t.push({op:"replace",path:[],value:r===B?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function $(){function r(n,r){function t(){this.constructor=n}f(n,r),n.prototype=(t.prototype=r.prototype,new t)}function i(n){n.i||(n.N=new Map,n.i=new Map(n.u))}function u(n){n.i||(n.i=new Set,n.u.forEach((function(r){if(t(r)){var e=k(n.A.h,r,n);n.p.set(r,e),n.i.add(e)}else n.i.add(r)})))}function o(r){r.O&&n(3,JSON.stringify(s(r)))}var f=function(n,r){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},a=function(){function n(n,r){return this[H]={t:2,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,N:void 0,u:n,k:this,C:!1,O:!1},this}r(n,Map);var u=n.prototype;return Object.defineProperty(u,"size",{get:function(){return s(this[H]).size}}),u.has=function(n){return s(this[H]).has(n)},u.set=function(n,r){var t=this[H];return o(t),s(t).has(n)&&s(t).get(n)===r||(i(t),E(t),t.N.set(n,!0),t.i.set(n,r),t.N.set(n,!0)),this},u.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),i(r),E(r),r.u.has(n)?r.N.set(n,!1):r.N.delete(n),r.i.delete(n),!0},u.clear=function(){var n=this[H];o(n),s(n).size&&(i(n),E(n),n.N=new Map,e(n.u,(function(r){n.N.set(r,!1)})),n.i.clear())},u.forEach=function(n,r){var t=this;s(this[H]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},u.get=function(n){var r=this[H];o(r);var e=s(r).get(n);if(r.R||!t(e))return e;if(e!==r.u.get(n))return e;var u=k(r.A.h,e,r);return i(r),r.i.set(n,u),u},u.keys=function(){return s(this[H]).keys()},u.values=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},u.entries=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},u[L]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[H]={t:3,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,u:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return s(this[H]).size}}),t.has=function(n){var r=this[H];return o(r),r.i?!!r.i.has(n)||!(!r.p.has(n)||!r.i.has(r.p.get(n))):r.u.has(n)},t.add=function(n){var r=this[H];return o(r),this.has(n)||(u(r),E(r),r.i.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),u(r),E(r),r.i.delete(n)||!!r.p.has(n)&&r.i.delete(r.p.get(n))},t.clear=function(){var n=this[H];o(n),s(n).size&&(u(n),E(n),n.i.clear())},t.values=function(){var n=this[H];return o(n),u(n),n.i.values()},t.entries=function(){var n=this[H];return o(n),u(n),n.i.entries()},t.keys=function(){return this.values()},t[L]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();_("MapSet",{K:function(n,r){return new a(n,r)},$:function(n,r){return new c(n,r)}})}var C;Object.defineProperty(exports, "__esModule", ({value:!0}));var I,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=J?Symbol.for("immer-nothing"):((C={})["immer-nothing"]=!0,C),G=J?Symbol.for("immer-draftable"):"__$immer_draftable",H=J?Symbol.for("immer-state"):"__$immer_state",L="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Q=""+Object.prototype.constructor,T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,U=Object.getOwnPropertyDescriptors||function(n){var r={};return T(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},V={},Y={get:function(n,r){if(r===H)return n;var e=s(n);if(!u(e,r))return function(n,r,t){var e,i=z(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.R||!t(i)?i:i===A(n.u,r)?(R(n),n.i[r]=k(n.A.h,i,n)):i},has:function(n,r){return r in s(n)},ownKeys:function(n){return Reflect.ownKeys(s(n))},set:function(n,r,t){var e=z(s(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.M){var i=A(s(n),r),o=null==i?void 0:i[H];if(o&&o.u===t)return n.i[r]=t,n.N[r]=!1,!0;if(a(t,i)&&(void 0!==t||u(n.u,r)))return!0;R(n),E(n)}return n.i[r]===t&&(void 0!==t||r in n.i)||Number.isNaN(t)&&Number.isNaN(n.i[r])||(n.i[r]=t,n.N[r]=!0),!0},deleteProperty:function(n,r){return void 0!==A(n.u,r)||r in n.u?(n.N[r]=!1,R(n),E(n)):delete n.N[r],n.i&&delete n.i[r],!0},getOwnPropertyDescriptor:function(n,r){var t=s(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.t||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.u)},setPrototypeOf:function(){n(12)}},Z={};e(Y,(function(n,r){Z[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Z.deleteProperty=function(n,r){return Z.set.call(this,n,r,void 0)},Z.set=function(n,r,t){return Y.set.call(this,n[0],r,t,n[0])};var nn=function(){function e(r){var e=this;this.S=q,this.D=!0,this.produce=function(r,i,u){if("function"==typeof r&&"function"!=typeof i){var o=i;i=r;var f=e;return function(n){var r=this;void 0===n&&(n=o);for(var t=arguments.length,e=Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return f.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var a;if("function"!=typeof i&&n(6),void 0!==u&&"function"!=typeof u&&n(7),t(r)){var c=x(e),v=k(e,r,void 0),s=!0;try{a=i(v),s=!1}finally{s?j(c):O(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return m(c,u),S(n,c)}),(function(n){throw j(c),n})):(m(c,u),S(a,c))}if(!r||"object"!=typeof r){if(void 0===(a=i(r))&&(a=r),a===B&&(a=void 0),e.D&&l(a,!0),u){var p=[],d=[];y("Patches").g(r,a,p,d),u(p,d)}return a}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,u=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(n){return[n,t,i]})):[u,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=F(e));var i=x(this),u=k(this,e,void 0);return u[H].C=!0,O(i),u},i.finishDraft=function(n,r){var t=(n&&n[H]).A;return m(t,r),S(void 0,t)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!q&&n(20),this.S=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var u=y("Patches").W;return r(n)?u(n,t):this.produce(n,(function(n){return u(n,t)}))},e}(),rn=new nn,tn=rn.produce,en=rn.produceWithPatches.bind(rn),un=rn.setAutoFreeze.bind(rn),on=rn.setUseProxies.bind(rn),fn=rn.applyPatches.bind(rn),an=rn.createDraft.bind(rn),cn=rn.finishDraft.bind(rn);exports.Immer=nn,exports.applyPatches=fn,exports.castDraft=function(n){return n},exports.castImmutable=function(n){return n},exports.createDraft=an,exports.current=F,exports["default"]=tn,exports.enableAllPlugins=function(){D(),$(),K()},exports.enableES5=D,exports.enableMapSet=$,exports.enablePatches=K,exports.finishDraft=cn,exports.freeze=l,exports.immerable=G,exports.isDraft=r,exports.isDraftable=t,exports.nothing=B,exports.original=function(t){return r(t)||n(23,t),t[H].u},exports.produce=tn,exports.produceWithPatches=en,exports.setAutoFreeze=un,exports.setUseProxies=on;
//# sourceMappingURL=immer.cjs.production.min.js.map


/***/ }),

/***/ 6312:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(8041)
} else {}


/***/ }),

/***/ 4448:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7294),ca=__webpack_require__(3840);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b)}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a])}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return!0;if(ja.call(la,a))return!1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return!1}function pa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var z={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1)});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z[b]=new v(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1)});
z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0)});
function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)))}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");
var Ia=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return"function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||""}return"\n"+La+a}var Na=!1;
function Oa(a,b){if(!a||Na)return"";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(l){var d=l}Reflect.construct(a,[],b)}else{try{b.call()}catch(l){d=l}a.call(b.prototype)}else{try{throw Error();}catch(l){d=l}a()}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Ma(a):""}
function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return""}}
function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return"Fragment";case wa:return"Portal";case Aa:return"Profiler";case za:return"StrictMode";case Ea:return"Suspense";case Fa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return(a.displayName||"Context")+".Consumer";case Ba:return(a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
function Ra(a){var b=a.type;switch(a.tag){case 24:return"Cache";case 9:return(b.displayName||"Context")+".Consumer";case 10:return(b._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return"Fragment";case 5:return b;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return"Offscreen";
case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return""}}
function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1)}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}function kb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else{mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a]})});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb()}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb)}catch(a){Lb=!1}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments)}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null}else throw Error(p(198));Qb||(Qb=!0,Rb=l)}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128))}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)))}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b)}else k<=b&&(a.expiredLanes|=h);f&=~h}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId)}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c)});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function Xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift()}return!0}function Zc(a,b,c){Xc(a)&&c.delete(b)}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc)}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)))}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift()}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d)}finally{C=e,cd.transition=f}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d)}finally{C=e,cd.transition=f}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f}null!==e&&d.stopPropagation()}else hd(a,b,d,null,c)}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b)}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
function Ie(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return!1}return!0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Je(c)}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a])}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf)}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d))}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b)}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a))});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b))}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x)}t=null}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else{na=De;var xa=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value)}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a)}se(g,b)})}function tf(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return"textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;})}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--}else"$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e}while(c);bd(b)}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[Of]||a[uf];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return{current:a}}
function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--)}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H)}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c)}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return!0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c)}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a)}function ig(a){fg=!0;hg(a)}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a}else rg=1<<f|c<<e|d,sg=a}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0))}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null}var xg=null,yg=null,I=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c)}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return!1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a)}}else{if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a}
function Gg(a){if(a!==xg)return!1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling)}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}yg=
null}}else yg=xg?Lf(a.stateNode.nextSibling):null;return!0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling)}function Ig(){yg=xg=null;I=!1}function Jg(a){null===zg?zg=[a]:zg.push(a)}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null}function Rg(a){var b=Mg.current;E(Mg);a._currentValue=b}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null)}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p(308));Og=a;Ng.dependencies={lanes:0,firstContext:a}}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a)}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function ch(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k))}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:$g=!0}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h))}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d)}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var nh={isMounted:function(a){return(a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e))},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d))}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null)}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308)}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c)}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b)}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d)}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x}if(n.done)return c(e,
m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h)}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=zh(f,a.mode,h);d.return=a;a=d}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f)}return"string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p(174));return a}function Ih(a,b){G(Gh,b);G(Fh,a);G(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a)}E(Eh);G(Eh,b)}function Jh(){E(Eh);E(Fh);E(Gh)}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G(Fh,a),G(Eh,c))}function Lh(a){Fh.current===a&&(E(Eh),E(Fh))}var M=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N=null,O=null,P=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q(){throw Error(p(321));}function Wh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Xh(a,b,c,d,e,f){Rh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p(301));f+=1;P=O=null;b.updateQueue=null;Ph.current=$h;a=c(d,e)}while(Th)}Ph.current=ai;b=null!==O&&null!==O.next;Rh=0;P=O=N=null;Sh=!1;if(b)throw Error(p(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function di(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(p(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function ei(a,b){return"function"===typeof b?b(a):b}
function fi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else{var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N.lanes|=m;hh|=m}l=l.next}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return[b.memoizedState,c.dispatch]}
function gi(a){var b=di(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}function hi(){}
function ii(a,b){var c=N,d=di(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P&&P.memoizedState.tag&1){c.flags|=2048;li(9,mi.bind(null,c,d,e,b),void 0,null);if(null===R)throw Error(p(349));0!==(Rh&30)||ni(c,b,e)}return e}function ni(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a))}
function mi(a,b,c,d){b.value=c;b.getSnapshot=d;oi(b)&&pi(a)}function ki(a,b,c){return c(function(){oi(b)&&pi(a)})}function oi(a){var b=a.getSnapshot;a=a.value;try{var c=b();return!He(a,c)}catch(d){return!0}}function pi(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1)}
function qi(a){var b=ci();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:a};b.queue=a;a=a.dispatch=ri.bind(null,N,a);return[b.memoizedState,a]}
function li(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null,stores:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si(){return di().memoizedState}function ti(a,b,c,d){var e=ci();N.flags|=a;e.memoizedState=li(1|b,c,void 0,void 0===d?null:d)}
function ui(a,b,c,d){var e=di();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li(b,c,f,d);return}}N.flags|=a;e.memoizedState=li(1|b,c,f,d)}function vi(a,b){return ti(8390656,8,a,b)}function ji(a,b){return ui(2048,8,a,b)}function wi(a,b){return ui(4,2,a,b)}function xi(a,b){return ui(4,4,a,b)}
function yi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui(4,4,yi.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He(c,b)||(c=yc(),N.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b()}finally{C=c,Qh.transition=d}}function Fi(){return di().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L();mh(c,a,d,e);Ji(c,b,d)}}
function ri(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else{var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L(),mh(c,a,d,e),Ji(c,b,d))}}
function Hi(a){var b=a.alternate;return a===N||null!==b&&b===N}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c)}}
var ai={readContext:Vg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useInsertionEffect:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useDeferredValue:Q,useTransition:Q,useMutableSource:Q,useSyncExternalStore:Q,useId:Q,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti(4194308,
4,yi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti(4,2,a,b)},useMemo:function(a,b){var c=ci();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=
ci();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci().memoizedState=a;return[b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N,e=ci();if(I){if(void 0===c)throw Error(p(407));c=c()}else{c=b();if(null===R)throw Error(p(349));0!==(Rh&30)||ni(d,b,c)}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li(9,mi.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci(),b=R.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":"}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi,useRef:si,useState:function(){return fi(ei)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di();return Di(b,O.memoizedState,a)},useTransition:function(){var a=fi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si,useState:function(){return gi(ei)},useDebugValue:Ai,useDeferredValue:function(a){var b=di();return null===
O?b.memoizedState=a:Di(b,O.memoizedState,a)},useTransition:function(){var a=gi(ei)[0],b=di().memoizedState;return[a,b]},useMutableSource:hi,useSyncExternalStore:ii,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return{value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b)};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e)}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a))}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d)}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(fj,gj),gj|=c;else{if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(fj,gj);gj|=d}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b)}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1)}else{g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1)}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo)}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return{baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(M,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1))}uj();d=Li(Error(p(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c)}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e)}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else{if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}G(M,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2)}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(M,M.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G(M,M.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G(M,M.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(M,M.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf)}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,
c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4)};
function Ej(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;Jh();E(Wf);E(H);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else{if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d)}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d)}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf)}d=e;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g))}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf)}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1}}d&&(b.flags|=4)}null!==b.ref&&(b.flags|=512,b.flags|=2097152)}S(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1))}f&&(b.flags|=4)}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d}S(b);return null;case 13:E(M);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M.current&1)?0===T&&(T=3):uj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return Rg(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(M);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else{if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(M,M.current&1|2);return b.child}a=
a.sibling}null!==f.tail&&B()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304)}else{if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g)}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=M.current,G(M,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E(Wf),E(H),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E(M);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig()}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(M),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null)}catch(d){W(a,b,d)}else c.current=null}function Nj(a,b,c){try{c()}catch(d){W(a,b,d)}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode}q=y}c=-1===h||-1===k?null:{start:h,end:k}}else c=null}c=c||{start:0,end:0}}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F)}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f)}e=e.next}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c}"function"===typeof b?b(a):b.current=a}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling}var X=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c)}catch(h){}switch(c.tag){case 5:U||Mj(c,b);case 6:var d=X,e=Yj;X=null;Zj(a,b,c);X=d;Yj=e;null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Yj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Yj;X=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next}while(e!==d)}Zj(a,b,c);break;case 1:if(!U&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount()}catch(h){W(c,b,h)}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
c.memoizedState,Zj(a,b,c),U=d):Zj(a,b,c);break;default:Zj(a,b,c)}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Yj=!1;break a;case 3:X=h.stateNode.containerInfo;Yj=!0;break a;case 4:X=h.stateNode.containerInfo;Yj=!0;break a}h=h.return}if(null===X)throw Error(p(160));ak(f,g,e);X=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null}catch(l){W(e,b,l)}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a)}catch(t){W(a,a.return,t)}try{Qj(5,a,a.return)}catch(t){W(a,a.return,t)}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"")}catch(t){W(a,a.return,t)}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l)}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1))}e[Pf]=f}catch(t){W(a,a.return,t)}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f}catch(t){W(a,a.return,t)}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo)}catch(t){W(a,a.return,t)}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,dk(b,a),U=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount()}catch(t){W(d,c,t)}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V=y):hk(q)}m=m.sibling}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g))}catch(t){W(a,a.return,t)}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps}catch(t){W(a,a.return,t)}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a)}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k)}a.flags&=-3}b&4096&&(a.flags&=-4097)}function ik(a,b,c){V=a;jk(a,b,c)}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Kj;var l=U;Kj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V=k):kk(e);for(;null!==f;)V=f,jk(f,b,c),f=f.sibling;V=e;Kj=h;U=l}lk(a,b,c)}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):lk(a,b,c)}}
function lk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else{var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode}ih(b,g,c)}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p(163));}U||b.flags&512&&Sj(b)}catch(r){W(b,b.return,r)}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}function hk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return}}
function kk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b)}catch(k){W(b,c,k)}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount()}catch(k){W(b,e,k)}}var f=b.return;try{Sj(b)}catch(k){W(b,f,k)}break;case 5:var g=b.return;try{Sj(b)}catch(k){W(b,g,k)}}}catch(k){W(b,b.return,k)}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K=0,R=null,Y=null,Z=0,gj=0,fj=Uf(0),T=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L(){return 0!==(K&6)?B():-1!==Bk?Bk:Bk=B()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==R)a===R&&(0===(K&2)&&(rk|=c),4===T&&Dk(a,Z)),Ek(a,d),1===c&&0===K&&0===(b.mode&1)&&(Hj=B()+500,fg&&jg())}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K&6)&&jg()}),c=null;else{switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc}c=Gk(c,Hk.bind(null,a))}a.callbackPriority=b;a.callbackNode=c}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else{b=d;var e=K;K|=2;var f=Kk();if(R!==a||Z!==b)vk=null,Hj=B()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h)}while(1);Qg();nk.current=f;K=e;null!==Y?b=0:(R=null,Z=0,b=T)}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;if(6===b)Dk(a,d);
else{e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p(329));}}}Ek(a,B());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a)}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return!1}catch(g){return!1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else{if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return!0;b=b.return}b.sibling.return=b.return;b=b.sibling}}return!0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d}}function Fk(a){if(0!==(K&6))throw Error(p(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d))}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B());return null}
function Rk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Hj=B()+500,fg&&jg())}}function Sk(a){null!==xk&&0===xk.tag&&0===(K&6)&&Ik();var b=K;K|=1;var c=pk.transition,d=C;try{if(pk.transition=null,C=1,a)return a()}finally{C=d,pk.transition=c,K=b,0===(K&6)&&jg()}}function Ij(){gj=fj.current;E(fj)}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E(Wf);E(H);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E(M);break;case 19:E(M);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij()}c=c.return}R=a;Y=a=wh(a.current,null);Z=gj=b;T=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g}c.pending=d}Wg=null}return a}
function Nk(a,b){do{var c=Y;try{Qg();Ph.current=ai;if(Sh){for(var d=N.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}Sh=!1}Rh=0;P=O=N=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T=1;qk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null)}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t}else n.add(k);break a}else{if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p(426))}}else if(I&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T&&(T=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return}while(null!==f)}Tk(c)}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai;return null===a?ai:a}
function uj(){if(0===T||3===T||2===T)T=4;null===R||0===(hh&268435455)&&0===(rk&268435455)||Dk(R,Z)}function Jk(a,b){var c=K;K|=2;var d=Kk();if(R!==a||Z!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e)}while(1);Qg();K=c;nk.current=d;if(null!==Y)throw Error(p(261));R=null;Z=0;return T}function Uk(){for(;null!==Y;)Vk(Y)}function Mk(){for(;null!==Y&&!cc();)Vk(Y)}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y=b;ok.current=null}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y=c;return}}else{c=Jj(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else{T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===T&&(T=5)}function Qk(a,b,c){var d=C,e=pk.transition;try{pk.transition=null,C=1,Xk(a,b,c,d)}finally{pk.transition=e,C=d}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R&&(Y=R=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C;C=1;var h=K;K|=4;ok.current=null;Pj(a,c);ek(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c,a,e);dc();K=h;C=g;pk.transition=f}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode,d);Ek(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C;try{pk.transition=null;C=16>a?16:a;if(null===xk)var d=!1;else{a=xk;xk=null;yk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f)}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J}while(null!==t)}}V=f}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return)}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h)}}catch(na){W(h,h.return,na)}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a)}catch(na){}d=!0}return d}finally{C=c,pk.transition=b}}return!1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L();null!==a&&(Ac(a,1,b),Ek(a,b))}
function W(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L();a.pingedLanes|=a.suspendedLanes&c;R===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-gk?Lk(a,0):sk|=c);Ek(a,b)}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c))}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c)}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Zk(a,c)}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else{if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1}else Ug=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c)}b=b.child}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return}f=g}Yi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b)}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a)};function ml(a){this._internalRoot=a}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));gl(a,b,null,null)};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null)});b[uf]=null}};function nl(a){this._internalRoot=a}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a)}};function ol(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a)}}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a)}}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d)});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a)}}gl(b,g,a,e)}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B()),0===(K&6)&&(Hj=B()+500,jg()))}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L();mh(b,a,1,c)}}),jl(a,1)}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L();mh(b,a,134217728,c)}jl(a,134217728)}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L();mh(c,a,b,d)}jl(a,b)}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
exports.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p(200));return dl(a,b,null,c)};exports.createRoot=function(a,b){if(!ol(a))throw Error(p(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a){return Sk(a)};exports.hydrate=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!0,c)};
exports.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};exports.render=function(a,b,c){if(!pl(b))throw Error(p(200));return sl(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null})}),!0):!1};exports.unstable_batchedUpdates=Rk;
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return sl(a,b,c,!1,d)};exports.version="18.2.0-next-9e3b772b8-20220608";


/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var m = __webpack_require__(3935);
if (true) {
  exports.s = m.createRoot;
  __webpack_unused_export__ = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 3935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(4448);
} else {}


/***/ }),

/***/ 9921:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=b;exports.ForwardRef=l;exports.Fragment=d;exports.Lazy=q;exports.Memo=p;exports.Portal=c;exports.Profiler=f;exports.StrictMode=e;exports.Suspense=m;
exports.SuspenseList=n;exports.isAsyncMode=function(){return!1};exports.isConcurrentMode=function(){return!1};exports.isContextConsumer=function(a){return v(a)===h};exports.isContextProvider=function(a){return v(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===b};exports.isForwardRef=function(a){return v(a)===l};exports.isFragment=function(a){return v(a)===d};exports.isLazy=function(a){return v(a)===q};exports.isMemo=function(a){return v(a)===p};
exports.isPortal=function(a){return v(a)===c};exports.isProfiler=function(a){return v(a)===f};exports.isStrictMode=function(a){return v(a)===e};exports.isSuspense=function(a){return v(a)===m};exports.isSuspenseList=function(a){return v(a)===n};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};exports.typeOf=v;


/***/ }),

/***/ 9864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9921);
} else {}


/***/ }),

/***/ 5120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = exports.ReactReduxContext = void 0;

var _react = __webpack_require__(7294);

const ReactReduxContext = /*#__PURE__*/(0, _react.createContext)(null);
exports.ReactReduxContext = ReactReduxContext;

if (false) {}

var _default = ReactReduxContext;
exports["default"] = _default;

/***/ }),

/***/ 7456:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(7294));

var _Context = __webpack_require__(5120);

var _Subscription = __webpack_require__(7510);

var _useIsomorphicLayoutEffect = __webpack_require__(4253);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Provider({
  store,
  context,
  children,
  serverState
}) {
  const contextValue = (0, _react.useMemo)(() => {
    const subscription = (0, _Subscription.createSubscription)(store);
    return {
      store,
      subscription,
      getServerState: serverState ? () => serverState : undefined
    };
  }, [store, serverState]);
  const previousState = (0, _react.useMemo)(() => store.getState(), [store]);
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = undefined;
    };
  }, [contextValue, previousState]);
  const Context = context || _Context.ReactReduxContext; // @ts-ignore 'AnyAction' is assignable to the constraint of type 'A', but 'A' could be instantiated with a different subtype

  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

var _default = Provider;
exports["default"] = _default;

/***/ }),

/***/ 9794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports["default"] = exports.initializeConnect = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(8679));

var _react = _interopRequireWildcard(__webpack_require__(7294));

var _reactIs = __webpack_require__(9864);

var _selectorFactory = _interopRequireDefault(__webpack_require__(3764));

var _mapDispatchToProps = __webpack_require__(2333);

var _mapStateToProps = __webpack_require__(6188);

var _mergeProps = __webpack_require__(9442);

var _Subscription = __webpack_require__(7510);

var _useIsomorphicLayoutEffect = __webpack_require__(4253);

var _shallowEqual = _interopRequireDefault(__webpack_require__(8761));

var _warning = _interopRequireDefault(__webpack_require__(3099));

var _Context = __webpack_require__(5120);

var _useSyncExternalStore = __webpack_require__(2305);

const _excluded = ["reactReduxForwardedRef"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let useSyncExternalStore = _useSyncExternalStore.notInitialized;

const initializeConnect = fn => {
  useSyncExternalStore = fn;
}; // Define some constant arrays just to avoid re-creating these


exports.initializeConnect = initializeConnect;
const EMPTY_ARRAY = (/* unused pure expression or super */ null && ([null, 0]));
const NO_SUBSCRIPTION_ARRAY = [null, null]; // Attempts to stringify whatever not-really-a-component value we were given
// for logging in an error message

const stringifyComponent = Comp => {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

// This is "just" a `useLayoutEffect`, but with two modifications:
// - we need to fall back to `useEffect` in SSR to avoid annoying warnings
// - we extract this to a separate function to avoid closing over values
//   and causing memory leaks
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => effectFunc(...effectArgs), dependencies);
} // Effect callback, extracted: assign the latest props values to refs for later usage


function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, // actualChildProps: unknown,
childPropsFromStoreUpdate, notifyNestedSubs) {
  // We want to capture the wrapper props and child props we used for later comparisons
  lastWrapperProps.current = wrapperProps;
  renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

  if (childPropsFromStoreUpdate.current) {
    childPropsFromStoreUpdate.current = null;
    notifyNestedSubs();
  }
} // Effect callback, extracted: subscribe to the Redux store or nearest connected ancestor,
// check for updates after dispatched actions, and trigger re-renders.


function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, // forceComponentUpdateDispatch: React.Dispatch<any>,
additionalSubscribeListener) {
  // If we're not subscribed to the store, nothing to do here
  if (!shouldHandleStateChanges) return () => {}; // Capture values for checking if and when this component unmounts

  let didUnsubscribe = false;
  let lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

  const checkForUpdates = () => {
    if (didUnsubscribe || !isMounted.current) {
      // Don't run stale listeners.
      // Redux doesn't guarantee unsubscriptions happen until next dispatch.
      return;
    } // TODO We're currently calling getState ourselves here, rather than letting `uSES` do it


    const latestStoreState = store.getState();
    let newChildProps, error;

    try {
      // Actually run the selector with the most recent store state and wrapper props
      // to determine what the child props should be
      newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
    } catch (e) {
      error = e;
      lastThrownError = e;
    }

    if (!error) {
      lastThrownError = null;
    } // If the child props haven't changed, nothing to do here - cascade the subscription update


    if (newChildProps === lastChildProps.current) {
      if (!renderIsScheduled.current) {
        notifyNestedSubs();
      }
    } else {
      // Save references to the new child props.  Note that we track the "child props from store update"
      // as a ref instead of a useState/useReducer because we need a way to determine if that value has
      // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
      // forcing another re-render, which we don't want.
      lastChildProps.current = newChildProps;
      childPropsFromStoreUpdate.current = newChildProps;
      renderIsScheduled.current = true; // TODO This is hacky and not how `uSES` is meant to be used
      // Trigger the React `useSyncExternalStore` subscriber

      additionalSubscribeListener();
    }
  }; // Actually subscribe to the nearest connected ancestor (or store)


  subscription.onStateChange = checkForUpdates;
  subscription.trySubscribe(); // Pull data from the store after first render in case the store has
  // changed since we began.

  checkForUpdates();

  const unsubscribeWrapper = () => {
    didUnsubscribe = true;
    subscription.tryUnsubscribe();
    subscription.onStateChange = null;

    if (lastThrownError) {
      // It's possible that we caught an error due to a bad mapState function, but the
      // parent re-rendered without this component and we're about to unmount.
      // This shouldn't happen as long as we do top-down subscriptions correctly, but
      // if we ever do those wrong, this throw will surface the error in our tests.
      // In that case, throw the error from here so it doesn't get lost.
      throw lastThrownError;
    }
  };

  return unsubscribeWrapper;
} // Reducer initial state creation for our update reducer


const initStateUpdates = () => EMPTY_ARRAY;

function strictEqual(a, b) {
  return a === b;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */


let hasWarnedAboutDeprecatedPureOption = false;
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps A function that extracts values from state
 * @param mapDispatchToProps Setup for dispatching actions
 * @param mergeProps Optional callback to merge state and dispatch props together
 * @param options Options for configuring the connection
 *
 */

function connect(mapStateToProps, mapDispatchToProps, mergeProps, {
  // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
  // @ts-ignore
  pure,
  areStatesEqual = strictEqual,
  areOwnPropsEqual = _shallowEqual.default,
  areStatePropsEqual = _shallowEqual.default,
  areMergedPropsEqual = _shallowEqual.default,
  // use React's forwardRef to expose a ref of the wrapped component
  forwardRef = false,
  // the context consumer to use
  context = _Context.ReactReduxContext
} = {}) {
  if (false) {}

  const Context = context;
  const initMapStateToProps = (0, _mapStateToProps.mapStateToPropsFactory)(mapStateToProps);
  const initMapDispatchToProps = (0, _mapDispatchToProps.mapDispatchToPropsFactory)(mapDispatchToProps);
  const initMergeProps = (0, _mergeProps.mergePropsFactory)(mergeProps);
  const shouldHandleStateChanges = Boolean(mapStateToProps);

  const wrapWithConnect = WrappedComponent => {
    if (false) {}

    const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    const displayName = `Connect(${wrappedComponentName})`;
    const selectorFactoryOptions = {
      shouldHandleStateChanges,
      displayName,
      wrappedComponentName,
      WrappedComponent,
      // @ts-ignore
      initMapStateToProps,
      // @ts-ignore
      initMapDispatchToProps,
      initMergeProps,
      areStatesEqual,
      areStatePropsEqual,
      areOwnPropsEqual,
      areMergedPropsEqual
    };

    function ConnectFunction(props) {
      const [propsContext, reactReduxForwardedRef, wrapperProps] = (0, _react.useMemo)(() => {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        const {
          reactReduxForwardedRef
        } = props,
              wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
        return [props.context, reactReduxForwardedRef, wrapperProps];
      }, [props]);
      const ContextToUse = (0, _react.useMemo)(() => {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && // @ts-ignore
        (0, _reactIs.isContextConsumer)( /*#__PURE__*/_react.default.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      const contextValue = (0, _react.useContext)(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);

      if (false) {} // Based on the previous check, one of these must be true


      const store = didStoreComeFromProps ? props.store : contextValue.store;
      const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
      const childPropsSelector = (0, _react.useMemo)(() => {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return (0, _selectorFactory.default)(store.dispatch, selectorFactoryOptions);
      }, [store]);
      const [subscription, notifyNestedSubs] = (0, _react.useMemo)(() => {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        const subscription = (0, _Subscription.createSubscription)(store, didStoreComeFromProps ? undefined : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        const notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]); // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.

      const overriddenContextValue = (0, _react.useMemo)(() => {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return (0, _extends2.default)({}, contextValue, {
          subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // Set up refs to coordinate values between the subscription effect and the render logic

      const lastChildProps = (0, _react.useRef)();
      const lastWrapperProps = (0, _react.useRef)(wrapperProps);
      const childPropsFromStoreUpdate = (0, _react.useRef)();
      const renderIsScheduled = (0, _react.useRef)(false);
      const isProcessingDispatch = (0, _react.useRef)(false);
      const isMounted = (0, _react.useRef)(false);
      const latestSubscriptionCallbackError = (0, _react.useRef)();
      (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
        isMounted.current = true;
        return () => {
          isMounted.current = false;
        };
      }, []);
      const actualChildPropsSelector = (0, _react.useMemo)(() => {
        const selector = () => {
          // Tricky logic here:
          // - This render may have been triggered by a Redux store update that produced new child props
          // - However, we may have gotten new wrapper props after that
          // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
          // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
          // So, we'll use the child props from store update only if the wrapper props are the same as last time.
          if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
            return childPropsFromStoreUpdate.current;
          } // TODO We're reading the store directly in render() here. Bad idea?
          // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
          // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
          // to determine what the child props should be.


          return childPropsSelector(store.getState(), wrapperProps);
        };

        return selector;
      }, [store, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      const subscribeForReact = (0, _react.useMemo)(() => {
        const subscribe = reactListener => {
          if (!subscription) {
            return () => {};
          }

          return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
          childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
        };

        return subscribe;
      }, [subscription]);
      useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs]);
      let actualChildProps;

      try {
        actualChildProps = useSyncExternalStore( // TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
        subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
        // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
        actualChildPropsSelector, getServerState ? () => childPropsSelector(getServerState(), wrapperProps) : actualChildPropsSelector);
      } catch (err) {
        if (latestSubscriptionCallbackError.current) {
          ;
          err.message += `\nThe error may be correlated with this previous error:\n${latestSubscriptionCallbackError.current.stack}\n\n`;
        }

        throw err;
      }

      (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(() => {
        latestSubscriptionCallbackError.current = undefined;
        childPropsFromStoreUpdate.current = undefined;
        lastChildProps.current = actualChildProps;
      }); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      const renderedWrappedComponent = (0, _react.useMemo)(() => {
        return (
          /*#__PURE__*/
          // @ts-ignore
          _react.default.createElement(WrappedComponent, (0, _extends2.default)({}, actualChildProps, {
            ref: reactReduxForwardedRef
          }))
        );
      }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      const renderedChild = (0, _react.useMemo)(() => {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return /*#__PURE__*/_react.default.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    }

    const _Connect = _react.default.memo(ConnectFunction);

    // Add a hacky cast to get the right output type
    const Connect = _Connect;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = ConnectFunction.displayName = displayName;

    if (forwardRef) {
      const _forwarded = _react.default.forwardRef(function forwardConnectRef(props, ref) {
        // @ts-ignore
        return /*#__PURE__*/_react.default.createElement(Connect, (0, _extends2.default)({}, props, {
          reactReduxForwardedRef: ref
        }));
      });

      const forwarded = _forwarded;
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return (0, _hoistNonReactStatics.default)(forwarded, WrappedComponent);
    }

    return (0, _hoistNonReactStatics.default)(Connect, WrappedComponent);
  };

  return wrapWithConnect;
}

var _default = connect;
exports["default"] = _default;

/***/ }),

/***/ 3672:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.createInvalidArgFactory = createInvalidArgFactory;

function createInvalidArgFactory(arg, name) {
  return (dispatch, options) => {
    throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
  };
}

/***/ }),

/***/ 2333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.mapDispatchToPropsFactory = mapDispatchToPropsFactory;

var _bindActionCreators = _interopRequireDefault(__webpack_require__(4502));

var _wrapMapToProps = __webpack_require__(9228);

var _invalidArgFactory = __webpack_require__(3672);

function mapDispatchToPropsFactory(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => // @ts-ignore
  (0, _bindActionCreators.default)(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(dispatch => ({
    dispatch
  })) : typeof mapDispatchToProps === 'function' ? // @ts-ignore
  (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapDispatchToProps, 'mapDispatchToProps');
}

/***/ }),

/***/ 6188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.mapStateToPropsFactory = mapStateToPropsFactory;

var _wrapMapToProps = __webpack_require__(9228);

var _invalidArgFactory = __webpack_require__(3672);

function mapStateToPropsFactory(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(() => ({})) : typeof mapStateToProps === 'function' ? // @ts-ignore
  (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : (0, _invalidArgFactory.createInvalidArgFactory)(mapStateToProps, 'mapStateToProps');
}

/***/ }),

/***/ 9442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.mergePropsFactory = mergePropsFactory;

var _extends2 = _interopRequireDefault(__webpack_require__(7154));

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(1758));

var _invalidArgFactory = __webpack_require__(3672);

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  // @ts-ignore
  return (0, _extends2.default)({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, {
    displayName,
    areMergedPropsEqual
  }) {
    let hasRunOnce = false;
    let mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}

function mergePropsFactory(mergeProps) {
  return !mergeProps ? () => defaultMergeProps : typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : (0, _invalidArgFactory.createInvalidArgFactory)(mergeProps, 'mergeProps');
}

/***/ }),

/***/ 3764:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports["default"] = finalPropsSelectorFactory;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7316));

var _verifySubselectors = _interopRequireDefault(__webpack_require__(1830));

const _excluded = ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"];

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, {
  areStatesEqual,
  areOwnPropsEqual,
  areStatePropsEqual
}) {
  let hasRunAtLeastOnce = false;
  let state;
  let ownProps;
  let stateProps;
  let dispatchProps;
  let mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps);
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments
// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.
function finalPropsSelectorFactory(dispatch, _ref) {
  let {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps
  } = _ref,
      options = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const mapStateToProps = initMapStateToProps(dispatch, options);
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  const mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),

/***/ 1830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports["default"] = verifySubselectors;

var _warning = _interopRequireDefault(__webpack_require__(3099));

function verify(selector, methodName) {
  if (!selector) {
    throw new Error(`Unexpected value for ${methodName} in connect.`);
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      (0, _warning.default)(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
  verify(mapStateToProps, 'mapStateToProps');
  verify(mapDispatchToProps, 'mapDispatchToProps');
  verify(mergeProps, 'mergeProps');
}

/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = _interopRequireDefault(__webpack_require__(1758));

function wrapMapToPropsConstant( // * Note:
//  It seems that the dispatch argument
//  could be a dispatch function in some cases (ex: whenMapDispatchToPropsIsMissing)
//  and a state object in some others (ex: whenMapStateToPropsIsMissing)
// eslint-disable-next-line no-unused-vars
getConstant) {
  return function initConstantSelector(dispatch) {
    const constant = getConstant(dispatch);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
// TODO Can this get pulled out so that we can subscribe directly to the store if we don't need ownProps?


function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//


function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, {
    displayName
  }) {
    const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, undefined);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      let props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}

/***/ }),

/***/ 9124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
var _exportNames = {
  Provider: true,
  connect: true,
  ReactReduxContext: true,
  useDispatch: true,
  createDispatchHook: true,
  useSelector: true,
  createSelectorHook: true,
  useStore: true,
  createStoreHook: true,
  shallowEqual: true
};
Object.defineProperty(exports, "Provider", ({
  enumerable: true,
  get: function () {
    return _Provider.default;
  }
}));
Object.defineProperty(exports, "connect", ({
  enumerable: true,
  get: function () {
    return _connect.default;
  }
}));
Object.defineProperty(exports, "ReactReduxContext", ({
  enumerable: true,
  get: function () {
    return _Context.ReactReduxContext;
  }
}));
Object.defineProperty(exports, "useDispatch", ({
  enumerable: true,
  get: function () {
    return _useDispatch.useDispatch;
  }
}));
Object.defineProperty(exports, "createDispatchHook", ({
  enumerable: true,
  get: function () {
    return _useDispatch.createDispatchHook;
  }
}));
Object.defineProperty(exports, "useSelector", ({
  enumerable: true,
  get: function () {
    return _useSelector.useSelector;
  }
}));
Object.defineProperty(exports, "createSelectorHook", ({
  enumerable: true,
  get: function () {
    return _useSelector.createSelectorHook;
  }
}));
Object.defineProperty(exports, "useStore", ({
  enumerable: true,
  get: function () {
    return _useStore.useStore;
  }
}));
Object.defineProperty(exports, "createStoreHook", ({
  enumerable: true,
  get: function () {
    return _useStore.createStoreHook;
  }
}));
Object.defineProperty(exports, "shallowEqual", ({
  enumerable: true,
  get: function () {
    return _shallowEqual.default;
  }
}));

var _Provider = _interopRequireDefault(__webpack_require__(7456));

var _connect = _interopRequireDefault(__webpack_require__(9794));

var _Context = __webpack_require__(5120);

var _useDispatch = __webpack_require__(5158);

var _useSelector = __webpack_require__(1033);

var _useStore = __webpack_require__(9269);

var _shallowEqual = _interopRequireDefault(__webpack_require__(8761));

var _types = __webpack_require__(8929);

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

/***/ }),

/***/ 5158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createDispatchHook = createDispatchHook;
exports.useDispatch = void 0;

var _Context = __webpack_require__(5120);

var _useStore = __webpack_require__(9269);

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */
function createDispatchHook(context = _Context.ReactReduxContext) {
  const useStore = // @ts-ignore
  context === _Context.ReactReduxContext ? _useStore.useStore : (0, _useStore.createStoreHook)(context);
  return function useDispatch() {
    const store = useStore(); // @ts-ignore

    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */


const useDispatch = /*#__PURE__*/createDispatchHook();
exports.useDispatch = useDispatch;

/***/ }),

/***/ 9723:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useReduxContext = useReduxContext;

var _react = __webpack_require__(7294);

var _Context = __webpack_require__(5120);

/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */
function useReduxContext() {
  const contextValue = (0, _react.useContext)(_Context.ReactReduxContext);

  if (false) {}

  return contextValue;
}

/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createSelectorHook = createSelectorHook;
exports.useSelector = exports.initializeUseSelector = void 0;

var _react = __webpack_require__(7294);

var _useReduxContext = __webpack_require__(9723);

var _Context = __webpack_require__(5120);

var _useSyncExternalStore = __webpack_require__(2305);

let useSyncExternalStoreWithSelector = _useSyncExternalStore.notInitialized;

const initializeUseSelector = fn => {
  useSyncExternalStoreWithSelector = fn;
};

exports.initializeUseSelector = initializeUseSelector;

const refEquality = (a, b) => a === b;
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context = _Context.ReactReduxContext) {
  const useReduxContext = context === _Context.ReactReduxContext ? _useReduxContext.useReduxContext : () => (0, _react.useContext)(context);
  return function useSelector(selector, equalityFn = refEquality) {
    if (false) {}

    const {
      store,
      subscription,
      getServerState
    } = useReduxContext();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    (0, _react.useDebugValue)(selectedState);
    return selectedState;
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */


const useSelector = /*#__PURE__*/createSelectorHook();
exports.useSelector = useSelector;

/***/ }),

/***/ 9269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createStoreHook = createStoreHook;
exports.useStore = void 0;

var _react = __webpack_require__(7294);

var _Context = __webpack_require__(5120);

var _useReduxContext = __webpack_require__(9723);

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */
function createStoreHook(context = _Context.ReactReduxContext) {
  const useReduxContext = // @ts-ignore
  context === _Context.ReactReduxContext ? _useReduxContext.useReduxContext : () => (0, _react.useContext)(context);
  return function useStore() {
    const {
      store
    } = useReduxContext(); // @ts-ignore

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */


const useStore = /*#__PURE__*/createStoreHook();
exports.useStore = useStore;

/***/ }),

/***/ 7424:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
var _exportNames = {
  batch: true
};
Object.defineProperty(exports, "batch", ({
  enumerable: true,
  get: function () {
    return _reactBatchedUpdates.unstable_batchedUpdates;
  }
}));

var _shim = __webpack_require__(1688);

var _withSelector = __webpack_require__(2798);

var _reactBatchedUpdates = __webpack_require__(2581);

var _batch = __webpack_require__(7852);

var _useSelector = __webpack_require__(1033);

var _connect = __webpack_require__(9794);

var _exports = __webpack_require__(9124);

Object.keys(_exports).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _exports[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _exports[key];
    }
  });
});
// The primary entry point assumes we're working with standard ReactDOM/RN, but
// older versions that do not include `useSyncExternalStore` (React 16.9 - 17.x).
// Because of that, the useSyncExternalStore compat shim is needed.
(0, _useSelector.initializeUseSelector)(_withSelector.useSyncExternalStoreWithSelector);
(0, _connect.initializeConnect)(_shim.useSyncExternalStore); // Enable batched updates in our subscriptions for use
// with standard React renderers (ReactDOM, React Native)

(0, _batch.setBatch)(_reactBatchedUpdates.unstable_batchedUpdates);

/***/ }),

/***/ 8929:
/***/ (() => {

"use strict";


/***/ }),

/***/ 7510:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.createSubscription = createSubscription;

var _batch = __webpack_require__(7852);

function createListenerCollection() {
  const batch = (0, _batch.getBatch)();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },

    notify() {
      batch(() => {
        let listener = first;

        while (listener) {
          listener.callback();
          listener = listener.next;
        }
      });
    },

    get() {
      let listeners = [];
      let listener = first;

      while (listener) {
        listeners.push(listener);
        listener = listener.next;
      }

      return listeners;
    },

    subscribe(callback) {
      let isSubscribed = true;
      let listener = last = {
        callback,
        next: null,
        prev: last
      };

      if (listener.prev) {
        listener.prev.next = listener;
      } else {
        first = listener;
      }

      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;

        if (listener.next) {
          listener.next.prev = listener.prev;
        } else {
          last = listener.prev;
        }

        if (listener.prev) {
          listener.prev.next = listener.next;
        } else {
          first = listener.next;
        }
      };
    }

  };
}

const nullListeners = {
  notify() {},

  get: () => []
};

function createSubscription(store, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;

  function addNestedSub(listener) {
    trySubscribe();
    return listeners.subscribe(listener);
  }

  function notifyNestedSubs() {
    listeners.notify();
  }

  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }

  function isSubscribed() {
    return Boolean(unsubscribe);
  }

  function trySubscribe() {
    if (!unsubscribe) {
      unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }

  function tryUnsubscribe() {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = undefined;
      listeners.clear();
      listeners = nullListeners;
    }
  }

  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe,
    tryUnsubscribe,
    getListeners: () => listeners
  };
  return subscription;
}

/***/ }),

/***/ 7852:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.getBatch = exports.setBatch = void 0;

// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

let batch = defaultNoopBatch; // Allow injecting another batching function later

const setBatch = newBatch => batch = newBatch; // Supply a getter just to skip dealing with ESM bindings


exports.setBatch = setBatch;

const getBatch = () => batch;

exports.getBatch = getBatch;

/***/ }),

/***/ 4502:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = bindActionCreators;

function bindActionCreators(actionCreators, dispatch) {
  const boundActionCreators = {};

  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
    }
  }

  return boundActionCreators;
}

/***/ }),

/***/ 1442:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = isPlainObject;

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  let proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  let baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}

/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
Object.defineProperty(exports, "unstable_batchedUpdates", ({
  enumerable: true,
  get: function () {
    return _reactDom.unstable_batchedUpdates;
  }
}));

var _reactDom = __webpack_require__(3935);

/***/ }),

/***/ 8761:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = shallowEqual;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (let i = 0; i < keysA.length; i++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ 4253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useIsomorphicLayoutEffect = exports.canUseDOM = void 0;

var _react = __webpack_require__(7294);

// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed
// Matches logic in React's `shared/ExecutionEnvironment` file
const canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
exports.canUseDOM = canUseDOM;
const useIsomorphicLayoutEffect = canUseDOM ? _react.useLayoutEffect : _react.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;

/***/ }),

/***/ 2305:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.notInitialized = void 0;

const notInitialized = () => {
  throw new Error('uSES not initialized!');
};

exports.notInitialized = notInitialized;

/***/ }),

/***/ 1758:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(5318);

exports.__esModule = true;
exports["default"] = verifyPlainObject;

var _isPlainObject = _interopRequireDefault(__webpack_require__(1442));

var _warning = _interopRequireDefault(__webpack_require__(3099));

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject.default)(value)) {
    (0, _warning.default)(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}

/***/ }),

/***/ 3099:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports["default"] = warning;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}

/***/ }),

/***/ 2876:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
!function(e,t){ true?t(exports,__webpack_require__(7294),__webpack_require__(1673),__webpack_require__(7927)):0}(this,(function(e,t,r,n){"use strict";function o(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=o(t);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}const c="get",l="application/x-www-form-urlencoded";function s(e){return null!=e&&"string"==typeof e.tagName}function f(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce(((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map((e=>[r,e])):[[r,n]])}),[]))}function d(e,t,r){let n,o,a,u;if(s(i=e)&&"form"===i.tagName.toLowerCase()){let i=r.submissionTrigger;n=r.method||e.getAttribute("method")||c,o=r.action||e.getAttribute("action")||t,a=r.encType||e.getAttribute("enctype")||l,u=new FormData(e),i&&i.name&&u.append(i.name,i.value)}else if(function(e){return s(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return s(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let i=e.form;if(null==i)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');n=r.method||e.getAttribute("formmethod")||i.getAttribute("method")||c,o=r.action||e.getAttribute("formaction")||i.getAttribute("action")||t,a=r.encType||e.getAttribute("formenctype")||i.getAttribute("enctype")||l,u=new FormData(i),e.name&&u.append(e.name,e.value)}else{if(s(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(n=r.method||c,o=r.action||t,a=r.encType||l,e instanceof FormData)u=e;else if(u=new FormData,e instanceof URLSearchParams)for(let[t,r]of e)u.append(t,r);else if(null!=e)for(let t of Object.keys(e))u.append(t,e[t])}var i;let{protocol:f,host:d}=window.location;return{url:new URL(o,f+"//"+d),method:n.toLowerCase(),encType:a,formData:u}}const m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],b=["aria-current","caseSensitive","className","end","style","to","children"],p=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function h(){var e;let t=null==(e=window)?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=u({},t,{errors:y(t.errors)})),t}function y(e){if(!e)return null;let t=Object.entries(e),r={};for(let[e,o]of t)if(o&&"RouteErrorResponse"===o.__type)r[e]=new n.ErrorResponse(o.status,o.statusText,o.data,!0===o.internal);else if(o&&"Error"===o.__type){let t=new Error(o.message);t.stack="",r[e]=t}else r[e]=o;return r}const g="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,v=a.forwardRef((function(e,t){let{onClick:n,relative:o,reloadDocument:c,replace:l,state:s,target:f,to:d,preventScrollReset:b}=e,p=i(e,m),h="string"==typeof d?d:r.createPath(d),y=/^[a-z+]+:\/\//i.test(h)||h.startsWith("//"),v=h,R=!1;if(g&&y){let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h);t.origin===e.origin?v=t.pathname+t.search+t.hash:R=!0}let w=r.useHref(v,{relative:o}),P=A(v,{replace:l,state:s,target:f,preventScrollReset:b,relative:o});return a.createElement("a",u({},p,{href:y?h:w,onClick:R||c?n:function(e){n&&n(e),e.defaultPrevented||P(e)},ref:t,target:f}))})),R=a.forwardRef((function(e,t){let{"aria-current":n="page",caseSensitive:o=!1,className:c="",end:l=!1,style:s,to:f,children:d}=e,m=i(e,b),p=r.useResolvedPath(f,{relative:m.relative}),h=r.useLocation(),y=a.useContext(r.UNSAFE_DataRouterStateContext),{navigator:g}=a.useContext(r.UNSAFE_NavigationContext),R=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,w=h.pathname,P=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(w=w.toLowerCase(),P=P?P.toLowerCase():null,R=R.toLowerCase());let O,S=w===R||!l&&w.startsWith(R)&&"/"===w.charAt(R.length),j=null!=P&&(P===R||!l&&P.startsWith(R)&&"/"===P.charAt(R.length)),E=S?n:void 0;O="function"==typeof c?c({isActive:S,isPending:j}):[c,S?"active":null,j?"pending":null].filter(Boolean).join(" ");let A="function"==typeof s?s({isActive:S,isPending:j}):s;return a.createElement(v,u({},m,{"aria-current":E,className:O,ref:t,style:A,to:f}),"function"==typeof d?d({isActive:S,isPending:j}):d)})),w=a.forwardRef(((e,t)=>a.createElement(P,u({},e,{ref:t})))),P=a.forwardRef(((e,t)=>{let{reloadDocument:r,replace:n,method:o=c,action:l,onSubmit:s,fetcherKey:f,routeId:d,relative:m,preventScrollReset:b}=e,h=i(e,p),y=C(f,d),g="get"===o.toLowerCase()?"get":"post",v=N(l,{relative:m});return a.createElement("form",u({ref:t,method:g,action:v,onSubmit:r?s:e=>{if(s&&s(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,r=(null==t?void 0:t.getAttribute("formmethod"))||o;y(t||e.currentTarget,{method:r,replace:n,relative:m,preventScrollReset:b})}},h))}));var O,S;function j(e){let t=a.useContext(r.UNSAFE_DataRouterContext);return t||n.invariant(!1),t}function E(e){let t=a.useContext(r.UNSAFE_DataRouterStateContext);return t||n.invariant(!1),t}function A(e,t){let{target:n,replace:o,state:u,preventScrollReset:i,relative:c}=void 0===t?{}:t,l=r.useNavigate(),s=r.useLocation(),f=r.useResolvedPath(e,{relative:c});return a.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==o?o:r.createPath(s)===r.createPath(f);l(e,{replace:n,state:u,preventScrollReset:i,relative:c})}}),[s,l,f,o,u,n,e,i,c])}function C(e,t){let{router:r}=j(O.UseSubmitImpl),o=N();return a.useCallback((function(a,u){if(void 0===u&&(u={}),"undefined"==typeof document)throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");let{method:i,encType:c,formData:l,url:s}=d(a,o,u),f=s.pathname+s.search,m={replace:u.replace,preventScrollReset:u.preventScrollReset,formData:l,formMethod:i,formEncType:c};e?(null==t&&n.invariant(!1),r.fetch(e,t,f,m)):r.navigate(f,m)}),[o,r,e,t])}function N(e,t){let{relative:o}=void 0===t?{}:t,{basename:i}=a.useContext(r.UNSAFE_NavigationContext),c=a.useContext(r.UNSAFE_RouteContext);c||n.invariant(!1);let[l]=c.matches.slice(-1),s=u({},r.useResolvedPath(e||".",{relative:o})),f=r.useLocation();if(null==e&&(s.search=f.search,s.hash=f.hash,l.route.index)){let e=new URLSearchParams(s.search);e.delete("index"),s.search=e.toString()?"?"+e.toString():""}return e&&"."!==e||!l.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),"/"!==i&&(s.pathname="/"===s.pathname?i:n.joinPaths([i,s.pathname])),r.createPath(s)}!function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(O||(O={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(S||(S={}));let F=0;const L="react-router-scroll-positions";let x={};function U(e){let{getKey:t,storageKey:n}=void 0===e?{}:e,{router:o}=j(O.UseScrollRestoration),{restoreScrollPosition:u,preventScrollReset:i}=E(S.UseScrollRestoration),c=r.useLocation(),l=r.useMatches(),s=r.useNavigation();a.useEffect((()=>(window.history.scrollRestoration="manual",()=>{window.history.scrollRestoration="auto"})),[]),function(e,t){let{capture:r}=t||{};a.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("pagehide",e,t),()=>{window.removeEventListener("pagehide",e,t)}}),[e,r])}(a.useCallback((()=>{if("idle"===s.state){let e=(t?t(c,l):null)||c.key;x[e]=window.scrollY}sessionStorage.setItem(n||L,JSON.stringify(x)),window.history.scrollRestoration="auto"}),[n,t,s.state,c,l])),"undefined"!=typeof document&&(a.useLayoutEffect((()=>{try{let e=sessionStorage.getItem(n||L);e&&(x=JSON.parse(e))}catch(e){}}),[n]),a.useLayoutEffect((()=>{let e=null==o?void 0:o.enableScrollRestoration(x,(()=>window.scrollY),t);return()=>e&&e()}),[o,t]),a.useLayoutEffect((()=>{if(!1!==u)if("number"!=typeof u){if(c.hash){let e=document.getElementById(c.hash.slice(1));if(e)return void e.scrollIntoView()}!0!==i&&window.scrollTo(0,0)}else window.scrollTo(0,u)}),[c,u,i]))}Object.defineProperty(e,"AbortedDeferredError",{enumerable:!0,get:function(){return r.AbortedDeferredError}}),Object.defineProperty(e,"Await",{enumerable:!0,get:function(){return r.Await}}),Object.defineProperty(e,"MemoryRouter",{enumerable:!0,get:function(){return r.MemoryRouter}}),Object.defineProperty(e,"Navigate",{enumerable:!0,get:function(){return r.Navigate}}),Object.defineProperty(e,"NavigationType",{enumerable:!0,get:function(){return r.NavigationType}}),Object.defineProperty(e,"Outlet",{enumerable:!0,get:function(){return r.Outlet}}),Object.defineProperty(e,"Route",{enumerable:!0,get:function(){return r.Route}}),Object.defineProperty(e,"Router",{enumerable:!0,get:function(){return r.Router}}),Object.defineProperty(e,"RouterProvider",{enumerable:!0,get:function(){return r.RouterProvider}}),Object.defineProperty(e,"Routes",{enumerable:!0,get:function(){return r.Routes}}),Object.defineProperty(e,"UNSAFE_DataRouterContext",{enumerable:!0,get:function(){return r.UNSAFE_DataRouterContext}}),Object.defineProperty(e,"UNSAFE_DataRouterStateContext",{enumerable:!0,get:function(){return r.UNSAFE_DataRouterStateContext}}),Object.defineProperty(e,"UNSAFE_LocationContext",{enumerable:!0,get:function(){return r.UNSAFE_LocationContext}}),Object.defineProperty(e,"UNSAFE_NavigationContext",{enumerable:!0,get:function(){return r.UNSAFE_NavigationContext}}),Object.defineProperty(e,"UNSAFE_RouteContext",{enumerable:!0,get:function(){return r.UNSAFE_RouteContext}}),Object.defineProperty(e,"UNSAFE_enhanceManualRouteObjects",{enumerable:!0,get:function(){return r.UNSAFE_enhanceManualRouteObjects}}),Object.defineProperty(e,"createMemoryRouter",{enumerable:!0,get:function(){return r.createMemoryRouter}}),Object.defineProperty(e,"createPath",{enumerable:!0,get:function(){return r.createPath}}),Object.defineProperty(e,"createRoutesFromChildren",{enumerable:!0,get:function(){return r.createRoutesFromChildren}}),Object.defineProperty(e,"createRoutesFromElements",{enumerable:!0,get:function(){return r.createRoutesFromElements}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return r.defer}}),Object.defineProperty(e,"generatePath",{enumerable:!0,get:function(){return r.generatePath}}),Object.defineProperty(e,"isRouteErrorResponse",{enumerable:!0,get:function(){return r.isRouteErrorResponse}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return r.json}}),Object.defineProperty(e,"matchPath",{enumerable:!0,get:function(){return r.matchPath}}),Object.defineProperty(e,"matchRoutes",{enumerable:!0,get:function(){return r.matchRoutes}}),Object.defineProperty(e,"parsePath",{enumerable:!0,get:function(){return r.parsePath}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return r.redirect}}),Object.defineProperty(e,"renderMatches",{enumerable:!0,get:function(){return r.renderMatches}}),Object.defineProperty(e,"resolvePath",{enumerable:!0,get:function(){return r.resolvePath}}),Object.defineProperty(e,"unstable_useBlocker",{enumerable:!0,get:function(){return r.unstable_useBlocker}}),Object.defineProperty(e,"useActionData",{enumerable:!0,get:function(){return r.useActionData}}),Object.defineProperty(e,"useAsyncError",{enumerable:!0,get:function(){return r.useAsyncError}}),Object.defineProperty(e,"useAsyncValue",{enumerable:!0,get:function(){return r.useAsyncValue}}),Object.defineProperty(e,"useHref",{enumerable:!0,get:function(){return r.useHref}}),Object.defineProperty(e,"useInRouterContext",{enumerable:!0,get:function(){return r.useInRouterContext}}),Object.defineProperty(e,"useLoaderData",{enumerable:!0,get:function(){return r.useLoaderData}}),Object.defineProperty(e,"useLocation",{enumerable:!0,get:function(){return r.useLocation}}),Object.defineProperty(e,"useMatch",{enumerable:!0,get:function(){return r.useMatch}}),Object.defineProperty(e,"useMatches",{enumerable:!0,get:function(){return r.useMatches}}),Object.defineProperty(e,"useNavigate",{enumerable:!0,get:function(){return r.useNavigate}}),Object.defineProperty(e,"useNavigation",{enumerable:!0,get:function(){return r.useNavigation}}),Object.defineProperty(e,"useNavigationType",{enumerable:!0,get:function(){return r.useNavigationType}}),Object.defineProperty(e,"useOutlet",{enumerable:!0,get:function(){return r.useOutlet}}),Object.defineProperty(e,"useOutletContext",{enumerable:!0,get:function(){return r.useOutletContext}}),Object.defineProperty(e,"useParams",{enumerable:!0,get:function(){return r.useParams}}),Object.defineProperty(e,"useResolvedPath",{enumerable:!0,get:function(){return r.useResolvedPath}}),Object.defineProperty(e,"useRevalidator",{enumerable:!0,get:function(){return r.useRevalidator}}),Object.defineProperty(e,"useRouteError",{enumerable:!0,get:function(){return r.useRouteError}}),Object.defineProperty(e,"useRouteLoaderData",{enumerable:!0,get:function(){return r.useRouteLoaderData}}),Object.defineProperty(e,"useRoutes",{enumerable:!0,get:function(){return r.useRoutes}}),e.BrowserRouter=function(e){let{basename:t,children:o,window:u}=e,i=a.useRef();null==i.current&&(i.current=n.createBrowserHistory({window:u,v5Compat:!0}));let c=i.current,[l,s]=a.useState({action:c.action,location:c.location});return a.useLayoutEffect((()=>c.listen(s)),[c]),a.createElement(r.Router,{basename:t,children:o,location:l.location,navigationType:l.action,navigator:c})},e.Form=w,e.HashRouter=function(e){let{basename:t,children:o,window:u}=e,i=a.useRef();null==i.current&&(i.current=n.createHashHistory({window:u,v5Compat:!0}));let c=i.current,[l,s]=a.useState({action:c.action,location:c.location});return a.useLayoutEffect((()=>c.listen(s)),[c]),a.createElement(r.Router,{basename:t,children:o,location:l.location,navigationType:l.action,navigator:c})},e.Link=v,e.NavLink=R,e.ScrollRestoration=function(e){let{getKey:t,storageKey:r}=e;return U({getKey:t,storageKey:r}),null},e.UNSAFE_useScrollRestoration=U,e.createBrowserRouter=function(e,t){return n.createRouter({basename:null==t?void 0:t.basename,history:n.createBrowserHistory({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||h(),routes:r.UNSAFE_enhanceManualRouteObjects(e)}).initialize()},e.createHashRouter=function(e,t){return n.createRouter({basename:null==t?void 0:t.basename,history:n.createHashHistory({window:null==t?void 0:t.window}),hydrationData:(null==t?void 0:t.hydrationData)||h(),routes:r.UNSAFE_enhanceManualRouteObjects(e)}).initialize()},e.createSearchParams=f,e.unstable_HistoryRouter=function(e){let{basename:t,children:n,history:o}=e;const[u,i]=a.useState({action:o.action,location:o.location});return a.useLayoutEffect((()=>o.listen(i)),[o]),a.createElement(r.Router,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:o})},e.unstable_usePrompt=function(e){let{when:t,message:n}=e,o=r.unstable_useBlocker(t);a.useEffect((()=>{"blocked"!==o.state||t||o.reset()}),[o,t]),a.useEffect((()=>{if("blocked"===o.state){window.confirm(n)?setTimeout(o.proceed,0):o.reset()}}),[o,n])},e.useBeforeUnload=function(e,t){let{capture:r}=t||{};a.useEffect((()=>{let t=null!=r?{capture:r}:void 0;return window.addEventListener("beforeunload",e,t),()=>{window.removeEventListener("beforeunload",e,t)}}),[e,r])},e.useFetcher=function(){var e;let{router:t}=j(O.UseFetcher),o=a.useContext(r.UNSAFE_RouteContext);o||n.invariant(!1);let i=null==(e=o.matches[o.matches.length-1])?void 0:e.route.id;null==i&&n.invariant(!1);let[c]=a.useState((()=>String(++F))),[l]=a.useState((()=>(i||n.invariant(!1),function(e,t){return a.forwardRef(((r,n)=>a.createElement(P,u({},r,{ref:n,fetcherKey:e,routeId:t}))))}(c,i)))),[s]=a.useState((()=>e=>{t||n.invariant(!1),i||n.invariant(!1),t.fetch(c,i,e)})),f=C(c,i),d=t.getFetcher(c),m=a.useMemo((()=>u({Form:l,submit:f,load:s},d)),[d,l,f,s]);return a.useEffect((()=>()=>{t?t.deleteFetcher(c):console.warn("No fetcher available to clean up from useFetcher()")}),[t,c]),m},e.useFetchers=function(){return[...E(S.UseFetchers).fetchers.values()]},e.useFormAction=N,e.useLinkClickHandler=A,e.useSearchParams=function(e){let t=a.useRef(f(e)),n=a.useRef(!1),o=r.useLocation(),u=a.useMemo((()=>function(e,t){let r=f(e);if(t)for(let e of t.keys())r.has(e)||t.getAll(e).forEach((t=>{r.append(e,t)}));return r}(o.search,n.current?null:t.current)),[o.search]),i=r.useNavigate(),c=a.useCallback(((e,t)=>{const r=f("function"==typeof e?e(u):e);n.current=!0,i("?"+r,t)}),[i,u]);return[u,c]},e.useSubmit=function(){return C()},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=react-router-dom.production.min.js.map


/***/ }),

/***/ 1673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */


/* eslint-env node */

if (true) {
  module.exports = __webpack_require__(5283);
} else {}


/***/ }),

/***/ 5283:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
!function(e,t){ true?t(exports,__webpack_require__(7927),__webpack_require__(7294)):0}(this,(function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var a=n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},{useState:u,useEffect:l,useLayoutEffect:s,useDebugValue:c}=a;function d(e){const t=e.getSnapshot,r=e.value;try{const e=t();return!i(r,e)}catch(e){return!0}}const p=!!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?function(e,t,r){return t()}:function(e,t,r){const n=t(),[{inst:a},o]=u({inst:{value:n,getSnapshot:t}});return s((()=>{a.value=n,a.getSnapshot=t,d(a)&&o({inst:a})}),[e,n,t]),l((()=>{d(a)&&o({inst:a});return e((()=>{d(a)&&o({inst:a})}))}),[e]),c(n),n},h="useSyncExternalStore"in a?(e=>e.useSyncExternalStore)(a):p,f=a.createContext(null),m=a.createContext(null),v=a.createContext(null),g=a.createContext(null),E=a.createContext(null),b=a.createContext({outlet:null,matches:[]}),y=a.createContext(null);function x(){return null!=a.useContext(E)}function P(){return x()||t.invariant(!1),a.useContext(E).location}function R(){x()||t.invariant(!1);let{basename:e,navigator:r}=a.useContext(g),{matches:n}=a.useContext(b),{pathname:o}=P(),i=JSON.stringify(t.UNSAFE_getPathContributingMatches(n).map((e=>e.pathnameBase))),u=a.useRef(!1);return a.useEffect((()=>{u.current=!0})),a.useCallback((function(n,a){if(void 0===a&&(a={}),!u.current)return;if("number"==typeof n)return void r.go(n);let l=t.resolveTo(n,JSON.parse(i),o,"path"===a.relative);"/"!==e&&(l.pathname="/"===l.pathname?e:t.joinPaths([e,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)}),[e,r,i,o])}const C=a.createContext(null);function O(e){let t=a.useContext(b).outlet;return t?a.createElement(C.Provider,{value:e},t):t}function j(e,r){let{relative:n}=void 0===r?{}:r,{matches:o}=a.useContext(b),{pathname:i}=P(),u=JSON.stringify(t.UNSAFE_getPathContributingMatches(o).map((e=>e.pathnameBase)));return a.useMemo((()=>t.resolveTo(e,JSON.parse(u),i,"path"===n)),[e,u,i,n])}function S(e,r){x()||t.invariant(!1);let{navigator:n}=a.useContext(g),i=a.useContext(m),{matches:u}=a.useContext(b),l=u[u.length-1],s=l?l.params:{};!l||l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let d,p=P();if(r){var h;let e="string"==typeof r?t.parsePath(r):r;"/"===c||(null==(h=e.pathname)?void 0:h.startsWith(c))||t.invariant(!1),d=e}else d=p;let f=d.pathname||"/",v="/"===c?f:f.slice(c.length)||"/",y=t.matchRoutes(e,{pathname:v}),R=A(y&&y.map((e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:t.joinPaths([c,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:t.joinPaths([c,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),u,i||void 0);return r&&R?a.createElement(E.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:t.Action.Pop}},R):R}function D(){let e=F(),r=t.isRouteErrorResponse(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},r),n?a.createElement("pre",{style:o},n):null,null)}class U extends a.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(b.Provider,{value:this.props.routeContext},a.createElement(y.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(f);return o&&o.static&&o.staticContext&&r.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(b.Provider,{value:t},n)}function A(e,r,n){if(void 0===r&&(r=[]),null==e){if(null==n||!n.errors)return null;e=n.matches}let o=e,i=null==n?void 0:n.errors;if(null!=i){let e=o.findIndex((e=>e.route.id&&(null==i?void 0:i[e.route.id])));e>=0||t.invariant(!1),o=o.slice(0,Math.min(o.length,e+1))}return o.reduceRight(((e,t,u)=>{let l=t.route.id?null==i?void 0:i[t.route.id]:null,s=n?t.route.errorElement||a.createElement(D,null):null,c=r.concat(o.slice(0,u+1)),d=()=>a.createElement(_,{match:t,routeContext:{outlet:e,matches:c}},l?s:void 0!==t.route.element?t.route.element:e);return n&&(t.route.errorElement||0===u)?a.createElement(U,{location:n.location,component:s,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()}),null)}var M,N;function k(e){let r=a.useContext(f);return r||t.invariant(!1),r}function L(e){let r=a.useContext(m);return r||t.invariant(!1),r}function B(e){let r=function(e){let r=a.useContext(b);return r||t.invariant(!1),r}(),n=r.matches[r.matches.length-1];return n.route.id||t.invariant(!1),n.route.id}function F(){var e;let t=a.useContext(y),r=L(N.UseRouteError),n=B(N.UseRouteError);return t||(null==(e=r.errors)?void 0:e[n])}function w(){let e=a.useContext(v);return null==e?void 0:e._data}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"}(M||(M={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(N||(N={}));let T="blocker-singleton";function I(e){t.invariant(!1)}function H(e){let{basename:r="/",children:n=null,location:o,navigationType:i=t.Action.Pop,navigator:u,static:l=!1}=e;x()&&t.invariant(!1);let s=r.replace(/^\/*/,"/"),c=a.useMemo((()=>({basename:s,navigator:u,static:l})),[s,u,l]);"string"==typeof o&&(o=t.parsePath(o));let{pathname:d="/",search:p="",hash:h="",state:f=null,key:m="default"}=o,v=a.useMemo((()=>{let e=t.stripBasename(d,s);return null==e?null:{pathname:e,search:p,hash:h,state:f,key:m}}),[s,d,p,h,f,m]);return null==v?null:a.createElement(g.Provider,{value:c},a.createElement(E.Provider,{children:n,value:{location:v,navigationType:i}}))}function J(e){let{children:t,location:r}=e,n=a.useContext(f);return S(n&&!t?n.router.routes:Y(t),r)}var z;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(z||(z={}));const V=new Promise((()=>{}));class q extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:r,resolve:n}=this.props,o=null,i=z.pending;if(n instanceof Promise)if(this.state.error){i=z.error;let e=this.state.error;o=Promise.reject().catch((()=>{})),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_error",{get:()=>e})}else n._tracked?(o=n,i=void 0!==o._error?z.error:void 0!==o._data?z.success:z.pending):(i=z.pending,Object.defineProperty(n,"_tracked",{get:()=>!0}),o=n.then((e=>Object.defineProperty(n,"_data",{get:()=>e})),(e=>Object.defineProperty(n,"_error",{get:()=>e}))));else i=z.success,o=Promise.resolve(),Object.defineProperty(o,"_tracked",{get:()=>!0}),Object.defineProperty(o,"_data",{get:()=>n});if(i===z.error&&o._error instanceof t.AbortedDeferredError)throw V;if(i===z.error&&!r)throw o._error;if(i===z.error)return a.createElement(v.Provider,{value:o,children:r});if(i===z.success)return a.createElement(v.Provider,{value:o,children:e});throw o}}function W(e){let{children:t}=e,r=w(),n="function"==typeof t?t(r):t;return a.createElement(a.Fragment,null,n)}function Y(e,r){void 0===r&&(r=[]);let n=[];return a.Children.forEach(e,((e,o)=>{if(!a.isValidElement(e))return;if(e.type===a.Fragment)return void n.push.apply(n,Y(e.props.children,r));e.type!==I&&t.invariant(!1),e.props.index&&e.props.children&&t.invariant(!1);let i=[...r,o],u={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(u.children=Y(e.props.children,i)),n.push(u)})),n}function G(e){return e.map((e=>{let t=o({},e);return null==t.hasErrorBoundary&&(t.hasErrorBoundary=null!=t.errorElement),t.children&&(t.children=G(t.children)),t}))}Object.defineProperty(e,"AbortedDeferredError",{enumerable:!0,get:function(){return t.AbortedDeferredError}}),Object.defineProperty(e,"NavigationType",{enumerable:!0,get:function(){return t.Action}}),Object.defineProperty(e,"createPath",{enumerable:!0,get:function(){return t.createPath}}),Object.defineProperty(e,"defer",{enumerable:!0,get:function(){return t.defer}}),Object.defineProperty(e,"generatePath",{enumerable:!0,get:function(){return t.generatePath}}),Object.defineProperty(e,"isRouteErrorResponse",{enumerable:!0,get:function(){return t.isRouteErrorResponse}}),Object.defineProperty(e,"json",{enumerable:!0,get:function(){return t.json}}),Object.defineProperty(e,"matchPath",{enumerable:!0,get:function(){return t.matchPath}}),Object.defineProperty(e,"matchRoutes",{enumerable:!0,get:function(){return t.matchRoutes}}),Object.defineProperty(e,"parsePath",{enumerable:!0,get:function(){return t.parsePath}}),Object.defineProperty(e,"redirect",{enumerable:!0,get:function(){return t.redirect}}),Object.defineProperty(e,"resolvePath",{enumerable:!0,get:function(){return t.resolvePath}}),e.Await=function(e){let{children:t,errorElement:r,resolve:n}=e;return a.createElement(q,{resolve:n,errorElement:r},a.createElement(W,null,t))},e.MemoryRouter=function(e){let{basename:r,children:n,initialEntries:o,initialIndex:i}=e,u=a.useRef();null==u.current&&(u.current=t.createMemoryHistory({initialEntries:o,initialIndex:i,v5Compat:!0}));let l=u.current,[s,c]=a.useState({action:l.action,location:l.location});return a.useLayoutEffect((()=>l.listen(c)),[l]),a.createElement(H,{basename:r,children:n,location:s.location,navigationType:s.action,navigator:l})},e.Navigate=function(e){let{to:r,replace:n,state:o,relative:i}=e;x()||t.invariant(!1);let u=a.useContext(m),l=R();return a.useEffect((()=>{u&&"idle"!==u.navigation.state||l(r,{replace:n,state:o,relative:i})})),null},e.Outlet=function(e){return O(e.context)},e.Route=I,e.Router=H,e.RouterProvider=function(e){let{fallbackElement:t,router:r}=e,n=h(r.subscribe,(()=>r.state),(()=>r.state)),o=a.useMemo((()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:e=>r.navigate(e),push:(e,t,n)=>r.navigate(e,{state:t,preventScrollReset:null==n?void 0:n.preventScrollReset}),replace:(e,t,n)=>r.navigate(e,{replace:!0,state:t,preventScrollReset:null==n?void 0:n.preventScrollReset})})),[r]),i=r.basename||"/";return a.createElement(a.Fragment,null,a.createElement(f.Provider,{value:{router:r,navigator:o,static:!1,basename:i}},a.createElement(m.Provider,{value:n},a.createElement(H,{basename:r.basename,location:r.state.location,navigationType:r.state.historyAction,navigator:o},r.state.initialized?a.createElement(J,null):t))),null)},e.Routes=J,e.UNSAFE_DataRouterContext=f,e.UNSAFE_DataRouterStateContext=m,e.UNSAFE_LocationContext=E,e.UNSAFE_NavigationContext=g,e.UNSAFE_RouteContext=b,e.UNSAFE_enhanceManualRouteObjects=G,e.createMemoryRouter=function(e,r){return t.createRouter({basename:null==r?void 0:r.basename,history:t.createMemoryHistory({initialEntries:null==r?void 0:r.initialEntries,initialIndex:null==r?void 0:r.initialIndex}),hydrationData:null==r?void 0:r.hydrationData,routes:G(e)}).initialize()},e.createRoutesFromChildren=Y,e.createRoutesFromElements=Y,e.renderMatches=function(e){return A(e)},e.unstable_useBlocker=function(e){let{router:t}=k(M.UseBlocker),r=a.useCallback((t=>"function"==typeof e?!!e(t):!!e),[e]),n=t.getBlocker(T,r);return a.useEffect((()=>()=>t.deleteBlocker(T)),[t]),n},e.useActionData=function(){let e=L(N.UseActionData);return a.useContext(b)||t.invariant(!1),Object.values((null==e?void 0:e.actionData)||{})[0]},e.useAsyncError=function(){let e=a.useContext(v);return null==e?void 0:e._error},e.useAsyncValue=w,e.useHref=function(e,r){let{relative:n}=void 0===r?{}:r;x()||t.invariant(!1);let{basename:o,navigator:i}=a.useContext(g),{hash:u,pathname:l,search:s}=j(e,{relative:n}),c=l;return"/"!==o&&(c="/"===l?o:t.joinPaths([o,l])),i.createHref({pathname:c,search:s,hash:u})},e.useInRouterContext=x,e.useLoaderData=function(){let e=L(N.UseLoaderData),t=B(N.UseLoaderData);if(!e.errors||null==e.errors[t])return e.loaderData[t];console.error("You cannot `useLoaderData` in an errorElement (routeId: "+t+")")},e.useLocation=P,e.useMatch=function(e){x()||t.invariant(!1);let{pathname:r}=P();return a.useMemo((()=>t.matchPath(e,r)),[r,e])},e.useMatches=function(){let{matches:e,loaderData:t}=L(N.UseMatches);return a.useMemo((()=>e.map((e=>{let{pathname:r,params:n}=e;return{id:e.route.id,pathname:r,params:n,data:t[e.route.id],handle:e.route.handle}}))),[e,t])},e.useNavigate=R,e.useNavigation=function(){return L(N.UseNavigation).navigation},e.useNavigationType=function(){return a.useContext(E).navigationType},e.useOutlet=O,e.useOutletContext=function(){return a.useContext(C)},e.useParams=function(){let{matches:e}=a.useContext(b),t=e[e.length-1];return t?t.params:{}},e.useResolvedPath=j,e.useRevalidator=function(){let e=k(M.UseRevalidator),t=L(N.UseRevalidator);return{revalidate:e.router.revalidate,state:t.revalidation}},e.useRouteError=F,e.useRouteLoaderData=function(e){return L(N.UseRouteLoaderData).loaderData[e]},e.useRoutes=S,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=react-router.production.min.js.map


/***/ }),

/***/ 5251:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(7294),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 2408:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ 7294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(2408);
} else {}


/***/ }),

/***/ 5893:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5251);
} else {}


/***/ }),

/***/ 9681:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/** A function that accepts a potential "extra argument" value to be injected later,
 * and returns an instance of the thunk middleware that uses that value
 */
function createThunkMiddleware(extraArgument) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  var middleware = function middleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        // The thunk middleware looks for any functions that were passed to `store.dispatch`.
        // If this "action" is really a function, call it and return the result.
        if (typeof action === 'function') {
          // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
          return action(dispatch, getState, extraArgument);
        } // Otherwise, pass the action down the middleware chain as usual


        return next(action);
      };
    };
  };

  return middleware;
}

var thunk = createThunkMiddleware(); // Attach the factory function so users can create a customized version
// with whatever "extra arg" they want to inject into their thunks

thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
exports["default"] = _default;

/***/ }),

/***/ 5281:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(1109);

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _objectSpread__default = /*#__PURE__*/_interopDefaultLegacy(_objectSpread);

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (false) {}

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error( true ? formatProdErrorMessage(0) : 0);
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(1) : 0);
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error( true ? formatProdErrorMessage(2) : 0);
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(3) : 0);
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error( true ? formatProdErrorMessage(4) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(5) : 0);
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error( true ? formatProdErrorMessage(6) : 0);
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error( true ? formatProdErrorMessage(7) : 0);
    }

    if (typeof action.type === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(8) : 0);
    }

    if (isDispatching) {
      throw new Error( true ? formatProdErrorMessage(9) : 0);
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error( true ? formatProdErrorMessage(10) : 0);
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error( true ? formatProdErrorMessage(11) : 0);
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

var legacy_createStore = createStore;

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(12) : 0);
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error( true ? formatProdErrorMessage(13) : 0);
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error( true ? formatProdErrorMessage(14) : 0);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error( true ? formatProdErrorMessage(16) : 0);
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error( true ? formatProdErrorMessage(15) : 0);
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread__default['default'](_objectSpread__default['default']({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}

exports.__DO_NOT_USE__ActionTypes = ActionTypes;
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.legacy_createStore = legacy_createStore;


/***/ }),

/***/ 3376:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createCacheKeyComparator = createCacheKeyComparator;
exports.defaultEqualityCheck = void 0;
exports.defaultMemoize = defaultMemoize;
// Cache implementation based on Erik Rasmussen's `lru-memoize`:
// https://github.com/erikras/lru-memoize
var NOT_FOUND = 'NOT_FOUND';

function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }

      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key: key,
        value: value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = undefined;
    }
  };
}

function createLruCache(maxSize, equals) {
  var entries = [];

  function get(key) {
    var cacheIndex = entries.findIndex(function (entry) {
      return equals(key, entry.key);
    }); // We found a cached entry

    if (cacheIndex > -1) {
      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top

      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }

      return entry.value;
    } // No entry found in cache, return sentinel


    return NOT_FOUND;
  }

  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      // TODO Is unshift slow?
      entries.unshift({
        key: key,
        value: value
      });

      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }

  function getEntries() {
    return entries;
  }

  function clear() {
    entries = [];
  }

  return {
    get: get,
    put: put,
    getEntries: getEntries,
    clear: clear
  };
}

var defaultEqualityCheck = function defaultEqualityCheck(a, b) {
  return a === b;
};

exports.defaultEqualityCheck = defaultEqualityCheck;

function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


    var length = prev.length;

    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }

    return true;
  };
}

// defaultMemoize now supports a configurable cache size with LRU behavior,
// and optional comparison of the result value with existing values
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck,
      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,
      _providedOptions$maxS = providedOptions.maxSize,
      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,
      resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons

  function memoized() {
    var value = cache.get(arguments);

    if (value === NOT_FOUND) {
      // @ts-ignore
      value = func.apply(null, arguments);

      if (resultEqualityCheck) {
        var entries = cache.getEntries();
        var matchingEntry = entries.find(function (entry) {
          return resultEqualityCheck(entry.value, value);
        });

        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }

      cache.put(arguments, value);
    }

    return value;
  }

  memoized.clearCache = function () {
    return cache.clear();
  };

  return memoized;
}

/***/ }),

/***/ 2279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createSelector = void 0;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = void 0;
Object.defineProperty(exports, "defaultEqualityCheck", ({
  enumerable: true,
  get: function get() {
    return _defaultMemoize.defaultEqualityCheck;
  }
}));
Object.defineProperty(exports, "defaultMemoize", ({
  enumerable: true,
  get: function get() {
    return _defaultMemoize.defaultMemoize;
  }
}));

var _defaultMemoize = __webpack_require__(3376);

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep === 'function' ? "function " + (dep.name || 'unnamed') + "()" : typeof dep;
    }).join(', ');
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }

  var createSelector = function createSelector() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var _recomputations = 0;

    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.
    // So, start by declaring the default value here.
    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)


    var directlyPassedOptions = {
      memoizeOptions: undefined
    }; // Normally, the result func or "output selector" is the last arg

    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object

    if (typeof resultFunc === 'object') {
      directlyPassedOptions = resultFunc; // and pop the real result func off

      resultFunc = funcs.pop();
    }

    if (typeof resultFunc !== 'function') {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    } // Determine which set of options we're using. Prefer options passed directly,
    // but fall back to options given to createSelectorCreator.


    var _directlyPassedOption = directlyPassedOptions,
        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,
        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer
    // is an array. In most libs I've looked at, it's an equality function or options object.
    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full
    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so
    // we wrap it in an array so we can apply it.

    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        // @ts-ignore
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc: resultFunc,
      memoizedResultFunc: memoizedResultFunc,
      dependencies: dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  }; // @ts-ignore


  return createSelector;
}

var createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize.defaultMemoize);
exports.createSelector = createSelector;

// Manual definition of state and output arguments
var createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ("where each property is a selector, instead received a " + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator( // @ts-ignore
  objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
  return resultSelector;
};

exports.createStructuredSelector = createStructuredSelector;

/***/ }),

/***/ 53:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 3840:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 6774:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 8384:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}__webpack_unused_export__ = ({value:!0});var t=__webpack_require__(9864),n=__webpack_require__(7294),r=e(n),o=e(__webpack_require__(6774)),s=e(__webpack_require__(6940)),i=e(__webpack_require__(1064)),a=e(__webpack_require__(1539)),u=e(__webpack_require__(8679));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},d=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!t.typeOf(e)},h=Object.freeze([]),p=Object.freeze({});function f(e){return"function"==typeof e}function m(e){return false||e.displayName||e.name||"Component"}function y(e){return e&&"string"==typeof e.styledComponentId}var v="undefined"!=typeof process&&(({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).REACT_APP_SC_ATTR||({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).SC_ATTR)||"data-styled",g="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).REACT_APP_SC_DISABLE_SPEEDY&&""!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).REACT_APP_SC_DISABLE_SPEEDY&&({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).SC_DISABLE_SPEEDY&&""!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).SC_DISABLE_SPEEDY?"false"!==({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).SC_DISABLE_SPEEDY&&({"NX_CLI_SET":"true","NX_LOAD_DOT_ENV_FILES":"true","NX_INVOKED_BY_RUNNER":"true","NX_WORKSPACE_ROOT":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO","NX_TERMINAL_OUTPUT_PATH":"/Users/ajmilbauer/Desktop/MY-PORTFOLIO/node_modules/.cache/nx/terminalOutputs/4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f","NX_STREAM_OUTPUT":"true","NX_TASK_TARGET_PROJECT":"aj-port","NX_TASK_HASH":"4ba2cfb519ee53461d45db02f2e650473b85727b7963f4dc4cecd8f956d6b57f"}).SC_DISABLE_SPEEDY:"production"!=="production"),w={},E= false?0:{};function b(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function _(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):0}var N=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&_(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,u=t.length;a<u;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),C=new Map,A=new Map,I=1,P=function(e){if(C.has(e))return C.get(e);for(;A.has(I);)I++;var t=I++;return false&&0,C.set(e,t),A.set(t,e),t},x=function(e){return A.get(e)},O=function(e,t){t>=I&&(I=t+1),C.set(e,t),A.set(t,e)},R="style["+v+'][data-styled-version="5.3.6"]',D=new RegExp("^"+v+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),T=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},j=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(D);if(a){var u=0|parseInt(a[1],10),c=a[2];0!==u&&(O(c,u),T(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(i)}}},k=function(){return true?__webpack_require__.nc:0},V=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(v))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(v,"active"),r.setAttribute("data-styled-version","5.3.6");var i=k();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},M=function(){function e(e){var t=this.element=V(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}_(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),B=function(){function e(e){var t=this.element=V(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),z=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),q=g,G={isServer:!g,useCSSOMInjection:!S},L=function(){function e(e,t,n){void 0===e&&(e=p),void 0===t&&(t={}),this.options=c({},G,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&g&&q&&(q=!1,function(e){for(var t=document.querySelectorAll(R),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(v)&&(j(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return P(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(c({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new z(o):r?new M(o):new B(o),new N(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(P(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(P(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(P(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=x(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var u=v+".g"+o+'[id="'+s+'"]',c="";void 0!==i&&i.forEach((function(e){e.length>0&&(c+=e+",")})),r+=""+a+u+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),F=/(a)(d)/gi,Y=function(e){return String.fromCharCode(e+(e>25?39:97))};function H(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Y(t%52)+n;return(Y(t%52)+n).replace(F,"$1-$2")}var $=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},W=function(e){return $(5381,e)};function U(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(f(n)&&!y(n))return!1}return!0}var J=W("5.3.6"),X=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&U(e),this.componentId=t,this.baseHash=$(J,t),this.baseStyle=n,L.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=me(this.rules,e,t,n).join(""),i=H($(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var u=this.rules.length,c=$(this.baseHash,n.hash),l="",d=0;d<u;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(0);else if(h){var p=me(h,e,t,n),f=Array.isArray(p)?p.join(""):p;c=$(c,f+d),l+=f}}if(l){var m=H(c>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y)}o.push(m)}}return o.join(" ")},e}(),Z=/^\s*\/\/.*$/gm,K=[":","[",".","#"];function Q(e){var t,n,r,o,i=void 0===e?p:e,a=i.options,u=void 0===a?p:a,c=i.plugins,l=void 0===c?h:c,d=new s(u),f=[],m=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,u,c,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){f.push(e)})),y=function(e,r,s){return 0===r&&-1!==K.indexOf(s[n.length])||s.match(o)?e:"."+t};function v(e,s,i,a){void 0===a&&(a="&");var u=e.replace(Z,""),c=s&&i?i+" "+s+" { "+u+" }":u;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),d(i||!s?"":s,c)}return d.use([].concat(l,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,y))},m,function(e){if(-2===e){var t=f;return f=[],t}}])),v.hash=l.length?l.reduce((function(e,t){return t.name||_(15),$(e,t.name)}),5381).toString():"",v}var ee=r.createContext(),te=ee.Consumer,ne=r.createContext(),re=(ne.Consumer,new L),oe=Q();function se(){return n.useContext(ee)||re}function ie(){return n.useContext(ne)||oe}function ae(e){var t=n.useState(e.stylisPlugins),s=t[0],i=t[1],a=se(),u=n.useMemo((function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),c=n.useMemo((function(){return Q({options:{prefix:!e.disableVendorPrefixes},plugins:s})}),[e.disableVendorPrefixes,s]);return n.useEffect((function(){o(s,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]),r.createElement(ee.Provider,{value:u},r.createElement(ne.Provider,{value:c}, false?0:e.children))}var ue=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=oe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return _(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=oe),this.name+e.hash},e}(),ce=/([A-Z])/,le=/([A-Z])/g,de=/^ms-/,he=function(e){return"-"+e.toLowerCase()};function pe(e){return ce.test(e)?e.replace(le,he).replace(de,"-ms-"):e}var fe=function(e){return null==e||!1===e||""===e};function me(e,n,r,o){if(Array.isArray(e)){for(var s,a=[],u=0,c=e.length;u<c;u+=1)""!==(s=me(e[u],n,r,o))&&(Array.isArray(s)?a.push.apply(a,s):a.push(s));return a}if(fe(e))return"";if(y(e))return"."+e.styledComponentId;if(f(e)){if("function"!=typeof(h=e)||h.prototype&&h.prototype.isReactComponent||!n)return e;var l=e(n);return false&&0,me(l,n,r,o)}var h;return e instanceof ue?r?(e.inject(r,o),e.getName(o)):e:d(e)?function e(t,n){var r,o,s=[];for(var a in t)t.hasOwnProperty(a)&&!fe(t[a])&&(Array.isArray(t[a])&&t[a].isCss||f(t[a])?s.push(pe(a)+":",t[a],";"):d(t[a])?s.push.apply(s,e(t[a],a)):s.push(pe(a)+": "+(r=a,null==(o=t[a])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in i?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return f(e)||d(e)?ye(me(l(h,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ye(me(l(e,n)))}var ge=/invalid hook call/i,Se=new Set,we=function(e,t){if(false){ var s, r, o; }},Ee=function(e,t,n){return void 0===n&&(n=p),e.theme!==n.theme&&e.theme||t||n.theme},be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_e=/(^-|-$)/g;function Ne(e){return e.replace(be,"-").replace(_e,"")}var Ce=function(e){return H(W(e)>>>0)};function Ae(e){return"string"==typeof e&&( true||0)}var Ie=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Pe=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function xe(e,t,n){var r=e[n];Ie(t)&&Ie(r)?Oe(r,t):e[n]=t}function Oe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ie(i))for(var a in i)Pe(a)&&xe(e,i[a],a)}return e}var Re=r.createContext(),De=Re.Consumer,Te={};function je(e,t,o){var s=y(e),i=!Ae(e),l=t.attrs,d=void 0===l?h:l,v=t.componentId,g=void 0===v?function(e,t){var n="string"!=typeof e?"sc":Ne(e);Te[n]=(Te[n]||0)+1;var r=n+"-"+Ce("5.3.6"+n+Te[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):v,S=t.displayName,w=void 0===S?function(e){return Ae(e)?"styled."+e:"Styled("+m(e)+")"}(e):S,E=t.displayName&&t.componentId?Ne(t.displayName)+"-"+t.componentId:t.componentId||g,b=s&&e.attrs?Array.prototype.concat(e.attrs,d).filter(Boolean):d,_=t.shouldForwardProp;s&&e.shouldForwardProp&&(_=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var N,C=new X(o,E,s?e.componentStyle:void 0),A=C.isStatic&&0===d.length,I=function(e,t){return function(e,t,r,o){var s=e.attrs,i=e.componentStyle,u=e.defaultProps,l=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,m=e.target; false&&0;var y=function(e,t,n){void 0===e&&(e=p);var r=c({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in f(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Ee(t,n.useContext(Re),u)||p,t,s),v=y[0],g=y[1],S=function(e,t,r,o){var s=se(),i=ie(),a=t?e.generateAndInjectStyles(p,s,i):e.generateAndInjectStyles(r,s,i);return false&&0, false&&0,a}(i,o,v, false?0:void 0),w=r,E=g.$as||t.$as||g.as||t.as||m,b=Ae(E),_=g!==t?c({},t,{},g):t,N={};for(var C in _)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?N.as=_[C]:(d?d(C,a,E):!b||a(C))&&(N[C]=_[C]));return t.style&&g.style!==t.style&&(N.style=c({},t.style,{},g.style)),N.className=Array.prototype.concat(l,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),N.ref=w,n.createElement(E,N)}(N,e,t,A)};return I.displayName=w,(N=r.forwardRef(I)).attrs=b,N.componentStyle=C,N.displayName=w,N.shouldForwardProp=_,N.foldedComponentIds=s?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):h,N.styledComponentId=E,N.target=s?e.target:e,N.withComponent=function(e){var n=t.componentId,r=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=n&&n+"-"+(Ae(e)?e:Ne(m(e)));return je(e,c({},r,{attrs:b,componentId:s}),o)},Object.defineProperty(N,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=s?Oe({},e.defaultProps,t):t}}), false&&(0),N.toString=function(){return"."+N.styledComponentId},i&&u(N,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),N}var ke=function(e){return function e(n,r,o){if(void 0===o&&(o=p),!t.isValidElementType(r))return _(1,String(r));var s=function(){return n(r,o,ve.apply(void 0,arguments))};return s.withConfig=function(t){return e(n,r,c({},o,{},t))},s.attrs=function(t){return e(n,r,c({},o,{attrs:Array.prototype.concat(o.attrs,t).filter(Boolean)}))},s}(je,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){ke[e]=ke(e)}));var Ve=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=U(e),L.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(me(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&L.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}(),Me=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=k();return"<style "+[n&&'nonce="'+n+'"',v+'="true"','data-styled-version="5.3.6"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?_(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return _(2);var n=((t={})[v]="",t["data-styled-version"]="5.3.6",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=k();return o&&(n.nonce=o),[r.createElement("style",c({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new L({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?_(2):r.createElement(ae,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return _(3)},e}(),Be={StyleSheet:L,masterSheet:re}; false&&0, false&&(0),__webpack_unused_export__=Me,__webpack_unused_export__=te,__webpack_unused_export__=ee,__webpack_unused_export__=ae,__webpack_unused_export__=De,__webpack_unused_export__=Re,__webpack_unused_export__=function(e){var t=n.useContext(Re),o=n.useMemo((function(){return function(e,t){if(!e)return _(14);if(f(e)){var n=e(t);return true?n:0}return Array.isArray(e)||"object"!=typeof e?_(8):t?c({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(Re.Provider,{value:o},e.children):null},__webpack_unused_export__=Be,__webpack_unused_export__=function(e){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];var i=ve.apply(void 0,[e].concat(o)),a="sc-global-"+Ce(JSON.stringify(i)),u=new Ve(i,a);function l(e){var t=se(),o=ie(),s=n.useContext(Re),c=n.useRef(t.allocateGSInstance(a)).current;return false&&0, false&&0,t.server&&d(c,e,t,s,o),n.useLayoutEffect((function(){if(!t.server)return d(c,e,t,s,o),function(){return u.removeStyles(c,t)}}),[c,e,t,s,o]),null}function d(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,w,n,o);else{var s=c({},t,{theme:Ee(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return false&&0,r.memo(l)},__webpack_unused_export__=ve,exports.ZP=ke,__webpack_unused_export__=y,exports.F4=function(e){ false&&0;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=ve.apply(void 0,[e].concat(n)).join(""),s=Ce(o);return new ue(s,o)},__webpack_unused_export__=function(){return n.useContext(Re)},__webpack_unused_export__="5.3.6",__webpack_unused_export__=function(e){var t=r.forwardRef((function(t,o){var s=n.useContext(Re),i=e.defaultProps,a=Ee(t,s,i);return false&&0,r.createElement(e,c({},t,{theme:a,ref:o}))}));return u(t,e),t.displayName="WithTheme("+m(e)+")",t};
//# sourceMappingURL=styled-components.browser.cjs.js.map


/***/ }),

/***/ 3250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(7294);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 139:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(7294),n=__webpack_require__(1688);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ 1688:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3250);
} else {}


/***/ }),

/***/ 2798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(139);
} else {}


/***/ }),

/***/ 8593:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(8105));
/******/ }
]);