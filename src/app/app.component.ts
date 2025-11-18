import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AdminDashboardComponent } from './dashboards/admin-dashboard/admin-dashboard.component';
import { ParentsDashboardComponent } from './dashboards/parents-dashboard/parents-dashboard.component';
import { TeacherDashboardComponent } from './dashboards/teacher-dashboard/teacher-dashboard.component';
import { StudentsDashboardComponent } from './dashboards/students-dashboard/students-dashboard.component';
import { NotificationBellComponent } from './dashboards/notification-bell/notification-bell.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, LoginComponent,RegisterComponent,AdminDashboardComponent,ParentsDashboardComponent,TeacherDashboardComponent,StudentsDashboardComponent,NotificationBellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DigitalClassRoomManagement';
}
