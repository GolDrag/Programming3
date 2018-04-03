class Napastak extends KendaniEak {
  constructor(x, y, index, xy) {
    super(x, y, index)
    this.tariq = 0
    this.energy = 10
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
  stanalNorKordinatnerSharj() {
    this.directions = [
      [this.x - 2, this.y - 2],
      [this.x, this.y - 2],
      [this.x + 2, this.y - 2],
      [this.x - 2, this.y],
      [this.x + 2, this.y],
      [this.x - 2, this.y + 2],
      [this.x, this.y + 2],
      [this.x + 2, this.y + 2]
    ];
  }
  yntrelVandakSharj(ch) {
    this.stanalNorKordinatnerSharj()
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
    this.tariq++
    this.stanalNorKordinatnerSharj();
    var datarkvandakner = this.yntrelVandakSharj(0);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      if (season=="winter"&&this.ws>=3) {
      if (this.xy == 5) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 5;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy--;
      }
      else if (this.xy == 5.1) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 5.1;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy--;
      }
      }
      else if (season!="winter"&&this.ws>=1&&rain==false) {
        if (this.xy == 5) {
          matrix[this.y][this.x] = 0;
          matrix[norvandak[1]][norvandak[0]] = 5;
          this.x = norvandak[0];
          this.y = norvandak[1];
          this.energy--;
        }
        else if (this.xy == 5.1) {
          matrix[this.y][this.x] = 0;
          matrix[norvandak[1]][norvandak[0]] = 5.1;
          this.x = norvandak[0];
          this.y = norvandak[1];
          this.energy--;
        }
      }
      else if (rain==true&&this.ws>=2) {
        if (this.xy == 5) {
          matrix[this.y][this.x] = 0;
          matrix[norvandak[1]][norvandak[0]] = 5;
          this.x = norvandak[0];
          this.y = norvandak[1];
          this.energy--;
        }
        else if (this.xy == 5.1) {
          matrix[this.y][this.x] = 0;
          matrix[norvandak[1]][norvandak[0]] = 5.1;
          this.x = norvandak[0];
          this.y = norvandak[1];
          this.energy--;
        }
      }

    }
  }
  eat() {
    this.tariq++
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(1);
    var norvandak = random(datarkvandakner);

    if (norvandak) {
      if (this.xy == 5) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 5;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy++;
        for (var c in grassArr) {
          if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
            grassArr.splice(c, 1);
            break;

          }
        }
      }
      else if (this.xy == 5.1) {
        matrix[this.y][this.x] = 0;
        matrix[norvandak[1]][norvandak[0]] = 5.1;
        this.x = norvandak[0];
        this.y = norvandak[1];
        this.energy++;
        for (var c in grassArr) {
          if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
            grassArr.splice(c, 1);
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
    this.tariq++
    if (this.xy==5) {
    var norVandak = random(this.yntrelVandak(0));
    var partner = random(this.yntrelVandak(5.1));
    if (norVandak && this.multiply >= 12&&partner) {
      this.energy = 10;
      this.multiply=0
      var s = Math.floor(Math.random() * 100)
      if (s<50) {
        for (var i = 0; i < 1; i++) {
          var nornapastak = new Napastak(norVandak[0], norVandak[1], 5,5);
          napastakner.push(nornapastak);
          matrix[norVandak[1]][norVandak[0]] = 5;
        }
      }
      if (s>50) {
        var nornapastak = new Napastak(norVandak[0], norVandak[1], 5,5.1);
          napastakner.push(nornapastak);
          matrix[norVandak[1]][norVandak[0]] = 5.1;
      }   
    }
    }
    else if (this.xy==5) {
      var norVandak = random(this.yntrelVandak(0));
    var partner = random(this.yntrelVandak(5));
    if (norVandak && this.multiply >= 12&&partner) {
      this.energy = 10;
      this.multiply=0
      var s = Math.floor(Math.random() * 100)
      if (s<50) {
        for (var i = 0; i < 1; i++) {
          var nornapastak = new Napastak(norVandak[0], norVandak[1], 5,5);
          napastakner.push(nornapastak);
          matrix[norVandak[1]][norVandak[0]] = 5;
        }
      }
      if (s>50) {
        var nornapastak = new Napastak(norVandak[0], norVandak[1], 5,5.1);
          napastakner.push(nornapastak);
          matrix[norVandak[1]][norVandak[0]] = 5.1;
      }   
    }
    }
    
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    napastakner.splice(i, 1);

  }

}