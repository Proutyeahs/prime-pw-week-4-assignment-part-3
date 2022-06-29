console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
const basket = [];

function addItem(item) {
    basket.push(item);
    return true
}
addItem('apples')
console.log(addItem('peaches'), basket)

function listItems(){
    
}