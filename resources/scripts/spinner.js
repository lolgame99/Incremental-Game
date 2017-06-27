var data = {};
data.cringeStorage = 0;
data.cringePerSec = 0;
data.cringeUpgrade = {};
data.cringeUpgrade.hand = 0;
data.cringeUpgrade.slave = 0;

$(function() {
    rotationAni();
    $(".spinnerImg").click(function(event) {
        data.cringeStorage += 1;
    });

    $(".bHand").click(function(event) {
        data.cringeUpgrade.hand += 1;
    });

    $(".bSlave").click(function(event) {
        data.cringeUpgrade.slave += 1;
    });
});

function rotationAni() {
    var cringeStorOld = 0;
    var cringeStorNew = 0;
    var angle = 1;

    setInterval(function() {
        cringeStorOld = data.cringeStorage;
        /*NOTE: ADD automatic cringe generation here*/
        automaticCringe();
        cringeStorNew = data.cringeStorage;
        data.cringePerSec = cringeStorNew - cringeStorOld;
        $("#cringeMeter").html(data.cringePerSec);

    }, 1000);

    setInterval(function() {
        var rate = 0;
        rate = Number(Math.ceil(data.cringePerSec * 0.05));
        angle += rate;
        $(".spinnerImg").rotate(angle);

        $("#cringeStorage").html(data.cringeStorage);
        $("#handCounter").html(data.cringeUpgrade.hand);
        $("#slaveCounter").html(data.cringeUpgrade.slave);
    }, 50);
}

function automaticCringe() {
    data.cringeStorage += data.cringeUpgrade.hand;
    data.cringeStorage += data.cringeUpgrade.slave * 5;
}
