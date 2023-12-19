import React from "react";
import "../App.css";
import { IoMdShare } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BiSolidComment } from "react-icons/bi";

const Cards = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <div
          className="card"
          style={{
            backgroundImage: `url(${movie.movie_image})`,
            boxShadow: `1px 0 40px ${movie.color}`,
          }}
          key={movie.id}
        >
          <div className="info">
            <div className="details">
              <div className="thumbnail">
                <img src={movie.thumbnail} alt={movie.name} />
              </div>
              <div>
                <p className="movie-title">{movie.name}</p>
                <p className="director">
                  {movie.release}, {movie.director}
                </p>
                <div className="movie-duration-info">
                  <span className="duration">{movie.duration}</span>
                  <p className="genre">{movie.genre}</p>
                </div>
              </div>
            </div>
            <div className="description">
              <p>{movie.description}</p>
            </div>
            <div className="button-container">
              <IoMdShare />
              <FaHeart />
              <BiSolidComment />
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      ))}
    </>
  );
};

export default Cards;
