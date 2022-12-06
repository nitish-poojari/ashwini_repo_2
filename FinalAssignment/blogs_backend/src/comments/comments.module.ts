import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from 'src/blogs/blogs.entity';
import { UserEntity } from 'src/user/user.entity';
import { CommentsController } from './comments.controller';
import { CommentEntity } from './comments.entity';
import { CommentsService } from './comments.service';

@Module({
  imports: [TypeOrmModule.forFeature([CommentEntity, UserEntity, BlogEntity])],
  controllers: [CommentsController],
  providers: [CommentsService]
})
export class CommentsModule { }
