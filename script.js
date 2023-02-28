fetch('https://jsonplaceholder.typicode.com/users')
.then( users => {
    return users.json();
})
.then(users =>{
    users .forEach(user => {
        const li =document.createElement("li");
        const li1 =document.createElement("li");
        const li2 =document.createElement("li");
        li.textContent=user.name;
        document.getElementById("list").appendChild(li);
        li1.textContent=user.email;
        document.getElementById("list").appendChild(li1);
        li2.textContent=user.address.zipcode;
        document.getElementById("list").appendChild(li2);
        li2.style.marginBottom = "10px";
    });
}).catch("ça marche pas");

