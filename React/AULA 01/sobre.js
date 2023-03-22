const container = document.getElementById("container");

function sobre() {
    const hoje = new Date();
    container.innerHTML = `
    <h1>Sobre o site</h1>
    <p> Este site é construido com SPA.</p>
    <p>SPA é uma tecnologia onde tudo fica em uma mesma página.</p>
    `;
}