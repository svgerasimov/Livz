import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import Modal from 'react-native-modal';

interface ModalComponentProps {
    isVisible: boolean; 
    toggleModal: any;
}


export const ModalComponent: React.FC<ModalComponentProps> = ({isVisible, toggleModal, children}) => {
    return (

        <Modal isVisible={isVisible}>
                {children}
        </Modal>

    )
}


const styles = EStyleSheet.create({})
