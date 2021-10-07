import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  text: string = null;
  @Output() search: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  apply(text): void {
    this.search.emit(text);
  }

  clear(): void {
    this.text = null;
    this.search.emit(null);
  }
}
