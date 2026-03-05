import { Component } from '@angular/core';
import { HomeComponent } from './page/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
