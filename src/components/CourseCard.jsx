import React from 'react';
import PropTypes from 'prop-types';

/**
 * CourseCard Component
 * 
 * Displays a card representation of a course with title, description, and metadata.
 */
const CourseCard = ({ 
  id, 
  title, 
  description, 
  instructor, 
  level, 
  duration, 
  students, 
  rating,
  onClick 
}) => {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <h3 className="course-card-title">{title}</h3>
        {rating && (
          <div className="course-card-rating">
            <span className="rating-value">{rating}</span>
            <span className="rating-stars">★</span>
          </div>
        )}
      </div>
      
      <p className="course-card-description">{description}</p>
      
      <div className="course-card-metadata">
        {instructor && (
          <div className="metadata-item">
            <span className="metadata-label">Instructor:</span>
            <span className="metadata-value">{instructor}</span>
          </div>
        )}
        
        {level && (
          <div className="metadata-item">
            <span className="metadata-label">Level:</span>
            <span className="metadata-value">{level}</span>
          </div>
        )}
        
        {duration && (
          <div className="metadata-item">
            <span className="metadata-label">Duration:</span>
            <span className="metadata-value">{duration}</span>
          </div>
        )}
        
        {students && (
          <div className="metadata-item">
            <span className="metadata-label">Students:</span>
            <span className="metadata-value">{students}</span>
          </div>
        )}
      </div>
      
      {onClick && (
        <button 
          className="course-card-button" 
          onClick={onClick}
          aria-label={`View details for ${title}`}
        >
          View Course
        </button>
      )}
    </div>
  );
};

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  instructor: PropTypes.string,
  level: PropTypes.string,
  duration: PropTypes.string,
  students: PropTypes.number,
  rating: PropTypes.number,
  onClick: PropTypes.func,
};

CourseCard.defaultProps = {
  instructor: null,
  level: null,
  duration: null,
  students: null,
  rating: null,
  onClick: null,
};

export default CourseCard;
