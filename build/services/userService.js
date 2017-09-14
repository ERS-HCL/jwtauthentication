"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var jwt = require('jsonwebtoken');
var Q = require('q');
var UserService = /** @class */ (function () {
    function UserService() {
        this.userList = [];
        this.userList.push({ id: 1, username: 'user1', password: 'pass1', email: 'madanmannu@gmail.com', name: { first: 'Madan', last: 'prajapati' }, status: 'true', phoneNumbers: ['1111111111', '2222222222'] });
        this.userList.push({ id: 2, username: 'user2', password: 'pass2', email: 'madanmannu2@gmail.com', name: { first: 'Madan2', last: 'prajapati2' }, status: 'true', phoneNumbers: ['1111111112', '2222222224'] });
    }
    UserService.prototype.authenticate = function (username, password) {
        var deferred = Q.defer();
        var objUser = this.userList.filter(function (user) {
            return (user.username === username);
        });
        if (objUser && objUser[0].password === password) {
            deferred.resolve({ email: objUser[0].email, name: objUser[0].name.first + ' ' + objUser[0].name.last, phoneNumbers: objUser[0].phoneNumbers, token: jwt.sign({ sub: objUser[0].username }, config_1.default.secret) });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise;
    };
    UserService.prototype.getUser = function () {
        var deferred = Q.defer();
        if (this.userList) {
            deferred.resolve(this.userList);
        }
        else {
            deferred.resolve();
        }
        return deferred.promise;
    };
    return UserService;
}());
exports.UserService = UserService;
