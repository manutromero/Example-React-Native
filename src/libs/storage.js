import AsyncStorage from '@react-native-community/async-storage'


class Storage {

    static instance = new Storage();

    store = async (key, value) =>{
        try {
            await AsyncStorage.setItem(key, value)
            
            return true

        } catch(err){
            console.log("Storage store Error -> ", err)

            return false
        }
    }


    get = async (key) =>{
        try{

            return await AsyncStorage.getItem(key)

        }catch(err){
            console.log("Storage Get Error -> ", err)

            throw Error(err)
        }
    }


    remove = async (key) =>{ 
        try{
             
            await AsyncStorage.removeItem(key)

            return true
        }catch(err){
            console.log("Storage remove Error -> ", err)

            return false
        }
    }

    multiGet = async (keys) => {
        try{
             
            return  await AsyncStorage.multiGet(keys)
             
        }catch(err){
            console.log("Storage multiGet Error -> ", err)

            throw Error(err)
        }
    }


    getAllKeys = async () => {
        try{
             
            return  await AsyncStorage.getAllKeys()
             
        }catch(err){
            console.log("Storage getAllKeys Error -> ", err)

            throw Error(err)
        }
    }
 }

 export default Storage;