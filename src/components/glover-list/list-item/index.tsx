import React, { ReactElement, useCallback } from 'react'
import Button from 'src/components/button'

export default function ListItem(props): ReactElement {
    const { item, onRemoveClick } = props
    const handleItemRemove = useCallback(() => {
        onRemoveClick(item)
    }, [])
    return (
        <div className="glovers__glover-list__list-item">
            <div className="glovers__glover-list__list-item__label">{item.name}</div>
            <Button onClick={handleItemRemove} type="secondary">
                Remove
            </Button>
        </div>
    )
}
