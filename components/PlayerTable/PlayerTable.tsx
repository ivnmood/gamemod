import { Button, Paper, ScrollArea, Table, Title, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

import { FriendRequestModal } from './components/FriendRequestModal';
import { PlayerItem } from './components/PlayerItem';
import styles from './PlayerTable.module.css';
import { Player } from '@/types/api';

interface PlayerTableProps {
  title: string;
  players: Player[];
}

export const PlayerTable: React.FC<PlayerTableProps> = ({ title, players }) => {
  const [player, setPlayer] = useState<Player>();
  const [opened, { close, open }] = useDisclosure();

  const handleFriendRequest = (player: Player) => () => {
    setPlayer(player);
    open();
  };

  return (
    <>
      <Paper className={styles.tableContainer} shadow="md" radius="md" p="md">
        <Title order={4} align="center" mb="sm">
          {title}
        </Title>
        <ScrollArea>
          <Table highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Nickname</Table.Th>
                <Table.Th>Score</Table.Th>
                <Table.Th>State</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {players.map((player) => (
                <PlayerItem
                  key={player.id}
                  player={player}
                  handleFriendRequest={handleFriendRequest}
                />
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </Paper>

      <FriendRequestModal opened={opened} onClose={close} player={player} />
    </>
  );
};
