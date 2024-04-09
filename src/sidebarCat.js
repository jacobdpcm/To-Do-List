import sun from './images/sun.svg';

function createCategory(className, catName, imageName){
    const categories = document.querySelector('.categories')
    const category = document.createElement('div');
    category.classList.add('cat');
    category.classList.add(className);
    categories.appendChild(category);

    const image = document.createElement('img');
    image.src = imageName;
    category.appendChild(image);

    const name = document.createElement('div');
    name.classList.add('catName');
    name.textContent = catName;
    category.appendChild(name);
}

function categorySetup(){
    createCategory('today', 'Today', sun);
    createCategory('week', 'This Week', /*ADD CALENDER IMAGE HERE*/)
}

export { categorySetup };