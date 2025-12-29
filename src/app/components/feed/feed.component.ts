import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
posts = [
  { user: 'Ahmed – Plombier', location: 'Casablanca', text: "J'ai installé un nouveau système...", image: 'assets/portfolio1.jpg', likes: 12, comments: 3 },
  { user: 'Sara – Electricien', location: 'Rabat', text: "Réparation d'installation électrique réussie !", video: 'assets/video1.mp4', likes: 8, comments: 2 }
];

}
