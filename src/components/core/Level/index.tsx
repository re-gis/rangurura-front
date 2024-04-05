import { Select } from "@mantine/core";
import { Cells, Sectors, Districts, Provinces } from "rwanda";

const SelectLevel = ({
  organisationCategory,
  organisationLevel,
  setLevel,
  show,
}: {
  organisationCategory: string;
  organisationLevel: string;
  setLevel: Function;
  show?: boolean;
}) => {
  const uniqueSectors = [...new Set(Sectors())];
  return (
    <>
      {organisationCategory === "Urwego Rw'Ibanze" && (
        <>
          {organisationLevel === "Intara" && (
            <>
              {(show === true || show === undefined) && (
                <label className="font-semibold text-black">
                  Hitamo {organisationLevel} ushaka kugezaho ikibazo
                </label>
              )}
              <Select
                placeholder={`Hitamo ${organisationLevel}`}
                data={Provinces()}
                size="md"
                searchable
                onChange={(e) => setLevel(e)}
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
                onChange={(e) => setLevel(e)}
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
                onChange={(e) => setLevel(e)}
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
                onChange={(e) => setLevel(e)}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default SelectLevel;
