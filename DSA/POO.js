class Car {
    constructor(brand, year,color, price = 5000 ){
        this.brand = brand;
        this.year = year;
        this.color = color;
        this.price = price
    }

    // quote the properties of the car
    show(){
        
        return console.log(`The car is a/an: ${this.brand}, year: ${this.year} color ${this.color}`)
    }

}

class Ferrari extends Car {
    constructor(brand, year, color = null, price , model){
        if (color === '' ){
            color = 'black';
        }
        super(brand, year, color, price);
        this.model = model
    }

    show(){
        return console.log(`The car is a/an: ${this.brand}, year: ${this.year} color: ${this.color} y modelo: ${this.model}`)
    }

    leasing(){
        const tax = 0.2
        const result = this.price + (this.price * tax); 
        return result
    }

    
}

const myFirstCar = new Car('Hyundai', 2023, 'Grey');
const superCar = new Ferrari('Ferrari', 2024,'', 100000,'LAFERRARI');
myFirstCar.show()
superCar.show()
const car_after_tax = superCar.leasing()
console.log(`El precio despues de impuestos: USD $${car_after_tax}`)