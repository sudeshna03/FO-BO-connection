import axios from 'axios';
import { API_URL } from '../config';
import { toast } from 'react-toastify';

// export const fetchFaq = () => async (dispatch) => {
//   let config;
//   const token = localStorage.getItem('token');
//   if (token) {
//     config = {
//       headers: { Authorization: `Bearer ${token}` }
//     };
//   }

//   dispatch({
//     type: 'FETCH_FAQ_REQUEST'
//   });

//   await axios
//     .get(`${API_URL}/faqs`, config)
//     .then((res) => {
//       if (res.data) {
//         dispatch({
//           type: 'FETCH_FAQ_SUCCESS',
//           payload: res.data
//         });
//       }
//     })
//     .catch((err) => {
//       dispatch({
//         type: 'FETCH_FAQ_FAIL',
//         payload: err
//       });
//     });
// };

export const faqs = (faqs) => async (dispatch) => {
  await axios
    .post(`${API_URL}`, faqs)
    .then((res) => {
      toast.success('Successfully added');
      console.log(res);
      dispatch({
        type: 'CREATE_FAQ_SUCCESS',
        payload: res.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
