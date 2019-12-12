let randomNumber1;
randomNumber1=Math.round((Math.random()*5+1));
let randomNumber2;
randomNumber2=Math.round((Math.random()*5+1));
const newImgPath1 = "images/dice"+randomNumber1+".png";
const newImgPath2 = "images/dice"+randomNumber2+".png";
const img1 =document.querySelector("img").setAttribute("src",newImgPath1);
const img2 =document.getElementsByTagName("img")[1].setAttribute("src",newImgPath2);

let titleName;
titleName = document.querySelector("h1");
if(randomNumber1<randomNumber2){
  titleName.innerHTML=("Player2 Win! 🏆");
} else if(randomNumber1>randomNumber2){
  titleName.innerHTML=("Player1 Win! 🏆");
}else{
  titleName.innerHTML=("Draw! 🔄")
}
