import { Injectable, NotFoundException } from '@nestjs/common';
import { createblogDto } from './dto/createBlog.dto';
import { BlogEntity } from './blogs.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>) { }

    async getAllBlogs() {
        return await this.blogRepository.find({relations:['user']})
    }

    async getblogbyid(id: number) {
        const blog = await this.blogRepository.findOneBy({ id });
        if (!blog) {
            throw new NotFoundException();
        }
        return blog
    }

    getBlogDetails(id: number) {
        return this.getblogbyid(id)
    }

    async getBlogDetailByTags(Tags: string) {
        const blog = await this.blogRepository.createQueryBuilder('CreateBlog').leftJoinAndSelect('CreateBlog.user', 'user').where("Tags Like:Tags", { Tags: `%${Tags}%` }).getMany()
        if (!blog) {
            throw new NotFoundException();
        }
        return blog
    }

    async createBlog(id: number, createBlogDto: createblogDto) {
        const newdate = new Date().toISOString().slice(0,10)
        const user = await this.userRepository.findOneBy({ id })
        if (!user) {
            throw new NotFoundException();
        }
        const blog = this.blogRepository.create({ ...createBlogDto,Date:new Date(), user });
        const newBlog = this.blogRepository.save(blog)
        return newBlog;
    }

    async updateBlog(id: number, contents: string) {
        const blog = await this.getblogbyid(id)
        blog.Contents = contents
        await blog.save()
        return blog
    }

    async deleteBlog(id: number) {
        const blog = await this.getblogbyid(id)
        await this.blogRepository.remove(blog);
        return this.getAllBlogs()
    }
}
