import React from 'react';
import { getTime } from '../utilities/lib';
import CTAButton from './CTAButton';

const ProfileCard = ({
  photo,
  name,
  role,
  bio,
  skills,
  city,
  country,
  sociallinks,
}) => {
  const socialmedia = [...sociallinks];

  // socialmedia.map((sm) => {
  //   console.log(sm.icon);
  // });

  return (
    <>
      <section className="m-16 w-full min-w-[300px] rounded-lg border border-slate-200 bg-white bg-card-background bg-cover  bg-right-top bg-no-repeat p-8 shadow-md sm:w-[460px] ">
        {/* Profile */}
        <figure className=" mr-4 flex flex-col items-center">
          <img
            className="image-responsive h-24 w-24  rounded-full border-4 border-blue-50 object-cover object-top sm:h-32  sm:w-32 sm:border-[6px]"
            src={photo}
            alt={photo}
          />
          <figcaption className="mb-4 ml-4">
            <p className="mb-2 mt-4 text-2xl font-bold leading-6 text-slate-900 sm:text-3xl">
              {name}
            </p>
            <p className="font-regular text-center text-base leading-6 text-slate-500 ">
              {role}
            </p>
          </figcaption>
          <CTAButton />
        </figure>

        {/* Skills */}
        <article className="mt-8">
          <header>
            <h2 className="text-xs font-semibold uppercase text-slate-400">
              Professional Skills
            </h2>
          </header>
          <div className="flex flex-wrap py-4 ">
            {skills.map((skill, index) => {
              return (
                <span
                  key={index}
                  className="mb-2 mr-2 whitespace-nowrap rounded-full border border-blue-200 bg-blue-50 px-2 py-1 text-sm capitalize leading-normal text-slate-700"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </article>

        {/* Bio */}
        <article className="mb-7 mt-2">
          <header>
            <h2 className="text-xs font-semibold uppercase text-slate-400">
              About
            </h2>
          </header>
          <p className="mb-2 py-2 text-base leading-relaxed text-slate-700">
            {bio}
          </p>
          <div>
            <ul>
              <li className="mb-4 flex items-center">
                <span>
                  <svg
                    className="mr-2"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14C11.2583 14 10.5333 13.7801 9.91661 13.368C9.29993 12.956 8.81928 12.3703 8.53545 11.6851C8.25162 10.9998 8.17736 10.2458 8.32206 9.51841C8.46675 8.79098 8.8239 8.1228 9.34835 7.59835C9.8728 7.0739 10.541 6.71675 11.2684 6.57206C11.9958 6.42736 12.7498 6.50162 13.4351 6.78545C14.1203 7.06928 14.706 7.54993 15.118 8.16661C15.5301 8.7833 15.75 9.50832 15.75 10.25C15.7488 11.2442 15.3533 12.1973 14.6503 12.9003C13.9473 13.6033 12.9942 13.9988 12 14ZM12 8C11.555 8 11.12 8.13196 10.75 8.3792C10.38 8.62643 10.0916 8.97783 9.92127 9.38896C9.75098 9.8001 9.70642 10.2525 9.79323 10.689C9.88005 11.1254 10.0943 11.5263 10.409 11.841C10.7237 12.1557 11.1246 12.37 11.561 12.4568C11.9975 12.5436 12.4499 12.499 12.861 12.3287C13.2722 12.1584 13.6236 11.87 13.8708 11.5C14.118 11.13 14.25 10.695 14.25 10.25C14.2494 9.65345 14.0122 9.0815 13.5903 8.65967C13.1685 8.23784 12.5966 8.0006 12 8Z"
                      fill="#2563EA"
                    />
                    <path
                      d="M12 23L5.67299 15.5382C5.58508 15.4262 5.49808 15.3135 5.41199 15.2C4.33123 13.7763 3.74737 12.0374 3.74999 10.25C3.74999 8.06196 4.61919 5.96354 6.16636 4.41637C7.71354 2.86919 9.81196 2 12 2C14.188 2 16.2864 2.86919 17.8336 4.41637C19.3808 5.96354 20.25 8.06196 20.25 10.25C20.2526 12.0366 19.669 13.7747 18.5887 15.1978L18.588 15.2C18.588 15.2 18.363 15.4955 18.3292 15.5353L12 23ZM6.60899 14.2963C6.61049 14.2963 6.78449 14.5272 6.82424 14.5767L12 20.681L17.1825 14.5685C17.2155 14.5272 17.391 14.2948 17.3917 14.294C18.2746 13.1308 18.7517 11.7103 18.75 10.25C18.75 8.45979 18.0388 6.7429 16.773 5.47703C15.5071 4.21116 13.7902 3.5 12 3.5C10.2098 3.5 8.49289 4.21116 7.22702 5.47703C5.96115 6.7429 5.24999 8.45979 5.24999 10.25C5.24842 11.7112 5.72533 13.1326 6.60899 14.2963Z"
                      fill="#2563EA"
                    />
                  </svg>
                </span>
                {city}, {country}{' '}
              </li>
              <li className="mb-4 flex items-center">
                <span>
                  <svg
                    className="mr-2"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 23C9.9233 23 7.89323 22.3842 6.16652 21.2304C4.4398 20.0767 3.09399 18.4368 2.29927 16.5182C1.50455 14.5996 1.29661 12.4884 1.70176 10.4516C2.1069 8.41476 3.10693 6.54383 4.57538 5.07538C6.04383 3.60693 7.91476 2.6069 9.95156 2.20176C11.9884 1.79661 14.0996 2.00455 16.0182 2.79927C17.9368 3.59399 19.5767 4.9398 20.7304 6.66652C21.8842 8.39323 22.5 10.4233 22.5 12.5C22.5 15.2848 21.3938 17.9555 19.4246 19.9246C17.4555 21.8938 14.7848 23 12 23ZM12 3.5C10.22 3.5 8.47992 4.02785 6.99987 5.01678C5.51983 6.00571 4.36628 7.41132 3.68509 9.05585C3.0039 10.7004 2.82567 12.51 3.17294 14.2558C3.5202 16.0016 4.37737 17.6053 5.63604 18.864C6.89472 20.1226 8.49836 20.9798 10.2442 21.3271C11.99 21.6743 13.7996 21.4961 15.4442 20.8149C17.0887 20.1337 18.4943 18.9802 19.4832 17.5001C20.4722 16.0201 21 14.28 21 12.5C21 10.1131 20.0518 7.82387 18.364 6.13604C16.6761 4.44822 14.387 3.5 12 3.5Z"
                      fill="#2563EA"
                    />
                    <path
                      d="M15.4425 17L11.25 12.8075V5.75H12.75V12.185L16.5 15.9425L15.4425 17Z"
                      fill="#2563EA"
                    />
                  </svg>
                </span>
                <span>{getTime()}</span>
              </li>
            </ul>
          </div>
        </article>

        {/* Social */}
        <article>
          <h2 className="text-xs font-semibold uppercase text-slate-400">
            Social
          </h2>
          <ul className="pt-4">
            {socialmedia.map((sm, index) => {
              return (
                <li
                  className="mr-4 inline-flex items-center last:mr-0"
                  key={index}
                >
                  <a className="" href={sm.profileurl}>
                    <img src={sm.icon} alt={sm.platform} />
                  </a>
                  {console.log(sm.icon)}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
};

export default ProfileCard;
