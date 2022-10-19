import {Student} from "./Student";
export class StudentManager {
    static students: Student[] = [];

    constructor() {
    }

    static add(student: Student): void {
        this.students.push(student);
    }

    static showList(): Student[] {
        return this.students;
    }
    static getTotalStudent():number{
        return this.students.length;
    }
    static showRank(){
        for(let i=0;i<this.students.length;i++){
            let key = this.students[i];
            let j=i-1;
            while(j>=0 && this.students[j].getAvgScore()>key.getAvgScore()){
                this.students[j+1]=this.students[j];
                j--;
            }
            this.students[j+1]=key;
        }
        return this.showList()
    }
    static searchByName(name: string):Student[]{
        return this.students.filter(element=>{
            return element.getName()==name;
        })
    }
    static searchByGroup(group:string):Student[] {
        return this.students.filter(element => {
            return element.getGroup() == group;
        })
    }
}