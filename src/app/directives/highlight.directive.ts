import {Directive, Inject, OnChanges, Optional, SimpleChanges} from '@angular/core';
import {HighlightContext, HIGHLIGHTDATA} from "../glob/highlight-glob";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  constructor(@Optional() @Inject(HIGHLIGHTDATA) private highlightContextData: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
