const imgs = document.querySelectorAll(".wrapper .carousel ul li img")
const len = imgs.length
const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")
let index = 0
imgs[index+1].classList.add("nxt")
imgs[len-1].classList.add("pre")

const move = (index , nxt , pre)=>{
    imgs[index].classList = ""
    imgs[pre].classList = ""
    imgs[nxt].classList = "" 
    imgs[pre].classList.add("pre")
    imgs[index].classList.add("active")
    imgs[nxt].classList.add("nxt")
}

const circular = ()=>{
    index = (index+1)%len
    const pre = index!=0 ? index-1 : len-1 
    const nxt = index!=len-1 ? index+1 : 0
    move(index , nxt , pre)
}

const circBack = ()=>{ 
    index = index-1<0 ? len-1 : index-1
    const pre = index!=0 ? index-1 : len-1 
    const nxt = index!=len-1 ? index+1 : 0
    move(index , nxt , pre)
}

btnLeft.addEventListener(
    "click" , circBack
)
btnRight.addEventListener(
    "click" , circular
)
setInterval(circular , 2000)