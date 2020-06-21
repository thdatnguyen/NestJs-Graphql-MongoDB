import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { Repository } from 'typeorm';
import { StudentInput } from './student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  async getAllStudents(): Promise<StudentEntity[]> {
    const students = await this.studentRepository.find();
    return students;
  }

  async createStudent(studentInput: StudentInput): Promise<StudentEntity> {
    const { firstName, lastName } = studentInput;
    const student = await this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });
    return this.studentRepository.save(student);
  }
}
