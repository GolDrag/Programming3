class Gishatich {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.directions = [];
        this.index = 3;
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
    yntrelVandak(ch, ch2) {
        this.stanalNorKordinatner()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == ch2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    sharjvel() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0, 0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
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
        var datarkvandakner = this.yntrelVandak(2, 5);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            matrix[this.y][this.x] = 0;
            matrix[norvandak[1]][norvandak[0]] = 3;
            this.x = norvandak[0];
            this.y = norvandak[1];
            this.energy = this.energy + 2
            for (var c in xotakerner) {

                if (xotakerner[c].x == this.x && xotakerner[c].y == this.y) {
                    xotakerner.splice(c, 1);
                    break;
                }
            }
            for (var c in napastakner) {

                if (napastakner[c].x == this.x && napastakner[c].y == this.y) {
                    napastakner.splice(c, 1);
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
            var gishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichner.push(gishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        gishatichner.splice(i, 1);

    }

}