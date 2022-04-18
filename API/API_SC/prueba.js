function __main__() {
    var settings = {
    "async": true,
    "type": "GET",
    "url":
    "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-7156057a-eb56-4ca2-9e1f-0a9b839fd2fc"
};
$.ajax(settings).done(function(response) {
console.log(response);
});
}
__main__()
