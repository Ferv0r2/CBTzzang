import axios from "axios";

const GetUsersAPI = async () => {
  const request = await axios
    .get("http://localhost:8000/users")
    .then((res) => res.data);

  return request;
};
export { GetUsersAPI };
