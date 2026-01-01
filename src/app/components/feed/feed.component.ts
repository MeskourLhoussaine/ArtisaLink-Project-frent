import { Component } from '@angular/core';
import { Post } from '../../models/post';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']   // يمكن تحيدها إذا ما عندكش CSS
})
export class FeedComponent {

  posts: Post[] = [
    {
      id: 1,
      title: 'Installation plomberie',
      description: 'Installation complète chez un client, travail propre et rapide.',
      imageUrl: 'assets/portfolio1.jpg',
      createdAt: '2025-01-10 14:30',
      likes: [{ user: 'Sara' }, { user: 'Yassine' }],
      comments: [
        { user: 'Sara', content: 'Très bon travail 👏' },
        { user: 'Yassine', content: 'Bravo 🔥' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 2,
      title: 'Réparation électrique',
      description: 'Dépannage électrique urgent réussi.',
      videoUrl: 'assets/video1.mp4',
      createdAt: '2025-01-11 09:10',
      likes: [{ user: 'Khadija' }],
      comments: [],
      liked: false,
      showComments: false,
      newComment: ''
    }
  ];

  toggleLike(post: Post) {
    post.liked = !post.liked;

    if (post.liked) {
      post.likes.push({ user: 'Admin' });
    } else {
      post.likes.pop();
    }
  }

  toggleComments(post: Post) {
    post.showComments = !post.showComments;
  }

  addComment(post: Post) {
    if (post.newComment?.trim()) {
      post.comments.push({
        user: 'Admin',
        content: post.newComment
      });
      post.newComment = '';
    }
  }
}
