import {Directive, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import {HighlightContext, HighlightContextData, HIGHLIGHTDATA} from "../glob/highlight-glob";

@Directive({
  selector: '[appHighlightContext]',
  providers: [
    {provide: HIGHLIGHTDATA, useClass: HighlightContext}
  ]
})
export class HighlightContextDirective implements OnChanges {

  @Input()
  set appHighlightContext(context: HighlightContextData) {
    this.highlightContextData.data = context;
  };
  @Input()
  set originalData(data: any[]) {
    this.highlightContextData.originalData = data;
  }

  constructor(@Inject(HIGHLIGHTDATA) private highlightContextData: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.highlightContextData) {
      if ((changes.originalData && changes.originalData.currentValue && this.highlightContextData.data) ||
        (changes.appHighlightContext && changes.appHighlightContext.currentValue && this.highlightContextData.originalData)) {
        const items: any[] = changes.originalData ? changes.originalData.currentValue : this.highlightContextData.originalData;
        const contextData: HighlightContextData = changes.appHighlightContext ?
          changes.appHighlightContext.currentValue :
          this.highlightContextData.data;

        if (contextData.changeFlags && contextData.changeFlags.remove) {
          items.push(...Object.values(contextData.changeFlags.remove));
        }
      }
    }
  }

}
