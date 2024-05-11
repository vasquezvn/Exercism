

const rows = (numberRows) => {
    const pascalTriangle = [];
    let index = 0;

    while ( index < numberRows ) {
        if ( index === 0 ) {
            pascalTriangle.push([1]); // index 0

        } else if ( index === 1 ) {
            pascalTriangle.push([ 1, 1 ]); // index 1

        } else if ( index > 1 ) {
            const prevRow = pascalTriangle[index - 1];
            const newRow = [];

            for ( let i = 1; i < index; i++ ) {
                newRow.push(prevRow[i - 1] + prevRow[i]);
            }
            newRow.unshift(1);
            newRow.push(1);
            pascalTriangle.push(newRow);
        }
        index++;
    }
    
    return pascalTriangle;
};

console.log(rows(5));
