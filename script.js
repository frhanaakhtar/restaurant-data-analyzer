const menu = [
{
id:1,
name:"Zinger Burger",
category:"Burger",
price:850,
available:true,
rating:4.8
},
{
id:2,
name:"Beef Burger",
category:"Burger",
price:950,
available:true,
rating:4.7
},
{
id:3,
name:"Chicken Pizza",
category:"Pizza",
price:1800,
available:true,
rating:4.9
},
{
id:4,
name:"BBQ Pizza",
category:"Pizza",
price:2100,
available:true,
rating:4.8
},
{
id:5,
name:"Pasta Alfredo",
category:"Pasta",
price:1400,
available:true,
rating:4.6
},
{
id:6,
name:"Spaghetti",
category:"Pasta",
price:1300,
available:true,
rating:4.5
},
{
id:7,
name:"Club Sandwich",
category:"Sandwich",
price:750,
available:true,
rating:4.4
},
{
id:8,
name:"Shawarma",
category:"Wrap",
price:450,
available:true,
rating:4.3
},
{
id:9,
name:"French Fries",
category:"Snacks",
price:350,
available:true,
rating:4.2
},
{
id:10,
name:"Chicken Nuggets",
category:"Snacks",
price:650,
available:true,
rating:4.5
},
{
id:11,
name:"Fried Chicken",
category:"Chicken",
price:1200,
available:true,
rating:4.7
},
{
id:12,
name:"Chicken Biryani",
category:"Rice",
price:650,
available:true,
rating:4.9
},
{
id:13,
name:"Mutton Karahi",
category:"Desi",
price:2800,
available:true,
rating:4.9
},
{
id:14,
name:"BBQ Platter",
category:"BBQ",
price:3500,
available:false,
rating:4.8
},
{
id:15,
name:"Cold Drink",
category:"Beverage",
price:180,
available:true,
rating:4.1
},
{
id:16,
name:"Coffee",
category:"Beverage",
price:400,
available:true,
rating:4.6
},
{
id:17,
name:"Chocolate Brownie",
category:"Dessert",
price:500,
available:true,
rating:4.8
},
{
id:18,
name:"Ice Cream",
category:"Dessert",
price:300,
available:true,
rating:4.5
},
{
id:19,
name:"Chocolate Cake",
category:"Dessert",
price:700,
available:true,
rating:4.7
},
{
id:20,
name:"Caesar Salad",
category:"Salad",
price:900,
available:true,
rating:4.4
}
];
console.log(menu);

// ===== Destructuring =====
const { name, price, category } = menu[0];
console.log("Item Name:", name);
console.log("Price:", price);
console.log("Category:", category);

// ===== Spread Operator =====
const specialMenu = {
    ...menu[0],
    discount: "15%",
    chefSpecial: true
};
console.log(specialMenu);

// ===== map() =====
const menuNames = menu.map(item => item.name);
console.log(menuNames);

// ===== filter() =====
const premiumItems = menu.filter(item => item.price > 1000);
console.log(premiumItems);

// ===== find() =====
const searchedItem = menu.find(item => item.name === "Chicken Pizza");
console.log(searchedItem);

// ===== some() =====
const unavailableItem = menu.some(item => item.available === false);
console.log(unavailableItem);

// ===== reduce() =====
const totalMenuPrice = menu.reduce((total, item) => total + item.price, 0);
console.log(totalMenuPrice);

// ===== every() =====
const goodRatings = menu.every(item => item.rating >= 4);
console.log(goodRatings);

// ===== Summary Object =====
const summary = {
totalItems: menu.length,
totalMenuPrice: totalMenuPrice,
averageRating:
(menu.reduce((sum, item) => sum + item.rating, 0) / menu.length).toFixed(1),
highestPrice:
Math.max(...menu.map(item => item.price)),
lowestPrice:
Math.min(...menu.map(item => item.price))
};
console.log(summary);

// ===== Output Section =====
const output = document.getElementById("output");

// Summary Card
output.innerHTML = `
<div class="card">
<h3>📋 Restaurant Summary</h3>
<p><strong>Total Menu Items:</strong> ${summary.totalItems}</p>
<p><strong>Total Menu Price:</strong> Rs. ${summary.totalMenuPrice}</p>
<p><strong>Average Rating:</strong> ⭐ ${summary.averageRating}</p>
<p><strong>Highest Price:</strong> Rs. ${summary.highestPrice}</p>
<p><strong>Lowest Price:</strong> Rs. ${summary.lowestPrice}</p>
</div>
`;

// Menu Names
output.innerHTML += `
<div class="card">
<h3>🍽️ Complete Menu</h3>
${menuNames.map(item=>`<p>✅ ${item}</p>`).join("")}
</div>
`;

// Premium Items
output.innerHTML += `
<div class="card">
<h3>💎 Premium Menu Items</h3>
${premiumItems.map(item=>`
<p>${item.name} - Rs. ${item.price}</p>
`).join("")}
</div>
`;

// Find Item
output.innerHTML += `
<div class="card">
<h3>🔍 Search Result</h3>
<p><strong>Name:</strong> ${searchedItem.name}</p>
<p><strong>Category:</strong> ${searchedItem.category}</p>
<p><strong>Price:</strong> Rs. ${searchedItem.price}</p>
<p><strong>Rating:</strong> ⭐ ${searchedItem.rating}</p>
</div>
`;

// Availability
output.innerHTML += `
<div class="card">
<h3>🍴 Availability Check</h3>
<p>Any Item Unavailable: ${unavailableItem ? "Yes" : "No"}</p>
<p>All Items Rated Above 4: ${goodRatings ? "Yes" : "No"}</p>
</div>
`;