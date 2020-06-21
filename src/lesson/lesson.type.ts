// this file is used for expose the type for GRAPHQL ONLY
// so no need to declare _id of MongoDB here like lesson.entity.ts
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Lesson')
export class LessonType {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
