// components/PageHeader.js
import React from "react";
import PropTypes from "prop-types";

const PageHeader = ({ title, subtitle }) => {
  return (
    <>
      <header className="page-header">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-xl">{subtitle}</p>
      </header>
      <hr className="w-full border-1 border-gray-300" />
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageHeader;
