

class Matrix {
    /**
     * Creates in instance of matrix using array of arrays.
     * @param {string} stringMatrix Matrix expressed as string
     */
    constructor(matrixString) {
        this.matrix = matrixString.split('\n')
            .map(row => row.split(' ').map(Number));

        // this.matrix = [];
        // const matrixArray = stringMatrix.split('\n');

        // if (matrixArray.length === 1) {
        //     this.matrix[0] = matrixArray[0];
        // } else {
        //     const columns = [];
        //     for (let i = 0; i < matrixArray.length; i++) {
        //         columns[i] = matrixArray[i].split(' ');
        //     }
            
        //     for (let i = 0; i < columns.length; i++) {
        //         this.matrix[i] = columns[i];
        //     }

        //     for (let i = 0; i < matrixArray.length; i++) {
        //         for (let j = 0; j < columns.length; j++) {
        //             this.matrix[i][j] = parseInt(this.matrix[i][j]);
        //         }
        //     }
        // }
    }

    get rows() {
        return this.matrix;
    }

    get columns() {
        return this.matrix[0].map(
            (value, index) => this.matrix.map(row => row[index])
        );
    }
}

console.log(new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]);
