// var a = document.querySelector('button')
// a.textContent = 'starting...'
// var b= document.querySelector("#new")
// b.innerHTML = '<i>heyyya</i>'
// b.style.color="purple"
// var c=documnet.querySelector("#img1")
// var d=documnet.querySelector(".img2")
// var e= documnet.querySelector(".new1")

//  var p1=document.querySelector("#id")
//  p1.textContent += "Heyya!"
//  p1.style.color = "red"
//  p1.style.fontFamily = 'gilroy'
//  p1.style.fontSize = '3rem'

// using classList
//  var h2 = document.querySelector("h2")
//  h2.classList.add('makeitred')
// h2.classList.remove('makeitred')
 
// var h3 = document.querySelector("h3");
// h3.classList.add('new');
// // h3.classList.remove('new');

// var h1 = document.createElement('h1')
// h1.textContent ="Hello"
// h1.classList.add('wow')
// document.querySelector('body').appendChild(h1)

//  let image =document.createElement('img');
//  image.src="https://picsum.photos/id/1/200/300";
//  image.classList.add("wiee")
//  document.querySelector('body').appendChild(image)

//  let btn = document.querySelector('button');
//  btn.addEventListener('click', function(){
//     btn.classList.add("n2")
//     btn.textContent=" Starting in 3s..."
//     document.querySelector('body').appendChild(btn)
//  });

//Q1]
// let bt= document.querySelector('button')
// bt.addEventListener('click', function(){
//      let p=document.querySelector('p')
//      p.textContent = " the text has changed"

// })
//  let para= document.querySelector('p');
// let n3= document.querySelector('button');
// n3.addEventListener('click', function(){
//     para.textContent =" the text of the para has changed"

// })

//Q2]
// let bt1= document.querySelector('button')
// bt1.addEventListener('click',function(){
//     let ig1= document.querySelector('#id1')
//     let ig2=document.querySelector('#id2')
//    ig1.src="https://picsum.photos/200";
//    ig2.src="https://picsum.photos/id/1/200";
//    ig1.alt="image2";
//    ig2.alt="image1";
// })


//Q3]
// let ip =document.querySelector("input")
// let fm = document.querySelector("form")
// let h3= document.querySelector("h3")
// fm.addEventListener("submit",function(eve){
//     eve.preventDefault();
//     if(ip.value===""){
//         // alert("the inputs are empty")
//         h3.style.color="red"
//     }
//     else{
//         h3.textContent=""
//     }

// })
 //Q4]
// let ul = document.querySelector("ul")
// let ip = document.querySelector("input")
// let btn1 = document.querySelector("#push")
// let btn2=document.querySelector("#pop")
//  btn1. addEventListener("click",function(){
//     let nn= document.createElement("li")
//     nn.textContent=ip.value
//     ul.appendChild(nn)
//  })
//  btn2.addEventListener("click",function(){
//      ul.removeChild(ul.lastElementChild)
//  })
 //Q5]

//  btn1= document.querySelector("#push")
//  h3= document.querySelector("h3");
//  btn2= document.querySelector("#pop")
//  btn1.addEventListener("click",function(){
//     let count=0;
//     setInterval(() => {
//         h3.textContent = count
//         count++;
//     }, 1000);
//  })
//  btn2.addEventListener("click",function(){
//     h3.textContent=0;
//  })
 // Q6] 
// let btn1= document.querySelector("#btn1");
// let btn2= document.querySelector("#btn2");
// let btn3= document.querySelector("#btn3");
// let ab= document.querySelector("#about");
// let hm= document.querySelector("#home");
// let con = document.querySelector("#contact");


// function hideall(){
//     hm.style.display ="none";
//     ab.style.display ="none";
//     con.style.display ="none";
//    }

//    hideall();
// hm.style.display ="block";
   
// btn1.addEventListener("click",function(){
//     hideall();
//     hm.style.display ="block";
    
// })

// btn2.addEventListener("click",function(){
//     hideall();
//     ab.style.display ="block";
      
//   })
//   btn3.addEventListener("click",function(){
//     hideall();
//     con.style.display ="block";
    
       
//   }) 
 
//Q7]  


