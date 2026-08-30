import { test, expect } from "vitest";
import { quadrado1, quadrado2 } from "./quadrado";

test('Quadrado dos elementos da lista', () =>{
    expect(
        quadrado1([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
    expect(
    quadrado2([3, 5, 7, 3, 8, 9, 1])
).toEqual([9, 25, 49, 9, 64, 81, 1]);
});



