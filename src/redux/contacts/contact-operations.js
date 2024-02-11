import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../components/api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = async () => {
//   const func = async dispatch => {
//     try {
//       dispatch(fetchContactsLoading());
//       const data = await contactsApi.requestFetchContacts();
//       dispatch(fetchContactsSuccess(data));
//     } catch (error) {
//       dispatch(fetchContactsError(error.message));
//     }
//   };
//   return func;
// };

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const addContacts = body => {
//   const func = async dispatch => {
//     try {
//       dispatch(addContactsLoading());
//       const data = await contactsApi.requestAddContacts(body);
//       dispatch(addContactsSuccess(data));
//     } catch (error) {
//       dispatch(addContactsError(error.message));
//     }
//   };
//   return func;
// };

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const deleteContacts = id => {
//   const func = async dispatch => {
//     try {
//       dispatch(deleteContactsLoading());
//       await contactsApi.requestDeleteContacts(id);
//       dispatch(deleteContactsSuccess(id));
//     } catch (error) {
//       dispatch(deleteContactsError(error.message));
//     }
//   };
//   return func;
// };
