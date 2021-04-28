// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;
      }

      get countSides() {
          return this.sides.length
      }

      get perimeter() {
        return this.sides.reduce((acc, side) => {return acc + side}) 
      }

}

class Triangle extends Polygon {

    get isValid() {
        let valid = false
        if (this.countSides === 3) {
            if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[0] + this.sides[2] > this.sides[1])) {
                valid = true
            }
        }
        return valid
    }


}

class Square extends Polygon {

    get isValid() {
        let valid = false
        if (this.countSides === 4) {
            if ((this.sides[0] == this.sides[1]) && (this.sides[1] == this.sides[2]) && (this.sides[2] == this.sides[3])) {
                valid = true
            }
        }
        return valid
    }

    get area() {
        return this.sides[0] ** 2
    }

}