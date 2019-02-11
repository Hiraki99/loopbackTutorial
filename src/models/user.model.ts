import {Model, model, property} from '@loopback/repository';

@model()
export class User extends Model {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
