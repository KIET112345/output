import { Component } from '@angular/core';
import authors from './author.model';
@Component({
  selector: 'Author-list',
  template: `<Author-detail *ngFor="let author of authors" [author]="author" (select)="onSelected($event)">
            </Author-detail>
            <div>
              current selected user: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
            </div>
  `,
})
export default class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(e) {
    this.currentAuthor = e;
  }
}
