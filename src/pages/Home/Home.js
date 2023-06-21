import React, { useEffect, useState } from "react";
import "./home.css";

import Pagination from "../../components/Pagination/customPagination";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users");
        const data = await res.json();
        setUsers(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="">
      <h1>Home</h1>
      <div className="mt-3">
        <Row xs={1} md={2} className="g-4">
          {currentUsers.map((user) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={user.avatar}
                  alt={user.first_name}
                  id="user__images"
                />
                <Card.Body>
                  <Card.Title>
                    {user.first_name} {user.last_name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="mt-3">
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </Container>
  );
}
