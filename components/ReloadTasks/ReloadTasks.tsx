"use client";

import { PurgeTasksCache } from "@/api/task/routes";
import { ActionIcon } from "@mantine/core";
import { IconReload } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const ReloadTasks: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <ActionIcon onClick={() => {
      PurgeTasksCache()
      router.refresh()
    }}>
      <IconReload />
    </ActionIcon>
  )
}
