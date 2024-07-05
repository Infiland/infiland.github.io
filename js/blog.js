const blogPosts = [
    {
        id: 1,
        title: "First Post",
        date: "5th July 2024",
        content: `
### Welcome to my first post on here!

I've have decided to update this website since it has been only used to host images that I use for [Asteroids ++](https://store.steampowered.com/app/2407300/Asteroids/)
 However I might move all of the images to another server or something but this will do.

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
    },
    {
        id: 2,
        title: "Asteroids ++ Development 1",
        date: "5th July 2024",
        content: `
### Hello everyone!

I've recently self-developed and published my second commercial game on Steam, [Asteroids ++](https://store.steampowered.com/app/2407300/Asteroids/) and for this
        post I decided to give a little bit of info on how I developed it, the ultimate goals, changes from the original plans for the game and the aftermath.

<img src="https://i.imgur.com/Hjhsi2k.png" alt="Asteroid" width="640" height="360">

<i>Asteroids ++ Gameplay Chaos</i>

I reckon this post alone is going to be pretty long, so I'll make a couple of parts of this. I could do a similar thing for [The Colorful Creature](https://store.steampowered.com/app/1651680/The_Colorful_Creature/) but that one is
        just much much longer.

### Before Development

Back in my humble days, I was learning how to use GameMaker, a free to use 2D game engine. One of the games I made with it was "Space Shooter 2" <i>(or SSU)</i>, which was an Asteroids
clone that I made to try to learn the engine. At the time I was not even in highschool! 

But it was a first game that I coded something myself without too much guidance of tutorials. Not that tutorials are bad, but the previous project "Space Shooter 1" was just
a complete copy of [Shaun Spalding's Asteroid Tutorial](https://www.youtube.com/playlist?list=PLPRT_JORnIuo-DyoWbB7LBrhqlJnsltJq), with just some minor additions like lives flying across the screen


<img src="https://i.imgur.com/Yyr4itu.png" alt="Asteroid" width="640" height="360">

<i>Space Shooter 1</i>

Space Shooter 1 was awful, had terrible turning controls, the game was running at locked 30 FPS, your game could softlock if you went outside the boundaries, the
pause screen was causing a memory leak, it was truly terrible, but I guess that's how real game development starts, because all my previous projects were made in Scratch (yep...)

So I decided in my younger years to make a sequel, to fix all of these issues and ultimately make a 'better' game

### Space Shooter 2

<img src="https://i.imgur.com/aCb519m.png" alt="Asteroid" width="640" height="360">

<i>Space Shooter 2's World Map</i>

Space Shooter 2 compared to it's incredible predecesor title was much better. If only IGN could recognize this underrated masterpiece and give it a 10/10.

- It has a better control scheme, you could turn faster and actually stop your ship, but it was still bad.
- It had a shop where you could buy upgrades for your gun and autogun
- Had a save/load feature (but it broke with every update of the game)

But the code is still absolute dogshit, however I had an idea where in each world you visit, you would encounter a special Asteroid type.

In the second world, you would encounter "red asteroids" which would be faster than regular asteroids. I had plans and concepts to introduce new types of Asteroids but ultimately
I never finished more than 2 worlds because that's how bad the code was. If you want to look at it, [I've open sourced this game.]() Don't bother fixing it.

### Free to Play experiment on Steam

While I was gathering a small audiance that was interested in my game development, a couple of people joked around for a third game, and I also joked about it since making an Asteroids game sounds
pretty dumb for a more serious project. However many years later, while developing TCC and releasing it to Steam in Early Access in 2021, I've always wondered since then how a free to play game could work out
on Steam.

Having all of the thrown out ideas that I had for Space Shooter 2, and after gathering much more game development and game design knowledge a free-to-play Asteroids game doesn't sound all that bad. It took me
a while to consider this idea but on April of 2022, I've finally decided to work on...

### Space Shooter Remaster!

<img src="https://i.imgur.com/NvB1CU1.png" alt="Asteroid" width="640" height="360">

Or at least, that was the name of the game...

Unsure at this point if this was a serious project or not, I started to develop it regardless since I can't just judge from the very beginning if it's going to be on Steam or not,
but one thing is for certain is that I wanted some kind of free game on Steam.

This post is long enough, future development posts coming up later! Thanks for reading!
        `
    }
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