import styled from 'styled-components/native';

type Props = {
    type: string;
}


export const Container = styled.View`
    width: 100%;
    height: 80px;

    
    padding: 12px;
    border-radius: 8px;
    border: 2px solid #005B41;

    flex-direction: row;
    align-items: center;    
    margin-bottom: 12px;
`;

export const Icon = styled.View<Props>`
    background-color: "#ccc";
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;  
    margin-right: 12px;
`;

export const Name = styled.Text`
    flex: 1;
    color: #FFF;
    font-size: 14px;
`;

export const Options = styled.View`
    height: 80px;
    justify-content: space-between;
    padding: 12px 0;
`;

export const Option = styled.TouchableOpacity``;