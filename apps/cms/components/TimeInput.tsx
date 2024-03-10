import { InputProps, StringInputProps, set, unset } from "sanity"
import { TextInput, Flex } from '@sanity/ui'
import { FormEventHandler } from "react"

type Props = {} & StringInputProps

export default function(props: Props) {
    const {
        value = '',
    } = props

    const onChange: FormEventHandler<HTMLInputElement> = (event) => {
        event.preventDefault()
        const targetValue = event.currentTarget.value

        props.onChange(set(targetValue))
    }

    return (
        <TextInput
            {...props.elementProps}
            value={value}
            onChange={onChange}
            type="time"
        />
    )
}
