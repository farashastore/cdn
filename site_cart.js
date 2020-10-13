var cart_items_before = parseInt(document.getElementById("cart_badge").text());
if (isNaN(cart_items_before)) cart_items_before = 0;
console.log('cart_items_before: ', cart_items_before);
document.addEventListener("DOMContentLoaded", function(){ document.querySelectorAll("[data-salla-click-event='cart::adding-item']")[0].addEventListener("click",function(){setTimeout(function(){document.location.href='https://farasha.store/cart';},150);});});
