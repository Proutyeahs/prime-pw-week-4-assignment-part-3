console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    if (isFull() != true) {
    basket.push(item);
    return true;
    }
}
addItem('apples');
console.log(addItem('peaches'), basket);

function listItems(){
    for (let i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
listItems();

function empty() {
    basket = [];
}
empty();
console.log(basket);

function isFull() {
    if (basket.length < maxItems) {
        return false;
    } if (basket.length >= maxItems) {
        return true;
    }
}
addItem('apples');
addItem('peaches');
addItem('pears'); //Refer to question 4 in html file.
addItem('more stuff'); 
console.log(isFull())
addItem('last thing?');
addItem('one more to test');
listItems();
console.log(isFull());

function removeItem(item) {
    if (basket.includes(item)) {
        let removedItem = basket.indexOf(item);
        basket.splice(removedItem, 1);
        return console.log("item removed:", item)
    } else {
        return null, console.log("Item not found:", item)
    }
}
removeItem('thing');
removeItem('more stuff')
console.log(basket);