var controller = new ScrollMagic.Controller();

var tween = TweenMax.to("#animate img", 1, {left: "0%"});

var scene = new ScrollMagic.Scene({triggerElement: "#animate", duration: "100%"})
                .setTween(tween)
                .addTo(controller);
