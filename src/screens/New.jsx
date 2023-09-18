import React, { useState } from 'react'
import { 
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import CategoryIcon from '../assets/icons/Category'
import AmountIcon from '../assets/icons/Amount'
import DateIcon from '../assets/icons/Date'

const NewExpense = ({navigation, route}) => {
    const [category, setCategory] = useState(route?.params?.expense ? route.params.expense.category : 'Benzin')
    const [amount, setAmount] = useState(route?.params?.expense ? route.params.expense.amount : '')
    const [date, setDate] = useState(route?.params?.expense ? route.params.expense.date : `${String(new Date().getDate()).padStart(2, '0')}.${String(new Date().getMonth() + 1).padStart(2, '0')}.${new Date().getFullYear()}`)

    console.log('route.params - newExpense: ', route.params)
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity 
                    style={category === 'Benzin' ? styles.activeCategoryBtn : styles.passiveCategoryBtn}
                    onPress={() => {
                        setCategory('Benzin')
                    }}    
                >
                    <Text 
                        style={category === 'Benzin' ? styles.activeCategoryTxt : styles.passiveCategoryTxt}
                    >
                        Benzin
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={category === 'Yemek' ? styles.activeCategoryBtn : styles.passiveCategoryBtn}
                    onPress={() => {
                        setCategory('Yemek')
                    }}   
                >
                    <Text style={category === 'Yemek' ? styles.activeCategoryTxt : styles.passiveCategoryTxt}>Yemek</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={category === 'Kıyafet' ? styles.activeCategoryBtn : styles.passiveCategoryBtn}
                    onPress={() => {
                        setCategory('Kıyafet')
                    }}
                >
                    <Text style={category === 'Kıyafet' ? styles.activeCategoryTxt : styles.passiveCategoryTxt}>Kıyafet</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={category === 'Sadaka' ? styles.activeCategoryBtn : styles.passiveCategoryBtn}
                    onPress={() => {
                        setCategory('Sadaka')
                    }}
                >
                    <Text style={category === 'Sadaka' ? styles.activeCategoryTxt : styles.passiveCategoryTxt}>Sadaka</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={styles.singularInputContainer}>
                    <CategoryIcon/>
                    <TextInput
                        style={styles.input}
                        placeholder='Başka Kategori'
                        value={category}
                        onChangeText={setCategory}
                    />
                </View>
                <View style={styles.singularInputContainer}>
                    <AmountIcon/>
                    <TextInput
                        style={styles.input}
                        placeholder='Fiyat'
                        value={amount}
                        onChangeText={setAmount}
                    />
                </View>
                <View style={styles.singularInputContainer}>
                    <DateIcon/>
                    <TextInput
                        style={styles.input}
                        placeholder={'Tarih'}
                        value={date}
                        onChangeText={setDate}
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                    if (route?.params?.index >= 0) {
                        navigation.navigate('home', {
                            expense: {
                                category: category,
                                amount: amount,
                                date: date,
                            },
                            index: route.params.index
                        })
                    } else if (category.length > 0 && amount.length > 0 && date.length > 0) {
                        navigation.navigate('home', {
                            category: category,
                            amount: amount,
                            date: date
                        })
                    }
                }}
                >
                <Text style={styles.btnTxt}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 40,
    },
    passiveCategoryBtn: {
        width: 358,
        height: 62,
        borderWidth:1,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 16,
    },
    passiveCategoryTxt: {
        color: 'black',
        fontSize: 24,
        fontWeight: '500',
    },
    activeCategoryBtn: {
        width: 358,
        height: 62,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 16,
        backgroundColor: '#46abc5'
    },
    activeCategoryTxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
    },
    singularInputContainer: {
        borderRadius: 12,
        borderWidth: 1,
        height: 65,
        width: 320,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        marginVertical: 12,
    },
    
    input: {
        flex: 1,
        fontSize: 24,
        marginLeft: 8,
    },

    btn: {
        backgroundColor: '#46abc5',
        width: 280,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    btnTxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500'
    }
})

export default NewExpense