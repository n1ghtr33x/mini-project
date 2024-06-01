document.addEventListener('DOMContentLoaded', async () => {
    const postId = new URLSearchParams(window.location.search).get('postId');
    const postDetailsContainer = document.getElementById('post-details');
    const postCommentsContainer = document.getElementById('post-comments');

    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postResponse.json();

    const postInfo = document.createElement('div');
    postInfo.innerHTML = `
        <h2>Post Title: ${post.title}</h2>
        <p>${post.body}</p>
    `;
    postDetailsContainer.appendChild(postInfo);

    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentsResponse.json();

    comments.forEach(comment => {
        const commentBlock = document.createElement('div');
        commentBlock.className = 'comment-block';

        const commentInfo = document.createElement('p');
        commentInfo.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;

        commentBlock.appendChild(commentInfo);
        postCommentsContainer.appendChild(commentBlock);
    });
});
