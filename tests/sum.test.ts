import { describe, it, expect } from "vitest";
import { sum } from "../src/sum.js";

describe("sum", () => {
	it("suma números positivos", () => {
		expect(sum(2, 3)).toBe(5);
	});

	it("suma números negativos", () => {
		expect(sum(-2, -3)).toBe(-5);
	});
});
