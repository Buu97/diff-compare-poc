import {InjectionToken} from "@angular/core";

export const HIGHLIGHTDATA = new InjectionToken<HighlightContext>('HIGHLIGHT_DATA');
export interface HighlightContextData {
  [key: string]: any;
  changeFlags: ChangeFlags
}
export interface ChangeFlags {
  add?: {[key: string]: any},
  replace?: {[key: string]: any},
  remove?: {[key: string]: any}

}
export class HighlightContext {
  data?: HighlightContextData;
}
