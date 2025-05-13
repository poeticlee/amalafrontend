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
  Email:{" "}
  <a
    href="mailto:info@faajigrills.co.uk"
    className="!text-black hover:text-blue-600 active:text-blue-700 underline ml-1"
  >
    info@faajigrills.co.uk
  </a>
</p>


<p className='mb-6 text-xl font-semibold'>
  Telephone number: <a 
    href="tel:+442080448299" 
    className="!text-black hover:text-blue-600 active:text-blue-800 underline-offset-2 hover:underline"
  >
    +442080448299
  </a>
</p>

<p className="mb-6 text-xl font-semibold w-full flex justify-center"> 
  Facebook:{" "}
  <a
    href="https://www.facebook.com/faajigrills"
    target="_blank"
    rel="noopener noreferrer"
    className="!text-black !hover:underline flex items-center ml-2 space-x-1"
  >
    <img
      src="/assets/facebook1.jpeg"
      alt="Facebook"
      className="w-5 h-5 object-cover"
    />
    <span>Faajigrills</span>
  </a>
</p>
<p className="mb-6 text-xl font-semibold w-full flex justify-center"> 
  Instagram:{" "}
  <a
    href="https://www.instagram.com/faajigrills"
    target="_blank"
    rel="noopener noreferrer"
    className="!text-black !hover:underline flex items-center ml-2 space-x-1"
  >
    <img
      src="/assets/instagram1.jpeg"
      alt="Instagram"
      className="w-5 h-5 object-cover"
    />
    <span>Faajigrills</span>
  </a>
</p>



      </div>
    </section>
  );
}

export default Contact;
