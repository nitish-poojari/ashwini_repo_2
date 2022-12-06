import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { BlogsController } from './blogs.controller';
import { BlogEntity } from './blogs.entity';
import { BlogsService } from './blogs.service';

@Module({
  imports: [TypeOrmModule.forFeature([BlogEntity, UserEntity])],
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule { }
