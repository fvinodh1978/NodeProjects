const userAction = async () => {
    const response = await fetch('http://localhost:8081/getUsers');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}

userAction();