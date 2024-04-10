import curriculum from "./documents/curriculum";
import employee from "./documents/employee";
import kvantum from "./documents/kvantum";
import newsTag from "./documents/newsTag";
import settings from "./documents/settings";
import contentBlock from "./objects/contentBlock";
import fileAsset from "./objects/fileAsset";
import imageAsset from "./objects/imageAsset";

export default [
    // Helper Objects
    imageAsset,
    fileAsset,
    contentBlock,

    // Document schemas
    employee,
    kvantum,
    newsTag,
    curriculum,

    // Singleton documents
    settings,
]
