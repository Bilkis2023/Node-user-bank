const person = {};
person.name = 'Mst Bilkis';
person.email = 'buleefa@gmail.com';
// console.log(person);

class Person {
 constructor(name, email){
  this.name = name;
  this.email = email;
 }

 changeName(name){
   this.name = name;
 }

sendEmail(msg){
  console.log('To', this.email)
  console.log('Sending Email');
console.log('MSG', msg);
}

print(){
  console.log(this);
}

}

const p1 = new Person('Mst Bilkis', 'buleefa@gmail.com');
const p2 = new Person('most valani', 'dsfjoet@gmail.com' );
const p3 = new Person('eoeton oeto', 'sleiotet@gmil.com')

// console.log(p1)
// console.log(p2)
// console.log(p3)

p1.sendEmail('hello');
p1.changeName('Hafiza hajj');
p2.changeName('Fujima Valani');

p1.print();
p2.print();
p3.print();