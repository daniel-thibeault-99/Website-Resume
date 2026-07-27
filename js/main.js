// Finds the span in the footer.
const currentYearElement = document.getElementById("current-year");

// Gets the current year from the computer's date.
const currentYear = new Date().getFullYear();

// Places the year inside the footer.
currentYearElement.textContent = currentYear;