import { Directive, Input } from '@angular/core';

@Directive()
export class Widget {
  @Input() text: string = '';
  @Input() btnText: string = '';
  isLoading = false;

  reload(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
