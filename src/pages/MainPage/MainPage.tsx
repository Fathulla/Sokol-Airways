import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { useGetFlightsQuery } from "../../store/api/flightsApi";
import { FlightsTable } from "../../components/FlightsTable/FlightsTable";



export const MainPage = () => {
    const { data, isLoading, error } = useGetFlightsQuery({
        limit: 1,
      });
      if (data) {
        console.log('DATA: ', data);
      }
      if (isLoading) {
        console.log('Loading...');
      }
      if (error) {
        console.log('ERROR', error);
      }
  return (
    <div className="MainPage">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="table">
        <FlightsTable />
      </div>
    </div>
  );
};
