function getShippingCost(country){
    const newCountry = country.toLowerCase();
 switch(newCountry) {
      case "china":
          return `Shipping to ${country} will cost 100 credits`
          break;
      case "chile":
              return `Shipping to ${country} will cost 250 credits`
              break;
      case "australia":
                 return `Shipping to ${country} will cost 170 credits`
                  break;
      case "jamaica":
                 return `Shipping to ${country} will cost 120 credits`
                  break;            
                  default:
                 return   `Sorry, there is no delivery to your country`
 }

}
console.log(getShippingCost("Sweden"));