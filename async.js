function handler() {
    let i;
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for(i = 1; i<= 10000; i++){
                console.log(i);
            }
            resolve(i);
        }, 5000)
    })
}

(async ()=>{
    try {
        let data = await handler();
        makeTransact();
        console.log("Done !! with value", data)
        
    } catch (error) {
        console.log("Transaction Failed")
    }
})()


function makeTransact(){
    console.log("OK OK")
}