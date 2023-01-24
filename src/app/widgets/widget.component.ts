import { Directive, Input } from '@angular/core';

@Directive()
export class WidgetComponent {
  @Input() text: string = '';
  @Input() btnText: string = '';
  isLoading = false;

  constructor() {}

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
