function specialLogin(element){
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login";
    }
}



var count = 1;

function counter(element) {
    document.querySelector("#num").innerText++;
    // count++;
    //  We are going to tell html to update itself with whatever js tells it to update with
    // console.log(count);
    // console.log(element);
    // element.innerText = count;
    // element.innerText++;
    // it starts at 1 because that's within the tag, then its increasing that number by 1 everytime it is pressed because of the ++
}

function specialCounter() {
    document.querySelector("#number").innerText++;
}


