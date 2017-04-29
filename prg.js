// 5

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo5").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();


// 4
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo4").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main/blocks/294322?txstart=1&limit=1", true);
xmlhttp.send();



// 3
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo3").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://block.io/api/v2/get_balance/?api_key=BITCOIN", true);
xmlhttp.send();


// 2
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("demo2").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "https://blockchain.info/fr/rawblock/$block_index", true);
xmlhttp.send();

// 1
function startSearch() { // prendre 2 parametres, url et destination
    //var url = document.getElementById("search").value;
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById("demo").innerHTML = jsonPretty; // remplacer avec destination
        }
    };
    xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main/blocks/294322?txstart=1&limit=1", true); //remplacer avec url
    xmlhttp.send();
}
