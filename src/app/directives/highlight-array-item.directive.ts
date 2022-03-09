import {Directive, Inject, Input, Optional} from '@angular/core';
import {HIGHLIGHT_ITEM_DATA, HighlightContext, HIGHLIGHTDATA} from '../glob/highlight-glob';
import {HighlightDirective} from './highlight.directive';

@Directive({
  selector: '[appHighlightArrayItem]',
  providers: [
    {provide: HIGHLIGHT_ITEM_DATA, useClass: HighlightContext}
  ]
})
export class HighlightArrayItemDirective extends HighlightDirective {
  @Input('appHighlightArrayItem')
  set inputKey(key: string | number) {
    this.key = key.toString();
  }

  constructor(@Optional() @Inject(HIGHLIGHTDATA) protected highlightContextData: HighlightContext,
              @Optional() @Inject(HIGHLIGHT_ITEM_DATA) protected highlightItemContextData: HighlightContext) {
    super(highlightContextData);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
