import {appSchema} from '@nozbe/watermelondb';

import { taskShema } from './taskSchema';

export const schemas = appSchema({
    version: 1,
    tables: [taskShema]
});