const Engineer = require("../lib/Engineer");

const instance = new Engineer({
  name: "Grace",
  id: "3",
  email: "grace@fakemail.com",
  github: "gchoi2u",
});

describe("Engineer", () => {
  test("should be an instance of Engineer", () => {
    const expected = "Engineer";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Grace";
    const actual = instance.name;

    expect(actual).toEqual(expected);
  });

  test("should return expected id", () => {
    const expected = "3";
    const actual = instance.id;

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "grace@fakemail.com";
    const actual = instance.email;

    expect(actual).toEqual(expected);
  });

  test("should return expected github", () => {
    const expected = "gchoi2u";
    const instance = new Engineer({ github: "gchoi2u" });
    const actual = instance.getGithub();

    expect(actual).toEqual(expected);
  });
});
