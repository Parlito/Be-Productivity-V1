import styled from "styled-components/native";

export const Container = styled.View`
    margin-top: 15px;
    padding: 10px;
    height: 20%;
    width: 100%;
    border: 2px solid #005B41;
    border-radius: 16px;
`;


export const SimpleText = styled.Text`
    margin: 10px;
    font-weight:bold;
    font-size: 20px;
    color: #005B41;
`;

export const SimpleText2 = styled.Text`
    margin: 10px;
    font-weight:bold;
    font-size: 17px;
    color: white;
    text-align:center;
`;

export const TaskInput = styled.TextInput`
    padding: 5px;
    height: 30px;
    width: 100%;
    border: 2px solid #005B41;
    border-radius: 10px;
    color: white;
    font-size: 20px;
`;

export const SimpleButton = styled.TouchableOpacity`
    margin: 10px auto;
    background-color: #232D3F;
    border-radius: 16px;
    justify-content: center;
    height: 40px;
    width: 100%;
`;