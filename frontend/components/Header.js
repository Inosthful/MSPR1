import { View, Pressable, StyleSheet,Text } from 'react-native';
// import router from '../../backend/routes/api';

const redirectToAccountTry = () => {
    console.log("fefe");
    // router.push('/account');
}

export default function Header({}) {
  return (
    <View>   
        <View style={styles.head}>
            <View style={styles.icon}>
                {/* <Image source={test}></Image> */}
        </View>
        <View style={styles.myAcc}>
             <View>
             <Pressable style={styles.btn1}><Text style={styles.inBtn1}>Recherche Genre</Text></Pressable>

             </View>
        <View>
             <Pressable onPress={redirectToAccountTry} style={styles.btn1}><Text style={styles.inBtn1}>Mon Compte</Text></Pressable>

        </View>
         </View>
    </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    head: {
        flex: 1,
        backgroundColor: 'whitegray',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingHorizontal: 20, 
        paddingTop: 45,



    },
    icon: {
        color: 'black',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black', // Couleur de la bordure
        paddingBottom: 3, // Ajuster l'espacement si nécessaire
    },
    myAcc: {

    flexDirection: 'row', 
    gap: 20,
    // justifyContent: 'center',
    },
    btn1:{

        borderBottomWidth: 1,
        borderBottomColor: 'black', // Couleur de la bordure
        paddingBottom: 3, // Ajuster l'espacement si nécessaire
    },
    inBtn1:{
        color: 'black',
        fontSize: 16,
    }
});