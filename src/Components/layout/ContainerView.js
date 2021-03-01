import React from 'react'
import {View,StyleSheet,SafeAreaView} from 'react-native'
import styled from 'styled-components'

const Container =({children}) =>{
    return(
        <ContainerView>
            {children}
        </ContainerView>
    )
}


const ContainerView = styled(SafeAreaView)`
    align-items:center;
    width: 100%
    height: 100%
    background: white; 

`
const styles = StyleSheet.create({

})

export default Container