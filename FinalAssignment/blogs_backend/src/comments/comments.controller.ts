import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { createCommentDto } from './dto/createComment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService) { }
    @Get()
    getAllComments() {
        return this.commentService.getAllComments()
    }

    @Post('/:id/:Blogid')
    createComment(@Param('id') id: number, @Param('Blogid') Blogid: number, @Body() createcommentDto: createCommentDto) {
        return this.commentService.createComment(id, Blogid, createcommentDto)
    }
}
