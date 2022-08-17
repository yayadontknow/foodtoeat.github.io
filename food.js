function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

var img = document.getElementById("img");
var text = document.getElementById("text");
var imgArray = ["","杯面.jfif","板面.webp","炒果条.jpg","pizza.jpg","杂菜饭.jpeg","卤肉饭.jpg","肉骨茶.jpg","鸡排.jpg"];
var textArray = ["","杯面","板面","炒果条","pizza","杂菜饭","卤肉饭","肉骨茶","鸡排"];
var random;
async function changeData(){
    text.innerText="";
    for (var i =0;i<20;i++){
        random =Math.ceil(Math.random()*(imgArray.length-1));
        img.src=imgArray[random];
        await sleep(250);
        console.log(random);
    }
    text.innerText="今天吃"+textArray[random];
}

var btn = document.getElementById("eat_btn");
btn.addEventListener("click",function(){
    changeData();
});

