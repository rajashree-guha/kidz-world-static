//selecting elements
var button = document.getElementsByClassName("button");
var cartValue = document.querySelector("#cart-value");
var cartButton = document.querySelector("#cart");

//storing name and price
var items = [
    {
      name: "This was our pact",
      quantity: 0,
      dollars: 7,
      cents: 49,
    },
    {
      name: "The famous five",
      quantity: 0,
      dollars: 4,
      cents: 59,
    },
    {
      name: "Matilda",
      quantity: 0,
      dollars: 6,
      cents: 80,
    },
    {
      name: "Harry Potter",
      quantity: 0,
      dollars: 10,
      cents: 0,
    },
    {
      name: "For Young Readers",
      quantity: 0,
      dollars: 7,
      cents: 29,
    },
    {
      name: "Wimpy Kid - DIY",
      quantity: 0,
      dollars: 4,
      cents: 99,
    },
    {
      name: "Dart Board",
      quantity: 0,
      dollars: 17,
      cents: 49,
    },
    {
      name: "Connect Four",
      quantity: 0,
      dollars: 19,
      cents: 99,
    },
    {
      name: "Jenga",
      quantity: 0,
      dollars: 20,
      cents: 99,
    },
    {
      name: "Monopoly",
      quantity: 0,
      dollars: 19,
      cents: 49,
    },
    {
      name: "Bookmarks",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Birthday Card",
      quantity: 0,
      dollars: 12,
      cents: 49,
    },
    {
      name: "Stuffed toys",
      quantity: 0,
      dollars: 15,
      cents: 99,
    },
    {
      name: "Dream catcher drawing",
      quantity: 0,
      dollars: 18,
      cents: 49,
    },
  ];

//when a button will be clicked it will get updated in the cart item
for (let i = 0; i < button.length; i++) {
 button[i].onclick = (e) => {
    items[i].quantity++;
    updateCart();
  };
}

//Updating cart
function updateCart() {
    let cart = 0;
    for (index = 0; index < items.length; index++) {
      cart = cart + items[index].quantity;
    }
    cartValue.innerHTML = cart;
  }

//updating price
var Dollars = 0;
var Cents = 0;

function updatePrice() {
  let totalPrice = 0;

  for (index = 0; index < items.length; index++) {
    totalPrice +=
      items[index].quantity * (items[index].dollars * 100 + items[index].cents);
  }
 Dollars = Math.floor(totalPrice/ 100);
 Cents = totalPrice % 100;
}

//update the cart item ,quantity and total amount in the console when the button is clicked
cartButton.onclick = () => {

    updatePrice();
    var text="";

    for (let index = 0; index < items.length; index++) {
        if (items[index].quantity != 0) {
        text+="Item name: " +
        items[index].name +
        " - Quantity: " +
        items[index].quantity+" ";
        }
    }
    console.log(
        text+="The total amount is " + Dollars +"$ and " + Cents + " cents" 
    );

};
