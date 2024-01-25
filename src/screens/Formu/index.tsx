import Form from "../../components/Form";
import { Container, Text_1 } from "./styled"
import { StatusBar } from 'react-native';

export default function Formu(){
    return (
        <Container>
            <StatusBar backgroundColor="#0F0F0F"/>
            <Text_1>Crie sua tarefa</Text_1>
            <Form/>
        </Container>
    )
}