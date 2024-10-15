import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Apply Form</h1>
      <form>
        {/* Environment Details */}
        <fieldset>
          <legend>Environment Details</legend>
          <label>
            <input type="radio" name="environment" value="Qa01" /> Qa01
          </label>
          <label>
            <input type="radio" name="environment" value="Qa02" /> Qa02
          </label>
          <label>
            <input type="radio" name="environment" value="Qa03" /> Qa03
          </label>
        </fieldset>

        {/* Product Details */}
        <fieldset>
          <legend>Product Details</legend>
          <label htmlFor="partner">Partner</label>
          <select id="partner" name="partner">
            <option value="partner1">Partner 1</option>
            <option value="partner2">Partner 2</option>
          </select>
          <label htmlFor="product">Product</label>
          <select id="product" name="product">
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
          </select>
        </fieldset>

        {/* Personal Details */}
        <fieldset>
          <legend>Personal Details</legend>
          <label htmlFor="firstname">First Name*</label>
          <input type="text" id="firstname" name="firstname" required />
          <label htmlFor="lastname">Last Name*</label>
          <input type="text" id="lastname" name="lastname" required />
          <label htmlFor="dob">Date of Birth*</label>
          <input type="date" id="dob" name="dob" required />
          <label htmlFor="ssn">SSN*</label>
          <input type="text" id="ssn" name="ssn" required />
          <label htmlFor="mmn">MMN*</label>
          <input type="text" id="mmn" name="mmn" required />
          <label htmlFor="income">Annual Income*</label>
          <input type="number" id="income" name="income" required />
          <label htmlFor="creditlimit">Credit Limit*</label>
          <input type="number" id="creditlimit" name="creditlimit" required />
        </fieldset>

        {/* Address Details */}
        <fieldset>
          <legend>Address Details</legend>
          <label htmlFor="address">Address*</label>
          <input type="text" id="address" name="address" required />
          <label htmlFor="city">City*</label>
          <input type="text" id="city" name="city" required />
          <label htmlFor="state">State*</label>
          <input type="text" id="state" name="state" required />
          <label htmlFor="zipcode">Zip Code*</label>
          <input type="text" id="zipcode" name="zipcode" required />
          <label htmlFor="country">Country*</label>
          <input type="text" id="country" name="country" required />
        </fieldset>

        {/* Contact Details */}
        <fieldset>
          <legend>Contact Details</legend>
          <label htmlFor="phone">Phone Number*</label>
          <input type="tel" id="phone" name="phone" required />
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </fieldset>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;