import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { VideoWidgetComponent } from './widgets/video-widget/video-widget.component';
import { AnalyticsWidgetComponent } from './widgets/analytics-widget/analytics-widget.component';
import { CommonModule } from '@angular/common';
import { NgCardComponent } from './open-close/ng-card/ng-card.component';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    MatProgressBarModule,
    MatSlideToggleModule,
  ],
  declarations: [
    AppComponent,
    NgCardComponent,
    VideoWidgetComponent,
    AnalyticsWidgetComponent,
    CardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
