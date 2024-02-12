import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Ipassenger } from '../../model/interface';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit, DoCheck {
  @Input() passengerList !: Array<Ipassenger>
  count !: number;
  constructor() { }

  ngDoCheck(): void {
    this.count = this.passengerList.reduce((acc, cv) => {
      if(cv.checkedIn){
        acc++
      }
      return acc;
    },0)
  }

  ngOnInit(): void {
  }

}
