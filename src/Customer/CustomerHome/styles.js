import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    imageContainer: {
        flex: 0.3,
        alignItems: 'center',
    },
    sparepartsMainContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },
    buySparePartsContainer: {
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0'

    },
    callMachineContainer: {
        width: 120,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0e0e0'

    },
    //=========================Ends of container========
    logoImageStyle: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    buyPartsTouchable: {
        justifyContent: 'center'
    },
    callMachineTouchable: {
        justifyContent: 'center'
    },
    buySparePartsStyle: {
        fontSize: 12
    },
    callMachineStyle: {
        fontSize: 12
    },
    //================end of top views container and styles 

    provideFeedBackContainer: {
        flex: 0.2,
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-evenly',
    }


})

export default styles;
