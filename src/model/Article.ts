import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Article extends Model<Article> {
  // @PrimaryKey
  // @AutoIncrement
  // @Column
  // declare id: number;

  @Column({
    defaultValue: '',
    allowNull: false,
    comment: '标题'
  })
  title: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    comment: '内容'
  })
  content: string; // 字段名
}
// 不知道为什么生成的是大写且是复数的，不推荐大写和复数