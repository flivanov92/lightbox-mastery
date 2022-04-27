import { render } from "@testing-library/react";

const functie = (luni, marti, miercuri, joi, vineri) => {
  return luni + marti + miercuri + joi + vineri;
};

describe("ceva", () => {
  it("should test functie", () => {
    // render 8 5 10 12 15 = 50
    const expected = 50;
    const result = functie(8, 5, 10, 12, 15);
    expect(result).toBe(expected);
  });
});
