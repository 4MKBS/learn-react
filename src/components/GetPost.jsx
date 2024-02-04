import React, { useEffect, useState } from 'react';

const GetPost = () => {
    const [loding, setLoding] = useState(true);
    const [error, setError] = useState();
    const [post, setPost] = useState({});
    useEffect(()=>{
        fetch('https://jsonplaceholder.org/posts/1')
            .then((response)=>response.json())
            .then((data)=>{
                setLoding(false);
                setPost(data);
                setError("");
            })
            .catch((err)=>{
                // console.log(err);
                setLoding(false);
                setPost({});
                setError('prblem');

            })
    },[]);
  return (
    <div>
        {loding?'loding.....':post.content}
        {error || null}
    </div>
  );
};

export default GetPost;