import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginUserDto): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    const validationPassword = user.validPassword(password, user.password);

    if (!user || !validationPassword) {
      return null;
    }

    return user;
  }

  async login({ email, password }: LoginUserDto) {

  }
}
