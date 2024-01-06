const app = require("../app");
const request = require("supertest");

describe("todos", () => {
  test("List all todos", (done) => {
    request(app)
      .get("/todos")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("List all todos");
        done();
      })
      .catch(done);
  });
  test("Detail todo", (done) => {
    request(app)
      .get("/todos/2")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Detail todo");
        done();
      })
      .catch(done);
  });
  test("Detail todo - Todo not found", (done) => {
    request(app)
      .get("/todos/9999")
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("Todo not found");
        done();
      })
      .catch(done);
  });
  test("Create todo", (done) => {
    request(app)
      .post("/todos")
      .send({
        title: "test todo",
        status: "active"
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body.message).toBe("Todo created");
        done();
      })
      .catch(done);
  });
  test("Delete todo", (done) => {
    request(app)
      .delete("/todos/2")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.message).toBe("Todo deleted");
        done();
      })
      .catch(done);
  });
  test("Delete todo - Todo not found", (done) => {
    request(app)
      .delete("/todos/9999")
      .expect("Content-Type", /json/)
      .expect(404)
      .then((response) => {
        expect(response.body.message).toBe("Todo not found");
        done();
      })
      .catch(done);
  })
})

