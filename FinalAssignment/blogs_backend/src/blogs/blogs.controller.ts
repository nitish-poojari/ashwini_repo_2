import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createblogDto } from './dto/createBlog.dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
    constructor(private blogService: BlogsService) { }
    @Get()
    getAllBlogs() {
        return this.blogService.getAllBlogs()
    }

    @Get('/:id')
    getBlogDetails(@Param('id') id: number) {
        return this.blogService.getBlogDetails(id)
    }

    @Get('search/:Tags')
    getBlogDetailByTags(@Param('Tags') Tags: string) {
        return this.blogService.getBlogDetailByTags(Tags)
    }

    @Post('/:id')
    createBlog(@Param('id') id: number, @Body() createblogDto: createblogDto) {
        return this.blogService.createBlog(id, createblogDto)
    }

    @Patch('/:id/:contents')
    updateBlog(@Param('id') id: number, @Param('contents') contents: string) {
        return this.blogService.updateBlog(id, contents)
    }

    @Delete('/:id')
    deleteBlog(@Param('id') id: number) {
        return this.blogService.deleteBlog(id)
    }
}


