import React, { useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

// import { fetchcategory } from "../../store/Category/actions";
import { faqs } from '../../Stores/Posts/action';

const Posts = (props) => {
  const [state, setState] = React.useState({
    name: '',
    reg: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(state);
    props.faqs(state);
    e.target.reset();
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field label='Question' placeholder='Description' name='name' onChange={handleChange} control='textarea' rows='3' required />
      <Form.Field label='Answer' placeholder='Description' control='textarea' name='reg' onChange={handleChange} rows='3' required />
      <div>
        <Button primary type='submit'>
          Submit
        </Button>
      </div>
    </Form>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     blog: state.blog
//   };
// };
export default connect(null, { faqs })(Posts);

// export default Posts;
