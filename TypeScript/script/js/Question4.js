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
var Accounts = [];
var bankAccount = /** @class */ (function () {
    function bankAccount(id, firstName, lastName, address, phone, email, type) {
        if (id === void 0) { id = 0; }
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        if (address === void 0) { address = ""; }
        if (phone === void 0) { phone = 0; }
        if (email === void 0) { email = ""; }
        if (type === void 0) { type = ""; }
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.type = type;
    }
    bankAccount.prototype.createAccount = function (b) {
        Accounts.push(b);
        console.log(Accounts);
    };
    bankAccount.prototype.updateAccount = function (b) {
        var id = Number(prompt('Enter Customer id : '));
        var index = Accounts.findIndex(function (item) { return item.id == id; });
        var choice = Number(prompt('Which data do you want update? \n 1: FirstName \n 2. LastName \n 3. Address \n 4. Phone \n 5. Email \n 6. Account Type'));
        switch (choice) {
            case 1:
                var newFirstName = prompt("Enter your updated first name :");
                console.log(Accounts[index].firstName);
                Accounts[index].firstName = newFirstName;
                break;
            case 2:
                var newLastName = prompt("Enter your updated last name :");
                console.log(Accounts[index].lastName);
                Accounts[index].lastName = newLastName;
                break;
            case 3:
                var newAddress = prompt("Enter your updated address:");
                console.log(Accounts[index].address);
                Accounts[index].address = newAddress;
                break;
            case 4:
                var newPhone = prompt("Enter your updated Phone Number :");
                console.log(Accounts[index].phone);
                Accounts[index].phone = newPhone;
                break;
            case 5:
                var newEmail = prompt("Enter your updated Email :");
                console.log(Accounts[index].email);
                Accounts[index].email = newEmail;
                break;
            case 6:
                var newAccType = prompt("Enter your updated Account Type :");
                console.log(Accounts[index].type);
                Accounts[index].type = newAccType;
                break;
        }
        console.log(Accounts);
    };
    bankAccount.prototype.deleteAccount = function (did) {
        for (var i = 0; i < Accounts.length; i++) {
            if (Accounts[i].id == did) {
                Accounts.splice(i, 1);
            }
        }
        // console.log(Accounts)
    };
    return bankAccount;
}());
var transaction = /** @class */ (function (_super) {
    __extends(transaction, _super);
    function transaction(date, type, amount, customerId) {
        var _this = _super.call(this) || this;
        _this.date = '';
        _this.type = '';
        _this.amount = 0;
        _this.customerId = '';
        _this.date = date;
        _this.type = type;
        _this.amount = amount;
        _this.customerId = customerId;
        return _this;
    }
    transaction.prototype.depositfunds = function (damount) {
        this.amount += damount;
        return this.amount;
    };
    transaction.prototype.withdrawFunds = function (wamount) {
        this.amount -= wamount;
        return this.amount;
    };
    return transaction;
}(bankAccount));
var obj = new bankAccount(1, 'ashwini', 'kaujalgikar', 'Pune', 9876554321, 'ashwini@gmail.com', 'saving');
var obj1 = new bankAccount(2, 'ashwini', 'kaujalgikar', 'Pune', 9876554321, 'ashwini@gmail.com', 'saving');
obj.createAccount(obj);
//obj.updateAccount(obj)
//obj1.createAccount(obj1)
//obj1.updateAccount(obj1)
//obj1.deleteAccount(2)
var o = new transaction('08-09-22', 'saving', 5000, '1');
var total = o.depositfunds(1000);
console.log("total amount after depositing:".concat(total));
total = o.withdrawFunds(1000);
console.log("total amount after withdrawing:".concat(total));
//let n = (obj.Accounts)
//document.getElementById("4").innerHTML = n
