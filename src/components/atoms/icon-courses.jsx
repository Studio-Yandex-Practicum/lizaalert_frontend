import React from 'react';
import PropTypes from 'prop-types';

function IconCourses({ className }) {
  return (
    <svg
      className={className}
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4899 6.19002L19.4899 5.64002L10.4899 0.640017H10.3799C10.3186 0.614096 10.255 0.594007 10.1899 0.580017H9.99988H9.81988C9.75156 0.594016 9.68462 0.614096 9.61988 0.640017H9.50988L0.509878 5.64002C0.35598 5.72724 0.227972 5.85372 0.138912 6.00655C0.0498528 6.15939 0.00292969 6.33312 0.00292969 6.51002C0.00292969 6.68691 0.0498528 6.86064 0.138912 7.01348C0.227972 7.16632 0.35598 7.2928 0.509878 7.38002L2.99988 8.76002V13.5C2.99988 14.2957 3.31595 15.0587 3.87856 15.6213C4.44117 16.1839 5.20423 16.5 5.99988 16.5H13.9999C14.7955 16.5 15.5586 16.1839 16.1212 15.6213C16.6838 15.0587 16.9999 14.2957 16.9999 13.5V8.76002L18.9999 7.64002V10.5C18.9999 10.7652 19.1052 11.0196 19.2928 11.2071C19.4803 11.3947 19.7347 11.5 19.9999 11.5C20.2651 11.5 20.5194 11.3947 20.707 11.2071C20.8945 11.0196 20.9999 10.7652 20.9999 10.5V7.06002C20.9996 6.88282 20.9522 6.70889 20.8626 6.55602C20.773 6.40315 20.6443 6.27684 20.4899 6.19002V6.19002ZM14.9999 13.5C14.9999 13.7652 14.8945 14.0196 14.707 14.2071C14.5194 14.3947 14.2651 14.5 13.9999 14.5H5.99988C5.73466 14.5 5.48031 14.3947 5.29277 14.2071C5.10523 14.0196 4.99988 13.7652 4.99988 13.5V9.87002L9.50988 12.37L9.65988 12.43H9.74988C9.83288 12.4405 9.91687 12.4405 9.99988 12.43C10.0829 12.4405 10.1669 12.4405 10.2499 12.43H10.3399C10.393 12.4188 10.4437 12.3985 10.4899 12.37L14.9999 9.87002V13.5ZM9.99988 10.36L3.05988 6.50002L9.99988 2.64002L16.9399 6.50002L9.99988 10.36Z"
        fill="#212329"
      />
    </svg>
  );
}

IconCourses.propTypes = {
  className: PropTypes.string.isRequired,
};

export default IconCourses;
