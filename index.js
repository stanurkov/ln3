const IntlFormat = require('intl-messageformat');

class Ln3 {
    constructor () {
        this._f = {};
        this.currentLanguageId = 'en';
    }

    /**
     * Returns string correspoding to specified name. If string is not defined, defaultValue is returned
     * 
     */

    text(name, defaultValue) {
        let s = this[name];
        if (typeof s === 'undefined' ) {
            s = defaultValue;
            this[name] = s;
        }
        return s;
    }

    /** 
     * Returns ECU-formatted text for specified params for the string specified by name and default value. 
     * 
     */

    format (params, name, defaultValue) {
        let f = this._f[name];
        if (f) return f.format(params);
        let s = this.text(name, defaultValue);

        if (!s) {
            return "WARNING: No formatting string specified for " + name + ", params are " + params.toString();
        }

        f = new IntlFormat(s, this.currentLanguageId);
        this._f[name] = f;
        return f.format(params);
    }

    setDefaultLanguage(value) {
        this._defaultLanguage = value;
    }

    setLanguages(languages, defaultLanguage) {
        this._lngs = languages;
        this._defaultLanguage = defaultLanguage;

        if (defaultLanguage) {
            this.setCurrentLanguage(defaultLanguage);
        }
    }

    setCurrentLanguage(newLanguageId, strings) {
        this._f = {};
        this.currentLanguageId = newLanguageId;

        if (strings) {
            for (let i in strings) {
                this[i] = strings[i];
            }
        } else {
            const lngs = this._lngs;

            if (newLanguageId === this._defaultLanguage) {
                newLanguageId = 'default';
            }

            if (lngs && lngs[newLanguageId]) {
                
                const strings = lngs[newLanguageId];
                for (let i in strings) {
                    this[i] = strings[i];
                }
            }
        }
    }

}

const ln3 = new Ln3();

 module.exports = ln3;