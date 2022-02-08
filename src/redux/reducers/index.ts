import { combineReducers } from 'redux'
import model1Reducer from 'src/models/model1/reducer'

export default combineReducers({
    ...model1Reducer,
})
