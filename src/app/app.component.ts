import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './single-responsability/app.component.html',
  styleUrls: ['./single-responsability/app.component.scss'],
  animations: [
    trigger('slideDownUp', [
      transition(':enter', [style({ height: 0 }), animate(500)]),
      transition(':leave', [animate(500, style({ height: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  isOpen: boolean = true;
  isLoading = false;
  img: string = 'https://miro.medium.com/max/1400/0*VD2FvtlNHDmV_iLb.png';
  title: string = 'Ng Analytics';
  text: string = 'Site metrics of the year';
  href: string = 'https://angular.io/guide/elements';
  btnText: string = 'Reload Data';

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
