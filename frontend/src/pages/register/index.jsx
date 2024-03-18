import { Form, Link, redirect } from "react-router-dom";
import "./index.scss";
import { customFetch } from "../../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    const response = await customFetch.post("/auth/register", data);
    toast.success("Account created successfully");
    return redirect("/login");
  } catch (error) {
    console.log(error);
    toast.error("Please double check your credentials");
  }
  return null;
};
export default function Register() {
  return (
    <section className="login">
      <div className="login__form_wrapper">
        <div className="form-head">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>

          <h2>Register</h2>
        </div>
        <Form className="login__form" method="POST">
          <div className="login__form-group">
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" />
          </div>

          <div className="login__form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div className="login__form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button type="submit" className="btn">
            Submit
          </button>
        </Form>
        <p>
          Already have an Acccount?{" "}
          <Link className="alt-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
