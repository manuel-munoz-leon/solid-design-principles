import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoWidgetComponent } from './widgets/video-widget/video-widget.component';
import { AnalyticsWidgetComponent } from './widgets/analytics-widget/analytics-widget.component';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCardComponent } from './open-close/ng-card/ng-card.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatProgressBarModule,
  ],
  declarations: [
    AppComponent,
    NgCardComponent,
    VideoWidgetComponent,
    AnalyticsWidgetComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
