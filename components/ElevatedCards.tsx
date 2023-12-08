// import { ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'


// export default function ElevatedCards() {
//   return (
//     <View>
//       <Text style={styles.headingText }>ElevatedCards</Text>
//       <ScrollView horizontal style={styles.container}>
//         <View style={[styles.card,styles.cardElevated]}>
//         <Text style={styles.ElevatedCardText}>Tap</Text>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     headingText:{
//         fontSize:24,
//         fontWeight:'bold',
//         paddingHorizontal:8
//     },
//     card:{
//         width:300,
//         height:200,
//         alignItems:'center',
//         flex:1,
//         justifyContent:'center',
//     },
//     cardElevated:{
//         backgroundColor:'#F9F9F9',
//     },
//     container:{
//         padding:8
//     },
//     ElevatedCardText:{
//         color:'#000000'
//     }
// })


//2
// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';


// const YourComponent = () => {
//   return (
//     <ScrollView horizontal style={styles.container}>
//       <View style={[styles.card, styles.cardElevated]}>
//         {/* Image on the left */}
//         <Image
//           source={require('../assets/pics/chatamari.jpeg')}
//           style={styles.cardImage}
//         />
//         {/* Text aligned to the right */}
//         <Text style={[styles.ElevatedCardText, styles.textRight]}>Chatamari</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // Add any additional styles for the ScrollView
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginHorizontal: 8,
//     backgroundColor: '#fff', // Set your desired background color
//   },
//   cardElevated: {
//     // Add any additional styles for the elevated card
//     elevation: 5, // Adjust the elevation as needed
//   },
//   ElevatedCardText: {
//     // Add any additional styles for the card text
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000', // Set your desired text color
//   },
//   textRight: {
//     // Align text to the right
//     marginLeft: 'auto',
//   },
//   cardImage: {
//     // Add any styles for the image
//     marginRight: 8, // Adjust spacing between image and text
//     width: 200, // Set the width of the image as needed
//     height: 250, // Set the height of the image as needed
//     resizeMode: 'cover', // Adjust the resizeMode as needed
//     borderRadius: 25, // Set the borderRadius to create a circular image
//   },
// });

// export default YourComponent;

// Assuming this component is in TravelGuide/components/ElevatedCards.tsx

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DisplayImageScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/pics/chatamari.jpeg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
    borderRadius: 10, // Add a borderRadius if desired
  },
});

export default DisplayImageScreen;
