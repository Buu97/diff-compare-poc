import {Directive, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HighlightContext, HighlightContextData, HIGHLIGHTDATA} from "../glob/highlight-glob";

@Directive({
  selector: '[appHighlightContext]',
  providers: [
    {provide: HIGHLIGHTDATA, useClass: HighlightContext}
  ]
})
export class HighlightContextDirective implements OnChanges {

  @Input('appHighlightContext')
  context!: HighlightContextData;

  constructor(@Inject(HIGHLIGHTDATA) private highlightContextData: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges) {
    this.highlightContextData.data = this.context;
  }

}
