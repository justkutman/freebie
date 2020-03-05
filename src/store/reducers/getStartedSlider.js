let initialState = {
    currentSlide: 0,
    indexDots: 0
};


const sliderGetStarted = (state = initialState, action) => {
    console.log(state.currentSlide)
    switch (action.type) {
        case "SLIDE_NEXT":
            return {
                ...state,
                currentSlide: action.payload
            }
        default:
            return state;
    }
};


export default sliderGetStarted;