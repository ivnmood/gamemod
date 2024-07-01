import { Button, Group, Modal, Text } from '@mantine/core';
import { Player } from '@/types/api';

interface AgreementModalProps {
  player?: Player;
  opened: boolean;
  onClose: () => void;
}

export const FriendRequestModal: React.FC<AgreementModalProps> = ({ player, opened, onClose }) => (
  <Modal title="Friend Request" opened={opened} onClose={onClose}>
    <Text>Do you wand add {player?.nickname} to friends?</Text>
    <br />

    <Group>
      {/*need handle onClicks correct, add more beautiful styles*/}
      <Button onClick={onClose}>Yes</Button>
      <Button color="red" onClick={onClose}>
        No
      </Button>
    </Group>
  </Modal>
);
