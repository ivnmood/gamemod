import { Button, Table, Tooltip } from '@mantine/core';

import styles from '../PlayerTable.module.css';
import { Player } from '@/types/api';

interface Props {
  player: Player;
  handleFriendRequest: (player: Player) => () => void;
}

export const PlayerItem: React.FC<Props> = ({ player, handleFriendRequest }) => (
  <Tooltip label={`Kills: ${player.kills}, Deaths: ${player.deaths}`} withArrow>
    <Table.Tr>
      <Table.Td>{player.nickname}</Table.Td>
      <Table.Td>{player.score}</Table.Td>
      <Table.Td className={player.state === 'alive' ? styles.alive : styles.dead}>
        {player.state}
      </Table.Td>
      <Table.Td>
        <Button onClick={handleFriendRequest(player)} size="xs">
          Send Request
        </Button>
      </Table.Td>
    </Table.Tr>
  </Tooltip>
);
