export type Post = BasePost & (TextPost | ImagePost | VideoPost);

export type BasePost = {
  id: string;
  ownerId: string;
  type: PostType;
  createdAt: number;
  updatedAt: number;
  likes: {
    [userId: string]: Like;
  };
};

export type PostItem = {
  likesCount: number;
  likedByMe: boolean;
  myPost: boolean;
};

export type PostInput = TextPost | ImagePost | VideoPost;

export type TextPost = {
  type: PostType.TEXT_POST;
  text: string;
};

export type ImagePost = {
  type: PostType.IMAGE_POST;
  title: string;
  imageURL: string;
};

export type VideoPost = {
  type: PostType.VIDEO_POST;
  title: string;
  videoURL: string;
};

export type Like = {
  ownerId: string;
  createdAt: number;
};

export enum PostType {
  TEXT_POST,
  IMAGE_POST,
  VIDEO_POST,
}
