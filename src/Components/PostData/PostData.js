import React from 'react';

const PostData = (props) => {
    console.log(props)
    const [title] = props.posts;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default PostData;