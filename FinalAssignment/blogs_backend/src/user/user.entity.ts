import { BlogEntity } from 'src/blogs/blogs.entity';
import { CommentEntity } from 'src/comments/comments.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

export enum Gender {
    Male = "Male",
    Female = "Female"
}
@Entity('Signup')
export class UserEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    FirstName: string;

    @Column({
        nullable: false
    })
    LastName: string;

    @Column({
        nullable: false, unique: true
    })
    Email: string;

    @Column({
        nullable: false
    })
    Password: string;

    @Column({
        nullable: true
    })
    City: string;

    @Column({
        nullable: true
    })
    State: string;

    @Column({
        nullable: true
    })
    Country: string;

    @Column({
        nullable: true
    })
    PostalCode: string;

    @Column({
        nullable: true,
        type: "date"
    })
    BirthDate: Date;

    @Column({
        nullable: true,
        type: "enum",
        enum: Gender
    })
    Gender: Gender;

    @OneToMany(() => BlogEntity, (blog) => blog.user)
    blog: BlogEntity[]

    @OneToMany(() => CommentEntity, (comment) => comment.user)
    comment: CommentEntity[]

}