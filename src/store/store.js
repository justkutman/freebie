import {combineReducers, createStore} from "redux";
import sliderGetStarted from "./reducers/getStartedSlider";
import data from './reducers/dataReducer';

const reducers = combineReducers({
    getStarted: sliderGetStarted,
    data
})
const store = createStore(reducers);


export default store;