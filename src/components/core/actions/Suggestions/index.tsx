import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteProblem from "@/components/core/Modals/DeleteProblem";
import React, { useState } from "react";
import { Suggestion } from "@/typings";
import { Modal, Menu, rem } from "@mantine/core";
import { LuMailCheck } from "react-icons/lu";
import DeleteSuggestion from "../../Modals/DeleteSuggestion";

export default function SuggestionActions({ data }: { data: Suggestion }) {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteProblem = () => {
    setOpenDelete(true);
    console.log(data.igitekerezo);
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <span className="cursor-pointer">
          <HiDotsVertical />
        </span>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <HiDesktopComputer style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <h5>Hide</h5>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <MdPushPin style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <h5>Pin</h5>
        </Menu.Item>
        <Menu.Item
          leftSection={
            <LuMailCheck style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <h5>Mark As Solved</h5>
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>

        <Menu.Item
          onClick={deleteProblem}
          color="red"
          leftSection={
            <MdDeleteForever style={{ width: rem(14), height: rem(14) }} />
          }
        >
          Delete
        </Menu.Item>
      </Menu.Dropdown>
      <Modal opened={openDelete} onClose={() => setOpenDelete(false)}>
        <DeleteSuggestion
          suggestion={data}
          close={() => setOpenDelete(false)}
        />
      </Modal>
    </Menu>
  );
}
