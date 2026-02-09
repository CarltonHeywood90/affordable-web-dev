// Dynamically inject footer
const footer = document.getElementById('footer');
footer.innerHTML = `
    <footer>
        <p>&copy; ${new Date().getFullYear()} Affordable Web Dev. All rights reserved.</p>
    </footer>
`;
