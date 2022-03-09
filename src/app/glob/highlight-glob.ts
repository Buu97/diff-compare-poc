import {InjectionToken} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export const HIGHLIGHTDATA = new InjectionToken<HighlightContext>('HIGHLIGHT_DATA');
export const HIGHLIGHT_ITEM_DATA = new InjectionToken<HighlightContext>('HIGHLIGHT_ITEM_DATA');
export interface HighlightContextData {
  [key: string]: any;
  changeFlags: ChangeFlags;
}
export interface ChangeFlags {
  add?: {[key: string]: any};
  replace?: {[key: string]: any};
  remove?: {[key: string]: any};
}
export class HighlightContext {
  // @ts-ignore
  private _data = new BehaviorSubject<HighlightContextData>(null);

  /**
   * originalData is only needed when the element to check on is an array
   * */
  private _originalData?: any[];

  get data() {
    return this._data.getValue();
  }
  set data(value: HighlightContextData) {
    this._data.next(value);
  }

  get changes() {
    return this._data.asObservable();
  }

  set originalData(data: any[]) {
    this._originalData = data;
  }
  get originalData() {
    return this._originalData!;
  }
}

