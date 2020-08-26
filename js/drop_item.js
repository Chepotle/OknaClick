let dropItems = document.querySelectorAll('.drop_item');
let arrows = document.querySelectorAll('.nav_arrow');
let subMenus = document.querySelectorAll('.sub_menu');
let body = document.querySelector('body');
let open = document.querySelector('.sub_menu_open');



for (i = 0; i < dropItems.length; i++) {
    let dropItem = dropItems[i];
    dropItem.addEventListener('click', function (evt) {
        for (j = 0; j < arrows.length; j++) {
            arrow = arrows[j];
            subMenu = subMenus[j];
            if (arrow.classList.contains('arrow_bot')) {
                subMenu.classList.add('sub_menu_open');
                arrow.classList.remove('arrow_bot');
                arrow.classList.add('arrow_top');
            } else {
                arrow.classList.remove('arrow_top');
                arrow.classList.add('arrow_bot');
                subMenu.classList.remove('sub_menu_open');
            }

        }
    });
}






