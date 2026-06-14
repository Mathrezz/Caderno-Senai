
        const pontos = 75;

        const placar = document.getElementById("placar");

        placar.textContent = pontos;

        if (pontos <= 49) {
            placar.style.color = "red";
            placar.style.backgroundColor = "#fde8e8";
        } else if (pontos <= 74) {
            placar.style.color = "orange";
            placar.style.backgroundColor = "#fef3e2";
        } else {
            placar.style.color = "green";
            placar.style.backgroundColor = "#eafaf1";
        }
