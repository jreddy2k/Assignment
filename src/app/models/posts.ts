export interface Post {
    userId: string;
    id?: string;
    title: string;
    body: string;
    comments: any;
  }
  
  export interface PostComments {
    userId: string;
    postId?: string;
    id?: string;
    name: string;
    email: string;
    body: string;
  }
  
