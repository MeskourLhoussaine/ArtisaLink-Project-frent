import { CommentModel } from "./comment";
import { LikeModel } from "./like";

export interface Post {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: string;
  likes: LikeModel[];
  comments: CommentModel[];

  liked?: boolean;
  showComments?: boolean;
  newComment?: string;
}
