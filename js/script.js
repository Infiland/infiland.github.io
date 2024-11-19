document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('random-image-container');
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const imagePath = `gameimages/asteroids/asteroids/1/${randomNumber}.gif`;
    
    const img = document.createElement('img');
    img.src = imagePath;
    img.alt = "Asteroids";
    
    imageContainer.appendChild(img);

        const scrollbarContainer = document.getElementById('scrollbar-container');
        const scrollThumb = document.createElement('div');
        scrollThumb.id = 'scroll-thumb';
        scrollbarContainer.appendChild(scrollThumb);
      
        function updateScrollThumb() {
          const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
          const thumbHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight;
          
          scrollThumb.style.height = `${thumbHeight}px`;
          scrollThumb.style.top = `${scrollPercentage}%`;
        }
      
        window.addEventListener('scroll', updateScrollThumb);
        window.addEventListener('resize', updateScrollThumb);
        
        updateScrollThumb();
      
        let isDragging = false;
        let startY;
        let startScroll;
      
        scrollThumb.addEventListener('mousedown', function(e) {
          isDragging = true;
          startY = e.clientY - scrollThumb.offsetTop;
          startScroll = window.scrollY;
          document.addEventListener('mousemove', onDrag);
          document.addEventListener('mouseup', stopDrag);
        });
      
        function onDrag(e) {
          if (!isDragging) return;
          const y = e.clientY - scrollbarContainer.getBoundingClientRect().top;
          const scrollPercentage = y / window.innerHeight;
          window.scrollTo(0, scrollPercentage * (document.documentElement.scrollHeight - window.innerHeight));
        }
      
        function stopDrag() {
          isDragging = false;
          document.removeEventListener('mousemove', onDrag);
          document.removeEventListener('mouseup', stopDrag);
        }


});