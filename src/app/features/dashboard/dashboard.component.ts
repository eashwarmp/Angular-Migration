import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddDashboardComponent } from './add-dashboard/add-dashboard.component';
import { UserService } from '../../core/user.service';
import { User } from '../../interfaces/user';
import { UiService } from '../../core/ui.service';
import { Subscription, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule, AddDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  showAddTask: boolean = false;
  subscription!: Subscription;
  private destroy$ = new Subject<void>();

  user!: User;

  constructor(private userService: UserService, private uiService: UiService) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((user) => (this.users = user));
    this.uiService.toggleAdd$
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => (this.showAddTask = val));
  }

  onToggle() {
    this.uiService.toggleAdd();
  }

  addUser({ email, phone, cname }: any) {
    const newUser: User = {
      id: this.users.length + 1,
      email,
      phone,
      company: { name: cname },
    };
    this.users = [...this.users, newUser];
  }

  ngOnDestroy() {
    this.destroy$.next(); // Emits a value to complete all subscriptions
    this.destroy$.complete(); // Clean up the subject
  }
}
