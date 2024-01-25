import { Model } from "@nozbe/watermelondb";
import { field } from '@nozbe/watermelondb/decorators';

export class TaskModel extends Model {
    static table = 'task'

    @field('name')
    name: string;

    @field('type')
    type: string;
}