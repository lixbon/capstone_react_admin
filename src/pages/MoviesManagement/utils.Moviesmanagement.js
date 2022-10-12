export const headColumnsMovie = [
  {
    title: "Mã Phim",
    dataIndex: "maPhim",
    key: "maPhim",
  },
  {
    title: "Tên Phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
  },
  {
    title: "Hình Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (text) => {
      return <img src={text} alt="" className="w-32" />;
    },
  },
  {
    title: "Mô Tả",
    dataIndex: "moTa",
    key: "moTa",
    render: (moTa) => {
      return (
        <div className="w-64">
          <p>{moTa}</p>{" "}
        </div>
      );
    },
  },

  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
