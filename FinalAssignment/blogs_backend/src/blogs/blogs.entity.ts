import { CommentEntity } from 'src/comments/comments.entity';
import { UserEntity } from 'src/user/user.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'

@Entity('CreateBlog')
export class BlogEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Title: string;

    @Column()
    Contents: string;

    @Column()
    Tags: string;

    @Column({
        type:'date'
    })
    Date: Date;

    @ManyToOne(() => UserEntity, (user) => user.blog)
    user: UserEntity

    @OneToMany(() => CommentEntity, (comment) => comment.blog)
    comment: CommentEntity[]
}