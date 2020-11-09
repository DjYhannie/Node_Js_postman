const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

let recipes = [
    {
        id: 0,
        name: "Spaghetti Bolognese",
        ingredients: ["onion", "spaghetti", "beef", "tomato sauce"],
        purchasePrice: 30,
        sellingPrice: 50,
      },
      {
        id: 1,
        name: "Chicken Burger",
        ingredients: [
          "onion",
          "tomato",
          "chicken",
          "bread",
          "creamy sauce",
          "cheese",
        ],
        purchasePrice: 50,
        sellingPrice: 100,
      },
      {
        id: 2,
        name: "Chicken curry with rice",
        ingredients: ["rice", "chicken", "salt", "curry pasta"],
        purchasePrice: 45,
        sellingPrince: 70,
      },
      {
        id: 3,
        name: "Pizza with peppers",
        ingredients: ["pasta", "onion", "peppers", "ham", "tomato sauce", "cheese"],
        purchasePrice: 80,
        sellingPrice: 110,
      },
];


app.get('/recipes',(request,respond)=>{
  respond.json(recipes);
});


app.get('/recipes/:recipeId',(req,res)=>{
  let id = req.params.recipeId;
  let found = recipes.find(element=>{
    return element.id == id;
  });
  res.json(found);
});


app.post('/addRecipes/',(req,res)=>{
  let newElement = req.body;
  recipes.push(newElement);
  res.json(recipes);
});



app.delete('/deleteRecipe/:recipeId',(req,res)=>{
   let id = req.params.recipeId;
   recipes = recipes.filter((object) =>{
     return object.id != id;
   });
   res.json(recipes); 
 });


 app.put('/update/:recipeId',(req,res)=>{
   let id = req.params.recipeId; //for the id
   let price = req.body.newPrice; //for postman body
   let update = recipes.find((object)=>{
     return object.id == id;
   });
   update.purchasePrice = price;
   res.json(update);
 })





app.listen(9999, () =>{
    console.log("Server started at port 9999")
});

//OR

// let port = app.listen(8084, function(){
//   console.log("Server started at port 8084")
// })
