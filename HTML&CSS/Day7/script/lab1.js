//Employee Class
function employee(id, firstname, lastname, birthday, department){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthday = birthday;
    this.department = department;

    this.getAge = function(){
        

    };

    this.fullName = function(){
        return this.firstname + this.lastname;
    };

}

//Array of employees
var employees = [];
var id = 0;

//Add employee to array
function add(){

    //get Data from input fields
    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var birthday = document.getElementById("birthday");
    var department = document.getElementById("department");

    var emp = new employee(++id,fname,lname,birthday,department);
    //Add data to employee object
    employees.push(emp);
    
    //push data to array
}
function remove(){
    

}
function edit(){

}

function display(employee){
    var id = employee.id;
    var fullname = employee.fullName();
    var age = employee.getAge();
     department = employee.department;
    
}