// Dynamically inject footer
const footer = document.getElementById('footer');
footer.innerHTML = `
    <footer>
        <p> ${new Date().getFullYear()} Affordable Web Dev. </p>
    </footer>
`;
