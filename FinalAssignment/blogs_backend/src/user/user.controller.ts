import { Controller, Post, Body, Patch, Param, Get, Put } from '@nestjs/common';
import { ProfileDto } from './dto/profile.dto';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    @Post('signup')
    signup(@Body() signupDto: SignupDto) {
        return this.userService.signup(signupDto)
    }

    @Post('signin')
    signin(@Body() signinDto: SigninDto) {
        return this.userService.signin(signinDto)
    }

    @Put('/update/:id')
    updateProfile(@Param('id') id: number, @Body() profileDto: ProfileDto) {
        return this.userService.updateProfile(id, profileDto)
    }
    @Get('/:id')
    getuserbyid(@Param('id')id:number){
        return this.userService.getuserbyid(id)
    }
}
