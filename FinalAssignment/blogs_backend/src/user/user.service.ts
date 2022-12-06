import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserEntity } from './user.entity';
import * as crypto from 'crypto-js'
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>) { }

    async signup(signupDto: SignupDto) {
        const user = this.userRepository.create()
        user.FirstName = signupDto.FirstName
        user.LastName = signupDto.LastName
        user.Email = signupDto.Email
        user.Password = String(crypto.MD5(signupDto.Password))
        await user.save()
        return user;
    }

    async getuserbyid(id: number) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException();
        }
        return user
    }

    async signin(signinDto: SigninDto) {
        const condition = {
            Email: signinDto.Email,
            Password: String(crypto.MD5(signinDto.Password))
        }
        const user = await this.userRepository
            .createQueryBuilder('user')
            .where('user.Email= :Email and user.Password= :Password', condition,)
            .getOne();
        if (!user) {
            throw new UnauthorizedException();
        }
        delete user.Password;
        return user;
    }

    async updateProfile(id: number, profileDto: ProfileDto) {
        const user = await this.getuserbyid(id)
        user.FirstName = profileDto.FirstName
        user.LastName= profileDto.LastName
        user.Email=profileDto.Email
        user.City = profileDto.City
        user.State = profileDto.State
        user.Country = profileDto.Country
        user.PostalCode = profileDto.PostalCode
        // user.BirthDate = new Date(profileDto.BirthDate)
        user.Gender = profileDto.Gender
        await user.save()
        return this.getuserbyid(id)
    }
}
