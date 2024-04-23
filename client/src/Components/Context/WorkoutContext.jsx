import { createContext, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Hooks/useAuthContext";

export const Data = createContext();

const WorkoutContext = ({ children }) => {
  const { user } = useAuthContext();

  // GET REQUEST STATE
  const [workouts, setWorkouts] = useState(null);

  // Get request function

  const getWorkouts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:4000/api/workouts/", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const data = response.data;
      setWorkouts(data);
    } catch (error) {
      // Handle error (e.g., logging or setting an error state)
      console.error("There was an error fetching the workouts:", error);
    }
  };

  // POST REQUEST STATE
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

  // DELETE WORKOUTS

  const deleteWorkout = async (_id) => {
    await axios.delete(`http://127.0.0.1:4000/api/workouts/${_id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    getWorkouts();
  };

  // UPDATE WORKOUTS

  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
    getWorkouts();
  };

  return (
    <Data.Provider
      value={{
        workouts,
        setWorkouts,
        form,
        setForm,
        getWorkouts,
        deleteWorkout,
        updateForm,
        setUpdateForm,
        toggleUpdate,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default WorkoutContext;
