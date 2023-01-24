import { Component, Input } from '@angular/core';
import { WidgetComponent } from '../widget.component';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widgets.scss'],
})
export class AnalyticsWidgetComponent extends WidgetComponent {
  // @Input() text: string = '';
  // @Input() btnText: string = '';
  // isLoading = false;

  constructor() {
    super();
  }

  reload(): void {
    super.reload();
    console.log('hi manu');
  }
}
