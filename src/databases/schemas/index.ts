import { appSchema } from "@nozbe/watermelondb";

import { taskSchema } from "./taskSchema";

export const schemas = appSchema({
    version: 1,
    tables: [taskSchema]
});