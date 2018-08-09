const promise = new Promise((resolve, reject) => {
    resolve({
        name: 'Maneesh',
        age: 26
    });
    // setTimeout(() => {
    //     reject('something went wrong');
});

console.log('before');

promise.then((data) => {
    console.log('1', data);    
}).then(() => {
    console.log('does this run?')
}).catch((error) => {
    console.log(error);
});

console.log('after');