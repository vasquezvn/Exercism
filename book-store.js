
/**
 * 
 * @param {number[]} books number of different books
 * @param {number[]} setBooks Set of different books available in books variable
 * @returns Array that represent dictionary with book as key and values as number of times that number is on basket
 */
function getNumberByEachBook(books, setBooks) {
    const dictBook = [];

    for (let book of setBooks) {
        let bookCounter = 0;

        for (let book2 of books) {
            if (book === book2) {
                bookCounter++;
            }
        }
        dictBook.push({
            key: book,
            value: bookCounter
        });
    }

    return dictBook;
}

/**
 * 
 * @param {object[]} dictBook array of objects that contains key which represent book and value which represent number of books to each kind book in basket
 * @returns array with number of different books can be group
 */
function getGroupsOfDifferentBooks(dictBook) {
    const groupBooks = [];

    while (dictBook.length > 0) {
        groupBooks.push(dictBook.length);
        let bookIndex = 0;

        for (let dictItem of dictBook) {
            dictItem.value--;
        }

        while (bookIndex < dictBook.length) {
            if (dictBook[bookIndex].value === 0) {
                dictBook.splice(bookIndex, 1);
            } else {
                bookIndex++;
            }
        }
    }

    return groupBooks;
}


/**
 * 
 * @param {number[]} groupBooks Set of books with discount
 */
function getDiscountCombinations(groupBooks) {
    let totalBooks = groupBooks.reduce((prev, curr) => prev + curr, 0);
    const secondCombination = [];

    let averageBook = Math.floor(totalBooks / groupBooks.length);
    let counter = 1;

    while (totalBooks > 0) {
        if (totalBooks < averageBook || groupBooks.length === counter) {
            secondCombination.push(totalBooks);
            totalBooks = 0;
        } else {
            secondCombination.push(averageBook);
            totalBooks -=averageBook;
        }
        counter++;
    }

    return secondCombination;
}


/**
 * 
 * @param {number[]} groupBooks combanation of different books
 */
function getCost(groupBooks) {
    let costBooks = 0;
    let discount = 0;

    for (let amountDiscount of groupBooks) {
        switch(amountDiscount) {
            case 2:
                discount = 5;
                break;
        
            case 3:
                discount = 10;
                break;
        
            case 4:
                discount = 20;
                break;
        
            case 5:
                discount = 25;
                break;
    
            default:
                discount = 0;
                break;
        }
    
        costBooks += amountDiscount * (100 - discount) * 8;
    }

    return costBooks;
}

/**
 * 
 * @param {Number[]} books list of books in the basket
 */
const cost = (books) => {
    const setBooks = new Set(books.sort());
    let bestCost = 0;

    const dictBook = getNumberByEachBook(books, setBooks);
    console.log(dictBook);

    const groupBooks = getGroupsOfDifferentBooks(dictBook);
    console.log(groupBooks);

    const discountBookCombinations = new Array(groupBooks);

    if (groupBooks.length > 1) {
        discountBookCombinations.push(getDiscountCombinations(groupBooks));
    }

    for ( const bookDiscount of discountBookCombinations) {
        let costBooks = getCost(bookDiscount);

        if (bestCost === 0) {
            bestCost = costBooks;
        } else if (bestCost > costBooks) {
            bestCost = costBooks
        }
    }

    return bestCost;
};


    // two groups of four is cheaper than group of five plus group of three
    // [ 4, 4 ] => 5120     [ 1, 2, 3, 4 ] [ 1, 2, 3, 5 ]
    // [ 5, 3 ] => 5160 *   [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]
    // [
    //     { key: 1, value: 2 },
    //     { key: 2, value: 2 },
    //     { key: 3, value: 2 },
    //     { key: 4, value: 1 },
    //     { key: 5, value: 1 }
    // ]
    // console.log(cost([1, 1, 2, 2, 3, 3, 4, 5]));


    // two groups of four is cheaper than groups of five and three
    // [ 4, 4 ] => 5120     [ 1, 2, 4, 5 ] [ 1, 3, 4, 5 ]
    // [ 5, 3 ] => 5160 *   [ 1, 2, 3, 4, 5 ] [ 1, 4, 5 ]
    // [
    //     { key: 1, value: 2 },
    //     { key: 2, value: 1 },
    //     { key: 3, value: 1 },
    //     { key: 4, value: 2 },
    //     { key: 5, value: 2 }
    // ]
    // console.log(cost([1, 1, 2, 3, 4, 4, 5, 5]));


