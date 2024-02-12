import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ipassenger } from '../../model/interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {
  @Input() passengerCard !: Ipassenger;
  @ViewChild('control') input !: ElementRef;
  @Output() emitter: EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>();

  isDisable: boolean = false;

  constructor() { }

  onEdit() {
    this.isDisable = true;
  }

  onUpdate() {
    this.isDisable = false;
    this.passengerCard.fullname = this.input.nativeElement.value;
  }

  onDelete() {
    this.emitter.emit(this.passengerCard)
  }

  ngOnInit(): void {
  }

}
