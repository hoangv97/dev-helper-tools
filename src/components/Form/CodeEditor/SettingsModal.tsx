import {
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Text,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import THEMES, {
  getCurrentSettings,
  setCurrentSettings,
  SettingsProps,
} from './settings';
import { NumberInput } from 'components/Form';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Settings = ({ isOpen, onClose }: Props) => {
  const [settings, setSettings] = useState<SettingsProps>(getCurrentSettings);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Code Editor Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="4" direction="column">
            <Flex direction="row" alignItems="center">
              <Text fontSize="md" mr="4">
                Theme:
              </Text>
              <Select
                w="200px"
                value={settings.theme}
                onChange={(e) => {
                  setSettings((prev) => ({ ...prev, theme: e.target.value }));
                  setCurrentSettings({ ...settings, theme: e.target.value });
                }}
              >
                {THEMES.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex direction="row" alignItems="center">
              <Text fontSize="md" mr="3">
                Font size:
              </Text>
              <Box>
                <NumberInput
                  value={settings.fontSize}
                  onChange={(_, value) => {
                    setSettings((prev) => ({ ...prev, fontSize: value }));
                    setCurrentSettings({ ...settings, fontSize: value });
                  }}
                />
              </Box>
            </Flex>
            <Flex direction="row" alignItems="center">
              <Text fontSize="md" mr="3">
                Tab size:
              </Text>
              <Box>
                <NumberInput
                  value={settings.tabSize}
                  onChange={(_, value) => {
                    setSettings((prev) => ({ ...prev, tabSize: value }));
                    setCurrentSettings({ ...settings, tabSize: value });
                  }}
                />
              </Box>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Settings;
