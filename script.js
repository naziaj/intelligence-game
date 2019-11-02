
let intelligences = ["smart", "dumb", "sharp", "creative", "capable", "genius", "einstein", "clever", "wise", "inventive", "keen"]
function Check() {
    let name = document.querySelector("input").value;
    let random = Math.floor(Math.random() * intelligences.length);
    // alert( "Dear " + name + " you are "+ intelligences[random]);
    alert("Dear " + name + " you are " + intelligences[random] + "!")
}



