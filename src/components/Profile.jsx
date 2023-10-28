import React from 'react';
import { people } from '../config';

export const Profile = () => {
  return (
    <article className="w-1/4 min-w-fit">
      <ul className="rounded-lg border border-slate-200 bg-white p-4 shadow-md md:p-8">
        {people.map((person) => {
          return (
            <li key={person.id}>
              {/* Profile Link */}
              <a
                href="#"
                className="group flex items-center justify-between rounded-md p-2 outline-1 outline-blue-500  transition-all duration-75 ease-in-out hover:bg-blue-100 hover:outline  md:p-4"
              >
                {/* Profile Content */}
                <figure className="mr-4 flex items-center">
                  <img
                    className="image-responsive h-10 w-10 rounded-full object-cover object-top md:h-12 md:w-12"
                    src={person.photo}
                    alt={person.name}
                  />
                  <figcaption className="ml-4 ">
                    <p className="text-md font-medium leading-6 text-slate-900">
                      {person.name}
                    </p>
                    <p className="font-regular text-md leading-6 text-slate-500 ">
                      {person.email}
                    </p>
                  </figcaption>
                </figure>

                {/* Arrow */}
                <span>
                  <svg
                    width="17"
                    height="18"
                    viewBox="0 0 17 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="group-hover:stroke-blue-500"
                      d="M4.75327 1.50653L12.2467 9L4.75327 16.4935"
                      stroke="#CAD4E0"
                      strokeWidth="1.68363"
                    />
                  </svg>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </article>
  );
};
