fetch('https://jsonplaceholder.typicode.com/users')
.then( users => {
    return users.json();
})
.then(users =>{
    users .forEach(user => {
        const li =document.createElement("li")
        li.textContent=user.name;
        document.getElementById("list").appendChild(li);
    });
}).catch("ça marche pas");

