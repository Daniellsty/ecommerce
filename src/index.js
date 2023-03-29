const swiper = new Swiper('.swiper', {
    
   
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    
  });

  let flag = true
  const scrollBtn = document.querySelector('.scroll')
  const scrollBtnOne = document.querySelector('.scroll-1')
  const scrollBtnTwo = document.querySelector('.scroll-2')
  const scrollBtnThree = document.querySelector('.scroll-3')
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

        document.querySelector('.items-beauty').classList.add('hidden')
          flag = false
        
       
          }else{
            document.querySelector('.items-beauty').classList.remove('hidden')
              
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

  let remainingTime = 70000

  const hourElem = document.querySelector('.hours')
  const minuteElem = document.querySelector('.minutes')
  const secondElem = document.querySelector('.seconds')

 function setTime(){


  const hour = Math.floor(remainingTime / 3600)
  const minute = Math.floor((remainingTime % 3600) / 60 )
  const second = Math.floor((remainingTime % 3600) % 60 )

  hourElem.innerHTML = hour
  minuteElem.innerHTML = minute
  secondElem.innerHTML = second

 }

 setInterval(() => {
  
  remainingTime--

  setTime()
 }, 1000);