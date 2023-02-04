var pass = document.getElementById('inp');

function gen() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passL = 16;
    var pass = "";
    for (var i = 0;i <= passL;i++) {
        var rnd = Math.floor(Math.random() * chars.length);
        pass += chars.substring(rnd,rnd + 1);
    }
    document.getElementById('inp').innerHTML = pass;
    document.getElementById('prog').style.visibility = "visible";
    document.getElementById('p2').style.visibility = "visible"; 
}

function copy() {
    var copyT = document.getElementById('inp');
    copyT.select();
    document.execCommand('copy');
}


function dark(){
    document.getElementById('bod').style.backgroundColor = "#0c0c0c";
    document.getElementById('d1').style.backgroundColor = "#131212";
    document.getElementById('g1').style.backgroundColor = "white";
    document.getElementById('g1').style.color = "#00ff84";
    document.getElementById('c1').style.backgroundColor = "white";
    document.getElementById('c1').style.color = "blue";
    document.getElementById('inp').style.backgroundColor = "black";
    document.getElementById('inp').style.color = "#3ded97";
    document.getElementById('h1').style.color = "white";
    document.getElementById('h2').style.color = "white";
    document.getElementById('p2').style.color = "#3ded97";
    document.getElementById('b1').style.backgroundColor = "rgb(2, 2, 24)";
    document.getElementById('b2').style.backgroundColor = "rgb(2, 2, 24)";
    document.getElementById('i1').style.color = "#3ded97";
    document.getElementById('i2').style.color = "#3ded97";
}

function light() {
    document.getElementById('bod').style.backgroundColor = "white";
    document.getElementById('d1').style.backgroundColor = "white";
    document.getElementById('g1').style.backgroundColor = "#03a113";
    document.getElementById('g1').style.color = "white";
    document.getElementById('c1').style.backgroundColor = "blue";
    document.getElementById('c1').style.color = "white";
    document.getElementById('inp').style.backgroundColor = "aliceblue";
    document.getElementById('inp').style.color = "black";
    document.getElementById('h1').style.color = "black";
    document.getElementById('h2').style.color = "black";
    document.getElementById('p2').style.color = "black";
    document.getElementById('b1').style.backgroundColor = "rgb(1, 1, 32)";
    document.getElementById('b2').style.backgroundColor = "rgb(1, 1, 32)";
    document.getElementById('i1').style.color = "gold";
    document.getElementById('i2').style.color = "gold";
}