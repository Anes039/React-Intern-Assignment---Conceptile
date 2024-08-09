import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  const storedData = localStorage.getItem("profileData");
  const intiatialData = () => {
    studentData: [
      {
        id: 1,
        name: "Anes Sheremeti",
        age: 19,
        email: "anessheremeti9@gmail.com",
        number: "+38343799336",
        institutions: {
          name: "UBT",
          degree: "Bachelor",
          years: "2021/2024",
        },
        courses: {
          name: "IOT",
          instructor: "Vigan Carkagjija",
          duration: "3 months",
        },
      },
    ];
  };
  
  // I made this condition because it always should be data rendering
  return storedData ? JSON.parse(storedData) : intiatialData;
};


const initialState = loadInitialState();
  
export const dataSlice = createSlice({
  name: "studentData",
  initialState,
  
  reducers: {
    
    updateStudentData: (state, action) => {
      state.studentData = action.payload;
      localStorage.setItem(
        "profileData",
        JSON.stringify({ studentData: state.studentData })
      );
    },
    
    addData: (state, action) => {
      const existingData = state.studentData.find(
        (user) => user.id === action.payload.id
      );

      if (existingData) {
        Object.assign(existingData, action.payload);

        fetch("http://localhost:3000/edit", {
          method:'POST',
          body:JSON.stringify(action.payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }, ).then(response => response.json()).then(data => console.log(data));
      } else {
        state.studentData.push(action.payload);

        fetch("http://localhost:3000/edit", {
          method: "POST",
          body: JSON.stringify(action.payload),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) =>
            console.log("Response from backend:", JSON.stringify(data, null, 2))
          )
          .catch((error) => console.error("Error:", error));
      }
      localStorage.setItem(
        "profileData",
        JSON.stringify({ studentData: state.studentData })
      );
    },
    removeData: (state, action) => {
      if(state.studentData == null || state.studentData.length == 1) {
        localStorage.setItem(
          "profileData",
          JSON.stringify({ studentData: state.studentData })
      );
      }
      state.studentData = state.studentData.filter(
          (data) => data.id !== action.payload
      );
      fetch("http://localhost:3000/edit", {
          method: 'DELETE',
          body: JSON.stringify({ id: action.payload }),
          headers: {
              "Content-Type": "application/json",
          },
      })
      .then(response => response.json()).then((updateStudentData) => state.studentData = updateStudentData.data)
      .then(data => console.log('Deleted data:', data))
      .catch(error => console.error('Error:', error));
      
      localStorage.setItem(
          "profileData",
          JSON.stringify({ studentData: state.studentData })
      );
  },
  Data: (state, action) => {
      const data = state.studentData.find(
        (item) => item.id === action.payload.id
      );
      if (data) {
        Object.assign(data, action.payload);
      }
      localStorage.setItem(
        "profileData",
        JSON.stringify({ studentData: state.studentData })
      );
    },
  },
});

export const { updateStudentData, addData, removeData, editData } =
  dataSlice.actions;
export const dataReducer = dataSlice.reducer;
