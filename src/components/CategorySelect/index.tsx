import React from "react";
import { ScrollView } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Category } from "../Category";
import { categories } from "../../utils/categories";
import { styles } from './style'

type Props = {
    CategorySelect: string
    setCategory: (categoryId: string) => void
    hasCheckBox?: boolean
}

export function CategorySelect({
    CategorySelect,
    setCategory,
    hasCheckBox = false,
} : Props){
    
    return(
        <ScrollView
            horizontal
            style={styles.container}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === CategorySelect}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }

        </ScrollView>
    )
} 