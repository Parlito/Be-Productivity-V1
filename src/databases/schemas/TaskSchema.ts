import {tableSchema} from '@nozbe/watermelondb';

export const taskShema = tableSchema({
    name: 'task',
    columns: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'type',
            type: 'string'
        },
    ]
});