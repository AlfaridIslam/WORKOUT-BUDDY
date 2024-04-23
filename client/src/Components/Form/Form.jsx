import { useContext} from "react";
import axios from "axios";
import { Data } from "../Context/WorkoutContext";
import "./Form.css";
import { useAuthContext } from "../../Hooks/useAuthContext";
 export const Form = () => {

  const{user} = useAuthContext();
  // State for getting the data
  const {
    workouts,
    setWorkouts,
    getWorkouts,
    form,
    setForm,
    updateForm,
    setUpdateForm,
  } = useContext(Data);

  const updateFormField = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();

    if(!user){
      return
    }
    
    const response = await axios.post(
      "http://127.0.0.1:4000/api/workouts/",
      form,
      {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      }
    );

    setWorkouts([...workouts, response.data]);

    setForm({
      title: "",
      reps: "",
      load: "",
    });

    getWorkouts();
  };

  // Updating Data

  const handleUpdateFieldChange = (e) => {
    const { name, value } = e.target;

    setUpdateForm({
      ...updateForm,
      [name]: value,
    });
  };

  const updateWorkout = async (e) => {
    e.preventDefault();
    const { _id, title, reps, load } = updateForm;

    await axios.patch(
      `http://127.0.0.1:4000/api/workouts/${_id}`,
      {
        title,
        reps,
        load,
      },
      {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      }
    );

    getWorkouts();

    setUpdateForm({
      _id: null,
      title: "",
      reps: "",
      load: "",
    });
  };
  // useEffect(() => {
  //   getWorkouts();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      {/* CREATE FORM */}
      {!updateForm._id && (
        <form className="form" onSubmit={createWorkout}>
          <h1>Create Record</h1>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={updateFormField}
          />
          <br />
          <label htmlFor="">Reps</label>
          <input
            type="number"
            name="reps"
            value={form.reps}
            onChange={updateFormField}
          />
          <br />
          <label htmlFor="">Load</label>
          <input
            type="number"
            name="load"
            value={form.load}
            onChange={updateFormField}
          />
          <br />

          <button>Submit</button>
        </form>
      )}
      {/* UPDATE FORM */}
      {updateForm._id && (
        <form className="form" onSubmit={updateWorkout}>
          <h1>Edit Record</h1>
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={updateForm.title}
            onChange={handleUpdateFieldChange}
          />
          <br />
          <label htmlFor="">Reps</label>
          <input
            type="number"
            name="reps"
            value={updateForm.reps}
            onChange={handleUpdateFieldChange}
          />
          <br />
          <label htmlFor="">Load</label>
          <input
            type="number"
            name="load"
            value={updateForm.load}
            onChange={handleUpdateFieldChange}
          />
          <br />

          <button>Update</button>
        </form>
      )}
    </>
  );
};

export default Form;
