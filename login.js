var database = [
    {
        username: 'Thomas',
        password: 'supersecret'
    },
    {
        username: 'Newt',
        password: 'newnew'
    },
    {
        username: 'Teresa',
        password: 'teresa123'
    }
]

var newsfeed = [
    {
        username: 'Thomas',
        timeline: "I am learning Javascript!!"
    },
    {
        username: 'Newt',
        timeline: "Studying for entrance exam."
    },
    {
        username: 'Teresa',
        timeline: "I love painting!!!"
    }
]

function isUserValid(username, password){
    for(var i = 0; i<database.length; i++){
        if(database[i].username===username && database[i].password===password){
            return true;
        }
    }
    return false;
}

function logIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsfeed);
    }else{
        alert("Uhh oh! Wrong Username and Password. Try again!");
    }
}

var userNamePrompt = prompt("What's the username???");
var passwordPrompt = prompt("Sooo, what's the password then???");

logIn(userNamePrompt, passwordPrompt);