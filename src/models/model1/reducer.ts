import { ACTION } from './types'

export const initialState = {}

const model1 = (state = initialState, action: ACTION): { [key: string]: string } => {
    const { type } = action
    switch (type) {
        default: {
            return state
        }
    }
}

export default {
    model1,
}
