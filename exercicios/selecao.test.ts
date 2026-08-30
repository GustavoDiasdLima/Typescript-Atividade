import { test, expect } from "vitest";
import { primeirosDue } from "./selecao";

test("Extração dos dois primeiros elementos", () => {

    expect(
        primeirosDue([2, 4, 6, 2, 8, 9, 5])
    ).toEqual([2, 4]);

});