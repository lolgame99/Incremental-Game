var rotation = function() {
    $("#img").rotate({
        angle: 0,
        animateTo: 360,
        callback: rotation
    });
}
rotation();
