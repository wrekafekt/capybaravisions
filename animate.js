document.addEventListener('DOMContentLoaded', (event) => {
    var controller = new ScrollMagic.Controller();

    var tween = TweenMax.to("#animate img", 1, {left: "0%"});

// Create a new ScrollMagic Scene
    var scene = new ScrollMagic.Scene({
      triggerElement: '.middle-image', // Specifies the element that triggers the animation
      duration: '50%', // The animation will last for 50% of the scroll duration
      triggerHook: 0.5, // The animation will start when the trigger element hits the middle of the viewport
})
.setPin('.middle-image') // Pins the element for the duration of the animation
.addTo(controller); // Adds the scene to the controller

// Use the onEnter event to start the animation
scene.on('enter', function() {
  document.querySelector('.middle-image').style.transform = 'translateX(50vw)';
});
