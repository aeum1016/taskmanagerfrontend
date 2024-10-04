import { FC } from 'react';
import { Badge, Button, Menu, MenuTarget, Popover, Select, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import IPriority from '../IPriority';
import { AllPriorities, numberToPriority, priorityToColor } from '../Priority';

interface PriorityBadgeProps {
  priority: number | IPriority | undefined;
}

export const PriorityBadge: FC<PriorityBadgeProps> = ({ priority }): JSX.Element => {
  const theme = useMantineTheme();

  const [openPopover, { toggle }] = useDisclosure(false);

  if (typeof priority === 'number') priority = numberToPriority(priority);

  return (
    <>
      {priority ? (
        <Menu opened={openPopover}>
          <MenuTarget>
            <Badge
              px={4}
              radius={4}
              color={priorityToColor(priority, theme)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
              onDoubleClick={toggle}
            >
              Priority: {priority.text}
            </Badge>
          </MenuTarget>

          <Menu.Dropdown>
            {AllPriorities.map((priority) => {
              return (
                <Menu.Item
                  key={'menu-item-' + priority.toString}
                  onClick={(e) => {
                    toggle();
                  }}
                >
                  {priority.toString}
                </Menu.Item>
              );
            })}
          </Menu.Dropdown>
        </Menu>
      ) : null}
    </>
  );
};
