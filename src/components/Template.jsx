import React from 'react';
import ProfileCard from './Cards/ProfileCard';
import { people } from '../config';

const Tempalte = () => {
  return (
    <>
      <ProfileCard key={people[0].id} {...people[0]} />;
    </>
  );
};
export default Tempalte;
