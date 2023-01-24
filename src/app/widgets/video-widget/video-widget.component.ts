import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget.component';

@Component({
  selector: 'video-widget',
  templateUrl: './video-widget.component.html',
  styleUrls: ['../widgets.scss'],
})
export class VideoWidgetComponent extends WidgetComponent {
  // @Input() text: string = '';
  // @Input() btnText: string = '';
  // isLoading = false;

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;
  isPlay: boolean = false;
  constructor() {
    super();
  }

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }

  // reload(): void {
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 2000);
  // }
}
