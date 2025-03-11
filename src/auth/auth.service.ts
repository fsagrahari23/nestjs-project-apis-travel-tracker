import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService ,private jwtService: JwtService) {}
 
  //  handle new registration 
  async registerUser(registerDto: RegisterDto) {
    const { email, password } = registerDto;
    //  check if user exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    })
    if (existingUser) {
      throw new ConflictException('User already exists')
    }

    // hash the pass
    const hashedPassword: string = await bcrypt.hash(password, 10);
    // create new user 
    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    })

    // remove password from return object
    const { password: _, ...result } = user

    return result;
  }

  async LoginUser(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.prisma.user.findUnique({
      where: { email },
    })
    if (!user) {
      throw new ConflictException('User does not exist')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new ConflictException('Invalid credentials')
    }
    // create userToken after login 

    const token = this.jwtService.sign({ userId: user.id },{ secret: 'nestjs' });
    

    // remove password from return object
    const { password: _, ...result } = user;


    return { ...result, token };
  }
}
