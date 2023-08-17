import { toast } from "react-hot-toast";
export const toastErrorMessage=(error)=>{
    if (!error.response || !error.response.data || !error.response.data.message) {
        toast.error('Server error'); // Display a generic error message for server errors
      } else {
        toast.error(error.response.data.message); // Display the specific error message from the response
      }
}