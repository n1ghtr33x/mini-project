document.addEventListener('DOMContentLoaded', async () => {
    const usersContainer = document.getElementById('users-container');

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.className = 'user-block';

        const userInfo = document.createElement('p');
        userInfo.textContent = `ID: ${user.id}, Name: ${user.name}`;

        const userLink = document.createElement('a');
        userLink.href = `user-details.html?userId=${user.id}`;
        userLink.textContent = 'View Details';

        userBlock.appendChild(userInfo);
        userBlock.appendChild(userLink);
        usersContainer.appendChild(userBlock);
    });
});
