import { HiDesktopComputer, HiDotsVertical } from "react-icons/hi";
import { MdPushPin } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DeleteProblem from "@/components/core/Modals/DeleteProblem";
import React, { useState } from "react";
import { Event, Problem } from "@/typings";
import { Modal, Menu, rem } from "@mantine/core";
import { LuMailCheck } from "react-icons/lu";
import DeleteEvent from "../../Modals/DeleteEvent";
import EditEvent from "../../Modals/EditEvent";
import PostponeEvent from "../../Modals/PostponeEvent";

export default function EventsActions({ data }: { data: Event }) {
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openPostpone, setOpenPostpone] = useState(false);
  const deleteProblem = () => {
    setOpenDelete(true);
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
          onClick={() => setOpenEdit(true)}
          leftSection={
            <HiDesktopComputer style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <h5>Edit</h5>
        </Menu.Item>
        <Menu.Item
          onClick={() => setOpenPostpone(true)}
          leftSection={
            <HiDesktopComputer style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <h5>Postpone</h5>
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
        <DeleteEvent event={data} close={() => setOpenDelete(false)} />
      </Modal>
      <Modal opened={openEdit} onClose={() => setOpenEdit(false)}>
        <EditEvent event={data} close={() => setOpenEdit(false)} />
      </Modal>
      <Modal opened={openPostpone} onClose={() => setOpenPostpone(false)}>
        <PostponeEvent event={data} close={() => setOpenPostpone(false)} />
      </Modal>
    </Menu>
  );
}
