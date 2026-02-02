import { Component } from '@angular/core';
import { DataService } from '../../services/data';
import { Observable } from 'rxjs';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate-pipe'; // adjust path to your pipe

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  standalone: true,  // <-- Add this
  imports: [CommonModule, TruncatePipe]  // <-- Add this
})
export class Services {
  posts$: Observable<Post[]>;

  constructor(private dataService: DataService) {
    this.posts$ = this.dataService.posts$;
  }
}