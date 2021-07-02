/*---------------ALL BUTTON SELECTOR----------------------*/

function allButtonSelectorMeat() {
    var input = document.querySelectorAll('.meat')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}
function allButtonSelectorFresh() {
    var input = document.querySelectorAll('.fresh')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}
function allButtonSelectorGrainsBread() {
    var input = document.querySelectorAll('.grainsbread')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}
function allButtonSelectorCondiments() {
    var input = document.querySelectorAll('.condiments')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}
function allButtonSelectorCannedGoods() {
    var input = document.querySelectorAll('.cannedgoods')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}
function allButtonSelectorDairyEggs() {
    var input = document.querySelectorAll('.dairyeggs')
    for(var i = 0; i < input.length; i++){
        input[i].checked = true;
    }
}

/*------------------REMOVE BUTTON SELECTOR-----------------------------*/

function removeButtonSelectorMeat() {
    var input = document.querySelectorAll('.meat')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}
function removeButtonSelectorFresh() {
    var input = document.querySelectorAll('.fresh')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}
function removeButtonSelectorGrainsBread() {
    var input = document.querySelectorAll('.grainsbread')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}
function removeButtonSelectorCannedGoods() {
    var input = document.querySelectorAll('.cannedgoods')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}
function removeButtonSelectorCondiments() {
    var input = document.querySelectorAll('.condiments')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}
function removeButtonSelectorDairyEggs() {
    var input = document.querySelectorAll('.dairyeggs')
    for(var i = 0; i < input.length; i++){
        if(input[i].checked == true){
            input[i].checked = false;
        }
    }
}

function allButtonSelectorFinalShoppingList(){
    var container = document.getElementById("finalProductList");
    for(var i = 0; i < container.children.length; i++){
        //console.log(container.children[i].tagName);
        if(container.children[i].tagName.toLowerCase() == "label"){
            //console.log(container.children[i].children[0]);
            container.children[i].children[0].checked = true;
        }
    }
}

/*------------------------------------------------------------*/

let productId = ["SkinlessWhiteMeat","LeanCutsOfRedMeat","Fish","Yogurt","Cheese","Milk","Eggs","Pepsi","Soups","ChoppedTomatoes"
,"BlackBeans","LimaBeans","KidneyBeans","KetchupMustard","Vinegar","Honey","BasilOreganoCumin","SaltPepper","Granola","Oatmeal"
,"CornFlakes","AllPurposeFlour","Bread","Rice","Pasta","ApplesOrangesBananas","OnionsGarlic"]


function moveToListFunction(){
    productId.forEach(variable=>{
       // document.getElementById(variable).childNodes[0].addEventListener("change", function(){
                  if(document.getElementById(variable).childNodes[0].checked == true){
                      var node = document.getElementById(variable);
                      node.childNodes[0].checked = false;
                      document.getElementById("finalProductList").appendChild(node);
                  }
              })  
}

let productSections = {"meatContainer":["SkinlessWhiteMeat","LeanCutsOfRedMeat","Fish"], "freshProduceContainer":["OnionsGarlic","ApplesOrangesBananas"], "grainsBreadContainer":["Pasta","Rice","Bread",
"AllPurposeFlour","CornFlakes","Oatmeal","Granola"], "condimentsContainer":["SaltPepper","BasilOreganoCumin","Honey","Vinegar","KetchupMustard"], "cannedGoodsContainer":["KidneyBeans",
"LimaBeans","BlackBeans","ChoppedTomatoes","Soups","Pepsi"], "dairyEggsContainer":["Milk","Eggs","Cheese","Yogurt"]};

function removeFromListFunction(){
    Object.keys(productSections).forEach(key=>{
        productSections[key].forEach(variable=>{
            if(document.getElementById(variable).childNodes[0].checked == true){
                document.getElementById(variable).childNodes[0].checked = false;
                var node = document.getElementById(variable);
                document.getElementById(key).appendChild(node);
            }
        })
    })
}

/*-------------------------------TASK BOX---------------------------*/

function addContainerButton(){
}
function addProductButton(){
}