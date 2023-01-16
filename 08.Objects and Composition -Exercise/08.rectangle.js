function rectangle(width, height, color) {
    // create the rectangle object with the given properties
    const rect = {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea: function () {
            return this.width * this.height
        }       
    };
    // return the rectangle object
  return rect;
}

const rect1 = rectangle(5, 10, 'red');
console.log(rect1.calcArea()); // 50