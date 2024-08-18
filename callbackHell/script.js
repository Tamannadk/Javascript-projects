// function makeHttpRequest()
// {
//     const xhr=new XMLHttpRequest();
//     xhr.responseType='json';
//     xhr.addEventListener('load',()=>{
//         console.log(xhr.response.users[0].id);
//     })
    
//     xhr.open('GET','https://dummyjson.com/users')
//     xhr.send()
// }

// makeHttpRequest()

function makeHttpRequest(method,url)
{
  const xhr=new XMLHttpRequest()
  xhr.responseType='json'
  const promise=new Promise((resolve,reject)=>{
    xhr.addEventListener('load',()=>{
        resolve(xhr.response)
    })
    xhr.addEventListener('load',()=>{
        reject('request failed')
    })
  })
//   xhr.addEventListener('load',()=>{
//      callback(xhr.response)
//   })
   xhr.open(method,url);
   xhr.send()
   return promise
}

// makeHttpRequest('GET','https://dummyjson.com/users',(data)=>{
//     console.log(data)
//     makeHttpRequest('GET',`https://dummyjson.com/users/${data.users[0].id}`,(data)=>{
//         console.log(data)
//     })
// })

makeHttpRequest('GET','https://dummyjson.com/users').then((userData)=>{
    return makeHttpRequest('GET',`https://dummyjson.com/posts/user/${userData.users[0].id}`)
}).then((postData)=>{
    return makeHttpRequest('GET',`https://dummyjson.com/comments/post/${postData.posts[0].id}`)
}).then((comments)=>{
   console.log(comments)
}).catch((err)=>console.log(err))