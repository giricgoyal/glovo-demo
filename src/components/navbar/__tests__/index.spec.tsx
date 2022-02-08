import React from 'react'
import { render } from 'src/common/utils/test-utils'
import Navbar from 'src/components/navbar'

describe('components/navbar', () => {
    let container

    beforeEach(() => {
        container = render(<Navbar />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
