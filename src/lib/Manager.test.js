const Manager = require("./Manager");

const instance = new Manager({
  name: "Jared",
  id: "1",
  email: "jared@fakemail.com",
  officeNumber: "1",
});

describe("Manager", () => {
  let Manager;

  beforeEach(() => {
    Manager = new Manager();
  });

  describe("Manager", () => {
    test("should be an instance of Manager", () => {
      const expected = "Manager";

      const instance = new Manager("Manager");

      const actual = instance.getRole();

      expect(actual).toEqual(expected);
    });

    test("should return the expected name", () => {
      const expected = "Jared";

      const actual = instance.name;

      expect(actual).toEqual(expected);
    });

    test("should return the expected id", () => {
      const expected = "1";

      const actual = instance.id;

      expect(actual).toEqual(expected);
    });

    test("should return the expected email", () => {
      const expected = "jared@fakemail.com";

      const actual = instance.email;

      expect(actual).toEqual(expected);
    });

    test("should return the expected office number", () => {
      const expected = "1";

      const actual = instance.getOfficeNumber;

      expect(actual).toEqual(expected);
    });
  });
});
