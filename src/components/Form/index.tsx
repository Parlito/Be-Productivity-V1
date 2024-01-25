import React, { useState } from 'react'
import { Container, SimpleButton, SimpleText, SimpleText2, TaskInput } from './styled'
import { Alert } from 'react-native';

function Formu() {

    const [task, setTask] = useState('');

    async function handleNewTask(){

        try
        {
           
        } 
        catch
        {
            Alert.alert("Tarefa", "Tarefa não foi criada!");
        }
        finally
        {
            
        }
    }

    return (
    <Container>
        <SimpleText>Qual é a sua tarefa?</SimpleText>
        <TaskInput 
            placeholder='Escreva aqui sua tarefa'
            placeholderTextColor={'gray'}
            onChangeText={setTask}/>
        <SimpleButton onPress={handleNewTask}>
            <SimpleText2>Criar tarefa!</SimpleText2>
        </SimpleButton>
    </Container>
    
  )
}

export default Formu