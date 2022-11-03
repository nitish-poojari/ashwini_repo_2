var MyArray = /** @class */ (function () {
    function MyArray() {
        this.collection = [];
    }
    MyArray.prototype.add = function (value) {
        this.collection.push(value);
    };
    MyArray.prototype.remove = function (value) {
        var index = this.collection.indexOf(value);
        return this.collection.splice(index, 1);
    };
    MyArray.prototype.getValues = function () {
        return this.collection;
    };
    return MyArray;
}());
