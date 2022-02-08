import * as React from 'react'
import Button from 'src/components/button'

export default function Module1(): React.ReactElement {
    return (
        <>
            <Button
                onClick={() => {
                    console.log('z')
                }}
            >
                Test
            </Button>
        </>
    )
}
