import React from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({ usersPerPage, totalUsers, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default CustomPagination;
