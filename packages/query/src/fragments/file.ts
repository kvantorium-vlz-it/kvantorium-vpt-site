import { Builder, q } from "@/groqd.client";

export const fileAssetFragmentFactory = (q: Builder) => q
    .fragmentForType<'sanity.fileAsset'>()
    .project((sub) => ({
        src: sub.field('url'),
        _id: true,
    }))
