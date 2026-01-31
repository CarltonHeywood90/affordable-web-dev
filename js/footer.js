// Dynamically inject footer
const footer = document.getElementById('footer');
footer.innerHTML = `
    <footer>
        <p>&copy; ${new Date().getFullYear()} Affordable Web Dev. All rights reserved.</p>
        <p><a href="contact.html">Contact Us</a> | <a href="privacy.html">Privacy Policy</a></p>
    </footer>
`;
