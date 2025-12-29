import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
images = [
  { url: 'assets/portfolio1.jpg' },
  { url: 'assets/portfolio2.jpg' },
  { url: 'assets/portfolio3.jpg' },
];
videos = [
  { url: 'assets/video1.mp4' },
  { url: 'assets/video2.mp4' },
];

}
