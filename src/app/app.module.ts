import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import locale from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxJsonViewerModule} from "ngx-json-viewer";

import { AppComponent } from './app.component';
import { HighlightContextDirective } from './directives/highlight-context.directive';
import { HighlightDirective } from './directives/highlight.directive';

registerLocaleData(locale)

@NgModule({
  declarations: [
    AppComponent,
    HighlightContextDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
