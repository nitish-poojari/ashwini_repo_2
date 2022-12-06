import { BlogEntity } from 'src/blogs/blogs.entity';
import { UserEntity } from 'src/user/user.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity('Comments')
export class CommentEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Text: string;

    @ManyToOne(() => BlogEntity, (blog) => blog.comment)
    blog: BlogEntity

    @ManyToOne(() => UserEntity, (user) => user.comment)
    user: UserEntity

}