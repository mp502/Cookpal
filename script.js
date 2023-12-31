
let data = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?Paneer",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fish",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];


let cards=document.querySelector(".cards");

let index=0;
data.forEach(mamu);

function mamu(e)
{
    let card=document.createElement("div");
    card.className="card";
    card.id="card"+index;
 
    card.innerHTML=` <div class="image">
    <img src="${e.imageSrc}" alt="${e.name}" height="250px" width="250px">
 </div>
 <div class="descr">
    <div class="isVeg">
        ${e.type==="veg"?"Veg" : "Non-Veg"}
    </div>
    <div class="middle" style="display: flex; justify-content: space-between;">
        <h3>${e.name}</h3>
        <p class="rating-star"><span style="color: #FDC040;"><i class="fa-solid fa-star"></i></span>${e.rating}</p>
    </div>
    <div class="lower" style="display: flex; justify-content: space-between;">
        <h3 style="color:#DC582A;">${e.time}</h3>
        <div style="display: flex; align-items: center; justify-content: space-between;">
          
           <span onclick="toggle(${index})" id="moye">${e.isLiked? `<i class="fa-solid fa-heart" style="color:red; padding-right:5px"></i>` : `<i class="fa-regular fa-heart" style="padding-right: 5px;"></i>`}</span>
            <i class="fa-regular fa-comment"></i>
        </div>
    </div>
 </div>`
 cards.appendChild(card);
 index++;
 }


function toggle(ind) 
{
    let id="#card"+ind;
    let ele=document.getElementById(id);
    console.log(id);
        let per=document.querySelector(`${id} #moye`);
    if(!data[ind].isLiked)
    {
        per.innerHTML=`<i class="fa-solid fa-heart" style="color:red; padding-right:5px" title="Liked" ></i>`;
        data[ind].isLiked=true;
    }
    else{
        per.innerHTML=`<i class="fa-regular fa-heart" style="padding-right: 5px;" title="Like-me"></i>`;
        data[ind].isLiked=false;
    }
}

let optionForm=document.querySelector(".options");
let optionAll="5";
optionForm.addEventListener('change',(e)=>
{
    e.preventDefault();
    if(optionAll===e.target.value)return;
    index=0;
    //e.target.value
    cards.innerHTML="";
   data.forEach(ele=>{
    if(e.target.value==="+4" && parseFloat(ele.rating)>=4)
    {
        mamu(ele);
        optionAll="+4"
    }
    else if(e.target.value==="-4"&& parseFloat(ele.rating)<4){
        mamu(ele);
        optionAll="-4"
    }
    else if(e.target.value==="5") {
        mamu(ele);
        optionAll="all";        
    }
   });

});


function category(isWhat)
{
    cards.innerHTML="";
    index=0;
   data.forEach(e=>{
    if(isWhat==="veg" && e.type==='veg')
    {
        mamu(e);
    }
    else if(isWhat==='non' && e.type==="non-veg"){
        mamu(e);
    }
    else if(isWhat==="all"){
        mamu(e);
    }
   });
}


function popupPlay() 
{
   let popup=document.querySelector(".popup");
   if(popup.style.display==="none"){
    popup.style.display="flex";
   }
   else popup.style.display="none";
}


let form=document.querySelector(".input-form");

form.addEventListener('submit',(event)=>
{
    let searchItem=document.querySelector("#search-item");
    let val=searchItem.value;
    cards.innerHTML="";
    data.forEach(e=>{

        if(e.name.toLowerCase().indexOf(val.toLowerCase())!=-1){
            mamu(e);
        }
        else if(val=="") mamu(e);
    });
});

