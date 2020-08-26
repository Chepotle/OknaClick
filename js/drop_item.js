let dropItems = document.querySelectorAll('.drop_item');

let arrows = document.querySelectorAll('.nav_arrow');
let subMenus = document.querySelectorAll('.sub_menu');
let body = document.querySelector('body');



for (i = 0; i < dropItems.length; i++) {
    let dropItem = dropItems[i];
    dropItem.addEventListener('click', function (evt) {
        for (j = 0; j < arrows.length; j++) {
            let arrow = arrows[j];
            let subMenu = subMenus[j];
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



document.addEventListener('click', function (e) {

    for (j = 0; j < arrows.length; j++) {
        let arrow = arrows[j];
        let subMenu = subMenus[j];
        let dropItem = dropItems[j];

        let target = e.target;
        let itsSubMenu = target == subMenu;
        let itsDropItem = target == dropItem || dropItem.contains(target);
        let subMenuActive = subMenu.classList.contains('sub_menu_open');

        if (!itsSubMenu && !itsDropItem && subMenuActive) {
            subMenu.classList.remove('sub_menu_open');
            arrow.classList.remove('arrow_top');
            arrow.classList.add('arrow_bot');
        }
    }

});










