import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonInput } from './lesson.input';

@Resolver(of => LessonType)
export class LessonResover {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  getLessonWithId(@Args('id') id: string): Promise<LessonType> {
    return this.lessonService.getLessonWithId(id);
  }

  @Query(returns => [LessonType])
  getAllLessons(): Promise<LessonType[]> {
    return this.lessonService.getAllLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(
    @Args('lessonInput') lessonInput: LessonInput,
  ): Promise<LessonType> {
    return this.lessonService.createLesson(lessonInput);
  }
}
