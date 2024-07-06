function removeBeforeAndAfterSelectors() {
        const buttons = document.querySelectorAll('.button-menu');
      
        buttons.forEach((button) => {
            const square111 = button.querySelector('.square-1-1-1');
            const square11 = button.querySelector('.square-1-1');
            const square1 = button.querySelector('.square-1');
            const square = button.querySelector('.square');
      
            button.addEventListener('mouseover', function() {
                square111.classList.add('no-before-after');
                square11.classList.add('no-before-after');
                square1.classList.add('no-before-after');
                square.classList.add('no-before-after');
            });
      
            button.addEventListener('mouseout', function() {
                square111.classList.remove('no-before-after');
                square11.classList.remove('no-before-after');
                square1.classList.remove('no-before-after');
                square.classList.remove('no-before-after');
            });
        });
    }
  
    removeBeforeAndAfterSelectors();