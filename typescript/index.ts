// regular - 10
// premium - 20

// class Discount {
//   giveDiscount(customerType: 'premium' | 'regular'): number {
//     switch (customerType) {
//       case 'premium':
//         return 20;
//       case 'regular':
//       default:
//         return 10;
//     }
//   }
// }

// Refactored class above to Open-Closed Principle
// If we want to add a new customer type, we can just create a new class and implement the Customer interface following the Open-Closed Principle. By example, adding a customer gold type.

interface Customer {
  giveDiscount(): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 0;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const regularCustomer = new RegularCustomer();
const premiumCustomer = new PremiumCustomer();
const goldCustomer = new GoldCustomer();

const discount = new Discount();

const regularDiscount = discount.giveDiscount(regularCustomer);
const premiumDiscount = discount.giveDiscount(premiumCustomer);
const goldDiscount = discount.giveDiscount(goldCustomer);

console.log('Regular Discount:', regularDiscount);
console.log('Premium Discount:', premiumDiscount);
console.log('Gold Discount:', goldDiscount);
