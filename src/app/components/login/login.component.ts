import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button'; // Se usi bottoni Material
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatTabsModule, MatButtonModule, MatIconModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})



export class LoginComponent {
  constructor(private authService: AuthService) {} // Inietta il servizio

  // Metodo per inviare i dati tramite il servizio
  onSubmit(formData: NgForm) {
    let { email, password } = formData.form.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
      },
      error: () => {
        alert('Login Failed');
      },
    });
  }
}
