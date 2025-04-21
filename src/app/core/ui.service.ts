import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  _toggleAdd = signal<boolean>(false);

  toggleAdd = this._toggleAdd.asReadonly();

  toToggle() {
    console.log('Coming in toToggle');
    this._toggleAdd.set(!this._toggleAdd());
  }
}
