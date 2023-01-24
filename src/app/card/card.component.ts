import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(500)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ],
})
export class CardComponent {
  isLoading = false;
  @Input() isOpen: boolean = true;
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() btnText: string = '';

  constructor() {}

  showHideDescription(): void {
    this.isOpen = !this.isOpen;
  }

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}