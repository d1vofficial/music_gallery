import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-white text-gray-800">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <p className="mt-4 text-lg max-w-3xl mx-auto text-center">
        Feel free to reach out for collaborations or inquiries:
      </p>
      <ul className="mt-8 text-center">
        <li>Email: divyam.youdj@gmail.com</li>
        <li>
          Instagram:{" "}
          <a
            href="https://www.instagram.com/_divjain_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @_divjain_
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
