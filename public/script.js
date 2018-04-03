var grassArr = [];
var s = prompt("Write Any Season")
var m
if (s == "winter" || s == "Winter") {
    m = 150
}
else if (s == "summer" || s == "Summer") {
    m = 50
}
else if (s == "autumn" || s == "Autumn" || s == "Fall" || s == "fall") {
    m = 100
}
else if (s == "" || s == "spring" || s == "Spring") {
    m = 0
}
var season
var rain
var side = 30;
var matrix = [

];
var gishatichner = []
var bombers = []
var xotakerner = []

var vagrer = []
var napastakner = []

function setup() {

    frameRate(5);
    createCanvas(windowWidth, windowHeight);
    background('#acacac');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {

            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 2.1) {
                xotakerner.push(new Xotaker(x, y, 2, matrix[y][x]));

            }
            else if (matrix[y][x] == 3 || matrix[y][x] == 3.1) {
                gishatichner.push(new Gishatich(x, y, 3, matrix[y][x]))

            }
            else if (matrix[y][x] == 4 || matrix[y][x] == 4.1) {
                vagrer.push(new Vagr(x, y, 4, matrix[y][x]))
            }
            else if (matrix[y][x] == 5 || matrix[y][x] == 5.1) {
                napastakner.push(new Napastak(x, y, 5, matrix[y][x]))
            }
            else if (matrix[y][x] == 10) {
                bombers.push(new Bomber(x, y, 10))
            }
        }
    }


}



