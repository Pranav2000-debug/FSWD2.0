const allUsers = [
    "Anurag",
    "Mithun",
    "Alka",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivan",
    "Farman",
  ];

  function isUserPresent(user){
    if(allUsers.includes(user)){
        console.log(`yes, ${user} is present`);
        return true;
    }
    else{
        console.log(`No, ${user} is not present`);
    }
  }
isUserPresent('Mithun');
isUserPresent('Random');
