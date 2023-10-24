import { Table } from "antd";
import React from "react";

export const FlightsTable = () => {
  const dataSource = [
    {
      key: "1",
      arrival_timezone: "Tashkent",
      flight_number: 89898,
      flight_date: "2019-12-12",
      departure_scheduled: '2019-12-12T04:20:00+00:00',
      departure_estimated: '2019-12-12T04:20:13+00:00',
      arrival_scheduled: '2019-12-12T04:20:00+00:00',
      terminal: '2',
      flight_status: 'active',
    },
    {
      key: "2",
      arrival_timezone: "Tashkent",
      flight_number: 89898,
      flight_date: "2019-12-12",
      departure_scheduled: '2019-12-12T04:20:00+00:00',
      departure_estimated: '2019-12-12T04:20:13+00:00',
      arrival_scheduled: '2019-12-12T04:20:00+00:00',
      terminal: '2',
      flight_status: 'active',
    },
    
  ];

  const columns = [
    {
      title: "Рейс",
      dataIndex: "flight_number",
      key: "flight_number",
    },
    {
      title: "Город",
      dataIndex: "arrival_timezone",
      key: "arrival_timezone",
    },
    
    {
      title: "Дата",
      dataIndex: "flight_date",
      key: "flight_date",
    },
    {
      title: "Время",
      dataIndex: "departure_scheduled",
      key: "departure_scheduled",
    },
    {
      title: "Расчетное",
      dataIndex: "departure_estimated",
      key: "departure_estimated",
    },
    /* {
      title: "Тип BC",
      dataIndex: "estimated",
      key: "estimated",
    }, */
    {
      title: "Стойка регистрации",
      dataIndex: "terminal",
      key: "terminal",
    },
    {
      title: "Выход",
      dataIndex: "arrival_scheduled",
      key: "estimated",
    },
    {
      title: "Status",
      dataIndex: "flight_status",
      key: "flight_status",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};
