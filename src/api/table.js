import {
  HTTP
} from './http-common';

let db = "/products.json";

export default {
  getTableDataRequest: function () {
    let response = [];
    HTTP
      .get(db)
      .then(response => {
        if (response.status == 200) {
          return response.data;
        }
        throw new Error("Network response was not ok");
      })
      .then(json => {
        console.log('here we return axios requested data')
        return response = json;
      })
      .catch(error => {
        "There has been a problem with your fetch operation: " + error.message;
      });
    return response;
  }
};