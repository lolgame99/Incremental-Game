var data = {
    cringeStorage: 0,
    cringePerSec: 0,
    cringeUpgrade: {
        hand: {
            basePrice: 10,
            count: 0,
            price: 10
        },
        child: {
            basePrice: 100,
            count: 0,
            price: 100
        },
        slave: {
            basePrice: 1000,
            count: 0,
            price: 1000
        },
        builder: {
            basePrice: 5000,
            count: 0,
            price: 5000
        },
        engine: {
            basePrice: 10000,
            count: 0,
            price: 10000
        },
        pressure: {
            basePrice: 100000,
            count: 0,
            price: 100000
        },
        hole: {
            basePrice: 1000000,
            count: 0,
            price: 1000000
        },
    }
};


$(function() {
    rotationAni();
    $(".spinnerImg").click(function(event) {
        data.cringeStorage += 1;
    });

    $("#bHand").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.hand.price) {
            data.cringeUpgrade.hand.count += 1;
            data.cringeStorage -= data.cringeUpgrade.hand.price;
            data.cringeUpgrade.hand.price = Math.ceil(data.cringeUpgrade.hand.basePrice * Math.pow(1.5, data.cringeUpgrade.hand.count));

            $("#handCounter").html(data.cringeUpgrade.hand.count);
            $("#handPrice").html(data.cringeUpgrade.hand.price);
        }
    });

    $("#bChild").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.child.price) {
            data.cringeUpgrade.child.count += 1;
            data.cringeStorage -= data.cringeUpgrade.child.price;
            data.cringeUpgrade.child.price = Math.ceil(data.cringeUpgrade.child.basePrice * Math.pow(1.5, data.cringeUpgrade.child.count));

            $("#childCounter").html(data.cringeUpgrade.child.count);
            $("#childPrice").html(data.cringeUpgrade.child.price);
        }
    });

    $("#bSlave").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.slave.price) {
            data.cringeUpgrade.slave.count += 1;
            data.cringeStorage -= data.cringeUpgrade.slave.price;
            data.cringeUpgrade.slave.price = Math.ceil(data.cringeUpgrade.slave.basePrice * Math.pow(1.5, data.cringeUpgrade.slave.count));

            $("#slaveCounter").html(data.cringeUpgrade.slave.count);
            $("#slavePrice").html(data.cringeUpgrade.slave.price);
        }
    });

    $("#bBuilder").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.builder.price) {
            data.cringeUpgrade.builder.count += 1;
            data.cringeStorage -= data.cringeUpgrade.builder.price;
            data.cringeUpgrade.builder.price = Math.ceil(data.cringeUpgrade.builder.basePrice * Math.pow(1.5, data.cringeUpgrade.builder.count));

            $("#builderCounter").html(data.cringeUpgrade.builder.count);
            $("#builderPrice").html(data.cringeUpgrade.builder.price);
        }
    });

    $("#bEngine").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.engine.price) {
            data.cringeUpgrade.engine.count += 1;
            data.cringeStorage -= data.cringeUpgrade.engine.price;
            data.cringeUpgrade.engine.price = Math.ceil(data.cringeUpgrade.engine.basePrice * Math.pow(1.5, data.cringeUpgrade.engine.count));

            $("#engineCounter").html(data.cringeUpgrade.engine.count);
            $("#enginePrice").html(data.cringeUpgrade.engine.price);
        }
    });

    $("#bPressure").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.pressure.price) {
            data.cringeUpgrade.pressure.count += 1;
            data.cringeStorage -= data.cringeUpgrade.pressure.price;
            data.cringeUpgrade.pressure.price = Math.ceil(data.cringeUpgrade.pressure.basePrice * Math.pow(1.5, data.cringeUpgrade.pressure.count));

            $("#pressureCounter").html(data.cringeUpgrade.pressure.count);
            $("#pressurePrice").html(data.cringeUpgrade.pressure.price);
        }
    });

    $("#bHole").click(function(event) {
        if (data.cringeStorage >= data.cringeUpgrade.hole.price) {
            data.cringeUpgrade.hole.count += 1;
            data.cringeStorage -= data.cringeUpgrade.hole.price;
            data.cringeUpgrade.hole.price = Math.ceil(data.cringeUpgrade.hole.basePrice * Math.pow(1.5, data.cringeUpgrade.hole.count));

            $("#holeCounter").html(data.cringeUpgrade.hole.count);
            $("#holePrice").html(data.cringeUpgrade.hole.price);
        }
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
    }, 50);
}

function automaticCringe() {
    data.cringeStorage += data.cringeUpgrade.hand.count * 1;
    data.cringeStorage += data.cringeUpgrade.child.count * 10;
    data.cringeStorage += data.cringeUpgrade.slave.count * 50;
    data.cringeStorage += data.cringeUpgrade.builder.count * 500;
    data.cringeStorage += data.cringeUpgrade.engine.count * 5000;
    data.cringeStorage += data.cringeUpgrade.pressure.count * 20000;
    data.cringeStorage += data.cringeUpgrade.hole.count * 50000;
}
