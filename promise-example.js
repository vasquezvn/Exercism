
const data = [{
    title: 'Aprendiendo javascript',
    year: '2021',
    isbn: '979-8700179263',
    author: 'Carlos Azaustre'
}, {
    title: 'React.js Practico',
    year: '2022',
    isbn: 'TBD',
    author: 'Carlos Azaustre'
}, {
    title: 'Clear Javascript',
    year: '2020',
    isbn: '979-8567583319',
    author: 'Miguel A. Gomez'
}]

function getData() {
    return new Promise((resolve, reject) => {
        if (data.length === 0) {
            reject(new Error('Data is empty'));
        }
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

getData()
    .then((response) => console.log(response))
    .catch((err) => console.log(err.message));

// console.log(getData());




const myPromise = new Promise(function (resolve, reject) {
    let sampleData = [2, 4, 6, 8];
    let randomNumber = Math.floor(Math.random() * (sampleData.length + 1));

    if (sampleData[randomNumber]) {
        resolve(sampleData[randomNumber]);
    } else {
        reject('An error occured!');
    }
});

myPromise
    .then(function (e) {
        console.log(e);
    })
    .catch(function (error) {
        throw new Error(error);
    })
    .finally(function () {
        console.log('Promise completed');
    });

// console.log(myPromise);