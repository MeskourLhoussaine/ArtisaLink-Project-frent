import { Component } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent {
posts = [
    {
      user: 'Ahmed – Plombier',
      text: 'Installation complète chez un client 👍',
      image: 'assets/portfolio1.jpg',
      likes: 18,
      liked: false,
      comments: [
        { user: 'Sara', text: 'Excellent travail 👏' },
        { user: 'Yassine', text: 'Bravo 🔥' },
        { user: 'Khadija', text: 'Bonne continuation 💪' }
      ],
      showComments: false,
      newComment: ''
    }
  ];

  toggleLike(post: any) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
  }

  toggleComments(post: any) {
    post.showComments = !post.showComments;
  }

  addComment(post: any) {
    if (post.newComment.trim() !== '') {
      post.comments.push({
        user: 'Admin',
        text: post.newComment
      });
      post.newComment = '';
    }
  }

}
