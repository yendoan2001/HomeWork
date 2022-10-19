"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, group, scoreHK1, scoreHK2) {
        this.name = name;
        this.group = group;
        this.scoreHK1 = scoreHK1;
        this.scoreHK2 = scoreHK2;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getGroup = function () {
        return this.group;
    };
    Student.prototype.getScoreHK1 = function () {
        return this.scoreHK1;
    };
    Student.prototype.getScoreHK2 = function () {
        return this.scoreHK2;
    };
    Student.prototype.getAvgScore = function () {
        return (this.getScoreHK1() + this.getScoreHK2()) / 2;
    };
    return Student;
}());
exports.Student = Student;
