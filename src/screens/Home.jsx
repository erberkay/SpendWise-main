import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'

import { MMKVLoader, useMMKVStorage } from "react-native-mmkv-storage";

const MMKV = new MMKVLoader().initialize()

function stringToDate(dateString) {
    const [day, month, year] = dateString.split('.')
    return new Date(year, month - 1, day)
}

function isInCurrentMonth(date) {
    const now = new Date();
    const result = now.getMonth() === date.getMonth() && now.getFullYear() === date.getFullYear()
    return result
}

function isInPreviousMonth(date) {
    const now = new Date()
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1)
    const result = prevMonth.getMonth() === date.getMonth() && prevMonth.getFullYear() === date.getFullYear()
    return result;
}

function isInCurrentWeek(date) {
    const now = new Date()
    const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 1)
    const endOfWeek = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 6)
    const result = date >= startOfWeek && date <= endOfWeek
    return result
}

function isInPreviousWeek(date) {
    const now = new Date()
    const startOfPrevWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() - 6)
    const endOfPrevWeek = new Date(startOfPrevWeek.getFullYear(), startOfPrevWeek.getMonth(), startOfPrevWeek.getDate() + 6)
    const result = date >= startOfPrevWeek && date <= endOfPrevWeek
    return result
}

function isInCurrentDay(date) {
    const now = new Date()
    const result = now.toDateString() === date.toDateString()
    return result
}

function isInPreviousDay(date) {
    const now = new Date()
    const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
    const result = yesterday.toDateString() === date.toDateString()
    return result
}

const Home = ({navigation, route}) => {
    const [expenses, setExpenses] = useMMKVStorage('harcamalar', MMKV, [])
    const [summary, setSummary] = useState({
        currentMonth: 0,
        previousMonth: 0,
        currentWeek: 0,
        previousWeek: 0,
        currentDay: 0,
        previousDay: 0,
    })

    useEffect(() => {
        console.log('route.params: ', route.params);
        if (route?.params?.index >= 0) {
            setExpenses([...expenses.slice(0, route.params.index), route.params.expense, ...expenses.slice(route.params.index + 1)])
        } else if (route?.params?.category.length > 0) {
            setExpenses([route.params, ...expenses])
        }
    }, [route.params])

    useEffect(() => {
        if (expenses.length > 0) {
            let newSummary = {
                currentMonth: 0,
                previousMonth: 0,
                currentWeek: 0,
                previousWeek: 0,
                currentDay: 0,
                previousDay: 0,
            }

            expenses.forEach(harcama => {
                const date = stringToDate(harcama.date)
                if (isInCurrentMonth(date)) {
                    newSummary.currentMonth += Number(harcama.amount)
                }
                if (isInPreviousMonth(date)) {
                    newSummary.previousMonth += Number(harcama.amount)
                }
                if (isInCurrentWeek(date)) {
                    newSummary.currentWeek += Number(harcama.amount)
                }
                if (isInPreviousWeek(date)) {
                    newSummary.previousWeek += Number(harcama.amount)
                }
                if (isInCurrentDay(date)) {
                    newSummary.currentDay += Number(harcama.amount)
                }
                if (isInPreviousDay(date)) {
                    newSummary.previousDay += Number(harcama.amount)
                }
            })

            setSummary(newSummary)
        }
    }, [expenses])

    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <View style={styles.summaryColumnContainer}>
                    <Text style={styles.summaryTxt}>{'BU AY:\n'}{summary.currentMonth} TL</Text>
                    <Text style={styles.summaryTxt}>{'BU HAFTA:\n'}{summary.currentWeek} TL</Text>
                    <Text style={styles.summaryTxt}>{'BUGÜN:\n'}{summary.currentDay} TL</Text>
                </View>

                <View style={styles.summaryColumnContainer}>
                    <Text style={styles.summaryTxt}>{'GEÇEN AY:\n'}{summary.previousMonth} TL</Text>
                    <Text style={styles.summaryTxt}>{'GEÇEN HAFTA:\n'}{summary.previousWeek} TL</Text>
                    <Text style={styles.summaryTxt}>{'DÜN:\n'}{summary.previousDay} TL</Text>
                </View>
            </View>

            <FlatList
                style={styles.expenses}
                data={expenses}
                renderItem={element => {

                    return (
                        <TouchableOpacity 
                            style={styles.expenseRow}
                            onPress={() => {
                                navigation.navigate('newExpense', {
                                    expense: element.item,
                                    index: element.index
                                })
                            }}
                        >
                            <Text style={styles.expenseTxt}>{element?.item?.category}</Text>
                            <Text style={styles.expenseTxt}>{element?.item?.amount}</Text>
                            <Text style={styles.expenseTxt}>{element?.item?.date}</Text>
                        </TouchableOpacity>
                    )
                }}
            />

            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('newExpense')
                }}
                style={styles.btn}
            >
                <Text style={styles.btnTxt}>Yeni Harcama</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
        backgroundColor: 'white'
    }, 
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 240,
        width: '100%',
        backgroundColor: '#46ABC5',
        borderBottomRightRadius: 90,
    },
    summaryColumnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-evenly'
    },
    summaryTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },

    expenses: {
        width: '100%',
        marginVertical: 40,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: 'white'
    },

    expenseRow: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 8,
    },

    expenseTxt: {
        flex: 1,
        textAlign: 'center',
        color: 'black'
    },

    btn: {
        height: 72,
        width: 280,
        backgroundColor: '#46ABC5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    btnTxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
    },

})

export default Home;