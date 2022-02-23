console.log('BEFORE');


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hello');
        setTimeout(() => {
            console.log('second timer')
            resolve('dane');
        }, 3000);

    }, 1000);
})
    .then((d) => {
        console.log('AFTER' + ' ' + d);
    })
    .then(() => {

    })
    .catch((err) => {

    })