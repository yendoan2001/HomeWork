"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
    }
    StudentManager.add = function (student) {
        this.students.push(student);
    };
    StudentManager.showList = function () {
        return this.students;
    };
    StudentManager.getTotalStudent = function () {
        return this.students.length;
    };
    StudentManager.showRank = function () {
        for (var i = 0; i < this.students.length; i++) {
            var key = this.students[i];
            var j = i - 1;
            while (j >= 0 && this.students[j].getAvgScore() > key.getAvgScore()) {
                this.students[j + 1] = this.students[j];
                j--;
            }
            this.students[j + 1] = key;
        }
        return this.showList();
    };
    StudentManager.searchByName = function (name) {
        return this.students.filter(function (item) {
            return item.getName() == name;
        });
    };
    StudentManager.searchByGroup = function (group) {
        return this.students.filter(function (item) {
            return item.getGroup() == group;
        });
    };
    StudentManager.students = [];
    return StudentManager;
}());
exports.StudentManager = StudentManager;
