const flame = document.querySelector('.flame');

// Function to animate the flame
function animateFlame() {
  flame.animate(
    [
      { transform: 'translateY(-2px)' },
      { transform: 'translateY(2px)' },
    ],
    {
      duration: 200,
      iterations: Infinity,
      direction: 'alternate',
    }
  );
}

animateFlame();
