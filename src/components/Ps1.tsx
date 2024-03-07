import React from 'react';
import config from '../../config.json';
import { langSetting } from '../utils/bin';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {langSetting === 'es'
          ? config.ps1_username_es
          : langSetting === 'en'
            ? config.ps1_username_en
            : langSetting === 'el'
              ? config.ps1_username_el
              : config.ps1_username_es}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
