import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-card',
  templateUrl: './ng-card.component.html',
  styleUrls: ['./ng-card.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(500)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ],
})
export class NgCardComponent {
  isOpen: boolean = false;
  @Input() type: string;
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() btnText: string = '';

  constructor() {}

  showHideDescription(): void {
    this.isOpen = !this.isOpen;
  }
}
