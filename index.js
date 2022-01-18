const Calculate = {
  factorial(param){

    // if number is 0
    if (param == 0) {
        return 1;
    }

    //if number is positive
    else {
         return param * Calculate.factorial(param - 1);
    }
   
  }
}

module.exports = Calculate;


