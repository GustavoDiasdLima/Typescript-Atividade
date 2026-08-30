import { test, expect } from "vitest";
import { concatenar } from "./strings";

test("Concatenação de strings", () => {
    expect( //espera que o concatenar: 
        concatenar(["Arrays", "com", "TypeScript"])
    ).toBe("Arrays com TypeScript"); //seja esse resultado

});