import { defineType } from "sanity";
import { OBJECT_TYPES } from "../../constants";

export default defineType({
    name: OBJECT_TYPES.PORTABLE_TEXT,
    type: 'array',
    of: [
        {
            type: 'block',
        },
    ],
})
