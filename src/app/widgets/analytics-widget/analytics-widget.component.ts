import { Component } from '@angular/core';
import { WidgetComponent } from '../widget.component';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widgets.scss'],
})
export class AnalyticsWidgetComponent extends WidgetComponent {
  constructor() {
    super();
  }

  reload(): void {
    super.reload();
    console.log('hi manu');
  }
}
