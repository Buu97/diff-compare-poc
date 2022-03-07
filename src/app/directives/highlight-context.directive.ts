import {Directive, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HighlightContext, HIGHLIGHTDATA} from "../glob/highlight-glob";

@Directive({
  selector: '[appHighlightContext]',
  providers: [
    {provide: HIGHLIGHTDATA, useClass: HighlightContext}
  ]
})
export class HighlightContextDirective implements OnChanges {

  @Input('appHighlightContext')
  context: any;

  constructor(@Inject(HIGHLIGHTDATA) private highlightContextData: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
