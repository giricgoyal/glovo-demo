import React from 'react'
import { render } from 'src/common/utils/test-utils'
import Module1 from 'src/modules/module1'

describe('modules/module1', () => {
    let container

    beforeEach(() => {
        ;({ container } = render(<Module1 />))
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
