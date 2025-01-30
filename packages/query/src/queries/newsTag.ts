// import { DOCUMENT_TYPES } from '@/constants.ts'
// import { q } from '@/query-builder/groqd.client.ts'
// import { newsTagFragment } from '../fragments/newsTag.ts'

// type NewsTagFilter =
//     | ({ byId: string } & {})
//     | ({ byName: string } & {})

// type NewsTagOrder = {
//     byName: 'asc' | 'desc',
//     byId: 'asc' | 'desc'
// }

// type NewsTagSlice =
//     | { single: true }
//     | { count: number, offset: number }

// type NewsTagQueryOptions = {
//     filter?: NewsTagFilter
//     order?: NewsTagOrder
//     slice?: NewsTagSlice
// }

// const createNewsTagQuery = (options: NewsTagQueryOptions = {}) => {
//     const {
//         filter,
//         order,
//         slice,
//     } = options

//     const isFilterDefined = typeof filter !== 'undefined'
//     const isOrderDefined = typeof order !== 'undefined'
//     const isSliceDefined = typeof slice !== 'undefined'

//     q.filterByType()

//     const query = q
//         .star
//         .filterByType(DOCUMENT_TYPES.NEWS_TAG)
//         .filter(isFilterDefined
//             && (
//                 'byId' in filter && `_id == '${filter.byId}'`
//                 || 'byName' in filter && `_name == '${filter.byName}'`
//             )
//             || '')
//         .order(isOrderDefined
//             ? ('byId' in order && `_id ${order.byId}`
//                 || 'byName' in order && `name ${order.byName}`
//                 || '_id asc'
//             )
//             : '_id asc'
//         )
//         .project(newsTagFragment)
// }
