import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class JwtStrategy extends PassportStrategy {
  constructor(
    private readonly tokenService: TokenService,
    configurationService: ConfigurationService,
  ) {}
}
