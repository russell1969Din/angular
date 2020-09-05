import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ___people } from 'src/main';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
 

})
export class FormComponent  {
  
  @ViewChild('inputWho', {static: false}) inputWho: ElementRef
  @ViewChild('inputMan', {static: false}) inputMan: ElementRef
  @ViewChild('inputWoman', {static: false}) inputWoman: ElementRef

  @ViewChild('inputSK', {static: false}) inputSK: ElementRef
  @ViewChild('inputCZ', {static: false}) inputCZ: ElementRef
  @ViewChild('inputEN', {static: false}) inputEN: ElementRef


  people = ___people

  newWho = '' 
  newWat = ''
  newCool = 0
  newEduc = ''
  newMan = false 
  newWoman = false
  newSK = false
  newCZ = false
  newEN = false
  
  educations = ['', 'Zakladne', 'Stredne odborne','Uplne stredne','Vysokoskolske']
  
  //form.ts ???
  //model = new Form(100, 'Fantomas', 'Lupeznik', 50, 'Ulne stredne');  
  //get diagnostic() { return JSON.stringify(this.model); }  

  submitted = false;  
  onSubmit() { this.submitted = true; }  

  isDisabled() {
    return  this.newWho.trim().split(" ").length<2 || 
            this.newWat.length == 0 || 
            this.newCool < 1 ||
            (!this.newMan  && !this.newWoman  ) || 
            (!this.newSK  && !this.newCZ  && !this.newEN  )  
            ? true : false;  
  }

  addDude() {
    if(this.newWho.split(" ").length>1 || 
      this.newWat.length > 0 || 
      this.newCool > 0 ||
      (this.newMan  || this.newWoman  ) || 
      (this.newSK  || this.newCZ  || this.newEN  )) {

        this.people.push  ({
          id: Math.max(...this.people.map(d => d.id)) + 1,
          who : this.newWho,
          wat : this.newWat,
          cool : this.newCool,
          educ : this.newEduc,
          man : this.newMan,
          lang : '',
          del: false
        })
        if(this.newSK) {this.people[this.people.length-1].lang += " SK"}
        if(this.newCZ) {this.people[this.people.length-1].lang += " CZ"}
        if(this.newEN) {this.people[this.people.length-1].lang += " EN"}
        this.removeDude()
      }
    }

    removeDude() {
        this.newWho = ''
        this.newWat = ''
        this.newCool = 0
        this.newEduc = ''
        this.newMan = false 
        this.newWoman = false
        this.newSK = false
        this.newCZ = false
        this.newEN = false      
        
        this.inputWho.nativeElement.focus()  
        this.inputMan.nativeElement.checked = false;  
        this.inputWoman.nativeElement.checked = false;  
        this.inputSK.nativeElement.checked = false;  
        this.inputCZ.nativeElement.checked = false;  
        this.inputEN.nativeElement.checked = false;  
      }

  isCheck() {
    this.newSK = this.inputSK.nativeElement.checked; 
    this.newCZ = this.inputCZ.nativeElement.checked; 
    this.newEN = this.inputEN.nativeElement.checked; 
}

x = []; index = 0;
test() {
  for(let o of this.people) {
      if(this.index>0) {this.x.push(o)}
      ++this.index;
  }
  this.people = this.x;
}




}

