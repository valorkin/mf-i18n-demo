import { Component, Inject, LOCALE_ID, NgModule } from '@angular/core';

@Component({
  selector: 'some-component',
  template: `<h2 i18n>some content</h2>`
})
export class SomeComponent {

  constructor(@Inject(LOCALE_ID) locale: string){
    console.log('remote app locale', locale);
  }
}

@NgModule({
  declarations: [SomeComponent],
  exports: [SomeComponent]
})
export class SomeModule {}
