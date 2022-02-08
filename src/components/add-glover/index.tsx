import React, { ReactElement, useCallback, useState } from 'react'
import { addGlovers } from 'src/common/endpoints/glovers'
import Button from 'src/components/button'

type Props = {
    onAdd: () => void
    onError: (error: any) => void
}

export default function AddGlover(props: Props): ReactElement {
    const { onAdd, onError } = props
    const [glover, setGlover] = useState('')

    const handleInputChange = useCallback((event) => {
        setGlover(event.target.value)
    }, [])

    const handleAddGlover = useCallback(async () => {
        try {
            await addGlovers({
                name: glover,
            })
            onAdd()
        } catch (error) {
            onError(error)
        }
    }, [glover])

    return (
        <div className="glovers__add-glover">
            <input className="glovers__add-glover__add-input" onChange={handleInputChange} value={glover} />
            <Button onClick={handleAddGlover}>ADD</Button>
        </div>
    )
}
