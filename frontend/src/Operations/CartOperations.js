

function add_to_cart(name, price, id){
    const check_out_cart = document.querySelector(".purchased-item");
    const check_cond =  document.getElementsByClassName("check-out-item-name");
    if(!check_exists_in_cart(name, check_cond)){
        if(check_out_cart.childNodes.length < 4){
            const add_cart = document.createElement("li");
            add_cart.className = "purchased - " + id;

            const item_name = document.createElement("div");
            item_name.classList.add("check-out-item-name");
            item_name.innerHTML = name;
            add_cart.appendChild(item_name);

            const quantity = document.createElement("input");
            quantity.classList.add("cart-input-box");
            quantity.setAttribute("type", "number");
            quantity.setAttribute("min", 1);
            quantity.value = 1;
            quantity.setAttribute("onChange", 'adjust_price();');
            quantity.onchange = function() {adjust_price();}; 
            add_cart.appendChild(quantity);

            const item_price = document.createElement("div");
            item_price.classList.add("check-out-item-price");
            item_price.innerHTML = price + "bitcoin";
            add_cart.appendChild(item_price);

            const delete_button = document.createElement("button");
            delete_button.innerHTML = '<i class = "fas fa-trash"></i>';
            delete_button.classList.add("delete-from-cart");
            delete_button.setAttribute('onclick','handle_delete('+delete_button+');');
            delete_button.onclick = function() {handle_delete(delete_button);}; 
            add_cart.appendChild(delete_button);

            check_out_cart.appendChild(add_cart);

            /*adjust the checkout price*/
            adjust_price();

        }else{
            alert("Your cart is full");
        }
    }else{
        alert("This item is already in the cart");
    }

}

function check_exists_in_cart(name, check_cond){
    for(var i = 0; i < check_cond.length; i++){
        if(check_cond[i].innerHTML === name){
            return true;
        }
    }
    return false;
}

function adjust_price(){
    const price = document.querySelector(".checkout-price");
    const tax = document.querySelector(".tax");
    const total = document.querySelector(".net-total");

    const cart = document.querySelector(".purchased-item");
    var p = 0.00;
    for(var i = 0; i < cart.childNodes.length && cart.childNodes.length > 0; i++){
        p += cart.childNodes[i].childNodes[1].value * parseFloat(cart.childNodes[i].childNodes[2].innerHTML.slice(0, -7));
    }
    var ta = p * 1.13 - p;
    var to = p + ta;
    price.innerHTML = price.innerHTML.slice(0,7) + p.toFixed(2);
    tax.innerHTML = tax.innerHTML.slice(0,5) + ta.toFixed(2);
    total.innerHTML = total.innerHTML.slice(0,7) + to.toFixed(2);


}

function handle_delete(d){
    const item_to_remove = d.parentElement;
    item_to_remove.remove();
    adjust_price();

}

export {add_to_cart}