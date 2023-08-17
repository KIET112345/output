import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from './author.model';
@Component({
  selector: 'Author-detail',
  template: `
  <div>
  {{author.firstName}} {{author.lastName}}
  <button style="margin-left: 2em" (click)="select.emit(author)">Select</button>
  </div>
  `,
})
export default class AuthorDetailComponent {
  @Input()
  author: Author;
  @Output()
  select = new EventEmitter<Author>();
}
