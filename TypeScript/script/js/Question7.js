var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Course = /** @class */ (function () {
    function Course(name, fees) {
        this.name = '';
        this.fees = 0;
        this.name = name;
        this.fees = fees;
    }
    Object.defineProperty(Course.prototype, "_name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Course.prototype, "_fees", {
        get: function () {
            return this.fees;
        },
        set: function (fees) {
            this.fees = fees;
        },
        enumerable: false,
        configurable: true
    });
    return Course;
}());
var Computer = /** @class */ (function (_super) {
    __extends(Computer, _super);
    function Computer(name, fees, subjectList) {
        var _this = _super.call(this, name, fees) || this;
        _this.subjectList = [];
        _this.subjectList = subjectList;
        return _this;
    }
    Object.defineProperty(Computer.prototype, "_subjectList", {
        get: function () {
            return this.subjectList;
        },
        set: function (subjectList) {
            this.subjectList = subjectList;
        },
        enumerable: false,
        configurable: true
    });
    return Computer;
}(Course));
var Electronics = /** @class */ (function (_super) {
    __extends(Electronics, _super);
    function Electronics(name, fees, subjectList) {
        var _this = _super.call(this, name, fees) || this;
        _this.subjectList = [];
        _this.subjectList = subjectList;
        return _this;
    }
    Object.defineProperty(Electronics.prototype, "_subjectList", {
        get: function () {
            return this.subjectList;
        },
        set: function (subjectList) {
            this._subjectList = subjectList;
        },
        enumerable: false,
        configurable: true
    });
    return Electronics;
}(Course));
