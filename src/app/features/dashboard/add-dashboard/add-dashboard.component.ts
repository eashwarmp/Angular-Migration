import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-dashboard.component.html',
  styleUrl: './add-dashboard.component.scss',
})
export class AddDashboardComponent {
  @Output() submitEvent = new EventEmitter<{
    email: string;
    phone: string;
    cname: string;
  }>();

  user = {
    email: '',
    phone: '',
    cname: '',
  };

  onSubmit() {
    let { email, phone, cname } = this.user;
    if (email && phone && cname) {
      this.submitEvent.emit(this.user);
    }
  }
}
