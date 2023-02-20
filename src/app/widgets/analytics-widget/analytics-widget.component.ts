import { Component, Input } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Widget } from '../widget.model';
import { WIDGET } from '../widget.token';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widgets.scss'],
  providers: [{ provide: WIDGET, useExisting: AnalyticsWidgetComponent }],
})
export class AnalyticsWidgetComponent
  extends WidgetComponent
  implements Widget
{
  @Input() text: string;
  @Input() btnText: string;
  constructor() {
    super();
  }

  logData(): void {
    const taggingData = { tagId: 1234, clientName: 'Amazon' };
    console.table(taggingData);
  }

  reload(): void {
    super.reload();
    this.logData();
  }
}
