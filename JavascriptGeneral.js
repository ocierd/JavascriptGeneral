if (!String.prototype.contains)
    String.prototype.contains = function () { return String.prototype.indexOf.apply(this, arguments) != -1; }
if (!String.prototype.replaceAll)
    String.prototype.replaceAll = function () {
        if (typeof arguments[0] !== 'string' || typeof arguments[1] !== 'string')
            throw new TypeError("Debes ingresar dos argumentos del tipo string");
        arguments[0] = new RegExp(arguments[0], 'g');
        return String.prototype.replace.apply(this, arguments);
    }