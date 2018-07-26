const fruits = ["almond", "almond", "apricot", "avocado",
    "banana", "blackberry", "cherry", "coconut", "dates",
    "grape", "grapefruit", "kiwi", "lemon", "lime",
     "mandarin","mango","melon","orange","pineapple","pomegranate",
     "strawberry","watermelon",
    "apple"]
function find() {
    let txt = document.getElementById("txtFruit").value.toLowerCase();
    var f = fruits.includes(txt)
    if (f){
        document.getElementById("name").textContent = txt;
        document.getElementById("image").setAttribute("src","images/"+txt+".png");
    }
    else {
        alert("ko tiem thay")
    }
}