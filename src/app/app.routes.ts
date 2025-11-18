import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Public pages
  {
    path: 'home',
    loadComponent: () =>
      import('./Components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./Components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./Components/register/register.component').then(m => m.RegisterComponent)
  },

  // Dashboards (role-based)
  {
    path: 'admin',
    loadComponent: () =>
      import('./dashboards/admin-dashboard/admin-dashboard.component')
        .then(m => m.AdminDashboardComponent)
  },
  {
    path: 'student',
    loadComponent: () =>
      import('./dashboards/students-dashboard/students-dashboard.component')
        .then(m => m.StudentsDashboardComponent)
  },
  {
    path: 'teacher',
    loadComponent: () =>
      import('./dashboards/teacher-dashboard/teacher-dashboard.component')
        .then(m => m.TeacherDashboardComponent)
  },
  {
    path: 'parent',
    loadComponent: () =>
      import('./dashboards/parents-dashboard/parents-dashboard.component')
        .then(m => m.ParentsDashboardComponent)
  },

  // Wildcard fallback
  { path: '**', redirectTo: 'home' }
];
