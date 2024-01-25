import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Container_2 = styled.View`
    padding: 10px;
    height: 20%;
    width: 100%;
    border: 2px solid #005B41;
    border-radius: 16px;
`;


export const Title = styled.Text`
    margin-top: 15px;
    text-align: center;
    font-weight:bold;
    font-size: 40px;
    color: #005B41;
`;


export const SimpleText1 = styled.Text`
    margin: auto;
    text-align: center;
    font-weight:bold;
    font-size: 17px;
    color: #005B41;
`;

export const SimpleText2 = styled.Text`
    text-align: center;
    font-weight:bold;
    font-size: 20px;
    color: white;
`;

export const SimpleButton = styled.TouchableOpacity`
    margin: 10px auto;
    background-color: #232D3F;
    border-radius: 16px;
    justify-content: center;
    height: 40px;
    width: 100%;
`;