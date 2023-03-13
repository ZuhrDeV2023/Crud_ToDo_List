import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, UserList }  from "./index";

const Main = () => {
  const users = useSelector((store) => store.user);

  return (
    <>
      <Link to={"/add-user"}>
        <Button className="">Qo'shish</Button>
      </Link>

      <div className="grid gap-4 md:grid-cols-2">
        {users.length ? 
          <UserList /> 
            : 
          <p className="text-center text-3xl p-3 col-span-2 font-semibold text-lime-500">
            Foydalanuvchi yo'q
          </p>
        }
      </div>
    </>
  );
}

export default Main;