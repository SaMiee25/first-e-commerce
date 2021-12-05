var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides-fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); 
}


let thumbnails=document.getElementsByClassName('thumbnail')
let sils=document.getElementsByClassName('sil')
let slider=document.getElementById('slider')

// Autoplay the slider 

const maxScrollLeft=slider.scrollWidth-slider.clientWidth

function autoplay(){
    if(slider.scrollLeft>(maxScrollLeft-1)){
        slider.scrollLeft -=maxScrollLeft
    }else{
        slider.scrollLeft +=1
    }
}
let play= setInterval(autoplay, 5)

// pause the slide on Hover

for(var i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener('mouseover', function(){
        clearInterval(play)
    })


    thumbnails[i].addEventListener('mouseout', function(){
        return play=setInterval(autoplay, 5)
    })


}










