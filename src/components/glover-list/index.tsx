import React, { ReactElement, useCallback } from 'react'
import { deleteGlover } from 'src/common/endpoints/glovers'
import ListItem from 'src/components/glover-list/list-item'

type Props = {
    data?: any
    onError: (any) => void
    onRemove: () => void
}

export default function GloverList(props: Props): ReactElement {
    const { data = [], onError, onRemove } = props

    const handleItemRemove = useCallback(async (item) => {
        try {
            await deleteGlover(item.id)
            onRemove()
        } catch (error) {
            onError(error)
        }
    }, [])

    return (
        <div className="glovers__glover-list">
            {data.map((datum) => (
                <ListItem key={datum.id} item={datum} onRemoveClick={handleItemRemove}></ListItem>
            ))}
        </div>
    )
}
