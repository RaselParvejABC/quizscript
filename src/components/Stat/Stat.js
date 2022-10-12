import React from "react";
import Container from "react-bootstrap/Container";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useLoaderData } from "react-router-dom";

const Stat = () => {
  const { topics } = useLoaderData();
  return (
    <Container className="text-center d-flex flex-column justify-content-center">
      <h1 className="text-info fw-bold">
        Comparison among Our Different Tests
      </h1>
      <h4 className="mb-5">
        Based on <strong>Total</strong> Number of Questions
      </h4>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={topics}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Stat;
