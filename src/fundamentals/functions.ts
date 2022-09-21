function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(10_000, 2022);

// optional parameter - 1st approach
/*
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(10_000);
*/

// optional parameter - 2nd approach
/*
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }

  return income * 1.3;
}

calculateTax(10_000);
*/

// for optional parameter you can pass a value or not - if you pass the value it will override default value if not it will use the default value
