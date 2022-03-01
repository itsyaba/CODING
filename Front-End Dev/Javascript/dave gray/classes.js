class Pizza{
    constructor(pizza_type , pizza_size){
        this.type = pizza_type;
        this.size = pizza_size;
        this.crust = "orginal";
    }
    bake(){
        console.log(`Baking a ${this.size}`);
    }
}

const mypizza = new Pizza("Large" , "Medium")

console.log(mypizza.size)


class childpizza extends Pizza{
    constructor(pizza_size){
        super(pizza_size);
        this.type = "Online";
        
    }
}