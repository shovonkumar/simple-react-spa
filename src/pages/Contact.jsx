import { useState } from "react";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setInput((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${input.name}, My email is ${input.email}, I want to say "${input.message}"`
    );
  };
  return (
    <>
      <div className="my-5">
        <h2 className="text-center">Contact Us</h2>
      </div>
      <div className="contact">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={input.name}
                  onChange={inputEvent}
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={input.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={input.message}
                  onChange={inputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
