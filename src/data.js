// Demo data only. Replace this module with authenticated API calls in production.
export const branches = [
 {id:'kowale',name:'Delta Kebab — Kowale',address:'ul. Apollina 16/2, Kowale'},
 {id:'gdansk',name:'Delta Kebab — Gdańsk',address:'ul. Kartuska 12, Gdańsk'},
 {id:'pruszcz',name:'Delta Kebab — Pruszcz Gdański',address:'ul. Grunwaldzka 8, Pruszcz Gdański'}
];
export const demoUsers = [
 {email:'kowale@deltakebab.demo',password:'KowaleDemo2026!',branchId:'kowale',name:'Kowale Employee'},
 {email:'gdansk@deltakebab.demo',password:'GdanskDemo2026!',branchId:'gdansk',name:'Gdańsk Employee'},
 {email:'pruszcz@deltakebab.demo',password:'PruszczDemo2026!',branchId:'pruszcz',name:'Pruszcz Employee'}
];
const products=[
 {name:'Delta Rollo',size:'Standard',price:18,meat:'Chicken',sauces:['Mild','Garlic'],extras:[]},
 {name:'Rollo Delta with Cheese',size:'Mega',price:32,meat:'Beef',sauces:['Spicy'],extras:['Cheese']},
 {name:'Kebab on Plate',size:'Medium',price:29,meat:'Mixed',sauces:['Garlic','Mild'],extras:['Fries']},
 {name:'Pizza Margherita',size:'Large',price:35,meat:'None',sauces:[],extras:['Extra cheese']}
];
export function makeDemoOrder(branchId){
 const item=products[Math.floor(Math.random()*products.length)];const qty=1+Math.floor(Math.random()*2);
 return {id:'DK-'+Date.now().toString(36).toUpperCase().slice(-7),branchId,createdAt:new Date().toISOString(),status:'new',customer:{name:['Jan Kowalski','Anna Nowak','Piotr Wiśniewski'][Math.floor(Math.random()*3)],phone:'+48 500 000 000',address:'ul. Przykładowa 12/3',notes:'Please ring the doorbell'},items:[{...item,quantity:qty,instructions:'No onions, please'}],paymentMethod:'Cash on delivery',deliveryFee:5,total:item.price*qty+5};
}
