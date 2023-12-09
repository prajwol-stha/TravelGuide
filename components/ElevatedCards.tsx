// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// const ElevatedCards = () => {
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

// export default ElevatedCards;

/* 
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ElevatedCards = () => {
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
            <TouchableOpacity><Text style={styles.buttonInCard}>View More</Text></TouchableOpacity>
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
width: 350,
justifyContent: 'space-between', // Align content to the end of the container
},
cardElevated: {
elevation: 5,
},
cardTitle: {
fontSize: 16,
fontWeight: 'bold',
color: 'red',
alignItems:'center',
textAlign:'center',
// marginLeft: 'auto', // Remove this line
},
cardContent: {
flex: 1, // Take up remaining space
marginLeft: 8, // Add spacing between image and text
marginRight:8,
},
textRightContent: {
textAlign: 'justify',
// marginLeft: 'auto', // Remove this line
fontSize: 10,
color: '#000',
margin:10,
},
cardImage: {
width: 200,
height: 200,
resizeMode: 'cover',
// borderRadius: 10,
borderTopLeftRadius:4,
borderBottomLeftRadius:4,
},
buttonInCard:{
  fontSize: 12,
    color: '#000000',
    backgroundColor: '#fff',
    // paddingHorizontal: 20,
    // paddingVertical: 6,
    // marginRight:10,
    // borderRadius: 6,
    alignItems:'center',
    textAlign:'center',
    margin:10,
},
});

export default ElevatedCards; */

/* 
final code
// Import necessary types
import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';

// Define the data structure
interface Item {
  id: string;
  title: string;
  imageUri:string;
  description:string;

}

interface Data {
  [key: string]: Item[];
}

const data:Data = {
  activities: [
    { 
      id: '1',
      title: 'Archery', 
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunvm-6LiAf3T5usU7wfGzRdJPHqQJTa0MAUnB0X9Ct8V5T1-ECVmnWKkGtc_2Wwlgz8k&usqp=CAU',
      description: 'Interested in bow and arrow? Then you must visit this place.' 
    },
    { id: '2', title: 'Zoo', imageUri: 'https://www.stunningnepal.com/wp-content/uploads/2022/06/Kathmandu-Fun-Park.jpg', description: 'Description for Activity 1' },
    
  ],
  cuisines: [
    { id: '1', title: 'Cuisine 1', imageUri: 'cuisine1.jpg', description: '' },
    { id: '2', title: 'Cuisine 2', imageUri: 'cuisine2.jpg', description: 'Description for Cuisine 2' },
    // Add more cuisine items as needed
  ],
  trekking: [
    { id: '1', title: 'Trek 1', imageUri: 'trek1.jpg', description: 'Description for Trek 1' },
    { id: '2', title: 'Trek 2', imageUri: 'trek2.jpg', description: 'Description for Trek 2' },
    // Add more trekking items as needed
  ],
};

interface CustomCardProps {
  title: string;
  description: string;
  imageUri: string;
  selected: boolean;
  onPress: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUri,
  selected,
  onPress,
}) => {
  const cardStyles = {
    padding: 3,
    // borderWidth: 1,
    margin: 2,
    backgroundColor: 'white',
    width:300,
    height:250,
    
    
  };

  return (
    <ScrollView>
      <View style={cardStyles}>
        <Image source={{ uri: imageUri }} style={{ width: 293, height: 170}} />
        <Text style={{ fontWeight: 'bold' ,color:'red', textAlign:'center'}}>{title}</Text>
        <Text style={{ fontWeight: 'bold' ,color:'green',textAlign:'justify'}}>{description}</Text>
        <TouchableOpacity>
          <Text style={{ color: 'black' ,textAlign:'center'}}>View More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const App: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('activities');
  const [selectedCard, setSelectedCard] = useState<Item | null>(null);

  const selectedData: Item[] = data[selectedButton] || [];

  const handleCardPress = (card: Item) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => setSelectedButton('activities')}>
          <Text>Activities</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedButton('cuisines')}>
          <Text>Cuisines</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedButton('trekking')}>
          <Text>Trekking</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {selectedData.map((item) => (
          <CustomCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUri={item.imageUri}
            selected={selectedCard?.id === item.id}
            onPress={() => handleCardPress(item)}
          />

        ))}
      </ScrollView>
    </View>
  );
};

export default App;
final code */

