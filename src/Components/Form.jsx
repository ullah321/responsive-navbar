import { useState } from "react";
import "../../src/Components/Form.css";
import { toast } from "react-toastify";


const Form = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6611d360-ba53-48e0-81dc-2d12f8847779");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Sent Message Succesfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.success);
          setResult("");
        }
      };


  return (
    <div className="header">
        <form onSubmit={onSubmit}>
                <label>First Name</label>
                <input type="text" placeholder="ahmad" name="name" required />
                <label>Last Name</label>
                <input type="text" placeholder="ahmad" name="name" required />
                <label>Phone Number</label>
                <input type="tel" placeholder="+8801887974944" name="number" required />
                <label>Email Address</label>
                <input type="email" placeholder="someone@gmail.com" name="email" required />
                <label>Message</label>
                <textarea name="message" placeholder="enter your message" rows="5"></textarea>
                <div className="btn">
                    <button>{result ? result : "Send Message"}</button>
                </div>
        </form>
    </div>
  );
}

export default Form