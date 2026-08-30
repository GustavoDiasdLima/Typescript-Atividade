import { test, expect } from "vitest";
import { ordenarParoleDecrescente } from "./decrescente";

test("Ordenação decrescente", () => {

    expect(
        ordenarParoleDecrescente(["carro", "boneco", "ave", "lapis"])
    ).toEqual(["lapis", "carro", "boneco", "ave"]);

});