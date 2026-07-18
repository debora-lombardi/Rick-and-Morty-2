const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
        console.log(data.results[0].image)
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].status)
        console.log(data.results[0].origin.name)

        data.results.forEach(element => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                
                <img src="${element.image}" alt="${element.name}" loading="lazy">
            
                <h3>${element.name}</h3>

                <div class="container-info-character">

                    <div class="info-character">
                        <img src="./src/assets/images/iconAlien.svg" alt="icone alien" loading="lazy">
                        <span>${element.species}</span>                
                    </div>
                    <div class="info-character">
                        <img src="./src/assets/images/mingcute_heartbeat-line.svg" alt="icone batimento cardiaco" loading="lazy">
                        <span>${element.status}</span>                
                    </div>
                    <div class="info-character">
                        <div><img src="./src/assets/images/iconPlanet.svg" alt="icone palneta" loading="lazy"></div>
                        <span>${element.origin.name}</span>                
                    </div>

                </div>            
            
            `
            container.appendChild(card)

        });

    })

