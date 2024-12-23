import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrlLogin = 'http://localhost:3030/auth/login';
  private aipUrlRegister = 'http://localhost:3030/auth/register';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    // Corpo della richiesta
    const body = {
      email: email,
      password: password,
    };

    // Header della richiesta
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': environment.apiKey,
    });

    // Effettua la richiesta POST
    return this.http.post(this.apiUrlLogin, body, { headers });
  }

  register(userData: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    repassword: string;
  }): Observable<any> {
    // Aggiungi l'API key nell'intestazione se richiesta dal backend
    const headers = new HttpHeaders({
      'x-api-key': "I'M_A_FRONTEND_DEVELOPER_AND_I_WANT_TO_JOIN_THE_TEAM",
    });

    // Esegui la richiesta POST
    return this.http.post(this.aipUrlRegister, userData, { headers });
  }
}
