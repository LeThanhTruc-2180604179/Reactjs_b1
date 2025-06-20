import React from 'react';

export default function Item({ icon, title, description }) {
  return (
    <div className="card bg-light border-0 h-100 position-relative pt-5">
      <span
        className="bg-primary bg-gradient text-white rounded-3 d-flex align-items-center justify-content-center position-absolute start-50 translate-middle-x"
        style={{
          width: 56,
          height: 56,
          fontSize: '2rem',
          top: -28,
          boxShadow: '0 0.5rem 1rem rgba(0,0,0,.15)'
        }}
      >
        <i className={`bi ${icon}`}></i>
      </span>
      <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
        <h2 className="fs-4 fw-bold">{title}</h2>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}
