import { Box } from "@mui/material";
// import { cookies } from 'next/headers'
import getCookies from "../../api/getCookies";
import UserDashboard from "../../../../components/userDashboard/UserDashboard";
const page = async ({ params }: { params: { token: any } }) => {
  // const userAut = await getCookies()
let data = 123;
  const tok = async () => {
     data = await getCookies();
    if (data == undefined) {
      console.log('not allowed');
    } else  {
      console.log('allowed');
      console.log(data);
    }
  };
await tok()
  return (
    <>
      <Box
        sx={{
          minHeight: "80vh",
        }}
      >
        <Box>
          {data ? 'allowed' : 'now allowed' }
          <UserDashboard data={data} />
        </Box>

      </Box>
    </>
  );
};

export default page;
