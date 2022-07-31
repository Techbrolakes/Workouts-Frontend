import React from "react";
import useSWR from "swr";
import { useWorkoutsContext } from "../hooks/useWorkoutContext";

export const useGetWorkouts = () => {
  const { dispatch } = useWorkoutsContext();

  const fetcher = async () => {
    const response = await fetch("/api/workouts");
    const json = await response.json();

    if (response.ok) {
      dispatch({
        type: "SET_WORKOUTS",
        payload: json,
      });
    }

    return json;
  };

  const { data, error, isValidating } = useSWR("api/workouts", fetcher);

  console.log(data);
  console.log(error);

  return {
    data,
  };
};
