document.addEventListener('DOMContentLoaded', () => {

    const items = document.querySelectorAll('.item');
    const dark = 'hsl(238, 29%, 16%)';
    const light = 'hsl(237, 12%, 33%)';

    
    items.forEach((item) => {
        item.addEventListener('click', (e) => {

            if (e.target.classList.contains('item_question')){
                if (item.children[1].classList.contains('hidden')){
                    e.target.style.color = dark;
                    e.target.style.fontWeight = 700;
                    item.children[1].classList.remove('hidden');
                    e.target.children[0].style.transform = 'rotate(180deg)';

                } else{
                    e.target.style.color = light;
                    e.target.style.fontWeight = 400;
                    item.children[1].classList.add('hidden');
                    e.target.children[0].style.transform = 'rotate(360deg)'
                };
                

            }else if(e.target.classList.contains('arrow')){
                if (item.children[1].classList.contains('hidden')){
                    item.children[1].classList.remove('hidden');
                    item.children[0].style.color = dark;
                    item.children[0].style.fontWeight = 700;
                    e.target.style.transform = 'rotate(180deg)';
                } else{
                    item.children[1].classList.add('hidden');
                    e.target.style.transform = 'rotate(360deg)';
                    item.children[0].style.color = light;
                    item.children[0].style.fontWeight = 400;
                };

            };
        });
    });
});
