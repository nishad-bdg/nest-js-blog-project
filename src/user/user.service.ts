import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity'
import { Repository } from 'typeorm'
import { from, Observable } from 'rxjs'
import { UserInterface } from './interface/user.interface'

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {}

  create(createUserDto: CreateUserDto): Observable<CreateUserDto> {
    return from(this.userRepository.save(createUserDto))
  }

  findAll(): Observable<UserInterface[]> {
    return from(this.userRepository.find())
  }

  findOne(id: number): Observable<UserInterface> {
    return from(this.userRepository.findOne(id))
  }

  update(id: number, updateUserDto: UpdateUserDto): Observable<any> {
    return from(this.userRepository.update(id, updateUserDto))
  }

  remove(id: number): Observable<any> {
    return from(this.userRepository.delete(id))
  }
}
