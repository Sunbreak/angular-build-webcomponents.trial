import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, Injector, ApplicationRef } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { UIButtonComponent } from './uibutton/uibutton.component';

@NgModule({
  declarations: [
    UIButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [UIButtonComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(UIButtonComponent, { injector });
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap(appRef: ApplicationRef) {}
}