function draw() {

    m++
    if (m >= 0 && m < 50) {
        season = "spring"
        if (ss > 0 && ss < 20) {
            rain = true
        }
        else {
            rain = false
        }
        if (season == "spring" && grassArr.length == 0) {
            
            var a = Math.floor(Math.random() * g)
            var b = Math.floor(Math.random() * h)
            for (let i = 0; i <2; i++) {
                if (matrix[a][b]==0) {
                matrix[a][b]=1
                grassArr.push(new Grass(a, b, 1));
                }
            }    
        }
    }
    else if (m >= 50 && m < 100) {
        season = "summer"
        var ss = Math.floor(Math.random() * 100)
        if (ss > 0 && ss < 10) {
            rain = true
        }
        else {
            rain = false
        }
    }
    else if (m >= 100 && m < 150) {
        season = "autumn"
        var ss = Math.floor(Math.random() * 100)
        if (ss > 0 && ss < 30) {
            rain = true
        }
        else {
            rain = false
        }
    }
    else if (m >= 150 && m <= 200) {
        season = "winter"
        if (m == 200) {
            m = 0
        }
    }

    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (season == "spring") {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "summer") {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "autumn") {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "winter") {
                    fill("white");
                    rect(x * side, y * side, side, side);

                }

            }
            else if (matrix[y][x] == 0) {
                fill(175, 129, 82);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 12) {
                fill(139, 69, 19);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.1) {
                fill(165, 42, 42);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3 || matrix[y][x] == 13) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4 || matrix[y][x] == 14) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.1) {
                fill("#FF4500");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5 || matrix[y][x] == 15) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5.1) {
                fill("hbghb");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.1) {
                fill("#DC143C");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10 || matrix[y][x] == 20) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("white");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 11) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 25) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0 || gishatichner[i].tariq == 25) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in vagrer) {
        vagrer[i].eat();
    }
    for (var i in vagrer) {
        if (vagrer[i].energy >= 28) {
            vagrer[i].bazmanal()
        }
        else if (vagrer[i].energy <= 0 || vagrer[i].tariq == 40) {
            vagrer[i].mahanal(i)
        }
    }

    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        
        if (xotakerner[i].energy >= 16) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0 ) {
            xotakerner[i].mahanal(i);
        }
    }
    for (var i in napastakner) {
        napastakner[i].eat();

    }
    for (var i in napastakner) {
        if (napastakner[i].energy >= 13) {
            napastakner[i].bazmanal();
        }
        else if (napastakner[i].energy <= 0 || napastakner[i].tariq == 10) {

            napastakner[i].mahanal(i);
        }
    }
    for (var i in bombers) {
        bombers[i].eat()
    }
    for (var i in bombers) {
        if (bombers[i].energy >= 5) {
            var f = 0
            bombers[i].boom()

        }
        if (bombers[i].tariq == 50) {
            bombers[i].mahanal
        }
    }

    if (frameCount >= 100&&grassArr.length >= 0 && xotakerner.length <= 1 && gishatichner.length <= 1 && vagrer.length <= 1 && napastakner.length <= 1) {
        m = 201
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                

                    if (matrix[y][x] != 0) {
                        if (matrix[y][x] == 1) {
                            matrix[y][x] = 0
                            for (var c in grassArr) {
                                if (grassArr[c].x == y && grassArr[c].y == x) {
                                    grassArr.splice(c, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 2 || matrix[y][x] == 2.1) {
                            matrix[y][x] = 0
                            for (var c in xotakerner) {
                                if (xotakerner[c].x == y && xotakerner[c].y == x) {
                                    xotakerner.splice(c, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 3 || matrix[y][x] == 3.1) {
                            matrix[y][x] = 0
                            for (var c in gishatichner) {
                                if (gishatichner[c].x == y && gishatichner[c].y == x) {
                                    gishatichner.splice(c, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 4 || matrix[y][x] == 4.1) {
                            matrix[y][x] = 0
                            for (var c in vagrer) {
                                if (vagrer[c].x == y && vagrer[c].y == x) {
                                    vagrer.splice(c, 1);
                                    break;
                                }
                            }
                        }
                        else if (matrix[y][x] == 5 || matrix[y][x] == 5.1) {
                            matrix[y][x] = 0
                            for (var c in napastakner) {
                                if (napastakner[c].x == y && napastakner[c].y == x) {
                                    napastakner.splice(c, 1);
                                    break;
                                }
                            }
                        }
                        else {

                        }
                        side = 50
                        matrix = [
                        ]
                        var aaa = [7, 10, 3, 7, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 2, 10, 3, 111, 7, 7, 7, 7]
                        var bbb = [2, 7, 7, 11, 7, 7, 5, 7, 11, 7, 7, 5, 111, 7, 7, 7, 5, 111, 7, 5, 7, 7, 7, 7, 7, 7, 7]
                        var ccc = [5, 7, 7, 7, 7, 7, 2, 7, 3, 7, 7, 2, 7, 3, 7, 2, 7, 13, 7, 4, 7, 7, 7, 7, 7, 7, 7]
                        var ddd = [4, 7, 4, 5, 7, 7, 10, 12, 10, 7, 7, 10, 7, 7, 10, 7, 7, 11, 7, 11, 3, 10, 2, 7, 7, 7, 7]
                        var eee = [11, 7, 7, 2, 7, 3, 7, 7, 7, 5, 7, 3, 7, 7, 7, 7, 7, 2, 7, 3, 7, 7, 7, 7, 7, 7, 7]
                        var fff = [7, 3, 10, 7, 7, 11, 7, 7, 7, 4, 7, 11, 7, 7, 7, 7, 7, 5, 7, 10, 2, 5, 4, 7, 7, 7, 7]
                        var ggg = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
                        var hhh = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
                        var iii = [7, 7, 7, 7, 7, 7, 4, 11, 7, 7, 7, 11, 7, 7, 7, 2, 7, 2, 10, 3, 11, 7, 4, 11, 7, 7, 7]
                        var jjj = [7, 7, 7, 7, 7, 5, 7, 7, 3, 7, 7, 3, 7, 7, 7, 10, 7, 5, 7, 7, 7, 7, 5, 7, 3, 7, 7]
                        var kkk = [7, 7, 7, 7, 2, 7, 7, 7, 7, 10, 7, 7, 10, 7, 3, 7, 7, 4, 7, 7, 7, 7, 2, 7, 10, 7, 7]
                        var lll = [7, 7, 7, 7, 10, 7, 7, 7, 7, 2, 7, 7, 2, 7, 111, 7, 7, 11,3, 10, 2, 7, 10, 2, 7, 7, 7]
                        var mmm = [7, 7, 7, 7, 7, 3, 7, 7, 5, 7, 7, 7, 7, 5, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 5, 7, 7]
                        var nnn = [7, 7, 7, 7, 7, 7, 11, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 10, 2, 5, 4, 7, 11, 7, 7, 4, 7]
                        var ooo = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7]
                        matrix.push(aaa)
                        matrix.push(bbb)
                        matrix.push(ccc)
                        matrix.push(ddd)
                        matrix.push(eee)
                        matrix.push(fff)
                        matrix.push(ggg)
                        matrix.push(hhh)
                        matrix.push(iii)
                        matrix.push(jjj)
                        matrix.push(kkk)
                        matrix.push(lll)
                        matrix.push(mmm)
                        matrix.push(nnn)
                        matrix.push(ooo)
                    }

                

            }

        }



    }


}
var g = 10

var h = 10
for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < h; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 10; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * h)
    matrix[a][b] = 1
}

for (var i = 0; i < 8; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * h)
    matrix[a][b] = 2
    var ss = Math.floor(Math.random() * 100)
    if (ss < 50) {
        matrix[a][b] = 2
    }
    else if (ss > 50) {
        matrix[a][b] = 2.1
    }
}


    for (var i = 0; i < 5; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss <50) {
          matrix[a][b] = 3
      }
      else if (ss >50) {
          matrix[a][b] = 3.1
      }}
      
    for (var i = 0; i < 4; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss <50) {
          matrix[a][b] = 4
      }
      else if (ss >50) {
          matrix[a][b] = 4.1
    }
    }
    
    for (var i = 0; i < 6; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss < 50) {
          matrix[a][b] = 5
      }
      else if (ss > 50) {
          matrix[a][b] = 5.1
      }
    }
    for (var i = 0; i < 1; i++) {
        var a = Math.floor(Math.random() * g)
        var b = Math.floor(Math.random() * h)
        matrix[a][b] = 10
    }

