import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SplineAnimationComponent } from './components/spline-animation/spline-animation.component';
import { MatTabGroup, MatTab } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginComponent,
    MatTabGroup,
    SplineAnimationComponent,
    MatTab,
    RegisterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corretto il nome della proprietà
})
export class AppComponent{

}
