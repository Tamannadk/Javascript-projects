// const p=new Promise((resolve,reject)=>{
//     //  resolve({
//     //     name:'Tamanna'
//     //  })
//     reject({
//         name:'Tamanna'
//     })
// })


const rejectBtn=document.querySelector(".rejectBtn")
const resolveBtn=document.querySelector(".resolveBtn");

const p=new Promise((resolve,reject)=>{
    resolveBtn.addEventListener('click',()=>{
        resolve('Promise Resolved')
    })
    rejectBtn.addEventListener('click',()=>{
        reject('Promise Rejected')
    })
})
p.then(()=>{
    console.log('hiii')
}).catch((error)=>{
console.log(error)
})