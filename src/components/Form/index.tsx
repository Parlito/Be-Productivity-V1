import React, { useState } from 'react'
import { Container, SimpleButton, SimpleText, SimpleText2, TaskInput } from './styled'
import { Alert } from 'react-native';
import { KeyboardAvoidingView, Platform } from 'react-native';

function Form() {

    const [task, setTask] = useState('');

    async function handleNewTask(){

        try
        {
            Alert.alert("Tarefa", "Tarefa foi criada!");
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <SimpleText>Qual é a sua tarefa?</SimpleText>
        <TaskInput 
            placeholder='Escreva aqui sua tarefa'
            placeholderTextColor={'gray'}
            onChangeText={setTask}/>
        <SimpleButton onPress={handleNewTask}>
            <SimpleText2>Criar tarefa!</SimpleText2>
        </SimpleButton>
        </KeyboardAvoidingView>
    </Container>
  )
}

export default Form