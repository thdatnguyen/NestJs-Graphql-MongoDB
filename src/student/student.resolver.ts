import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentInput } from './student.input';
import { StudentService } from './student.service';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => [StudentType])
  getAllStudents(): Promise<StudentType[]> {
    return this.studentService.getAllStudents();
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('studentInput') studentInput: StudentInput,
  ): Promise<StudentType> {
    return this.studentService.createStudent(studentInput);
  }
}
