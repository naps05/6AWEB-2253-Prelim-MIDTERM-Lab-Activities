import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],   // 👈 THIS LINE FIXES IT
  templateUrl: './home.html'
})
export class Home {
  posts$: Observable<any[]>;

  constructor(private dataService: DataService) {
    this.posts$ = this.dataService.posts$;
  }
}
