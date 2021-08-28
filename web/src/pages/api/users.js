import { FETCHAPI } from "./FETCHAPI";

export default function users(req, res) {
  const users = FETCHAPI("tickets").then(function (response) {
    console.log(response);
  });
  res.status(200).json(users);
}
