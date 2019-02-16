import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

 /* //REGULARFunction vs ARROWFunction
 function PersonREGULARFunction(age) {
  this.age = age
  this.growOld = function () { this.age++; }
}
var person = new PersonREGULARFunction(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log("person.age:" + person.age + ". should have been 2!!") });
//
function PersonARROWFunction(age) {
  this.age = age;
  this.growOld = () => { this.age++; }
}
var personARROW = new PersonARROWFunction(1);
setTimeout(personARROW.growOld, 1000);
setTimeout(function () { console.log("personARROW.age:" + personARROW.age + ". should have been 2!!") }); */

/* function returnNumber(): number {
  return 1;
} */


export class AppComponent {
  //Page 49
  ageGlobal: number=0;

  PersonREGULARFunction(age: number){
   
    this.ageGlobal=age;
    let growOld= age++;
    //return this.ageGlobal;
    return growOld;
  }
  

  getAGE (){return this.ageGlobal}
  getAGEARROW= ()=>{return this.ageGlobal}
  
  //page 101
  getReversed(str: string){
      let reversed = '';
      for (let i=str.length-1;i>=0;i--){
        reversed += str.substring(i,i+1);
      }
      return reversed;
    }
  // Compile Errors, omit the quotes from “app works”: Page 82
  //  title = App works! Alex;
  title = 'App works! Alex';

  starUrl = 'https://developer.mozilla.org/samples/cssref/images/starsolid.gif';
}
