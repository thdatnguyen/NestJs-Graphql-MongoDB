import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLessonWithId(id: string): Promise<LessonEntity> {
    const lesson = await this.lessonRepository.findOne({
      id,
    });

    return lesson;
  }

  async getAllLessons(): Promise<LessonEntity[]> {
    const lessons = await this.lessonRepository.find();
    return lessons;
  }

  async createLesson(lessonInput: LessonInput): Promise<LessonEntity> {
    const { name, startDate, endDate } = lessonInput;
    const lesson = await this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
}
