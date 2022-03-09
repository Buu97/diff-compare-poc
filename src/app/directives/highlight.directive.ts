import {Directive, HostBinding, Inject, Input, OnChanges, OnDestroy, OnInit, Optional, SimpleChanges} from '@angular/core';
import {ChangeFlags, HIGHLIGHT_ITEM_DATA, HighlightContext, HIGHLIGHTDATA} from '../glob/highlight-glob';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges, OnInit, OnDestroy {

  @Input('appHighlight')
  set inputKey(key: string | number) {
    this.key = key.toString();
  }
  @Input()
  type: 'string' | 'number'| 'percent' = 'string';

  @HostBinding('class.highlight-modified')
  hasReplaced = false;

  @HostBinding('class.highlight-added')
  hasAdded = false;

  @HostBinding('class.highlight-removed')
  hasRemoved = false;

  protected changeFlags!: ChangeFlags;
  protected key = '';
  private unsubscribe$ = new Subject();

  constructor(@Optional() @Inject(HIGHLIGHTDATA) protected highlightContextData: HighlightContext,
              @Optional() @Inject(HIGHLIGHT_ITEM_DATA) protected highlightItemContextData?: HighlightContext) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.key && this.highlightContextData && this.changeFlags) {
      this.checkChanges(this.changeFlags);
    }
  }

  ngOnInit(): void {
    if (this.highlightContextData) {
      this.highlightContextData.changes
        .pipe(takeUntil(this.unsubscribe$))
        .pipe(filter(value => !!value))
        .subscribe(value => {
          this.changeFlags = value.changeFlags;
          this.checkChanges(this.changeFlags);
        });
    }
  }

  protected checkChanges(flags: ChangeFlags) {
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

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
