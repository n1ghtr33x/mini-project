document.addEventListener('DOMContentLoaded', async () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    const userDetailsContainer = document.getElementById('user-details');
    const userPostsContainer = document.getElementById('user-posts');

    const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await userResponse.json();

    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <h2>${user.name} (ID: ${user.id})</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
    `;
    userDetailsContainer.appendChild(userInfo);

    const postsButton = document.createElement('button');
    postsButton.textContent = 'Post of current user';
    postsButton.style.display = 'block';
    postsButton.style.margin = '20px auto';
    postsButton.style.padding = '10px';
    postsButton.addEventListener('click', async () => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const posts = await postsResponse.json();

        userPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postBlock = document.createElement('div');
            postBlock.className = 'post-block';

            const postTitle = document.createElement('p');
            postTitle.textContent = `Title: ${post.title}`;

            const postLink = document.createElement('a');
            postLink.href = `post-details.html?postId=${post.id}`;
            postLink.textContent = 'View Details';

            postBlock.appendChild(postTitle);
            postBlock.appendChild(postLink);
            userPostsContainer.appendChild(postBlock);
        });
    });
    userDetailsContainer.appendChild(postsButton);
});
