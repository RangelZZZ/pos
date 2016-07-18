'use strict';

function buildCartItems(barcodes, allItems) {
  let cartItems = [];

  barcodes.forEach(function (barcode) {
    let item = barcode.split('-');
    let existItem = findExist(item[0], allItems);
    let itemCount = (item[1] || 1);
    let cartItem = findExistProduct(item[0], cartItems);

    if (cartItem) {
      cartItem.count++;
    }
    else {
      cartItems.push({Item: existItem, count: parseInt(itemCount)});
    }
  });

  return cartItems;
}


function findExist(barcode, allItems) {
  for (let i = 0; i < allItems.length; i++) {
    if (barcode === allItems[i].barcode) {

      return allItems[i];

    }
  }
}

function findExistProduct(barcode, cartItems) {
  for (let i = 0; i < cartItems.length; i++) {
    if (barcode === cartItems[i].Item.barcode) {

      return cartItems[i];
    }
  }

  return false;
}



