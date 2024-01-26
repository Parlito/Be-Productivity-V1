import React, { useEffect, useState } from 'react'
import { Container, Container_2, SimpleButton, SimpleText1, SimpleText2, Title } from './styled'
import { useNavigation } from '@react-navigation/native'

import { TaskModel } from '../../databases/model/taskModel';
import { database } from '../../databases';
import { FlatList } from 'react-native';
import { Task } from '../Task';

function Card() {

  const navigation = useNavigation();

  const [tasks, setTasks] = useState<TaskModel[]>();
  const [task, setTask] = useState<TaskModel>({} as TaskModel);

  async function handleRemove(item: TaskModel) {
    await database.write(async () => {
      await item.destroyPermanently();
    });

    fetchData();
  }

  async function handleEdit(item: TaskModel) {
    await database.write(async () => {
      await item.destroyPermanently();
    });

    fetchData();
  }

  async function fetchData() {
      const taskCollection = database.get<TaskModel>('task');
      const response = await taskCollection.query().fetch();
      setTasks(response);
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Container>
      <Title>Tarefas do dia</Title>
      {tasks && tasks.length > 0 ? 
        (
          <FlatList
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Task data={item} 
              onEdit={() => {}} 
              onRemove={() => handleRemove(item)} />
            )}
          />
        ) 
        : 
        (
        <Container_2>
          <SimpleText1>Aparentemente você não possui nenhuma tarefa adicionada 😓</SimpleText1>
        </Container_2>   
        )}

        <SimpleButton onPress={() => navigation.navigate('formu')}>
            <SimpleText2>Criar tarefa😁</SimpleText2>
        </SimpleButton>
        
    </Container>
  )
}

export default Card