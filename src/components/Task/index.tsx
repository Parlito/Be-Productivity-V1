import React from 'react';
import { Entypo } from '@expo/vector-icons';

import { Container, Icon, Name, Options, Option } from './styles';

export type TasksProps = {
  id: string;
  name: string;
  type: string;
}

type Props = {
  data: TasksProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Task({ data, onRemove, onEdit }: Props) {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Options>
        <Option onPress={onEdit}>
          <Entypo
            name="edit"
            color="#005B41"
            size={20}
          />
        </Option>

        <Option onPress={onRemove}>
          <Entypo
            name="trash"
            color="#EE3B45"
            size={20}
          />
        </Option>
      </Options>
    </Container>
  );
}