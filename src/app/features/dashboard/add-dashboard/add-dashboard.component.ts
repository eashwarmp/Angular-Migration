import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-dashboard',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-dashboard.component.html',
  styleUrl: './add-dashboard.component.scss',
})
export class AddDashboardComponent {
  @Output() submitEvent = new EventEmitter<{
    email: string;
    phone: string;
    cname: string;
  }>();

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      cname: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.submitEvent.emit(this.userForm.value);
    }
  }

  get email() {
    return this.userForm.controls['email'];
  }
  get phone() {
    return this.userForm.controls['phone'];
  }
  get cname() {
    return this.userForm.controls['cname'];
  }
}
