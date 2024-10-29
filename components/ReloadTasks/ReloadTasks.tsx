'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { IconReload } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { PurgeTasksCache } from '@/api/task/routes';

export const ReloadTasks: FC = (): JSX.Element => {
  const router = useRouter();

  return (
    <ActionIcon
      onClick={() => {
        PurgeTasksCache();
        router.refresh();
      }}
    >
      <IconReload />
    </ActionIcon>
  );
};
