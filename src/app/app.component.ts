import { Component } from '@angular/core';
import { Ipassenger } from './shared/model/interface';
import { passengerArray } from './shared/const/passenger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';

  passengers : Array<Ipassenger> = passengerArray;

  deletePassenger(eve : Ipassenger){
    this.passengers = this.passengers.filter(ele => {
      return ele.id !== eve.id;
    })
    console.log(this.passengers);
    
  }
  
}
