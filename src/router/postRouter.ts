import express from "express";
import { PostController } from "../controller/PostController";
import { CommentController } from "../controller/CommentController";
import { CommentBusiness } from "../business/CommentBusiness";
import { PostBusiness } from "../business/PostBusiness";
import { CommentDatabase } from "../database/CommentDatabase";
import { PostDatabase } from "../database/PostDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManager";

export const postRouter = express.Router();

const postController = new PostController(
  new PostBusiness(new PostDatabase(), new IdGenerator(), new TokenManager())
);

const commentController = new CommentController(
  new CommentBusiness(
    new CommentDatabase(),
    new IdGenerator(),
    new TokenManager(),
    new PostDatabase()
  )
);

postRouter.get("/", postController.getPosts);
postRouter.post("/", postController.createPost);
postRouter.put("/:id", postController.updatePost);
postRouter.delete("/:id", postController.deletePost);
postRouter.put("/:id/like", postController.likeOrDislikePost);
postRouter.get("/:id", postController.getPostById);

// comment routes
postRouter.post("/:id/comment", commentController.createComment);
postRouter.get("/:id/comment", commentController.getComments);
postRouter.put(
  "/:id/comment/:comment_id/like",
  commentController.likeOrDislikeComment
);
