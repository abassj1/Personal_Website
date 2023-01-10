
import React, { useState } from 'react'
import { createPostComponent } from '../js/postFunc.js'; // import the createPostComponent function

const PostsList = () => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [buttonLink, setButtonLink] = useState('');
const [imgObject, setImgObject] = useState('');
const [postContainer, setPostContainer] = useState([]);

const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = createPostComponent(title, description, buttonLink, imgObject);
    setPostContainer([...postContainer, newPost]);
};

return (
    <section className="relative h-[100%] sm:h-auto md:h-auto">
        <div class="container flex flex-col mx-auto max-w-[1000px] h-[100%]">
            <div className="mx-auto mt-16 w-full h-[100%] max-w-[1000px] items-center text-center">
                <div className="mx-auto lg:mx-4 font-bold text-4xl text-blitblue-500">Posts</div>

                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Description:
                        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
                    </label>
                    <br />
                    <label>
                        Button Link:
                        <input type="text" value={buttonLink} onChange={(event) => setButtonLink(event.target.value)} />
                    </label>
                    <br />
                    <button type="submit">Create Post</button>
                </form>
                <div class="post-container mt-8 grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-16">
                    {postContainer.map((post, index) => {
                    return <div key={index} dangerouslySetInnerHTML={{ __html: post }} />
                    })}
                </div>
            </div>
        </div>
    </section>
);
}
export default PostsList;
