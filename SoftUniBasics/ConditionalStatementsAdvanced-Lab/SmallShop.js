function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let totalPrice = 0;
    switch (city) {
      case "Sofia":
        if (product == "coffee") {
          totalPrice = quantity * 0.5;
        } else if (product == "water") {
          totalPrice = quantity * 0.8;
        } else if (product == "beer") {
          totalPrice = quantity * 1.2;
        } else if (product == "sweets") {
          totalPrice = quantity * 1.45;
        } else if (product == "peanuts") {
          totalPrice = quantity * 1.60;
        }
        break;
      case "Plovdiv":
        if (product == "coffee") {
          totalPrice = quantity * 0.4;
        } else if (product == "water") {
          totalPrice = quantity * 0.7;
        } else if (product == "beer") {
          totalPrice = quantity * 1.15;
        } else if (product == "sweets") {
          totalPrice = quantity * 1.30;
        } else if (product == "peanuts") {
          totalPrice = quantity * 1.50;
        }
        break;
      case "Varna":
        if (product == "coffee") {
          totalPrice = quantity * 0.45;
        } else if (product == "water") {
          totalPrice = quantity * 0.7;
        } else if (product == "beer") {
          totalPrice = quantity * 1.1;
        } else if (product == "sweets") {
          totalPrice = quantity * 1.35;
        } else if (product == "peanuts") {
          totalPrice = quantity * 1.55;
        }
        break;
    }
    console.log(totalPrice);
}

smallShop(["coffee", "Varna", "2"]);
smallShop(["peanuts", "Plovdiv", "1"]);
smallShop(["beer", "Sofia", "2"]);
smallShop(["water", "Plovdiv", "2"]);
smallShop(["sweets", "Sofia", "2.23"]);
