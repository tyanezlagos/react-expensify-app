const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data'); // sigle time , single value
        reject('Something went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my other promise'); // sigle time , single value
        }, 5000);
    });
}).then(()=>{
    console.log('done');
}).catch((error) => {
    console.log('error:', error);
});

console.log('after');

