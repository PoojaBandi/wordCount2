let tb = document.getElementById("text");
tb.addEventListener("input",function(){
var text = this.value;
console.log(text);
document.getElementById("disChar").innerHTML=text.length;

text=text.trim();
let words = text.split(" ");
console.log(`words = ${words}`);
count=words.length;
console.log(`count = ${count}`);
for (i=0 ;i<words.length;i++){
    if (words[i] == ""){
        count = count-1;
    }
}
document.getElementById("disWord").innerHTML=count;

});

let line = 0;
tb.addEventListener("keydown",function(e){
if (e.keyCode == 13){
   
line = line + 1;
console.log(`lines = ${line}`);
}
});