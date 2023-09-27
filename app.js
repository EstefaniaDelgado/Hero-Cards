const iconsHearts = document.querySelectorAll('.fa-heart');


for (const heart of iconsHearts) {
    heart.addEventListener('click', ()=>{
        if (heart.classList.contains('fa-regular')) {
            heart.classList.remove('fa-regular');
            heart.classList.add('fa-solid');
          } else {
            heart.classList.remove('fa-solid');
            heart.classList.add('fa-regular');
          }
    }) 
} 

