function __main__() {
    var api_key = "---";
    var settings = {
    "async": true,
    "type": "GET",
    "url":
    "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" + api_key,
    "headers": {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
    "Accept-Language": "es-ES,es;q=0.9",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
}
}
$.ajax(settings).done(function(response) {
console.log(response);
})
}
        
__main__()
