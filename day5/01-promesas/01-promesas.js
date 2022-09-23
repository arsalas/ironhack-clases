

const getData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve([1, 2, 3])
        }, 5000);
    })
}

const main = async () =>{
    console.log(await getData())
}
main();