import Document from "../../../../document";
import Navbar from "../../../../components/Navbar";
import GeneralSidebar from "../../../../components/GeneralSidebar";
import UserProfileOthers from "../../../../components/UserProfileOthers";
import { useRouter } from "next/router";



export default function FavSave({UserDetails}) {

    const router = useRouter();

    const handleRender = () => {
        router.push(`/profile/${UserDetails._id}/admin/favourite`)
    }
    handleRender();


    return (
<>
      <Document />
      <Navbar />
      <GeneralSidebar title="User Profile" />
            <UserProfileOthers
              id={UserDetails._id}
              name={UserDetails.name}
              email={UserDetails.email}
              image={UserDetails.image}
            />
    </>
  );
}

  export async function getServerSideProps({params:{uid}}) {
    try{
      const res = await fetch(`https://booklee.vercel.app/api/user/userdetails/${uid}`);
      const data = await res.json()
      return{
        props:{
          UserDetails : data,
        }
      }

    }catch{
      return{
        notFound: true,
      }
    }
  }