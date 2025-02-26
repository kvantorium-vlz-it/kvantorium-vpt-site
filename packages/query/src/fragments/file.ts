import { createFragmentFactory } from "@/utils";

export const fileAssetFragmentFactory = createFragmentFactory((q) => q
    .fragmentForType<'sanity.fileAsset'>()
    .project((sub) => ({
        src: sub.field('url'),
        _id: true,
    }))
)