import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image, Modal, StyleSheet } from 'react-native';

// Define the data structure
interface Item {
  id: string;
  title: string;
  imageUri: string;
  description: string;
}

interface Data {
  [key: string]: Item[];
}

const data: Data = {
  activities: [
    {
      id: '1',
      title: 'Archery',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTunvm-6LiAf3T5usU7wfGzRdJPHqQJTa0MAUnB0X9Ct8V5T1-ECVmnWKkGtc_2Wwlgz8k&usqp=CAU',
      description: 'Interested in bow and arrow? Then you must visit this place.',
    },
    { id: '2', title: 'Zoo', imageUri: 'https://www.stunningnepal.com/wp-content/uploads/2022/06/Kathmandu-Fun-Park.jpg', description: 'Description for Activity 1' },
  ],
  cuisines: [
    { id: '1', title: 'Cuisine 1', imageUri: 'cuisine1.jpg', description: '' },
    { id: '2', title: 'Cuisine 2', imageUri: 'cuisine2.jpg', description: 'Description for Cuisine 2' },
  ],
  trekking: [
    { id: '1', title: 'Trek 1', imageUri: 'trek1.jpg', description: 'Description for Trek 1' },
    { id: '2', title: 'Trek 2', imageUri: 'trek2.jpg', description: 'Description for Trek 2' },
  ],
};

interface CustomCardProps {
  title: string;
  description: string;
  imageUri: string;
  selected: boolean;
  onPress: () => void;
  onModalPress: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  description,
  imageUri,
  selected,
  onPress,
  onModalPress,
}) => {
  const cardStyles = {
    padding: 3,
    margin: 2,
    backgroundColor: 'white',
    width: 300,
    height: 250,
  };

  return (
    <ScrollView>
      <View style={cardStyles}>
        <Image source={{ uri: imageUri }} style={{ width: 293, height: 170 }} />
        <Text style={{ fontWeight: 'bold', color: 'red', textAlign: 'center' }}>{title}</Text>
        <Text style={{ fontWeight: 'bold', color: 'green', textAlign: 'justify' }}>{description}</Text>
        <TouchableOpacity onPress={onModalPress}>
          <Text style={{ color: 'black', textAlign: 'center' }}>View More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

interface ModalContentProps {
  title: string;
  closeModal: () => void;
}

interface ModalContentProps {
  title: string;
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ title, closeModal }) => {
  const selectedData = data[title];

  if (!selectedData || selectedData.length === 0) {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>No Item Selected</Text>
        <TouchableOpacity onPress={closeModal}>
          <Text style={styles.modalCloseButton}>Close</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>{title}</Text>
      {selectedData.map((item) => (
        <View key={item.id}>
          <Text style={styles.modalText}>{item.description}</Text>
        </View>
      ))}
      <TouchableOpacity onPress={closeModal}>
        <Text style={styles.modalCloseButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const App: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState('activities');
  const [selectedCard, setSelectedCard] = useState<Item | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const selectedData: Item[] = data[selectedButton] || [];

  const handleCardPress = (card: Item) => {
    setSelectedCard(selectedCard?.id === card.id ? null : card);
  };

  const handleModalPress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
        <TouchableOpacity onPress={() => setSelectedButton('activities')}>
          <Text>Activities</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedButton('cuisines')}>
          <Text>Cuisines</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedButton('trekking')}>
          <Text>Trekking</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        {selectedData.map((item) => (
          <CustomCard
            key={item.id}
            title={item.title}
            description={item.description}
            imageUri={item.imageUri}
            selected={selectedCard?.id === item.id}
            onPress={() => handleCardPress(item)}
            onModalPress={handleModalPress}
          />
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <ModalContent selectedCard={selectedCard} closeModal={closeModal}  title={}>
        </View>
      </Modal>
    </View>
  );
};

const styles =StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  modalText: {
    fontSize: 10,
    color: 'white',
  },
  modalCloseButton: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
});

export default App;

