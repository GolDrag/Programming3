class Bomber extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 0
        this.multiply = 0
        this.tariq=0
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var norvandak = random(this.yntrelVandak(0));
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 10;
            this.x = norvandak[0];
            this.y = norvandak[1];
        }
        else {

        }
    }
    eat() {
        this.multiply++
        if (this.multiply == 1) {
            this.multiply = 0
            this.stanalNorKordinatner();
            var norvandak = random(this.yntrelVandak(1));
            if (norvandak) {
                matrix[this.y][this.x] = 0;
                matrix[norvandak[1]][norvandak[0]] = 10;
                this.x = norvandak[0];
                this.y = norvandak[1];
                this.energy++
                for (var c in grassArr) {
                    if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                        grassArr.splice(c, 1);
                        break;
                    }
                }
            }
            else {
                this.sharjvel();
            }
        }
    }
    boom() {
        this.stanalNorKordinatner();
        this.energy = 0
        this.tariq++
        for (var i = 0; i < 8; i++) {
            if (this.directions[i][0] >= 0 && this.directions[i][0] < matrix[0].length && this.directions[i][1] >= 0 && this.directions[i][1] < matrix.length) {
                if (matrix[this.directions[i][1]][this.directions[i][0]] != 0) {
                    if (matrix[this.directions[i][1]][this.directions[i][0]] == 1) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                        for (var c in grassArr) {
                            if (grassArr[c].x == this.directions[i][1] && grassArr[c].y == this.directions[i][0]) {
                                grassArr.splice(c, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 2||matrix[this.directions[i][1]][this.directions[i][0]] == 2.1) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                        for (var c in xotakerner) {
                            if (xotakerner[c].x == this.directions[i][1] && xotakerner[c].y == this.directions[i][0]) {
                                xotakerner.splice(c, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 3||matrix[this.directions[i][1]][this.directions[i][0]] == 3.1) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                        for (var c in gishatichner) {
                            if (gishatichner[c].x == this.directions[i][1] && gishatichner[c].y == this.directions[i][0]) {
                                gishatichner.splice(c, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 4||matrix[this.directions[i][1]][this.directions[i][0]] == 4.1) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                        for (var c in vagrer) {
                            if (vagrer[c].x == this.directions[i][1] && vagrer[c].y == this.directions[i][0]) {
                                vagrer.splice(c, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 5||matrix[this.directions[i][1]][this.directions[i][0]] == 5.1) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                        for (var c in napastakner) {
                            if (napastakner[c].x == this.directions[i][1] && napastakner[c].y == this.directions[i][0]) {
                                napastakner.splice(c, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[this.directions[i][1]][this.directions[i][0]] == 0) {
                        matrix[this.directions[i][1]][this.directions[i][0]] = 0
                    }
                    else {

                    }
                }
            }

        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        bombers.splice(i, 1);

    }
}