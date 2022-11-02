var myFunc = function (para) {
    var _a = para.firstParam, firstParam = _a === void 0 ? 'defaultFirst' : _a, _b = para.secondParam, secondParam = _b === void 0 ? 'defaultSecond' : _b;
    var result = "firstParam : ".concat(firstParam, ", secondParam :").concat(secondParam);
    return result;
};
