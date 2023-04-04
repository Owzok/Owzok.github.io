const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPost = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPost.length; i++){
        if(allCategoryPost[i].classList.contains
        (item.attributes.id.value)){
            allCategoryPost[i].style.display = "block";
        } else {
            allCategoryPost[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
}
