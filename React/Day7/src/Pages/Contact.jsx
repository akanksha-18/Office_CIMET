import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

function Contact() {
  const { setUserData } = useContext(AppContext);
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleForm} value={data.name} name="name" type="text" placeholder="Enter name" />
        <input onChange={handleForm} value={data.email} name="email" type="email" placeholder="Enter email" />
        <input onChange={handleForm} value={data.number} name="number" type="number" placeholder="Enter phone number" />
        <textarea onChange={handleForm} value={data.message} name="message" placeholder="Enter message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
