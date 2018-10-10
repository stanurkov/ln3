'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IntlFormat = require('intl-messageformat');

var Ln3 = function () {
    function Ln3() {
        _classCallCheck(this, Ln3);

        this._f = {};
        this.currentLanguageId = 'en';
    }

    /**
     * Returns string correspoding to specified name. If string is not defined, defaultValue is returned
     * 
     */

    _createClass(Ln3, [{
        key: 'text',
        value: function text(name, defaultValue) {
            var s = this[name];
            if (typeof s === 'undefined') {
                s = defaultValue;
                this[name] = s;
            }
            return s;
        }

        /** 
         * Returns ECU-formatted text for specified params for the string specified by name and default value. 
         * 
         */

    }, {
        key: 'format',
        value: function format(params, name, defaultValue) {
            var f = this._f[name];
            if (f) return f.format(params);
            var s = this.text(name, defaultValue);

            if (!s) {
                return "WARNING: No formatting string specified for " + name + ", params are " + params.toString();
            }

            f = new IntlFormat(s, this.currentLanguageId);
            this._f[name] = f;
            return f.format(params);
        }
    }, {
        key: 'setDefaultLanguage',
        value: function setDefaultLanguage(value) {
            this._defaultLanguage = value;
        }
    }, {
        key: 'setLanguages',
        value: function setLanguages(languages, defaultLanguage) {
            this._lngs = languages;
            this._defaultLanguage = defaultLanguage;

            if (defaultLanguage) {
                this.setCurrentLanguage(defaultLanguage);
            }
        }
    }, {
        key: 'setCurrentLanguage',
        value: function setCurrentLanguage(newLanguageId, strings) {
            this._f = {};
            this.currentLanguageId = newLanguageId;

            if (strings) {
                for (var i in strings) {
                    this[i] = strings[i];
                }
            } else {
                var lngs = this._lngs;

                if (newLanguageId === this._defaultLanguage) {
                    newLanguageId = 'default';
                }

                if (lngs && lngs[newLanguageId]) {

                    var _strings = lngs[newLanguageId];
                    for (var _i in _strings) {
                        this[_i] = _strings[_i];
                    }
                }
            }
        }
    }]);

    return Ln3;
}();

var ln3 = new Ln3();

module.exports = ln3;