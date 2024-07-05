document.addEventListener('DOMContentLoaded', function() {
    const ballContainer = document.getElementById('ball-container');
    const balls = [];
    const numBalls = 50;
    const colors = ['#ee7752', '#e73c7e', '#23a6d5', '#23d5ab'];
    let draggedBall = null;
  
    function createBall() {
      const ball = document.createElement('div');
      ball.classList.add('ball');
      const size = Math.random() * 20 + 10;
      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.left = `${Math.random() * 100}%`;
      ball.style.top = `${Math.random() * 100}%`;
      ball.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      const speed = {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      };
      
      balls.push({ element: ball, speed });
      ballContainer.appendChild(ball);
  
      // Add event listeners for dragging
      ball.addEventListener('mousedown', startDragging);
      ball.addEventListener('touchstart', startDragging);
    }
  
    function startDragging(e) {
      e.preventDefault();
      draggedBall = e.target;
      document.addEventListener('mousemove', drag);
      document.addEventListener('touchmove', drag);
      document.addEventListener('mouseup', stopDragging);
      document.addEventListener('touchend', stopDragging);
    }
  
    function drag(e) {
      if (!draggedBall) return;
      
      const x = (e.clientX || e.touches[0].clientX) - draggedBall.offsetWidth / 2;
      const y = (e.clientY || e.touches[0].clientY) - draggedBall.offsetHeight / 2;
      
      draggedBall.style.left = `${x}px`;
      draggedBall.style.top = `${y}px`;
    }
  
    function stopDragging() {
      draggedBall = null;
      document.removeEventListener('mousemove', drag);
      document.removeEventListener('touchmove', drag);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('touchend', stopDragging);
    }
  
    function moveBalls() {
      balls.forEach(ball => {
        if (ball.element === draggedBall) return;
  
        const rect = ball.element.getBoundingClientRect();
        
        if (rect.left <= 0 || rect.right >= window.innerWidth) {
          ball.speed.x *= -1;
        }
        
        if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
          ball.speed.y *= -1;
        }
        
        ball.element.style.left = `${rect.left + ball.speed.x}px`;
        ball.element.style.top = `${rect.top + ball.speed.y}px`;
      });
      
      requestAnimationFrame(moveBalls);
    }
  
    for (let i = 0; i < numBalls; i++) {
      createBall();
    }
  
    moveBalls();
  });