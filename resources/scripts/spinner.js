var data = {};
data.cringeStorage = 0;
$(function() {
    rotationAni();
    $(".spinnerImg").click(function(event) {

        data.cringeStorage += 1;
        $("#cringeStorage").html(data.cringeStorage);
    });

});

function rotationAni() {
    var cringeStorOld = 0;
    var cringeStorNew = 0;
    var angle = 0;
    setInterval(function() {
        angle = data.cringeStorage;
        $(".spinnerImg").rotate(angle);
    }, 50);

    setInterval(function() {
        cringeStorNew = $("#cringeStorage").html();
        data.cringePerSec = cringeStorNew - cringeStorOld;
        $("#cringeMeter").html(data.cringePerSec);
        cringeStorOld = $("#cringeStorage").html();
    }, 1000);
}
