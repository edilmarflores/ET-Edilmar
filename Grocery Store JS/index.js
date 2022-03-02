var shopper = {
    name: 'Bob',
    age: 20,
    isAlive: true,
}
function shopper () {
    return this.name + " " + this.age + this.isAlive;
};
console.log(shopper);

var groceryCart = ['tomatoe', 'bread', 'banana', 'squash', 'garlic']
console.log('need to by' + groceryCart [3]);
