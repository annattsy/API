document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("characters");
    const searchInput = document.getElementById("search");

    try {
        const response = await fetch("b99.json");
        const characters = await response.json();

        function renderCharacters(filter = "") {
            container.innerHTML = "";
            characters
                .filter(character => character.name.toLowerCase().includes(filter.toLowerCase()))
                .forEach(character => {
                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
                        <img src="${character.image}" alt="${character.name}">
                        <p>${character.name}</p>
                    `;

                    container.appendChild(card);
                });
        }

        renderCharacters(); // Renderiza os personagens ao carregar a página

        searchInput.addEventListener("input", (event) => {
            renderCharacters(event.target.value);
        });

    } catch (error) {
        console.error("Erro ao carregar os personagens:", error);
    }
});
