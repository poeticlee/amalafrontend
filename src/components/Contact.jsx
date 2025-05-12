import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4   
      bg-[url('/assets/meat1.jpg')]
      text-gray-800"
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
       

        <p className="mb-6 text-xl font-semibold">
          {" "}
          Email : info@faajigrills.co.uk
        </p>

        <p className='mb-6 text-xl font-semibold'>
  Telephone number: <a href="tel:+442080448299" className="!text-black hover:underline">+442080448299</a>
</p>

<p className='mb-6 text-xl font-semibold'>
  Instagram: <a href="https://www.instagram.com/faajigrills" target="_blank" rel="noopener noreferrer" className="!text-black hover:underline">@faajigrills</a>
</p>

      </div>
    </section>
  );
}

export default Contact;
