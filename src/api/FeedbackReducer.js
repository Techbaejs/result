import {
    START_FEEDBACK,
    STOP_FEEDBACK,

  } from './feedbackTypes';
  
  const initialState = {
    isLoading: false,
  };
  
  const FeedbackReducer = (state = initialState, action) => {
    const { type } = action;
  
    switch (type) {
      case START_FEEDBACK:
        return {
          ...state,
          isLoading: true,
        };
  
  
      case STOP_FEEDBACK:
        return {
          ...state,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default FeedbackReducer;
  