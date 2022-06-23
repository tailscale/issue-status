import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";
import moment from "moment";

const Container = styled.div`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const Title = styled.div`
  padding: 0 16px;
  font-size: 20px;
  margin-bottom: 16px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

// Maximum number of days to show
const incidentsVisibilityDays = process.env.REACT_APP_INCIDENTS_VISIBILITY_DAYS ?
  +process.env.REACT_APP_INCIDENTS_VISIBILITY_DAYS : 30;

export default ({ loading, incidents }) => {
  const [hasMounted] = useDidMount();

  // Filter incidents
  const now = moment();
  //const now = moment([2025, 0 /* 0-indexed */, 15]);
  const filtered = incidents?.filter(incident => {
    const updatedAt = moment(incident.updated_at);
    const diff = now.diff(updatedAt, "days");

    return diff < incidentsVisibilityDays;
  });

  return (
    <Container>
      <Title title={`Incidents from last ${incidentsVisibilityDays} days`}>Incidents</Title>
      {!loading || hasMounted ? (
        filtered?.length > 0 ? (
          filtered?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound>No Incidents found.</NoFound>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};
