/*class Vagr {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 25;
        this.directions = [];
        this.index = 4;
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
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;
        }
        else {
            this.energy--;
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(3);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy = this.energy + 4
            for (var c in gishatichner) {

                if (gishatichner[c].x == this.x && gishatichner[c].y == this.y) {
                    gishatichner.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        this.energy = 20;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var vagr = new Vagr(norVandak[0], norVandak[1]);
            vagrer.push(vagr);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        vagrer.splice(i, 1);

    }

}*/
class Vagr extends KendaniEak {
    constructor(x, y, index) {
        super(x, y, index);
        this.tariq = 0
        this.energy=25
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
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy--;
        }
        else {
            this.energy--;
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(3);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 4;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy = this.energy + 4
            for (var c in gishatichner) {

                if (gishatichner[c].x == this.x && gishatichner[c].y == this.y) {
                    gishatichner.splice(c, 1);
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    bazmanal() {
        this.energy = 20;
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var vagr = new Vagr(norVandak[0], norVandak[1],4);
            vagrer.push(vagr);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        vagrer.splice(i, 1);

    }

}