

class List {

    /**
     * 
     * @param {number[]} otherList number list
     */
    constructor( otherList = [] ) {
        this._list = otherList;
    }

    /**
     * 
     * @param {number[]} list2 list of numbers
     */
    append( list2 ) {
        const newList = [];

        for ( let item of list2 ) {
            newList += this._list.concat(item);
        }
        this._list = newList;
    }

    concat() {
        throw new Error('Remove this statement and implement this function');
    }

    filter() {
        throw new Error('Remove this statement and implement this function');
    }

    map() {
        throw new Error('Remove this statement and implement this function');
    }

    length() {
        throw new Error('Remove this statement and implement this function');
    }

    foldl() {
        throw new Error('Remove this statement and implement this function');
    }

    foldr() {
        throw new Error('Remove this statement and implement this function');
    }

    reverse() {
        throw new Error('Remove this statement and implement this function');
    }
}

let myList = new List([1, 2, 3, 4])
console.log(myList.append([6, 7, 8]));