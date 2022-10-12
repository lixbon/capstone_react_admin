import { Space, Table, Tag } from "antd";
import React from "react";
import { headColumnsMovie } from "./utils.Moviesmanagement";

const MoviesTable = ({ MoviesList }) => (
  <Table
    rowKey={(record) => record.maPhim}
    columns={headColumnsMovie}
    dataSource={MoviesList}
  />
);

export default MoviesTable;
