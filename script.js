document.addEventListener("DOMContentLoaded", () => {
  const bookForm = document.getElementById("book-form");
  const bookList = document.getElementById("book-list");

  bookForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    // Create new row
    const row = document.createElement("tr");

    // Insert columns
    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><span class="delete">Clear</span></td>
    `;

    // Add row to table
    bookList.appendChild(row);

    // Clear form fields
    bookForm.reset();
  });

  // Event delegation to handle delete
  bookList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      const row = e.target.parentElement.parentElement;
      bookList.removeChild(row);
    }
  });
});
