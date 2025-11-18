import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotificationBellComponent } from "../notification-bell/notification-bell.component";

@Component({
  selector: 'app-students-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, NotificationBellComponent],
  templateUrl: './students-dashboard.component.html',
  styleUrls: ['./students-dashboard.component.css']
})
export class StudentsDashboardComponent {
  studentName = signal('Omkar Udande');
  attendance = signal(92);
  temperature = signal('27°C');
  weather = signal('Sunny');
  currentTime = signal('1:50 PM');
  currentDate = signal('11/16/2025');

  upcomingClasses = signal([
    { subject: 'Mathematics', time: '10:00 AM', room: '101', teacher: 'Prof. Sharma' },
    { subject: 'Physics', time: '12:00 PM', room: '202', teacher: 'Prof. Rao' }
  ]);

  announcements = signal([
    { id: 1, title: 'Exam Schedule', summary: 'Mid-term exams start next week', date: '15 Nov 2025' },
    { id: 2, title: 'Holiday Notice', summary: 'School closed on 20 Nov', date: '14 Nov 2025' }
  ]);

  subjects = signal([
    { code: 'MATH101', name: 'Mathematics', teacher: 'Prof. Sharma', pendingAssignments: 2 },
    { code: 'PHY101', name: 'Physics', teacher: 'Prof. Rao', pendingAssignments: 0 }
  ]);

  pendingAssignmentsCount = computed(() =>
    this.subjects().filter(s => s.pendingAssignments > 0).length
  );
  upcomingClassesCount = computed(() => this.upcomingClasses().length);
  announcementsCount = computed(() => this.announcements().length);
today: string | number | Date | undefined;
sidebarCollapsed: any;
menuOpen: any;
}
