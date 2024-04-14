import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteProblem from "@/components/core/Modals/DeleteProblem";
import React, { useState } from "react";
import { Problem } from "@/typings";
import { Modal, Menu,rem } from "@mantine/core";

export default function ProblemActions({ data }: { data: Problem }) {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteProblem = () => {
    setOpenDelete(true);
    console.log(data.ikibazo);
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
          leftSection={<FaEdit style={{ width: rem(14), height: rem(14) }} />}
        >
          <h5>Edit</h5>
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
        <DeleteProblem problem={data} close={() => setOpenDelete(false)}/>
      </Modal>
    </Menu>
  );
}
