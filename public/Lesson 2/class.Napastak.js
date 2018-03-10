class Napastak {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 10;
    this.directions = [];
    this.index = 5;
  }
  stanalNorKordinatner2() {
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
  stanalNorKordinatner() {
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
  yntrelVandakUt(ch) {
    this.stanalNorKordinatner2()
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
  } yntrelVandak(ch) {
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
      matrix[norvandak[1]][norvandak[0]] = 5;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner2();
    var datarkvandakner = this.yntrelVandakUt(1);
    var norvandak = random(datarkvandakner);

    if (norvandak) {

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
    else {
      this.sharjvel();
    }
  }

  bazmanal() {
    this.energy = 10;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var nornapastak = new Napastak(norVandak[0], norVandak[1]);
      napastakner.push(nornapastak);
      matrix[norVandak[1]][norVandak[0]] = 5;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    napastakner.splice(i, 1);

  }

}