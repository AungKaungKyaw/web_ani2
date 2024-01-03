fetch('https://reqres.in/api/users/1',{})
    .then(res=>res.json())
    .then(data=>console.log(data))