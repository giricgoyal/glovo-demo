import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Glovers from './modules/glovers'

export default function Router(): React.ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Glovers />} />
        </Routes>
    )
}
