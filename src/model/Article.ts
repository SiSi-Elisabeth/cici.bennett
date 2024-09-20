import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Article extends Model<Article> {
  // @PrimaryKey
  // @AutoIncrement
  // @Column
  // declare id: number;

  @Column
  title: string;

  @Column({
    type: DataType.STRING(255)
  })
  content: string;
}