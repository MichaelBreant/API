fetch('https://jsonplaceholder.typicode.com/users')
.then( users => {
    return users.json();
})
.then(users =>{
    users .forEach(user => {
        const li =document.createElement("li")
        li.textContent=user.name;
        li.textContent=user.email;
        li.textContent=user.zipcode;
        document.getElementById("list").appendChild(li);
    });
}).catch("ça marche pas");

