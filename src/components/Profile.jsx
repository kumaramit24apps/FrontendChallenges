import React, { useState, useEffect } from "react";
const people = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    name: "Courtney Henry",
    email: "debbie.baker@example.com",
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/women/79.jpg",
    name: "Wade Warren",
    email: "bill.sanders@example.com",
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Bessie Cooper",
    email: "curtis.weaver@example.com",
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Eleanor Pena",
    email: "michelle.rivera@example.com",
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Cody Fisher",
    email: "deanna.curtis@example.com",
  },
  {
    id: 6,
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    name: "Annette Black",
    email: "dolores.chambers@example.com",
  },
  {
    id: 7,
    photo: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Marvin McKinney",
    email: "georgia.young@example.com",
  },
];

export const Profile = () => {
  return (
    <article className="mx-auto rounded-lg border border-slate-200 bg-white p-8 shadow-md">
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id}>
              {/* Profile Link */}
              <a
                href="#"
                className="group flex items-center justify-between rounded-md p-4  outline-1 outline-blue-500 transition-all duration-75 ease-in-out hover:bg-blue-100 hover:outline"
              >
                {/* Profile Content */}
                <figure className="mr-4 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover object-top"
                    src={person.photo}
                    alt={person.name}
                  />
                  <figcaption className="ml-4">
                    <p className="text-md font-medium text-slate-900">
                      {person.name}
                    </p>
                    <p className="font-regular text-md text-slate-500 ">
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
