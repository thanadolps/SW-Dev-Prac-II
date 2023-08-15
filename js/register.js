/**
 * Validates form fields according to the specified rules.
 *
 * @param {string} companyName - The name of the company.
 * @param {string} contactName - The name of the contact person.
 * @param {string} contactNumber - The contact number.
 * @param {string} chairCount - The number of chairs.
 * @returns {string[]} An array of error messages, if any.
 */
function validateFields(companyName, contactName, contactNumber, chairCount) {
  let errors = [];

  if (companyName == "") {
    errors.push("Company name must not be empty");
  }

  if (contactName == "") {
    errors.push("Contact name must not be empty");
  }

  if (contactNumber == "") {
    errors.push("Contact number must not be empty");
  }

  if (chairCount != "") {
    if (isNaN(chairCount) || chairCount < 1 || chairCount > 10) {
      errors.push("Number of chairs must be a number between 1 and 10");
    }
  }

  return errors;
}

function validateForm(event) {
  event.preventDefault();

  const companyName = document.forms[0]["name"].value;
  const contactName = document.forms[0]["contact"].value;
  const contactNumber = document.forms[0]["phone"].value;
  const chairCount = document.forms[0]["chairCount"].value;

  let errors = validateFields(
    companyName,
    contactName,
    contactNumber,
    chairCount
  );

  if (errors.length > 0) {
    displayErrors(errors);
    return false;
  }

  alert("Form submitted successfully");
  return true;
}

/**
 * @param {string[]} errors
 */
function displayErrors(errors) {
  let msg = errors.map((error) => `- ${error}`).join("\n");
  msg = "Error in form validation\n" + msg;
  alert(msg);
}
