import React from 'react';
import Header from '../component/Header';

const Contact = () => {
  return (
    <div>
      <Header title="Contact"></Header>
      <form onsubmit="test">
        <div>
          <input class="name" type="text" placeholder="name" required></input>
          <input class="name" type="text" placeholder="email" required></input>
        </div>
        <input class="subject" type="text" placeholder="Subject"></input>
        <div>
          <textarea
            class="msg"
            name="message"
            placeholder="message"
            required
          ></textarea>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
