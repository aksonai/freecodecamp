/*
Intermediate Algorithm Scripting: Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that 
take an argument must accept only one argument and it has to be a string. 
These methods must be the only available means of interacting with the object.
*/



var Person = function (firstAndLast) {
    // Complete the method below and implement the others similarly
    this.getFullName = function () {
        return firstAndLast;
    };
    this.getFirstName = function () {
        return firstAndLast.split(" ")[0];;
    };
    this.getLastName = function () {
        return firstAndLast.split(" ")[1];
    }
    this.setFirstName = function (first) {
        firstAndLast = first + ' ' + this.getLastName();
    }
    this.setLastName = function (last) {
        firstAndLast = this.getFirstName() + ' ' + last;
    }
    this.setFullName = function (fullName) {
        firstAndLast = fullName;
    }
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob.getFirstName());
