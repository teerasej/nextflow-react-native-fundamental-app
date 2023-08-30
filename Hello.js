import { View, Text } from 'react-native'
import React from 'react'

export default function Hello(props) {

    let name = ""

    if(props.name == undefined) {
        name = "User"
    } else {
        name = props.name
    }

    return (
        <>
            <Text>Hello, {name}</Text>
        </>
    )
}