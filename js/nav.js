// Dynamically inject navigation menu
const nav = document.getElementById('nav');
nav.innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="booking.html">Booking</a></li>
            <li><a href="hours.html">Hours</a></li>
            li><a href="sitemap.html">Sitemap</a></li>
        </ul>
    </nav>
`;
