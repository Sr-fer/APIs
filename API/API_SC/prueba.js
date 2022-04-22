var API_URL = "http://jsonplaceholder.typicode.com"

var xhr = new XMLHttpRequest()

function onRequestHandler(){
if(this.readyState == 4 && this.status == 200) {
    //0 = Unset
    //1 = Opned
    //2 = Headers_Reciver
    //3 = Loading
    //4 = Done
    console.log(this.response)
}
}

xhr.addEventListener("load", onRequestHandler)
xhr.open("GET" , `${API_URL}/users`)
xhr.send()

