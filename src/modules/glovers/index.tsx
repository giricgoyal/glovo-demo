import React, { Dispatch, ReactElement, SetStateAction, useCallback, useEffect, useState } from 'react'
import { getGlovers, Glover } from 'src/common/endpoints/glovers'
import AddGlover from 'src/components/add-glover'
import GloverList from 'src/components/glover-list'

export default function Glovers(): ReactElement {
    const [glovers, setGlovers]: [glovers: Glover[], setGlovers: any] = useState([])

    const fetchGlovers = useCallback(async () => {
        const glovers = await getGlovers()
        console.log(glovers)
        setGlovers(Object.values(glovers))
    }, [])

    useEffect(() => {
        fetchGlovers()
    }, [])

    const handleOnError = useCallback((error) => {
        console.log(error)
    }, [])

    return (
        <div className="glovers">
            <AddGlover onAdd={fetchGlovers} onError={handleOnError} />
            <GloverList data={glovers} onRemove={fetchGlovers} onError={handleOnError} />
        </div>
    )
}
