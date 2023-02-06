let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
   
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
    
    },
  },

});
var swiper = new Swiper(".teachers-slider", {
    spaceBetween: 20,
    grabcursor:true,
    loop:true,
   
    pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
      
    },
    1024: {
      slidesPerView: 3,
    
    },
  },

});
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
       540: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
    },
 });
 
// var slideImg=document.getElementById("slideImg");
//    var images=new Array(
//       "images/img1.jpeg",
//       // "images/img2.jpeg",
//       "images/img3.jpeg",
//       "images/img4.jpeg"
      
// );
//    var len=images.length;
//    var i=0;
//    function slider(){
//        if(i>len-1){
//          i=0;
//        }
//        slideImg.src=images[i];
//        i++;
//        setTimeout('slider()',1500);
//   }
    
//   function sendMail() {
//     var params = {
//       name: document.getElementById("name").value,
//       email: document.getElementById("email").value,
//       message: document.getElementById("message").value,
//     };
  
//     const serviceID = "service_9d4ttjk";
//     const templateID = "template_8cs2kgr";
  
//       emailjs.send(serviceID, templateID, params)
//       .then(res=>{
//           document.getElementById("name").value = "";
//           document.getElementById("email").value = "";
//           document.getElementById("message").value = "";
//           console.log(res);
//           alert("Your message sent successfully!!")
  
//       })
//       .catch(err=>console.log(err));
  
//   }

//   const allGalleryItem=document.querySelectorAll('.gallery-item');
//   const imgModalDiv=document.getElementById('img-modal-box');
//   const modalCloseBtn=document.getElementById('modal-close-btn');
//   const nextBtn=document.getElementById('next-btn');
//   const prevBtn=document.getElementById('prev-btn');
//   let imgIndex=0;
//   allGalleryItem.forEach((galleryItem)=>{
//       galleryItem.addEventListener('click', () =>{
//           imgModalDiv.style.display= "block";
//           let imgSrc= galleryItem.querySelector('img').src;  
//    imgIndex= parseInt(imgSrc.split("-")[1].
//    substring(0, 1));
//    showImageContent(imgIndex);
//       })
//   });
// nextBtn.addEventListener('click',()=>{
// imgIndex++;
// if(imgIndex > allGalleryItem.length){
// imgIndex=1;
// }
// showImageContent(imgIndex);
// });
// prevBtn.addEventListener('click',()=>{
// imgIndex--;
// if(imgIndex <= 0){
// imgIndex=allGalleryItem.length;
// }
// showImageContent(imgIndex)
// });
//   function showImageContent(index){
//       imgModalDiv.querySelector('#img-modal img').
//       src=`images/gallery-${index}.jpg`;
//       }
  
  
//   modalCloseBtn.addEventListener('click', ()=>{
//     imgModalDiv.style.display="none";
//   })


  var images = ['images/img-1.jpg','images/img-2.jpg','images/img-3.jpg','images/img-4.jpg','images/img-5.jpg'];

  var i =0;
  
  function slideShow() {
  
      document.getElementById("image").src=images[i];
  
  
  
      if(i<images.length-1){
  
          i++;
  
      }
  
      else {
  
          i=0;
  
      }
  
      setTimeout("slideShow()" , 2000);
  
  }
  
  window.onload = slideShow;

  