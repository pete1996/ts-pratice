import { Table } from "antd";
import React from "react";

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_, index) => {
  if (index === 4) {
    return { colSpan: 0 };
  }
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: (text, row, index) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index < 4 ? 1 : 5,
      className: "tt",
    }),
  },
  {
    title: "Age",
    dataIndex: "age",
    onCell: sharedOnCell,
  },
  {
    title: "Home phone",
    colSpan: 2,
    dataIndex: "tel",
    onCell: (_, index) => {
      if (index === 2) {
        return { rowSpan: 2 };
      }
      // These two are merged into above cell
      if (index === 3) {
        return { rowSpan: 0 };
      }
      if (index === 4) {
        return { colSpan: 0 };
      }
    },
  },
  {
    title: "Phone",
    colSpan: 0,
    dataIndex: "phone",
    onCell: sharedOnCell,
  },
  {
    title: "Address",
    dataIndex: "address",
    onCell: sharedOnCell,
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park",
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park",
  },
];

export default function TableC() {
  return (
    <div className="t">
      <div className="test">
          这是水电费水电费
      </div>
      <div style={{marginTop: 20, marginBottom: 0,height: '60px',zIndex: 999, background: 'grey'}}>
      </div>
      <div style={{marginTop: -8,marginBottom: -8, border: '10px dashed red',height:'30px', zIndex: 999}} >
          <div>1</div>
      </div>

      <Table columns={columns} dataSource={data} bordered style={{marginTop: 8}} />
    </div>
  );
}
