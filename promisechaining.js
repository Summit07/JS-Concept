function isLeaveApproved(applyLeave){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(applyLeave){
                resolve("Leave Approved");
            }else{
                reject("You can't Go Home, Leave Not Approved")
            }
        }, 1000)
    })

}

function isWahidCame(render){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(render){
                resolve("Wahid Came");
            }else{
                reject("You can't Go Home, Wahid Not Came")
            }
        }, 5000)
    })
    
}

function isBorderSeal(seal){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!seal){
                resolve("Border Open !!");
            }else{
                reject("You can't Go Home, Border Sealed")
            }
        }, 7000)
    })
    
}

function goHome(){

    isLeaveApproved(true)
    .then((data)=>{
        console.log(data)
        return isWahidCame(true)
        .then((data)=>{
        console.log(data)
        return isBorderSeal(false)
        .then((data)=>{
        console.log(data);
        console.log("Welcome Home Jay");
        })
     })
    })
    .catch((error)=>{
        console.log(error);
    })
}

goHome();