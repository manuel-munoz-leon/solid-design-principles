import { Component } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Widget } from '../widget.model';
@Component({
  selector: 'analytics-widget',
  templateUrl: './analytics-widget.component.html',
  styleUrls: ['../widgets.scss'],
})
export class AnalyticsWidgetComponent
  extends WidgetComponent
  implements Widget
{
  id: number = 1242;
  constructor() {
    super();
  }

  logData(): void {
    const taggingData = { tagId: this.id, clientName: 'Amazon' };
    console.table(taggingData);
  }

  reload(): void {
    super.reload();
    this.logData();
  }
}
