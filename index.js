// Declaring customerName in the global scope
  var customerName = 'bob';


// Function to uppercase the global customerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to set bestCustomer to 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Function to overwrite the bestCustomer with a given value
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

// Function to change the leastFavoriteCustomer (using a const variable to prevent reassignment)
const leastFavoriteCustomer = 'John Doe';

// Trying to reassign will throw an error because it's a constant
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Jane Doe'; // This will throw an error since it's a const
}
