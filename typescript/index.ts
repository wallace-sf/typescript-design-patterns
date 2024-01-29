// shapes

// Area, Perimeter
// simple -  single function calculateTotalArea

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  private readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public area(): number {
    return Math.PI * this.radius ** 2;
  }

  public perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle implements Shape {
  private readonly width: number;
  private readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public area(): number {
    return this.width * this.height;
  }

  public perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const calculateTotalArea = (shape: Shape): number => {
  return shape.area();
};

// User Code

const circleInstance = new Circle(10);
const rectangleInstance = new Rectangle(3, 5);

const circleInstanceArea = calculateTotalArea(circleInstance);
const rectangleInstanceArea = calculateTotalArea(rectangleInstance);

console.log('Area Of Circle:', circleInstanceArea);
console.log('Area of Rectangle', rectangleInstanceArea);
