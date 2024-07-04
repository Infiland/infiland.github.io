document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('random-image-container');
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imagePath = `gameimages/asteroids/asteroids/1/${randomNumber}.gif`;
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "Asteroids";
    
    imageContainer.appendChild(img);
});