import api from "./api.js";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
  FETCH_ONE: "FETCH_ONE",
};

export const fetchAll = () => (dispatch) => {
  api
    .companyData()
    .fetchAll()
    .then((res) => {
      // console.log(res);
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchOne = (id) => (dispatch) => {
  api
    .companyData()
    .fetchById(id)
    .then((res) => {
      console.log("RES", res);
      dispatch({
        type: ACTION_TYPES.FETCH_ONE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  api
    .companyData()
    .create(data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (id, data, onSuccess) => (dispatch) => {
  api
    .companyData()
    .update(id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (id, onSuccess) => (dispatch) => {
  api
    .companyData()
    .delete(id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
