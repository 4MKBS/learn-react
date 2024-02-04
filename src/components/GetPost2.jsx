import React, { useEffect, useReducer } from 'react';

const initialState = {
  loading: true,
  post: {},
  error: '',
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        loading: false,
        post: action.ans,
        error: '',
      }
    case 'failure':
      return {
        loading: false,
        post: {},
        error: '',
      }
    default:
      return state;
  }
}

const GetPost2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts/1')
      .then((response) => response.json())
      .then((data) => {
        dispatch({type:'success',ans:data});
      })
      .catch((err) => {
        // console.log(err);
        dispatch({ type: 'failure' });
      })
  }, []);
  return (
    <div>
      <h2>
      {state.loading ? "loading" : state.post.content}
      {state.error || null}
      </h2>
    </div>
  );
};

export default GetPost2;