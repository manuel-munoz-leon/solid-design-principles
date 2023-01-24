import { Component, ElementRef, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';
import { Toggler, Widget } from '../widget.model';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widgets.scss'],
})
export class VideoWidgetComponent
  extends WidgetComponent
  implements Widget, Toggler
{
  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  id: number;
  isPlay: boolean = false;
  videoAction = 'Play >';
  constructor() {
    super();
  }

  logData(): void {
    console.log('Video tagging...');
  }

  toggleVideo(): void {
    if (!this.isPlay) {
      this.videoplayer.nativeElement.play();
      this.videoAction = 'Pause ||';
    } else {
      this.videoplayer.nativeElement.pause();
      this.videoAction = 'Play >';
    }
    this.isPlay = !this.isPlay;
    this.logData();
  }
}
