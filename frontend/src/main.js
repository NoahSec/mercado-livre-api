fetch('http://localhost:9000/').then(response =>{
  console.log(response.json())
  if(response.ok){
    console.log(response)
    return response.body
  }
  
})
.then(async(response) =>{
  let test = await response
  console.log('test',test)
})