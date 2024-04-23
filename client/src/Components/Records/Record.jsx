import { useEffect, useContext } from "react";
import "./Record.css";
import { Data } from "../Context/WorkoutContext";
import { useAuthContext } from "../../Hooks/useAuthContext";

const Record = () => {

  const {user} = useAuthContext();

  // State for getting the data
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
    if(user){
      
      getWorkouts();
    }
  }, [getWorkouts, user]);

  return (
    <div>
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p>Reps: {item.reps}</p>
              <p>Load(in kgs): {item.load}</p>
              <div className="btns">
              <img
                onClick={() => toggleUpdate(item)}
                src={require("../../assets/arrow.png")}
                alt="update"
              />
              <img
                onClick={() => deleteWorkout(item._id)}
                src={require("../../assets/bin.png")}
                alt="delete"
              />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Record;
