var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("peek.jpg", 1, {
    x: "100%"
});

var scene = new ScrollMagic.Scene({triggerElement: "peek.jpg", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
