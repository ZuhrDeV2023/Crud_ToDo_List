import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser } from "../slice/userSlice";
import { Button, TextField } from './index';

const AddUser = () => {
  const [values, setValues] = useState({ username: '', email: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser({
      id: uuidv4(),
      username: values.username,
      email: values.email
    }));
    setValues({ username: "", email: "" });
    navigate("/");
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField 
        label={"Foydalanuvchi ismi"}
        inputProps={{ type: "text", placeholder: "Iltimos ismingizni yozing" }}
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <br />
      <TextField 
        label={"Elektron pochta"}
        inputProps={{ type: "email", placeholder: "... @gmail.com" }}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
}

export default AddUser;