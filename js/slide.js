const slides = document.querySelectorAll(".slides")
// console.log(slides)
var count = 0;

slides.forEach ((slide,ind)=>{
    slide.style.left = `${ind * 100}%`
})

const slideimg = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}

const next = () => {
    count ++
    if(count >=slides.length){
        count = 0;
    }
    slideimg()
}
const prev = () => {
    count --
    if (count < 0){
        count = slides.length -1
    }
    slideimg()
}

const comp1 =() => {
    count =0
    slideimg()
}
const comp2 =() => {
    count =1
    slideimg()
}
const comp3 =() => {
    count =2
    slideimg()
}
const comp4 =() => {
    count =3
    slideimg()
}
const comp5 =() => {
    count =4
    slideimg()
}
const comp6 =() => {
    count =5
    slideimg()
}
const comp7 =() => {
    count =6
    slideimg()
}

// let currImage = 0
// let prev = document.getElementById("prev")
// let next = document.getElementById("next")
// const img = document.querySelectorAll(".slides")


// prev.addEventListener('click',function(){
//     currImage --
//     if(currImage < 0){
//         currImage = img.length - 1
//     }
// })

// next.addEventListener('click',function(){
//     currImage ++
//     if(currImage >=imgArr.length){
//         currImage = 0;
//     }
// })
// img.setAttribute('src',imgArr[currImage])



