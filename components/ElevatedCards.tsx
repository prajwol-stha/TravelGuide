// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// const YourComponent = () => {
//   return (
//     <View>
//       <Text style={styles.headingText}>Explore</Text>
//       <ScrollView horizontal style={styles.container}>
//         <View style={[styles.card, styles.cardElevated]}>
//           <Image
//             source={{
//               uri: 'https://static.finmail.com/wp-content/uploads/2021/02/17131122/2-7-1500x1125.jpg',
//             }}
//             style={styles.cardImage}
//           />
//           <Text style={[styles.cardTitle]}>Chatamari</Text>
//           <Text style={styles.textRightContent}>
//             Round bread made of rice flour with toppings of minced meat with onions,
//             coriander leaves and eggs.
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     paddingHorizontal: 8,
//   },
//   container: {
//     // Add any additional styles for the ScrollView
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 0,
//     paddingVertical: 0,
//     borderRadius: 4,
//     marginHorizontal: 8,
//     backgroundColor: '#fff', // Set your desired background color
//     width:300,
    
//   },
//   cardElevated: {
//     elevation: 5,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'red',
//     marginLeft: 'auto',
//   },
//   // textRight: {
//   //   marginLeft: 'auto',
//   // },
//   textRightContent: {
//     textAlign: 'justify',
//     marginLeft: 'auto',
//     fontSize: 10,
//     color: '#000',
//   },
//   cardImage: {
//     marginRight: 8, // Adjust spacing between image and text
//     width: 200, // Set the width of the image as needed
//     height: 250, // Set the height of the image as needed
//     resizeMode: 'cover', // Adjust the resizeMode as needed
//     borderRadius: 0, // Set the borderRadius to create a circular image
//   },
// });

// export default YourComponent;

import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const YourComponent = () => {
  return (
    <View>
      <Text style={styles.headingText}>Explore</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{
              uri: 'https://static.finmail.com/wp-content/uploads/2021/02/17131122/2-7-1500x1125.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Chatamari</Text>
            <Text style={styles.textRightContent}>
              Round bread made of rice flour with
              toppings of minced meat with onions, coriander leaves, and eggs.
</Text>
</View>
</View>
</ScrollView>
</View>
);
};

const styles = StyleSheet.create({
headingText: {
fontSize: 24,
fontWeight: 'bold',
paddingHorizontal: 8,
},
container: {
// Add any additional styles for the ScrollView
},
card: {
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 0,
paddingVertical: 0,
borderRadius: 4,
marginHorizontal: 8,
backgroundColor: '#fff', // Set your desired background color
width: 300,
justifyContent: 'space-between', // Align content to the end of the container
},
cardElevated: {
elevation: 5,
},
cardTitle: {
fontSize: 16,
fontWeight: 'bold',
color: 'red',
// marginLeft: 'auto', // Remove this line
},
cardContent: {
flex: 1, // Take up remaining space
marginLeft: 8, // Add spacing between image and text
},
textRightContent: {
textAlign: 'justify',
// marginLeft: 'auto', // Remove this line
fontSize: 10,
color: '#000',
},
cardImage: {
width: 200,
height: 250,
resizeMode: 'cover',
borderRadius: 0,
},
});

export default YourComponent;