import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  role: 'admin' | 'principal' | 'teacher' | 'student' = 'student';
  email: string = '';
  password: string = '';
  extraField: string = '';

  onLogin() {
    console.log(`Logging in as ${this.role}`);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Extra:', this.extraField);
    alert(`Logged in as ${this.role.toUpperCase()} ✅`);
  }
}
