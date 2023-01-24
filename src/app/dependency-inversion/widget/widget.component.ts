import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(500)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ],
})
export class WidgetComponent {
  isOpen: boolean = false;
  @Input() img: string = '';
  @Input() title: string = '';

  constructor() {}

  showHideDescription(): void {
    this.isOpen = !this.isOpen;
  }
}
