const blogPosts = [
    {
        id: 1,
        title: "First Post",
        date: "5th July 2024",
        content: `
### Welcome to my first post on here!

I have decided to update this website since it has been only used to host images that I use for [Asteroids ++](https://store.steampowered.com/app/2407300/Asteroids/)

After this code refactor, the code is absolutely terrible so I'll try to work on it for a couple of days, but this will do.

All of these posts are under a javascript script (that I have definitely made) to dynamically fill the page with stuff that I am thinking about!
This is also a terrible solution as I don't have any backend server but oh well, this will do for now.
It also means it's under only one file so it's going to be big if I use it too much...

But it supports markup which is cool :)

<img src="gameimages/asteroids/asteroids/1/1.gif" alt="Asteroid" width="100" height="100">
<i>Cool asteroid</i>

### What to expect from this

- Game development updates
- Life Updates
- Personal projects

Thank you!
        `
    }/*,
    {
        id: 2,
        title: "Asteroids ++",
        date: "2024-07-10",
        content: `
        `
    }*/
];

blogPosts.sort((a, b) => b.id - a.id);

function createSnippet(content, maxLength = 100) {
    const plainText = content.replace(/#+\s/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
    
    if (plainText.length <= maxLength) return plainText;
    
    return plainText.substr(0, maxLength).split(' ').slice(0, -1).join(' ') + '...';
}

function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    const postsToShow = blogPosts.slice(0, 3); // Limit to 3 posts
    postsToShow.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        const snippet = createSnippet(post.content);
        postElement.innerHTML = `
            <h3><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
            <p><em>${post.date}</em></p>
            <p>${snippet}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    if (blogPosts.length > 3) {
        const viewAllLink = document.createElement('p');
        viewAllLink.innerHTML = `<a href="all-posts.html" class="view-all-link">View All Posts</a>`;
        blogPostsContainer.appendChild(viewAllLink);
    }
}

function displaySinglePost() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        document.title = `${post.title} - Infiland's Posts`;
        const postContainer = document.getElementById('blog-post-content');
        postContainer.innerHTML = `
            <h1>${post.title}</h1>
            <p><em>${post.date}</em></p>
            <div>${marked.parse(post.content)}</div>
        `;
    } else {
        document.getElementById('blog-post-content').innerHTML = '<p>Post not found.</p>';
    }
}

// Call the appropriate function based on the current page
if (document.getElementById('blog-posts')) {
    document.addEventListener('DOMContentLoaded', displayBlogPosts);
} else if (document.getElementById('blog-post-content')) {
    document.addEventListener('DOMContentLoaded', displaySinglePost);
}