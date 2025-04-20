import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private toggleAddSubject = new Subject<boolean>();
  toggleAdd$ = this.toggleAddSubject.asObservable();

  toggleAddBtn: boolean = false;

  constructor() {}

  toggleAdd() {
    this.toggleAddBtn = !this.toggleAddBtn;
    this.toggleAddSubject.next(this.toggleAddBtn);
  }
}
