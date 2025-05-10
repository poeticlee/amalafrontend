import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100  text-gray-800" 
    >
      <div className="max-w-xl mx-auto text-center bg-amber-100 rounded-2xl">
      <div className="flex justify-center">
  <h2 className="text-3xl text-white md:text-4xl font-bold mb-6 bg-red-400 rounded-4xl px-6 py-2 w-fit text-center">
    Contact us
  </h2>
</div>
        <p className="mb-6 text-2xl font-semibold">
         For your events ,parties and joyful gatherings.
        </p>
        <a
          href="mailto:yourname@email.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
        >
       
        </a>

        <p className= 'mb-6 text-xl font-semibold'>   Email : info@faajigrills.co.uk</p>

        <p className= 'mb-6 text-xl font-semibold'> Telephone number: +442080448299</p>
        <p className= 'mb-6 text-xl font-semibold'> Instagram : @faajigrills</p>
      </div>
    </section>
  );
}

export default Contact;
