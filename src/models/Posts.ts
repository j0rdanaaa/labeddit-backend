export interface PostDB {
    id: string;
    creator_id: string;
    content: string;
    likes: number;
    dislikes: number;
    created_at: string;
    updated_at: string;
    comments: number;
    creator_name?: string;
    rating?: boolean | null;
  }
  export interface PostDBWithCreatorName {
    id: string;
    creator_id: string;
    content: string;
    likes: number;
    comments: number;
    dislikes: number;
    created_at: string;
    updated_at: string;
    creator_name: string;
    rating: boolean | null;
  }
  export interface PostModel {
    id: string;
    content: string;
    likes: number;
    dislikes: number;
    createdAt: string;
    updatedAt: string;
    comments: number;
    rating?: boolean | null;
    commentList?: any[];
    creator: {
      id: string;
      name: string;
    };
  }
  export interface LikeDislikeDB {
    user_id: string;
    post_id: string;
    like: number;
  }
  
  export enum POST_LIKE {
    ALREADY_LIKED = "ALREADY LIKED",
    ALREADY_DISLIKED = "ALREADY DISLIKED",
  }
  export class Post {
    constructor(
      private id: string,
      private content: string,
      private likes: number,
      private dislikes: number,
      private comments: number,
      private createdAt: string,
      private updatedAt: string,
      private creatorId: string,
      private creatorName?: string,
      private rating?: boolean | null,
      private commentList?: any[]
    ) {}
  
    public getId(): string {
      return this.id;
    }
  
    public setId(value: string): void {
      this.id = value;
    }
  
    public getContent(): string {
      return this.content;
    }
  
    public setContent(value: string): void {
      this.content = value;
    }
  
    public getLikes(): number {
      return this.likes;
    }
  
    public setLikes(value: number): void {
      this.likes = value;
    }
  
    public addLike = (): void => {
      this.likes++;
    };
  
    public removeLike = (): void => {
      this.likes--;
    };
  
    public getDislikes(): number {
      return this.dislikes;
    }
  
    public setDislikes(value: number): void {
      this.dislikes = value;
    }
  
    public addDislike = (): void => {
      this.dislikes++;
    };
  
    public removeDislike = (): void => {
      this.dislikes--;
    };
  
    public getCreatedAt(): string {
      return this.createdAt;
    }
  
    public setCreatedAt(value: string): void {
      this.createdAt = value;
    }
  
    public getUpdatedAt(): string {
      return this.updatedAt;
    }
  
    public setUpdatedAt(value: string): void {
      this.updatedAt = value;
    }
  
    public getCreatorId(): string {
      return this.creatorId;
    }
  
    public setCreatorId(value: string): void {
      this.creatorId = value;
    }
  
    public getComments(): number {
      return this.comments;
    }
  
    public setComments(value: number): void {
      this.comments = value;
    }
  
    public getCreatorName(): string {
      return this.creatorName || "";
    }
  
    public setCreatorName(value: string): void {
      this.creatorName = value;
    }
  
    public getRating(): boolean | null {
      return this.rating || null;
    }
  
    public setRating(value: boolean | null): void {
      this.rating = value;
    }
  
    public toDBModel(): PostDB {
      return {
        id: this.id,
        creator_id: this.creatorId,
        content: this.content,
        likes: this.likes,
        dislikes: this.dislikes,
        created_at: this.createdAt,
        updated_at: this.updatedAt,
        comments: this.comments,
      };
    }
  
    public toBusinissModel(): PostModel {
      return {
        id: this.id,
        content: this.content,
        likes: this.likes,
        dislikes: this.dislikes,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        comments: this.comments,
        commentList: this.commentList,
        rating: this.rating,
        creator: {
          id: this.creatorId,
          name: this.creatorName || "",
        },
      };
    }
  }
  