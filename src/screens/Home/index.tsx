
import Card from "../../components/Card";
import { Container, Text_1 } from "./styled";
import { StatusBar } from 'react-native';

export default function Home(){
    return (
        <>
        <StatusBar backgroundColor="#0F0F0F"/>
        <Container>
            <Text_1>Be Productivity</Text_1>
            <Card/>
        </Container>
        </>
    )
}