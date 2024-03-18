import { Form, Link, redirect } from "react-router-dom";
import "./index.scss";
import { customFetch } from "../../utils";
import { loginUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    // console.log(data);
    try {
      const response = await customFetch.post("/auth/login", data);
      store.dispatch(loginUser(response.data));
      toast.success("logged in successfully");
      return redirect("/");
    } catch (error) {
      toast.error("Please double check your credentials");
      return null;
    }
  };

export default function Login() {
  return (
    <section className="login">
      <div className="login__form_wrapper">
        <div className="form-head">
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          <h2>Login</h2>
        </div>
        <Form className="login__form" method="POST">
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
          Not a member yet?{" "}
          <Link to="/register" className="alt-link">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}
