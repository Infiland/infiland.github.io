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
    },
    {
        id: 3,
        title: "GM2Godot",
        date: "6th August 2024",
        content: `
### I am on a great mission!

Wow, first blog in a while, took me a month!

Anyway, I've had my github up and running for a year or so, developing amazing games, but so far I was only putting up code of my games, which isn't inherently bad, but I wanted to put out some kind of
a tool. But there are so many useful tools out there!

It is hard to come up with an original concept, if you wanted to make an image editor program, you have Photoshop, or GIMP. If you wanted to make your own audio program, you
have audacity, and so on...

So I wanted to make a tool that benefits me and you guys, and that is GM2Godot!

<img src="https://github.com/user-attachments/assets/335ec730-9bdb-4500-ac6c-5690d386a185" alt="GM2Godot" width="640" height="360">

## I am developing GM2Godot

GM2Godot is my very first open source project that isn't actually a game but rather a tool!

Basically the idea of this is for users being able to convert GameMaker projects to Godot.
Sounds pretty impossible considering it would mean I would have to transpile GML to GDScript, which is true.

However for now I was thinking to only port assets, so sprites, sounds etc, and the easy stuff.

## What it is and what it isn't
When presenting this tool, I've gotten a couple of questions what the tool really is and what it is supposed to be, so I'll break it down.

### GM2Godot is:

- A tool that ports assets from GameMaker to Godot
- Is for people who don't want to port the GameMaker project to Godot from scratch
- Not perfect. It will make mistakes.

### GM2Godot isn't:

- For people who expect everything will work perfectly.
- A compiler that can seamlessly transpile GML to GDScript (yet)
- This isn't a tool which converts exported GML projects to Godot, use UndertaleToolMod instead

It is open source on github, and written in python to make it easy as possible to work with, [check it out](https://github.com/Infiland/GM2Godot)
        `
    },
    {
        id: 4,
        title: "Website Rebranding",
        date: "16th November 2024",
        content: `
## No blogs in 3 months, what is up with that?

I like writing sometimes, and I do want to write some thoughts and pages, but it is impossible doing so in this website without major hassle.

I thought the solution for a website which is static would be to have a 'blog.js' file and write all of my blogs down, but recently I was thinking to
more and more move my website to be dynamic. Imagine posts like this except you can post comments!

Before I start, I'm going to talk about what I plan to use in the future, but these tools/apps/platforms did not sponsor me in any way.

## New website from the ground up

I was thining to remake this website to be more than just a static website, now with playable games, blogs with comments, donation page, tools, portfolio so I could get a job or
just perhaps promote it as a freelancer to work for clients, and an ability for other moderators to post news. I would also like to make blogs using my own website, 
so a tool would be integrated to write .md based blogs using my own tool on my own website.

The tools I am thinking to use for all of this is bootstrap, php, laravel, mysql, claude for AI, and various APIs, which would give me much more freedom.

## Different Domain

A different domain name would be needed for this change, I wouldn't have infiland.github.io because it is very ugly. I've settled already on a new domain 
with friends and collegues, and it is so good that I won't share it until I am ready to publish the website. I've got advice that I should get a name from namecheap, I've tested
various domain websites like goDaddy but I've always found namecheap to be a good candidate for me, so I've settled for that.

## Web Hosting

This one is much more difficult to find, I need a reliable web hosting which doesn't increase the price because of bloating deals with useless perks.
Hostinger, Siteground and Bluehost seem like okay options for me, but sorta rely on wordpress too much, which sounds boring to use.

## Playable Games

I want demos and free games to be playable on my website, I don't think this is too big of a deal since the games are really easy to run, and only use HTML, CSS AND JS,
which can be already ran on static websites.

## Tools

I would make quick tools like translation tools, blog and personal tools so I can accelerate my productivity.

## Donation Page

I want to make a website which has a donation page without youtube just taking my money away. I am thinking to setup stripe and paypal APIs, and then give
perks to people who have donated.

## When is it done?

I'm going to aim for 2025, see if I can port all of the images on the website, all of the blogs, everything, and make it a 100X better!
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
    const postsToShow = blogPosts.slice(0, 3);
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

if (document.getElementById('blog-posts')) {
    document.addEventListener('DOMContentLoaded', displayBlogPosts);
} else if (document.getElementById('blog-post-content')) {
    document.addEventListener('DOMContentLoaded', displaySinglePost);
}