import { Component, EventEmitter, Output } from '@angular/core';

/** search input component */

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  text: string = null;
  @Output() search: EventEmitter<string> = new EventEmitter();

  apply(text: string): void {
    this.search.emit(text);
  }

  clear(): void {
    this.text = null;
    this.search.emit(null);
  }
}
