import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default Root;
