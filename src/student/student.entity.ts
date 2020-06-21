import { Entity, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class StudentEntity {
  @ObjectIdColumn()
  _id: string;

  @Column()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
