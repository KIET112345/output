import { Component } from '@angular/core';
import authors from './author.model';
@Component({
  selector: 'Author-list',
  template: `<Author-detail *ngFor="let author of authors" [author]="author" (select)="onSelected($event)">
            </Author-detail>
            <div>
              current selected user: {{currentAuthor?.firstName}} {{currentAuthor?.lastName}}
            </div>
            <div class="box" [class.box-red]="isDanger" [class.yellow-background]="isWarning"></div>
            <button (click)="isDanger = !isDanger">Toggler Danger</button>
            <br/>
            <button (click)="isWarning = !isWarning">Toggler Warning</button>
  `,
  styleUrls: ['./author.css'],
})
export default class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];
  onSelected(e) {
    this.currentAuthor = e;
  }
  isDanger = false;
  isWarning = false;
}
