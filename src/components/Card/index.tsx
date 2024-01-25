import React from 'react'
import { Container, Container_2, SimpleButton, SimpleText1, SimpleText2, Title } from './styled'

function Card() {
  return (
    <Container>
      <Title>Tarefas do dia</Title>
        <Container_2>
        
        <SimpleText1>Aparentemente você não possui nenhuma tarefa adicionada 😓</SimpleText1>
        </Container_2>   

        <SimpleButton>
            <SimpleText2>Criar tarefa😁</SimpleText2>
        </SimpleButton>
        
    </Container>
  )
}

export default Card