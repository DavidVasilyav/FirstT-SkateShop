import { Box } from "@mui/material";
// import { cookies } from 'next/headers'
import getCookies from "../../api/getCookies";
import UserDashboard from "../../../../components/userDashboard/UserDashboard";
import { userBasket } from "@/app/api/userRequest";
import { redirect } from "next/navigation";
import { useEffect } from "react";
let data = {};
let userItems = {};

const page = async ({ params }: { params: { token: any } }) => {
  const userAut = await getCookies()
  // getCookies()
  const tok = async () => {
    data = await getCookies();
    if (data == undefined) {
      console.log("not allowed");
      redirect('/user/login')
    } else {
      console.log("allowed");
       userItems = await userBasket(data.UserId);
    }
  };
  await tok();

  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
          height:' auto'
        }}
      >
        <Box>
          {data ? "allowed" : "now allowed"}
          <UserDashboard data={data} basket={userItems} />
        </Box>
      </Box>
    </>
  );
};

export default page;
