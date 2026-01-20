import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GCS_Semana2_Baseline_Kleber_Tepud');
  
  username = '';
  password = '';
  rememberMe = false;
  errorMessage = signal(false);
  successMessage = signal(false);

  handleLogin(): void {
    // Ocultar mensajes previos
    this.errorMessage.set(false);
    this.successMessage.set(false);

    // Validación básica (demo)
    if (this.username === 'admin' && this.password === 'admin123') {
      this.successMessage.set(true);
      setTimeout(() => {
        alert('Login exitoso! (En producción, aquí se redirigiría al dashboard)');
      }, 1000);
    } else {
      this.errorMessage.set(true);
    }
  }

  clearMessages(): void {
    this.errorMessage.set(false);
    this.successMessage.set(false);
  }
}
