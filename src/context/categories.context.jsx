import { createContext, useState,useEffect } from "react";

// import PRODUCTS from '../shop-data.json';

// import SHOP_DATA from "../shop_data.js";
import { addCollectionAndDocuments,getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // useEffect(()=>{
    //     addCollectionAndDocuments('categories',SHOP_DATA)

    // },[])

    useEffect(()=>{
        const getCategoriesMap = async () =>{
            const categoryMap = await getCategoriesAndDocuments()

            setCategoriesMap(categoryMap)
        }
        getCategoriesMap();
    },[])

    const value = {categoriesMap}

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}