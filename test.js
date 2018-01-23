const ln3 = require('./index');

ln3.setLanguages({
    "default": {
        "button.ok": "OK",
        "button.yes": "Yes",
        "button.no": "No",
        "format.ballCount": "John Doe has {ballCount,plural," +
            "=0{no balls}" + 
            "=1{one ball}" +
            "other{# balls}}"
    },
    "ru": {
        "button.ok": "OK",
        "button.yes": "Да",
        "format.ballCount": "У Тани {ballCount,plural," +
            "=0{нет мячей}" + 
            "=1{один мяч}" + 
            "one{# мяч}" +
            "two{# мяча}" +
            "three{# мяча}" +
            "four{# мяча}" +
            "other{# мячей}}"
    }
}, 'en');

console.log("Default language is: ", ln3.currentLanguageId);

console.log("Here is the OK button's caption: ", ln3.text("button.ok"));
console.log("Here is the CANCEL (not predefined) button's caption: ", ln3.text("button.cancel", "Cancel"));
console.log("Here is the YES button's caption: ", ln3.text("button.yes"));
console.log(ln3.format({ ballCount: 1}, "format.ballCount"));
console.log(ln3.format({ ballCount: 33}, "format.ballCount"));

console.log('\nSetting language to "ru"');
ln3.setCurrentLanguage('ru');
console.log("OK button's caption: ", ln3.text("button.ok"));
console.log("Here is the CANCEL (not predefined) button's caption: ", ln3.text("button.cancel", "Отмена"));
console.log("YES button's caption: ", ln3.text("button.yes"));
console.log(ln3.format({ ballCount: 0}, "format.ballCount"));
console.log(ln3.format({ ballCount: 1}, "format.ballCount"));
console.log(ln3.format({ ballCount: 21}, "format.ballCount"));
console.log(ln3.format({ ballCount: 33}, "format.ballCount"));
console.log(ln3.format({ ballCount: 45}, "format.ballCount"));
console.log(ln3.format({ ballCount: 67}, "format.ballCount"));

console.log('\nSetting language to (non-defined here) "ro"');
ln3.setCurrentLanguage('ro');
console.log("OK button's caption: ", ln3.text("button.ok"));
console.log("YES button's caption: ", ln3.text("button.yes"));
console.log("YES button's caption: ", ln3.text("button.no", "Nu"));