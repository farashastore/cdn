var cart_items_before = parseInt(document.getElementById("cart_badge").innerHTML);
console.log('cart_items_before 1: ', cart_items_before);
if (isNaN(cart_items_before)) cart_items_before = 0;
console.log('cart_items_before 2: ', cart_items_before);
document.addEventListener("DOMContentLoaded", function(){ document.querySelectorAll("[data-salla-click-event='cart::adding-item']")[0].addEventListener("click",function(){
    setTimeout(function(){
      var cart_items_after = parseInt(document.getElementById("cart_badge").innerHTML);
      console.log('cart_items_after: ', cart_items_after);
      // document.location.href='https://farasha.store/cart';
    },500);
});});
