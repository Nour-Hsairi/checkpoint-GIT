let plus=document.querySelectorAll(".qt-plus")
let remove=document.querySelectorAll(".remove")
let minus=document.querySelectorAll(".qt-minus")
let qte=document.querySelectorAll(".qt")
let like=document.getElementsByClassName("bi-bookmark-heart-fill")
let prixUnit=document.querySelectorAll(".full-price")
let prices=document.querySelectorAll(".price")
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener("click",function(){
remove[i].parentElement.parentElement.remove();
total()
    })  
}
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click",function(){
qte[i].innerHTML++;
prixUnit[i].innerHTML=(qte[i].innerHTML*prices[i].innerHTML.replace("€",""))+'€'
total()
    })  
}
for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener("click",function(){
        if (qte[i].innerHTML > 0) {
            qte[i].innerHTML--}
    prixUnit[i].innerHTML=(qte[i].innerHTML*prices[i].innerHTML.replace("€",""))+'€'
total()

});
}
function total() {
    let quantity=document.querySelectorAll(".qt")
    let prices=document.querySelectorAll(".price")
    let sum=0
    for (let i = 0; i < prices.length; i++) {
        sum = sum+quantity[i].innerHTML*prices[i].innerHTML.replace('€','');  
    }
    document.getElementsByClassName("total")[0].innerHTML= sum+'€'
}
for (let i= 0; i < like.length; i++) {
    like[i].addEventListener("click",() => {
        like[i].style.fill=== "black"
        ?(like[i].style.fill="red")
        :(like[i].style.fill="black")
    });
    
}
