import {appSchema} from '@nozbe/watermelondb';

import { taskShema } from './taskSchema';

export const schemas = appSchema({
    version: 2,
    tables: [taskShema]
});