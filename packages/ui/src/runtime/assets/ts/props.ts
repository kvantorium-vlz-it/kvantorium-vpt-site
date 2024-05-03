type DisplayVariant =
      'display-1'
    | 'display-2'
    | 'display-3'

type HeadingVariant =
      'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'

type BodyVariant =
      'body-1'
    | 'body-2'
    | 'body-3'

type LabelVariant =
      'label-1'
    | 'label-2'

type Variant =
      DisplayVariant
    | HeadingVariant
    | BodyVariant
    | LabelVariant

export interface BaseTypographyProps {
    isItalic?: boolean
    variant?: Variant | null
}
