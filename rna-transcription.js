
const dna = ['G', 'C', 'T', 'A'];
const rna = ['C', 'G', 'A', 'U'];

const dnaToRna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
}

const toRna = (sequence) => {
    // return dna.split('').map(char => dnaToRna[char]).join('')
    let convertSequence = '';
    if (sequence.length > 0) {
        for (let letter of sequence) {
            convertSequence += rna[dna.indexOf(letter)]
        }
    }

    return convertSequence;
};

console.log(toRna('ACGTGGTCTTAA'));