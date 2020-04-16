import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import { signUp } from "../../store/user/actions";
// import { selectToken } from "../../store/user/selectors";
// import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  // const history = useHistory();

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/");
  //   }
  // }, [token, history]);

  function submitForm(event) {
    event.preventDefault();
    //dispatch(signUp(name, email, password, isArtist));

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <div class="form">
      <form>
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>
      </form>
    </div>
  );
}
