import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport'
import { validate } from 'class-validator';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable() //-. marking this as class for provider use 
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'nestjs',
      ignoreExpiration: false

    })
 }
 async validate(payload: any){
  console.log(payload);
  return { userId: payload.userId };
 }

}