class Vagr extends KendaniEak {
    constructor(x, y, index, xy) {
        super(x, y, index);
        this.tariq = 0
        this.index = index
        this.energy = 25
        this.xy = xy
        this.ws=0
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
        this.ws++
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(0);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            if (this.ws>=2&&season=="winter") {
                if (this.xy == 4) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
                else if (this.xy == 4.1) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4.1;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
            }
            else if (this.ws>=1&&season=="winter"&&rain==false) {
                if (this.xy == 4) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
                else if (this.xy == 4.1) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4.1;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
            }
            else if (this.ws>=2&&rain==true) {
                if (this.xy == 4) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
                else if (this.xy == 4.1) {
                    matrix[this.y][this.x] = 0;
                    matrix[norvandak[1]][norvandak[0]] = 4.1;
                    this.x = norvandak[0];
                    this.y = norvandak[1];
                    this.energy--;
                }
            }
            
        }
        else {
        }
    }
    eat() {
        this.stanalNorKordinatner();
        var datarkvandakner = this.yntrelVandak(3);
        var norvandak = random(datarkvandakner);
        if (norvandak) {
            if (this.xy == 4) {
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
            else if (this.xy == 4.1) {
                matrix[this.y][this.x] = 0;
                matrix[norvandak[1]][norvandak[0]] = 4.1;
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
        }
        else {
            this.sharjvel();
        }
    }
    bazmanal() {
        this.multiply++
        if (this.xy == 4) {
            var norVandak = random(this.yntrelVandak(0));
            var partner = random(this.yntrelVandak(4.1));
            if (norVandak && this.multiply >= 15 && partner) {
                this.energy = 25;
                this.multiply=0
                var s = Math.floor(Math.random() * 100)
                if (s < 50) {
                    var vagr = new Vagr(norVandak[0], norVandak[1], 4, 4);
                    vagrer.push(vagr);
                    matrix[norVandak[1]][norVandak[0]] = 4;
                }
                else if (s > 50) {
                    var vagr = new Vagr(norVandak[0], norVandak[1], 4, 4.1);
                    vagrer.push(vagr);
                    matrix[norVandak[1]][norVandak[0]] = 4.1;
                }
            }
        }
        else if (this.xy == 4.1) {
            var norVandak = random(this.yntrelVandak(0));
            var partner = random(this.yntrelVandak(4));
            if (norVandak && this.multiply >= 15 && partner) {
                this.energy = 25;
                this.multiply=0
                var s = Math.floor(Math.random() * 100)
                if (s < 50) {
                    var vagr = new Vagr(norVandak[0], norVandak[1], 4, 4);
                    vagrer.push(vagr);
                    matrix[norVandak[1]][norVandak[0]] = 4;
                }
                else if (s > 50) {
                    var vagr = new Vagr(norVandak[0], norVandak[1], 4, 4.1);
                    vagrer.push(vagr);
                    matrix[norVandak[1]][norVandak[0]] = 4.1;
                }

            }
        }
    }
    mahanal(i) {
        matrix[this.y][this.x] = 0;
        vagrer.splice(i, 1);
    }
}