// group of four plus group of two is cheaper than two groups of three 
// [ 3, 3 ] => 4320      [ 1, 2, 3] [ 1, 2, 4 ]
// [ 4, 2 ] => 4080 *   [ 1, 2, 3, 4 ] [ 1, 2 ]
// [
//     { key: 1, value: 2 },
//     { key: 2, value: 2 },
//     { key: 3, value: 1 },
//     { key: 4, value: 1 }
// ]
// console.log(cost([1, 1, 2, 2, 3, 4]));


// two each of first 4 books and 1 copy each of rest 
// [ 2, 2, 2, 2, 1 ]    => 6880     [ 1, 2 ] [ 1, 2 ] [ 3, 4 ] [ 3, 4 ] [ 5 ]
// [ 4, 4, 1]           => 5920     [ 1, 2, 3, 4] [ 1, 2, 3, 4] [ 5 ]
// [ 5, 4 ]             => 5560 *   [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4 ]
// [
//     { key: 1, value: 2 },
//     { key: 2, value: 2 },
//     { key: 3, value: 2 },
//     { key: 4, value: 2 },
//     { key: 5, value: 1 }
// ]
// console.log(cost([1, 1, 2, 2, 3, 3, 4, 4, 5]));


// two copies of each book
// [ 5, 5 ] => 6000         [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]
// [
//     { key: 1, value: 2 },
//     { key: 2, value: 2 },
//     { key: 3, value: 2 },
//     { key: 4, value: 2 },
//     { key: 5, value: 2 }
// ]
// console.log(cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));


// three copies of first book and 2 each of remaining 
// [ 3, 3, 3, 2 ]   => 8000         => [ 1, 2, 3 ] [ 1, 2, 3 ] [ 1, 4, 5 ] [ 4, 5 ]
// [ 5, 5, 1 ]      => 6800 *       => [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1 ]
// [
//     { key: 1, value: 3 },
//     { key: 2, value: 2 },
//     { key: 3, value: 2 },
//     { key: 4, value: 2 },
//     { key: 5, value: 2 }
// ]
// console.log(cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1]));


// three each of first 2 books and 2 each of remaining books
// [ 3, 3, 3, 2, 1 ] => 8800       => [ 1, 2, 3] [ 1, 2, 3] [ 1, 2, 4] [ 4, 5 ] [ 5 ]
// [ 2, 2, 2, 3, 3 ] => 8880       => [ 1. 2 ] [ 1. 2 ] [ 1. 2 ] [ 3, 4, 5 ] [ 3, 4, 5 ]
// [ 5, 5, 2 ]       => 7520 *     => [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2 ]
// [
//     { key: 1, value: 3 },
//     { key: 2, value: 3 },
//     { key: 3, value: 2 },
//     { key: 4, value: 2 },
//     { key: 5, value: 2 }
// ]
// console.log(cost([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2]));


    // four groups of four are cheaper than two groups each of five and three
    // [ 4, 4, 4, 4 ]       => 10240    => [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ] [ 1, 2, 3, 5 ] [ 1, 2, 3, 5 ]
    // [ 5, 5, 3, 3 ]       => 10320 *  => [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ] [ 1, 2, 3 ]
    // [
    //     { key: 1, value: 4 },
    //     { key: 2, value: 4 },
    //     { key: 3, value: 4 },
    //     { key: 4, value: 2 },
    //     { key: 5, value: 2 }
    // ]
    // console.log(cost([1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5]));


    // two groups of four and a group of five
    // [ 4, 4, 5 ] => 8120      => [ 1, 2, 3, 4] [ 1, 2, 3, 5] [ 1, 2, 3, 4, 5 ]
    // [ 5, 5, 3 ] => 8160 *    => [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]
    // [
    //     { key: 1, value: 3 },
    //     { key: 2, value: 3 },
    //     { key: 3, value: 3 },
    //     { key: 4, value: 2 },
    //     { key: 5, value: 2 }
    // ]
    // console.log(cost([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5]));


    // shuffled book order
    // [ 4, 4, 5 ] => 8120      => [ 1, 2, 3, 4] [ 1, 2, 3, 5] [ 1, 2, 3, 4, 5 ]
    // [ 5, 5, 3 ] => 8160      => [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ] [ 1, 2, 3 ]
    // [
    //     { key: 1, value: 3 },
    //     { key: 2, value: 3 },
    //     { key: 3, value: 3 },
    //     { key: 4, value: 2 },
    //     { key: 5, value: 2 }
    // ]
    // console.log(cost([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]));


