'use client';

import { useEffect, useState } from 'react';
import { Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { PlayerTable } from '@/components/PlayerTable';
import { AgreementModal } from '@/components/AgreementModal';

import styles from './page.module.css';
import { Team } from '@/types/api';

const IS_MODAL_SHOWED = 'IS_MODAL_SHOWED';

const PostBattle = () => {
  const [players, setPlayers] = useState<Team | null>(null);
  const [opened, { close }] = useDisclosure(!localStorage.getItem(IS_MODAL_SHOWED));

  useEffect(() => {
    fetch('http://localhost:3001/players')
      .then((response) => response.json())
      .then((data: Team) => setPlayers(data))
      .catch((e) => {
        console.error('Error while fetching players: ', e);
      });
  }, []);

  if (!players) {
    return <div className={styles.loader}>loading...</div>;
  }

  return (
    <>
      <Group className={styles.container} justify="space-between" gap="xs">
        <PlayerTable title="Winning Team" players={players.winningTeam} />
        <PlayerTable title="Loser Team" players={players.losingTeam} />
      </Group>

      <AgreementModal opened={opened} onClose={close} lsKey={IS_MODAL_SHOWED} />
    </>
  );
};

export default PostBattle;
