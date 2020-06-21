import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonResover } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';

@Module({
  imports: [
    // import Entity
    TypeOrmModule.forFeature([LessonEntity]),
  ],
  providers: [LessonResover, LessonService],
})
export class LessonModule {}
