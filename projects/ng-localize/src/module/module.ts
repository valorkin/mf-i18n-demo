import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'some-component',
  template: `<h2 i18n>some content</h2>`
})
export class SomeComponent {

}

@NgModule({
  declarations: [SomeComponent],
  exports: [SomeComponent]
})
export class SomeModule {}
