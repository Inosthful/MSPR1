import React from 'react';
import { StyleSheet,View, Text, Pressable,Image } from 'react-native';
import Header from '../components/Header';

// redirectToItem = () => {
//     // router.push('./item/:id')
// }

const Home = () => {
    return (
        <View>
        <Header/>
        <View style={styles.container}>
            <Text style={styles.title}>Liste des plantes a gardées :</Text>
            <View style={styles.cards}>
                <View style={styles.item}>

                <Text style={styles.textItem}>Plante 1</Text>
                <View style={styles.inItem}>
                <Image source={{uri :'https://pbs.twimg.com/profile_images/1704553800579567616/aGdOREDF_400x400.jpg'}} style={{width: 130, height: 170}}/>
                    <Text style={styles.textInItem}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque sequi dicta illo cumque consequatur magni explicabo sunt adipisci eum. Modi consequatur qui quibusdam vitae dolores id autem explicabo laborum.</Text>

                    </View>
                    <View style={styles.inItemDate}><Text>24/42/1536</Text></View>
                </View>
                <View style={styles.item}> 
                    <Text style={styles.textItem}>Plante 2</Text>
                    <View style={styles.inItem}>
                    <Image source={{uri :'https://pbs.twimg.com/profile_images/1704553800579567616/aGdOREDF_400x400.jpg'}} style={{width: 130, height: 170}}/>
                    <Text style={styles.textInItem} numberOfLines={10}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque sequi dicta illo cumque consequatur magni explicabo sunt adipisci eum. Modi consequatur qui quibusdam vitae dolores id autem explicabo laborum.</Text>

                    </View>
                    <View style={styles.inItemDate}><Text>24/42/1536</Text></View>


                </View>

                <View style={styles.item}>
                <Text style={styles.textItem}>Plante 3</Text>
                <View style={styles.inItem}>
                <Image source={{uri :'https://pbs.twimg.com/profile_images/1704553800579567616/aGdOREDF_400x400.jpg'}} style={{width: 130, height: 170}}/>
                <Text style={styles.textInItem}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis llujkvkvhjv vveqvvcvhjjh fahfvkffvfkqkvhqvqkhvqfkhqvqkh fvvfzqkhv fzqkh fkvezqkvfzqvkhfqatque sequi dicta illo cumque consequatur magni explicabo sunt adipisci eum. Modi consequatur qui quibusdam vitae dolores id autem explicabo laborum.</Text>
                </View>
                <View style={styles.inItemDate}><Text>24/42/1536</Text></View>

                </View>
                
                <View style={styles.item}>
                <Text style={styles.textItem}>Plante 3</Text>
                <View style={styles.inItem}>
                <Image source={{uri :'https://pbs.twimg.com/profile_images/1704553800579567616/aGdOREDF_400x400.jpg'}} style={{width: 130, height: 170}}/>
                <Text style={styles.textInItem}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis llujkvkvhjv vveqvvcvhjjh fahfvkffvfkqkvhqvqkhvqfkhqvqkh fvvfzqkhv fzqkh fkvezqkvfzqvkhfqatque sequi dicta illo cumque consequatur magni explicabo sunt adipisci eum. Modi consequatur qui quibusdam vitae dolores id autem explicabo laborum.</Text>
                </View>
                <View style={styles.inItemDate}><Text>24/42/1536</Text></View>

                </View>
                
            </View>
        </View>

        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
 

    container: {
        paddingTop: 100,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    cards:{
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 15,
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: 20,
        alignItems: 'center',


    },
    item:{
        backgroundColor: 'white',
        shadowOffset: { width: 3, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        borderRadius: 20,
        width: 370,

    },
    textItem:{
        margin: 3,
        marginLeft: 20,
    },
    inItem:{
        margin: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    textInItem:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        width: 200,

    },
    inItemDate:{
        display: 'flex',
        alignItems: 'center',
        textDecorationLine: 'underline',
        marginTop: 10,
        marginBottom: 10,
        // marginLeft: 20,
    }

  });