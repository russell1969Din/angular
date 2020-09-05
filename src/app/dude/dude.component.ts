import { Component, ViewChild,OnInit,ElementRef, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ___people, JSONread } from 'src/main';

@Component({
  selector: 'app-dude',
  templateUrl: './dude.component.html',
  styleUrls: ['./dude.component.scss', './dude.component.palette.scss'],
  animations: [
    trigger('dudeAnim', [
      transition(':enter',[
        style({
          opacity: 0,
          transform: 'scale:0.75'
        }),
        animate('0.9s ease')
      ]),
      transition(':leave',[
          animate(
            '0.9s ease',
            style({
              opacity:0,
              transform: 'scale:0.75'
            })
          )
      ])    
    ])      
  ]  
})
export class DudeComponent  {

    //Vytvorenie prístupu k u elementu v rámci DOM

    newWho: string = '';
    newWat: string = '';

    people = ___people;
    constructor() {this.people == JSONread();}

/*
  remove(dude: object) {
    
      this.people = this.people.filter(
        item => item !== dude
        )
    }
*/
    remove(dudeId: number) {
      this.people.map(u => u.del = u.id === dudeId ? u.del = true : u.del = u.del);
      }

  

    randomColor() {
      var hexRand = Math.floor(0x1000000 * Math.random()).toString(16);
      return '#' + ('000000' + hexRand).slice(-6)    
    }
 


}
