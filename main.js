class Worker{
   constructor(firstName,secondName,rate, days){
      this.firstName = firstName;
      this.secondName = secondName;
      this.rate = rate;
      this.days = days;
   }
   getSalary(){
      return this.rate * this.days
   }
}


const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.firstName); // виведе 'Ivan'
console.log(worker.secondName); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31