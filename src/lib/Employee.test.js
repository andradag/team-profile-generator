const Employee = require("../lib/Employee");

const instance = new Employee({
  name: "Jared",
  id: "1",
  email: "jared@fakemail.com",
  officeNumber: "1",
});

describe("Employee", () => {
  test("should be an instance of Employee", () => {
    const expected = "Employee";
    const actual = instance.getRole();

    expect(actual).toEqual(expected);
  });

  test("should return expected name", () => {
    const expected = "Jared";
    const actual = instance.getName();

    expect(actual).toEqual(expected);
  });

  test("should return expected id", () => {
    const expected = "1";
    const actual = instance.getId();

    expect(actual).toEqual(expected);
  });

  test("should return expected email", () => {
    const expected = "jared@fakemail.com";
    const actual = instance.getEmail();

    expect(actual).toEqual(expected);
  });
});
