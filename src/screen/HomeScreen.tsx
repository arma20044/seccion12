import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';

import { styles } from '../theme/appTheme';






export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();




  const renderListHeader = () => {
    return (
    <View style={{ marginTop: top + 20, marginBottom: 20}}>
      <Text style={ styles.title }>Opciones de Menu</Text>
    </View>
    )

  }

  const itemSeparator = () => {
    return (
      <View style={ { 
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 8
      
      } }/>
    )
  }

  return (
      <View
        style={{ ...styles.globalMargin, flex: 1}}
      >

        

          <FlatList
            data={ menuItems }
            renderItem={ ({ item }) => <FlatListMenuItem menuItem={item}/> }
            keyExtractor={ (item) => item.name}
            ListHeaderComponent={ renderListHeader}
            ItemSeparatorComponent={ itemSeparator }
          />
           
      </View>
    
  )
}
