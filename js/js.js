window.addEventListener('scroll', (e) => {
  let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  console.log(scrolled);
  
  <!--  Image-Lazy-Loading  -->
  const LazyLoadingimages = document.querySelectorAll('img');
		  
		  const ImageLazyLoadingCallback = ImageLazyLoadingentries => {
		    ImageLazyLoadingentries.forEach( ImageLazyLoadingentry => {
		      if ( ImageLazyLoadingentry.isIntersecting ){
		        const ImageLazyLoadingimage = ImageLazyLoadingentry.target;
		        const data_src = ImageLazyLoadingimage.getAttribute( 'data-src' );
		        ImageLazyLoadingimage.setAttribute('src',data_src);
		        ImageLazyLoadingobserver.unobserve(ImageLazyLoadingimage);
		        //console.log('触发');
		      };
		    });
		  };
		  
		  const ImageLazyLoadingobserver = new IntersectionObserver( ImageLazyLoadingCallback );
		  
		  LazyLoadingimages.forEach( ImageLazyLoadingimage => {
		    ImageLazyLoadingobserver.observe( ImageLazyLoadingimage );
		  });
  
  
  <!-- Text-Animation_disappear -->
  let $textanimation_h1 = document.querySelector('#text-animation_h1')
  let $textanimation_p = document.querySelector('#text-animation_p')
  
  if (scrolled <= 0.3) {
    $textanimation_h1.style.opacity = (0.11 - scrolled) / 0.06
    $textanimation_h1.style.marginTop = scrolled * 100 * -1 + 'px'
  } else {
    $textanimation_h1.style.opacity = 0
  }
  
  if (scrolled <= 0.35) {
    $textanimation_p.style.opacity = (0.11 - scrolled) / 0.11
    //$textanimation_p.style.marginTop = scrolled * 1000 * -1 + 'px'
  } else {
    $textanimation_p.style.opacity = 0
  }

})


  <!-- Text-carousel -->
function retation(){
  
  const show = document.querySelector('.text-carousel_span span[data-show]')
  const nest = show.nextElementSibling || document.querySelector('.text-carousel_span span:first-child')
  //将有data-up的元素获取到
  const up = document.querySelector('.text-carousel_span span[data-up]')

  
  if(up){
    up.removeAttribute('data-up')
  }
  
  //如果在中间就移上去
  show.removeAttribute('data-show')
  show.setAttribute('data-up','')
  //imageshow.removeClass('image-show')
  
  //下一个元素移到中间
  nest.setAttribute('data-show','')
  //imagenext.addClass('image-show')
}


function imageretation(){
  
  const imageshow = document.querySelector('.image-show')
  const imagenest = imageshow.nextElementSibling||document.querySelector('.image-carousel image:first-child')
 
  //如果在中间就移上去
  imageshow.removeClass('image-show');
  //imageshow.removeClass('image-show')
  
  //下一个元素移到中间
  imagenest.addClass('image-show');
  //imagenext.addClass('image-show')
}




setInterval(function(){
       retation()
   },2000)





