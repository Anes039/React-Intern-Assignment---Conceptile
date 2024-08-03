import { createSlice } from '@reduxjs/toolkit';

const loadInitialState = () => {
  const storedData = localStorage.getItem('profileData');
  return storedData ? JSON.parse(storedData) : {
    studentData: [
      {
        id: 1,
        name: "Anes Sheremeti",
        age: 19,
        email: "anessheremeti9@gmail.com",
        number: "+38343799336",
        institutions: {
          name: 'UBT',
          degree: 'Bachelor',
          years: '2021/2024'
        },
        courses: {
          name: 'IOT',
          instructor: 'Vigan Carkagjija',
          duration: '3 months'
        }
      }
    ]
  };
};

const initialState = loadInitialState();

export const dataSlice = createSlice({
  name: 'studentData',
  initialState,
  reducers: {
    updateStudentData: (state, action) => {
      state.studentData = action.payload;
      localStorage.setItem('profileData', JSON.stringify({ studentData: state.studentData }));
    },
    addData: (state, action) => {
      const existingData = state.studentData.find(user => user.id === action.payload.id);
      if (existingData) {
        Object.assign(existingData, action.payload);
      } else {
        state.studentData.push(action.payload);
      }
      localStorage.setItem('profileData', JSON.stringify({ studentData: state.studentData }));
    },
    removeData: (state, action) => {
      state.studentData = state.studentData.filter(data => data.id !== action.payload);
      localStorage.setItem('profileData', JSON.stringify({ studentData: state.studentData }));
    },
    editData: (state, action) => {
      const data = state.studentData.find(item => item.id === action.payload.id);
      if (data) {
        Object.assign(data, action.payload);
      }
      localStorage.setItem('profileData', JSON.stringify({ studentData: state.studentData }));
    }
  }
});

export const { updateStudentData, addData, removeData, editData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
