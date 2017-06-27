$(function() {
    var angle = 0;
    setInterval(function() {
        angle += 1;
        $("#img").rotate(angle);
    }, 50);
});
