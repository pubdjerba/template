import React from 'react';
import ActiviteItem from '../components/ActiviteItem';

const ActiviteList = ({ activites }) =>
  activites.map((activite, index) => <ActiviteItem activite={activite} key={index} />);

export default ActiviteList;