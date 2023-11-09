import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="py-10">
      <p className="text-center font-bold">
        APV - Administrador de Pacientes de{' '}
        <span className="text-indigo-600">Veterinaria</span>
      </p>

      <div className="flex justify-center mt-4">
        <a          
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a          
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
