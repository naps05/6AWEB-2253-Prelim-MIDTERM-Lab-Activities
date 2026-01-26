import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Httpclient } from './httpclient';
import { Description, UserDescription } from './description';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  users: User[] = [];
  descriptions: UserDescription[] = [];

  constructor(
    private httpService: Httpclient,
    private descService: Description
  ) {}

  ngOnInit(): void {
    // Fetch users
    this.httpService.getUsersRemotely().subscribe({
      next: (data: User[]) => {
        this.users = data.slice(0, 5); // limit to first 5 users
        this.fetchDescriptions(this.users.map(u => u.id));
      },
      error: (err: any) => console.error('USERS ERROR:', err)
    });
  }

  // Fetch descriptions only for users in Table 1
  fetchDescriptions(userIds: number[]): void {
    this.descService.getDescriptions().subscribe({
      next: (data: UserDescription[]) => {
        // Filter only the descriptions for users in Table 1
        this.descriptions = data
          .filter(desc => userIds.includes(desc.userId))
          .slice(0, 5); // optional: limit
      },
      error: (err: any) => console.error('DESCRIPTIONS ERROR:', err)
    });
  }
}
