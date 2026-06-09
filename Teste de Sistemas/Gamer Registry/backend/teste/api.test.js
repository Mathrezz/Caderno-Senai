const request = require("supertest");
const app = require("../app");

//Testando código de retorno da API
test("Listar Jogos mostrando apenas o código 200", async () =>{
    const response = await request(app).get("/api/games");
    expect(response.statusCode).toBe(200);
});

//Testando conteudó da resposta e se é maior que 0
test("Retornando se é uma lista de jogos", async() => {
    const response = await request(app).get("/api/games");
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
});

test("Criar um novo jogo", async () => {
    const response = await request(app).post("/api/games")
        .send({
            id: 1,
            title: "Burjeiski",
            genre: "Terror",
            release_year: 2067 
        });
    expect(response.statusCode).toBe(200); 
   //expect(response.body.id).toBe(1);
    expect(response.body.title).toBe("Burjeiski");
    expect(response.body.genre).toBe("Terror");
    expect(response.body.release_year).toBe(2067); 
});

test("Post com retorno de erro", async () => {
    const response = await request(app).post("/api/games").send({});
    expect(response.statusCode).toBe(500);
});