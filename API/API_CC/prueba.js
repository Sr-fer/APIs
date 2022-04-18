function __main__() {
    var name = prompt("Nombre de usuario a buscar");
    var api_key = "---";
    var settings = {
    "async": true,
    "type": "GET",
    "url":
    "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
    + name + "?api_key=" + api_key,
    "headers": { 
}
};
$.ajax(settings).done(function(response) {
console.log(response);
});
}
__main__()
