import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';

// /fetchUsers
export default function UseCatagory() {
  const authHeader = useAuthHeader();
  const auth = useAuthUser()
  console.log(authHeader)

  const fetchData = async () => {
    
    const res = await axios.get(
      `https://api.senaycreatives.com/catagory`,
      {
        headers: { _auth: authHeader },
      }
    );

    return res;
  };

  return useQuery({
    queryKey: ["fetchcatagory"],
    queryFn: () => fetchData(),
   
  });
}
