import { Component, OnInit } from '@angular/core';
import { ___people, JSONread} from 'src/main';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})

export class BottomComponent {
  
  people = {};
  constructor() {
    this.people = JSONread();

  }

  }  
