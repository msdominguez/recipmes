import { Colors } from '@constants/colors';
import { FoodCategory } from '@models/FoodCategory';
import RecSearch from '@rec/RecSearch';
import RecTagList from '@rec/RecTagList';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const RecCard = (props: any) => {
  return (
    <View
      style={[
        styles.card,
        {
          paddingTop: props.paddingTop,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          paddingBottom: props.paddingBottom,
          width: props.width,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
        },
      ]}
    >
      <View
        style={
          props.search || props.tags
            ? styles.searchTagsContainer
            : styles.hidden
        }
      >
        <View style={!props.search && styles.hidden}>
          <RecSearch
            label="search"
            marginLeft={20}
            searchedText={(text: string) =>
              props.searchedText ? props.searchedText(text) : {}
            }
          />
        </View>

        <View style={!props.tags && styles.hidden}>
          <RecTagList
            listType="food"
            selectedTags={(tags: FoodCategory[]) =>
              props.selectedTags ? props.selectedTags(tags) : {}
            }
            marginLeft={15}
          />
        </View>
      </View>
      <ScrollView
        style={
          ((props.search || props.tags) && styles.childrenStickyHeader,
          { maxHeight: props.height || 500 })
        }
      >
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  card: {
    overflow: "scroll",
    padding: 15,
    borderWidth: 1,
    backgroundColor: Colors.white,
    borderColor: Colors.neutral6,
    width: 430,
  },
  searchTagsContainer: {
    width: "100%",
    backgroundColor: Colors.white,
    shadowColor: Colors.neutral4,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  childrenStickyHeader: {
    marginTop: 1,
  },
});

export default RecCard;
