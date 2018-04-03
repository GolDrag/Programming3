class Grass extends KendaniEak {

    bazmanal() {
        this.multiply++;
        this.direction = random(this.yntrelVandak(0));
        if (this.direction) {
            if (season == "spring" && this.multiply >= 2) {
                var newGrass = new Grass(this.direction[0], this.direction[1], 1);
                newGrass.parentX = this.x;
                newGrass.parentY = this.y;
                grassArr.push(newGrass);
                matrix[this.direction[1]][this.direction[0]] = this.index;
                this.multiply = 0;
            }
            else if (season == "summer" && this.multiply >= 3) {
                var newGrass = new Grass(this.direction[0], this.direction[1], 1);
                newGrass.parentX = this.x;
                newGrass.parentY = this.y;
                grassArr.push(newGrass);
                matrix[this.direction[1]][this.direction[0]] = this.index;
                this.multiply = 0;
            }
            else if (season == "autumn" && this.multiply >= 5) {
                var newGrass = new Grass(this.direction[0], this.direction[1], 1);
                newGrass.parentX = this.x;
                newGrass.parentY = this.y;
                grassArr.push(newGrass);
                matrix[this.direction[1]][this.direction[0]] = this.index;
                this.multiply = 0;
            }
            else if (season=="winter") {
                this.multiply=2
            }
        }
    }
}
