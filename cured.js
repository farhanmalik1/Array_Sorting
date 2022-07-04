var jsonData = require('./studentJson.json');
var studentJson = jsonData.Full;
class Student{
    constructor(id, firstName, lastName){
        let newObj = {
            ID:id, 
            FirstName: firstName, 
            LastName: lastName
        }
        studentJson.push(newObj);
    }
    addStudent(id, firstName, lastName){
        let newObj = {
            ID:id, 
            FirstName: firstName, 
            LastName: lastName
        }
        studentJson.push(newObj);
    }
    updateStudent(currentID, Id, firstName, lastName){
        var currentObj = studentJson.find(x=>x.ID == currentID);
 
        currentObj.ID = Id;
        currentObj.FirstName = firstName;
        currentObj.LastName = lastName;
    }
    printAllData(){
        for (const obj of studentJson) {
            console.log(obj);
        }
    }
}
let std = new Student("1", "ABC", "XYZ");
std.printAllData();
std.updateStudent(1, 100, "First Name", "Last Name");
std.printAllData();