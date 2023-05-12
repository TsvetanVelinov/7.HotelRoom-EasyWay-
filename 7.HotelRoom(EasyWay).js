function hotelRoom(input) {
    let month = input[0];
    let numNights = Number(input[1]);
    let studioPrice = 0;
    let apartmentPrice = 0;
  
    if (month === "May" || month === "October") {
      studioPrice = 50 * numNights;
      apartmentPrice = 65 * numNights;
      if (numNights > 14) {
        studioPrice *= 0.7;
      } else if (numNights > 7) {
        studioPrice *= 0.95;
      }
    } else if (month === "June" || month === "September") {
      studioPrice = 75.2 * numNights;
      apartmentPrice = 68.7 * numNights;
      if (numNights > 14) {
        studioPrice *= 0.8;
      }
    } else if (month === "July" || month === "August") {
      studioPrice = 76 * numNights;
      apartmentPrice = 77 * numNights;
    }
  
    if (numNights > 14) {
      apartmentPrice *= 0.9; // apartmentPrice = apartmentPrice * 0.9;
    }
  
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
    
  }


  hotelRoom (["May","15"])
hotelRoom (["June","14"])