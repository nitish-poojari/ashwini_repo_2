import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blogs/blogs.entity';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from './comments.entity';
import { createCommentDto } from './dto/createComment.dto';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(CommentEntity)
        private commentRepository: Repository<CommentEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>) { }

    async getAllComments() {
        return await this.commentRepository.find()
    }

    async createComment(id: number, Blogid: number, createcommentDto: createCommentDto) {
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new NotFoundException();
        }
        const blog = await this.blogRepository.createQueryBuilder('CreateBlog').where("id=:Blogid", { Blogid }).getOne()
        if (!blog) {
            throw new NotFoundException();
        }
        const comment = this.commentRepository.create({ ...createcommentDto, user, blog });
        const newComment = this.commentRepository.save(comment)
        return newComment;
    }
}
