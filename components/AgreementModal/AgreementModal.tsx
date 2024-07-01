import { Button, Group, Modal, Text } from '@mantine/core';

interface AgreementModalProps {
  opened: boolean;
  onClose: () => void;
  lsKey: string;
}

export const AgreementModal: React.FC<AgreementModalProps> = ({ opened, onClose, lsKey }) => {
  const onCloseForever = () => {
    localStorage.setItem(lsKey, 'true');
    onClose();
  };

  return (
    <Modal title="Соглашение сторон..." opened={opened} onClose={onClose}>
      <Text>
        Для быстрого сетапа репозитория был использован тэмплэйт с UI китом mantine и Next.js, там
        много лишнего, часть я почистил, а часть не трогал <strike>потому что лень</strike> чтоб
        ничего не поломать. Мной написанный код находится в папке /app, /components и можно глянуть
        файл /server.js
      </Text>
      <br />
      <Text>
        Бэграунд был сгенерирован с помощью AI, при рейсайзе экрана может выглядеть не очень, я не
        запаривался уже с этой адаптацией, так же не адаптировал под мобилки тк скрин не
        подразумевает использование на телефонах, как я понял
      </Text>
      <br />
      <Text>
        Оптимизаций (memo, useMemo, useCallback и тд) не было добавлено по причине их ненадобности в
        этом тестовом, тут нет сложной логики, они бы только замедлили приложение
      </Text>
      <br />

      <Group>
        <Button onClick={onClose}>Окей</Button>
        <Button onClick={onCloseForever}>Закрыть навсегда</Button>
      </Group>
    </Modal>
  );
};
