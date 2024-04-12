import { defineField } from "sanity";
import imageAsset from "./imageAsset";

export default defineField({
    name: 'contentBlock',
    type: 'array',
    of: [
        { type: 'block' },
        { type: imageAsset.name },
    ],
})
