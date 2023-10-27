import React from "react";
import Button from "./Button";
const Card = () => {
  return (
    <article className="mx-auto w-1/5 rounded-lg p-1 shadow-lg shadow-slate-300 ">
      <figure>
        <img
          className="img-responsive rounded-md "
          src="https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?auto=format&fit=crop&q=80&w=1770&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <figcaption className="my-4 p-4 py-0 ">
          <h2 className="pb-2 text-2xl font-bold text-blue-700">
            Responsive Tailwind CSS Card.
          </h2>
          <p className="mb-4 text-slate-700">
            We are creating an aswesome responsive card using tailwind css. It
            will not have a single line of custom css. It will utilize the
            utility classNamees instead.
          </p>
          <Button />
        </figcaption>
      </figure>
    </article>
  );
};

export default Card;
