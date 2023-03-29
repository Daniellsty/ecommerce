let flag = true
const scrollBtn = document.querySelector('.scroll')
const scrollBtnOne = document.querySelector('.scroll-1')
const scrollBtnTwo = document.querySelector('.scroll-2')
const scrollBtnThree = document.querySelector('.scroll-3')

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
  
        document.querySelector('.items').classList.add('hidden')
          flag = false
        
       
          }else{
            document.querySelector('.items').classList.remove('hidden')
              
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