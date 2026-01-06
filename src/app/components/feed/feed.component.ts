import { Component } from '@angular/core';
import { Post } from '../../models/post';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
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
    },
    {
      id: 3,
      title: 'Projet de menuiserie sur mesure',
      description: 'Fabrication d\'une bibliothèque en bois massif pour un salon moderne. Dimensions: 3m x 2.5m. Travail minutieux avec finition vernis mat.',
      imageUrl: 'assets/work1.jpg',
      createdAt: '2025-01-12 16:45',
      likes: [{ user: 'Mohammed' }, { user: 'Fatima' }, { user: 'Hassan' }],
      comments: [
        { user: 'Mohammed', content: 'Magnifique travail ! Combien de temps ça a pris ?' },
        { user: 'Fatima', content: 'Le design est élégant 😍' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 4,
      title: 'Rénovation salle de bain complète',
      description: 'Transformation totale : nouvelle plomberie, carrelage mural et sol, installation douche italienne. Client très satisfait du résultat final ! ✨',
      imageUrl: 'assets/work2.jpg',
      createdAt: '2025-01-13 10:20',
      likes: [{ user: 'Amina' }, { user: 'Karim' }],
      comments: [
        { user: 'Amina', content: 'Wow, c\'est moderne ! Vous travaillez sur Rabat ?' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 5,
      title: 'Installation système de climatisation',
      description: 'Pose de 3 unités de climatisation dans une villa. Installation professionnelle avec cache-tuyaux discret. Garantie 2 ans.',
      videoUrl: 'assets/video1.mp4',
      createdAt: '2025-01-13 14:00',
      likes: [{ user: 'Omar' }],
      comments: [],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 6,
      title: 'Peinture façade extérieure',
      description: 'Rafraîchissement complet de la façade d\'une maison. Préparation des murs, 2 couches de peinture acrylique résistante aux intempéries. Résultat impeccable ! 🎨',
      imageUrl: 'assets/work3.jpg',
      createdAt: '2025-01-14 11:30',
      likes: [{ user: 'Nadia' }, { user: 'Rachid' }, { user: 'Samira' }, { user: 'Mehdi' }],
      comments: [
        { user: 'Nadia', content: 'Quelle différence ! Bravo 👏' },
        { user: 'Rachid', content: 'Vous faites aussi l\'intérieur ?' },
        { user: 'Samira', content: 'Excellent travail, très professionnel' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 7,
      title: 'Réparation toiture - Fuite résolue',
      description: 'Intervention rapide pour une fuite importante. Remplacement des tuiles endommagées et étanchéité complète. Plus de problème de pluie ! ☔',
      imageUrl: 'assets/portfolio1.jpg',
      createdAt: '2025-01-14 15:45',
      likes: [{ user: 'Zakaria' }],
      comments: [
        { user: 'Zakaria', content: 'Merci pour votre réactivité, c\'était urgent !' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 8,
      title: 'Pose de carrelage - Cuisine moderne',
      description: 'Installation de carrelage effet marbre dans une cuisine. Travail de précision avec joints parfaits. Le client adore le résultat ! 💎',
      imageUrl: 'assets/work1.jpg',
      createdAt: '2025-01-15 09:15',
      likes: [{ user: 'Laila' }, { user: 'Adil' }],
      comments: [],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 9,
      title: 'Jardinage et aménagement paysager',
      description: 'Création d\'un jardin zen avec pelouse, arbustes décoratifs et système d\'arrosage automatique. Transformation complète de l\'espace extérieur ! 🌿',
      imageUrl: 'assets/work2.jpg',
      createdAt: '2025-01-15 13:50',
      likes: [{ user: 'Boutaina' }, { user: 'Anas' }, { user: 'Meryem' }],
      comments: [
        { user: 'Boutaina', content: 'C\'est magnifique ! Vous utilisez quelles plantes ?' },
        { user: 'Meryem', content: 'J\'aimerais le même dans mon jardin 😊' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 10,
      title: 'Installation portail automatique',
      description: 'Pose d\'un portail coulissant avec moteur électrique et télécommande. Sécurité et confort pour toute la famille. Garantie constructeur incluse. 🔒',
      videoUrl: 'assets/video1.mp4',
      createdAt: '2025-01-16 10:00',
      likes: [{ user: 'Ibrahim' }, { user: 'Salma' }],
      comments: [
        { user: 'Ibrahim', content: 'Parfait ! Combien ça coûte environ ?' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 11,
      title: 'Maçonnerie - Extension maison',
      description: 'Construction d\'une extension de 20m² pour agrandir le salon. Travaux de maçonnerie, isolation et finitions. Projet terminé en 3 semaines ! 🏗️',
      imageUrl: 'assets/work3.jpg',
      createdAt: '2025-01-16 16:20',
      likes: [{ user: 'Houda' }, { user: 'Youssef' }, { user: 'Zineb' }],
      comments: [
        { user: 'Houda', content: 'Impressionnant ! Vous travaillez avec des architectes ?' },
        { user: 'Youssef', content: 'Le résultat est top 🔝' }
      ],
      liked: false,
      showComments: false,
      newComment: ''
    },
    {
      id: 12,
      title: 'Dépannage chauffe-eau',
      description: 'Intervention d\'urgence pour un chauffe-eau en panne. Diagnostic rapide, remplacement de la résistance et détartrage complet. Service disponible 24/7 ! ⚡',
      imageUrl: 'assets/portfolio1.jpg',
      createdAt: '2025-01-17 08:30',
      likes: [{ user: 'Hamza' }],
      comments: [
        { user: 'Hamza', content: 'Service rapide et efficace, merci !' }
      ],
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
