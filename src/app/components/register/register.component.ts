import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Importa il servizio

@Component({
  selector: 'app-register',
  standalone: true, // Indica che il componente è standalone
  imports: [FormsModule, MatIconModule, MatButtonModule, MatTabsModule, MatInputModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorMessage: string | null = null; // Per gestire i messaggi di errore

  constructor(private authService: AuthService) {} // Inietta il servizio

  // Metodo per inviare i dati di registrazione
  onSubmit(formData: NgForm) {
    const { password, repassword, email } = formData.value;

    // Verifica che le password corrispondano
    if (password !== repassword) {
      this.errorMessage = 'Passwords do not match!';
      console.error(this.errorMessage);
      alert(this.errorMessage);
      return; // Interrompi l'invio
    }

    this.errorMessage = null; // Resetta l'errore se le password corrispondono
    console.log('Form Data:', formData.value);

    // Invia i dati al backend tramite il servizio AuthService
    this.authService.register(formData.value).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        // Puoi aggiungere la logica per navigare a una pagina di login o altro
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.errorMessage = 'Registration failed. Please try again later.';
        alert(this.errorMessage);
      },
    });
  }
}
