import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}: ${formData.message}`);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
