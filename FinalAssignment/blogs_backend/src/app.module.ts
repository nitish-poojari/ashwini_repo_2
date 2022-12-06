import { Module } from '@nestjs/common';
import { rootCertificates } from 'tls';
import { BlogsModule } from './blogs/blogs.module';
import { TypeORMConfiguration } from './config/typeorm.configuration';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [BlogsModule, UserModule, TypeOrmModule.forRoot(TypeORMConfiguration), CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
