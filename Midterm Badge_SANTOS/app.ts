import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';  // <-- Add RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // <-- Add this for clarity
  imports: [RouterOutlet, RouterModule],  // <-- Add RouterModule here
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('community-help-desk');
}