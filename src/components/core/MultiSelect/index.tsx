import { ApiEndpoint } from "@/constants";
import * as React from "react";
import { MultiSelect } from "@mantine/core";

interface Props {
  datasrc: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  selected: [];
  setSelected: Function;
}

const CustomMultiSelect: React.FC<Props> = ({
  datasrc,
  label,
  placeholder,
  disabled,
  selected,
  setSelected,
}) => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    ApiEndpoint.get(datasrc)
      .then((response: any) => {
        const users = response.data.data.filter(
          (user: any) => user.role === "UMUYOBOZI",
        );
        const formattedData = users.map((user: any) => ({
          label: user.name ?? user.nationalId,
          value: JSON.stringify(user),
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [datasrc]);

  return (
    <MultiSelect
      label={label}
      placeholder={placeholder}
      px={6}
      searchable
      data={loading ? [{ label: "Loading ...", value: "" }] : data}
      value={selected}
      nothingFoundMessage="No Leaders found"
      maxValues={1}
      onChange={(value: any) => setSelected(value)}
      disabled={loading}
    />
  );
};

export default CustomMultiSelect;
