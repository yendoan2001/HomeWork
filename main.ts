import {Student} from "./Student";
import {StudentManager} from "./StudentManager";
let student = new Student('Yến','C08',10,9);
let student1 = new Student('Yến','C08',9,10);
let student2 = new Student('Lâm','C05',8,9);
let student3 = new Student('Thế Anh','C08',6,8);
let student4 = new Student('Khánh','C07',2,7);

StudentManager.add(student1);
StudentManager.add(student);
StudentManager.add(student2);
StudentManager.add(student3);
StudentManager.add(student4);


console.log(StudentManager.showList());
console.log(StudentManager.getTotalStudent());
console.log(StudentManager.showRank());
console.log(StudentManager.searchByName('Yến'));
console.log(StudentManager.searchByGroup('C08'));
