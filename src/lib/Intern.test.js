const Intern = require("../lib/Intern");

const instance = new Intern({
  name: "John",
  id: "5",
  email: "john@fakemail.com",
  school: "2University",
});

describe("Intern", () => {
  test("should be an instance of Intern", () => {
    const expected = "Intern";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "John";
    const actual = instance.name;

    expect(actual).toEqual(expected);
  });

  test("should return expected id", () => {
    const expected = "5";
    const actual = instance.id;

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "john@fakemail.com";
    const actual = instance.email;

    expect(actual).toEqual(expected);
  });

  test("should return expected school", () => {
    const expected = "2University";
    const actual = instance.getSchool();

    expect(actual).toEqual(expected);
  });
});
