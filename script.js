// fetch the data from the server
fetch("characters.json").then((response) => {
    console.log("Response", response);

    if(!response.ok) {
        if(response.status === 404)
            throw new Error("The server responded with a 404 error");
        else
            throw new Error("The server responded with an error");

    }else {
        return response.json();
    }
}).then((users) => {
    console.log("Users", users);
    // add a new row for each user
    let li = document.createElement("li");
    users.forEach((user) => {
        const tr = document.createElement("li");
        tr.innerHTML = user['name'];
        document.querySelector("li").appendChild(tr);
    });
}).catch((error) => {
    console.log("Error", error);


});