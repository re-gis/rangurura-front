import { ApiEndpoint } from "@/constants";
import * as React from "react";
interface Props {
  src: string;
}
export const useGet = ({ src }: Props) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    ApiEndpoint.get(src)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);
  return {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
    
  };
};
