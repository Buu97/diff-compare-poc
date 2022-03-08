import {Directive, HostBinding, Inject, Input, OnChanges, Optional, SimpleChanges} from '@angular/core';
import {ChangeFlags, HighlightContext, HIGHLIGHTDATA} from "../glob/highlight-glob";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input('appHighlight')
  key = '';

  constructor(@Optional() @Inject(HIGHLIGHTDATA) private highlightContextData: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.key && this.highlightContextData && this.highlightContextData.data && this.highlightContextData.data.changeFlags) {
      this.checkChanges(this.highlightContextData.data.changeFlags);
    }
  }

  @HostBinding('class.highlight-modified')
  hasReplaced = false;

  @HostBinding('class.highlight-added')
  hasAdded = false;

  @HostBinding('class.highlight-removed')
  hasRemoved = false;

  checkChanges(flags: ChangeFlags) {
    const added = flags.add ? Object.keys(flags.add) : [];
    const replaced = flags.replace ? Object.keys(flags.replace) : [];
    const removed = flags.remove ? Object.keys(flags.remove) : [];

    switch (true) {
      case replaced.length > 0 && replaced.includes(this.key):
        this.hasReplaced = true;
        break;
      case removed.length > 0 && removed.includes(this.key):
        this.hasRemoved = true;
        break;
      case added.length > 0 && added.includes(this.key):
        this.hasAdded = true;
        break;
    }
  }

}
