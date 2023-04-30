import { Body, Post, Get, Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { Serialize } from '../interceptor/serialize.interceptor';

@Serialize(UserDto)
@Controller('auth')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    this.userService.create(body.email, body.password);
  }

  @Get('/:id')
  async findUser(@Body() body: Pick<UserDto, 'id'>) {
    return await this.userService.findBy({ id: body.id });
  }
}
