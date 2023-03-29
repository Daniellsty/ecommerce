let flag = true
const scrollBtn = document.querySelector('.scroll')
const scrollBtnOne = document.querySelector('.scroll-1')
const scrollBtnTwo = document.querySelector('.scroll-2')
const scrollBtnThree = document.querySelector('.scroll-3')
const customHandler = document.querySelector('.custom-handler')
const customDetails = document.querySelector('.custom-details')
const reviewHandler = document.querySelector('.review-handler')
const detailsHandler = document.querySelector('.details-handler')
const infoHandler = document.querySelector('.info-handler')

  const cartIcon = document.querySelector('.shop-cart')
  const header = document.querySelector('.header')
  const cartItem = document.querySelector('.cart-item')
  const cartToShow = '.cart-item';
  const headerMiddle = '.header-middle-right';

  cartIcon.addEventListener('click',(e)=>{

    document.querySelector('.cart-item').classList.remove('show')
  })



  document.addEventListener('click',(e)=>{

    const isClosestToCart = e.target.closest(cartToShow)
    const isClosestToHeader = e.target.closest(headerMiddle)
    if(!isClosestToCart && !isClosestToHeader && !cartItem.classList.contains('show')){

     cartItem.classList.add('show')
    }
   

  })






 const productThumb = new Swiper (".small-image",{

  loop : true,
  spaceBetween:10,
  slidesPerView:3,
  freeMode:true,
  watchSlidesProgress:true,
  breakpoints:{
    481:{
      spaceBetween:32,
    }
  }

 })
  


 const productBig = new Swiper('.big-image', {
 
  loop:true,
  autoHeight:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs:{
    swiper: productThumb,
  }

});



infoHandler.addEventListener('click',(e)=>{
    if(flag){

        document.querySelector('.info-desc').classList.add('hidden')
        document.querySelector('.info-toggle').innerHTML = '-'
          flag = false
        
       
          }else{
            document.querySelector('.info-desc').classList.remove('hidden')
            document.querySelector('.info-toggle').innerHTML = '+'
              flag = true
            }
})



detailsHandler.addEventListener('click',(e)=>{
    if(flag){

        document.querySelector('.details').classList.add('hidden')
        document.querySelector('.detail-toggle').innerHTML = '-'
          flag = false
        
       
          }else{
            document.querySelector('.details').classList.remove('hidden')
            document.querySelector('.detail-toggle').innerHTML = '+'
              flag = true
            }
})


reviewHandler.addEventListener('click',(e)=>{
    if(flag){

        document.querySelector('.review-details').classList.add('hidden')
        document.querySelector('.review-toggle').innerHTML = '-'
          flag = false
        
       
          }else{
            document.querySelector('.review-details').classList.remove('hidden')
            document.querySelector('.review-toggle').innerHTML = '+'
              flag = true
            }
})

customHandler.addEventListener('click',(e)=>{
   
    if(flag){

        document.querySelector('.custom-details').classList.add('hidden')
        document.querySelector('.custom-toggle').innerHTML = '-'
          flag = false
        
       
          }else{
            document.querySelector('.custom-details').classList.remove('hidden')
            document.querySelector('.custom-toggle').innerHTML = '+'
              flag = true
            }

})



scrollBtnThree.addEventListener('click',(e)=>{
     
  if(flag){

    document.querySelector('.items-3').classList.add('hidden')
      flag = false
    
   
      }else{
        document.querySelector('.items-3').classList.remove('hidden')
          
          flag = true
        }
      
      
    })


scrollBtnTwo.addEventListener('click',(e)=>{
     
  if(flag){

    document.querySelector('.items-2').classList.add('hidden')
      flag = false
    
   
      }else{
        document.querySelector('.items-2').classList.remove('hidden')
          
          flag = true
        }
  
    })



scrollBtnOne.addEventListener('click',(e)=>{
     
  if(flag){

    document.querySelector('.items-1').classList.add('hidden')
      flag = false
    
   
      }else{
        document.querySelector('.items-1').classList.remove('hidden')
          
          flag = true
        }
   
    })

  scrollBtn.addEventListener('click',(e)=>{
     
    if(flag){

      console.log('okk');
      document.querySelector('.items-beauty').classList.add('hidden')
        flag = false
      
     
        }else{
          document.querySelector('.items-beauty').classList.remove('hidden')
          console.log('okk');
            flag = true
          }
        
      })



const menu = document.querySelector('.menu-all-items')

const removeIcon = document.querySelector('.remove')
const menuIcon = document.querySelector('.hamburger-menu')
menuIcon.addEventListener("click",(e)=>{
  
   document.body.classList.add('bg-black/20')
   menu.classList.remove('translate-x-[-33rem]')
  
});

removeIcon.addEventListener('click',(e)=>{
  document.body.classList.remove('bg-black/20')
    menu.classList.add('translate-x-[-33rem]')
  
})