import { menu } from "./data.js";

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
 

    return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
  });
  displayMenu = displayMenu.join("");
  

  sectionCenter.innerHTML = displayMenu;
}
const breakfastBtn = document.getElementById('breakfast');
const allBtn = document.getElementById('all');
const lunchBtn = document.getElementById('lunch');
const shakesBtn = document.getElementById('shakes');
allBtn.addEventListener("click",function(){
  diplayMenuItems(menu);
})
breakfastBtn.addEventListener("click",function(){
  displayMenuButtons(menu,"breakfast");
});
lunchBtn.addEventListener("click",function(){
  displayMenuButtons(menu,"lunch");
});
shakesBtn.addEventListener("click",function(){
  displayMenuButtons(menu,"shakes");
})

  
function displayMenuButtons(menuItem,idBtn) {
  //add display buttons here
  let displaybreakfast = menuItem.filter(function(elem){
    return elem.category === idBtn;
  });
  diplayMenuItems(displaybreakfast);
}

const inp = document.querySelector("input");
let id;
inp.addEventListener("keyup",function(){
  if(id!==undefined){
    clearTimeout(id);
  }
  setTimeout(function(){
    searchProduct(menu,inp.value);
  },1500)
  
})

function searchProduct(searchItem,inpValue){
  let resultSearch = searchItem.filter(item=>{
    return item.title.indexOf(inpValue) !==-1;
  })
  diplayMenuItems(resultSearch)
}
