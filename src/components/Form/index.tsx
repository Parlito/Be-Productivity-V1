import React, { useState } from 'react'
import { Container, SimpleButton, SimpleText, SimpleText2, TaskInput } from './styled'
import { Alert } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { TaskModel } from '../../databases/model/taskModel';
import { database } from '../../databases';

function Form() {

    const [name, setName] = useState('');
    const [task, setTask] = useState<TaskModel>({} as TaskModel);

    async function handleNewTask(){
        await database.write(async () => {
            await database
            .get<TaskModel>('task')
            .create(data => {data.name=name})
        })
        Alert.alert("Criado!");
    }

    return (
    <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <SimpleText>Qual é a sua tarefa?</SimpleText>
        <TaskInput 
            placeholder='Escreva aqui sua tarefa'
            placeholderTextColor={'gray'}
            onChangeText={setName}
            value={name}
            />
        <SimpleButton onPress={handleNewTask}>
            <SimpleText2>Criar tarefa!</SimpleText2>
        </SimpleButton>
        </KeyboardAvoidingView>
    </Container>
  )
}

export default Form