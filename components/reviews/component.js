import React from "react";
import Image from 'next/image';
import FenicksLogo from '../../assets/images/fenicks.png';

const Reviews = () => {
  return (
    <div className="reviews">
      <h1>Wat klanten van ons vinden.</h1>
      <div className="review-items">
        <div className="review-item">
          <div className="review-item-content">
            <p>
              MG Software spreekt de taal van opdrachtgevers, zijn zeer
              coöperatief en leverde concrete resultaten op met oog voor
              kwaliteit. Daarnaast is de snelheid bij opvolging van vragen
              uitmuntend.
            </p>
            <h3>Jan-Hylke de Jong</h3>
            <span>Eigenaar</span>
          </div>
          <div className="review-item-footer">
            <Image alt="fenicks logo" src={FenicksLogo} width="125px" height="25px" />
          </div>
        </div>
        <div className="review-item">
          <div className="review-item-content">
            <p>
              MG Software spreekt de taal van opdrachtgevers, zijn zeer
              coöperatief en leverde concrete resultaten op met oog voor
              kwaliteit. Daarnaast is de snelheid bij opvolging van vragen
              uitmuntend.
            </p>
            <h3>Jan-Hylke de Jong</h3>
            <span>Eigenaar</span>
          </div>
          <div className="review-item-footer">
            <Image alt="fenicks logo" src={FenicksLogo} width="125px" height="25px" />
          </div>
        </div>
        <div className="review-item">
          <div className="review-item-content">
            <p>
              MG Software spreekt de taal van opdrachtgevers, zijn zeer
              coöperatief en leverde concrete resultaten op met oog voor
              kwaliteit. Daarnaast is de snelheid bij opvolging van vragen
              uitmuntend.
            </p>
            <h3>Jan-Hylke de Jong</h3>
            <span>Eigenaar</span>
          </div>
          <div className="review-item-footer">
            <Image alt="fenicks logo" src={FenicksLogo} width="125px" height="25px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Reviews };
