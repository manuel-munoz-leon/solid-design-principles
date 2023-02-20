import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ContentChild, Input } from '@angular/core';
import { AnalyticsWidgetComponent } from '../widgets/analytics-widget/analytics-widget.component';
import { Reloadable } from '../widgets/widget.model';
import { WIDGET } from '../widgets/widget.token';

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
export class CardComponent implements AfterViewInit {
  @ContentChild(WIDGET) widget?: Reloadable;
  @Input() isOpen: boolean = true;
  @Input() img: string = '';
  @Input() title: string = '';

  constructor() {}

  ngAfterViewInit(): void {
    console.log('Widget => ', this.widget);
  }

  showHideDescription(): void {
    this.isOpen = !this.isOpen;
  }
}
