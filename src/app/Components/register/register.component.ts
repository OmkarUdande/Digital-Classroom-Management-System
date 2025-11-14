import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // Default role
  role: 'student' | 'teacher' | 'principal' | 'admin' = 'student';

  // Form fields
  fullName: string = '';
  email: string = '';
  password: string = '';
  extraField: string = '';

  // Submit handler
  onRegister() {
   
    alert(`Registered as ${this.role.toUpperCase()} ✅`);
  }
}
