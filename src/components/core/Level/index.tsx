import { Select } from "@mantine/core";
import { Cells, Sectors, Districts, Provinces } from "rwanda";

const SelectLevel = ({
  organisationCategory,
  organisationLevel,
  setLevel,
}: {
  organisationCategory: string;
  organisationLevel: string;
  setLevel: Function;
}) => {
  const uniqueSectors = [...new Set(Sectors())];
  return (
    <>
      {organisationCategory === "Urwego Rw'Ibanze" && (
        <>
          {organisationLevel === "Intara" && (
            <>
              <label className="font-semibold text-black">
                Hitamo {organisationLevel} ushaka kugezaho ikibazo
              </label>
              <Select
                placeholder={`Hitamo ${organisationLevel}`}
                data={Provinces()}
                size="md"
                searchable
                onChange={(e)=> setLevel(e)}
              />
            </>
          )}
          {organisationLevel === "Akarere" && (
            <>
              <label className="font-semibold text-black">
                Hitamo {organisationLevel} ushaka kugezaho ikibazo
              </label>
              <Select
                placeholder={`Hitamo ${organisationLevel}`}
                data={Districts()}
                size="md"
                searchable
                onChange={(e)=> setLevel(e)}
              />
            </>
          )}
          {organisationLevel === "Umurenge" && (
            <>
              <label className="font-semibold text-black">
                Hitamo {organisationLevel} ushaka kugezaho ikibazo
              </label>
              <Select
                placeholder={`Hitamo ${organisationLevel}`}
                data={[...new Set(Sectors() as string[])]}
                size="md"
                searchable
                onChange={(e)=> setLevel(e)}
              />
            </>
          )}
          {organisationLevel === "Akagari" && (
            <>
              <label className="font-semibold text-black">
                Hitamo {organisationLevel} ushaka kugezaho ikibazo
              </label>
              <Select
                placeholder={`Hitamo ${organisationLevel}`}
                data={[...new Set(Cells() as string[])]}
                size="md"
                searchable
                onChange={(e)=> setLevel(e)}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default SelectLevel;
