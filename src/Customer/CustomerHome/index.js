import styles from './styles';
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const index = () =>
{
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logoImageStyle}
        />
      </View>

      {/* top views container and styles */}

      <View style={styles.sparepartsMainContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}>
            <Text style={styles.buySparePartsStyle}>BUY SPARE PARTS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}>
            <Text style={styles.callMachineStyle}>CALL MECHANIC</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*end of top views container and styles */}

      {/*start of inner views container and styles */}
      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}>
            <Text style={styles.buySparePartsStyle}>PROVIDE FEEDBACK</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}>
            <Text style={styles.callMachineStyle}>VIEW PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*end of inner views container and styles */}

      {/*start of last views container and styles */}

      <View style={styles.provideFeedBackContainer}>
        <View style={styles.buySparePartsContainer}>
          <TouchableOpacity style={styles.buyPartsTouchable}>
            <Text style={styles.buySparePartsStyle}>PROVIDE FEEDBACK</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMachineContainer}>
          <TouchableOpacity style={styles.callMachineTouchable}>
            <Text style={styles.callMachineStyle}>VIEW PROFILE</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*end of last views container and styles */}
    </View>
  );
};

export default index;
