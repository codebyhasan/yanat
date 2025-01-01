document.getElementById('joinForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Here you can add code to handle the form submission, e.g., send data to a server
    alert(`Thank you for joining, ${name}! We will contact you at ${email}.`);
    
    // Clear the form
    document.getElementById('joinForm').reset();
});
