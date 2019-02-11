import { Entity } from '@loopback/repository';
export declare class Todo extends Entity {
    id: number;
    desc?: string;
    title: string;
    isComplete?: boolean;
    remindAtAddress?: string;
    remindAtGeo?: string;
    todoListId: number;
    constructor(data?: Partial<Todo>);
}
