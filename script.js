let itemList = {
    apple: 200,
    mango: 300,
    orange: 555,
    banana: 645,
    grapes: 799
}

let itemPrice = {
    apple: 100,
    mango: 200,
    orange: 50,
    banana: 25,
    grapes: 100
}

let overalPrice = {
    overal_price: itemList.apple*itemPrice.apple + itemList.mango*itemPrice.mango + itemList.orange*itemPrice.orange + itemList.banana*itemPrice.banana + itemList.grapes*itemPrice.grapes
}

console.log(itemList);
console.log(itemPrice);

console.log('overal price' + '=' + overalPrice.overal_price);