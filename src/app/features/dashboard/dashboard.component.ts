import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { signal, effect, computed } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { UserService } from '../../core/user.service';
import { User } from '../../interfaces/user';
import { UiService } from '../../core/ui.service';
import { Subscription, Subject, takeUntil } from 'rxjs';

interface addUserProps {
  email: string;
  phone: string;
  cname: string;
}
@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    FormsModule,
    AddDashboardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent {
  users = signal<User[]>([]);
  showAddTask!: typeof this.uiService.toggleAdd;

  user!: User;

  constructor(private userService: UserService, private uiService: UiService) {
    this.userService.getUsers().subscribe((val) => this.users.set(val));
    this.showAddTask = this.uiService.toggleAdd;
  }

  toggleAdd() {
    this.uiService.toToggle();
  }

  addUser({ email, phone, cname }: addUserProps) {
    let newVal: User = {
      id: this.users().length + 1,
      email,
      phone,
      company: { name: cname },
    };
    this.users.update((prevVals) => [...prevVals, newVal]);
  }
}
