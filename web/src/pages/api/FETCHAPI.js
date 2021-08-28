export class FETCHAPI {
  static get = async (uri, data = {}) => {
    console.log("PARAMS : ", data);
    return await fetch("http://127.0.0.1:3000/api/" + uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data.json())
      .then((data) => {
        return data;
      });
  };
}
