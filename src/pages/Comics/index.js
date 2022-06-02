import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";
import api from "./../../services/Api";
import Moment from "moment";

export default class Comics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comicss: [],
    };
  }

  async componentDidMount() {
    const response = await api.get("/v1/public/comics");
    this.setState({
      comicss: response.data.data.results,
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.comicss}
        renderItem={({ item }) => (
          <View style={styles.containerComics}>
            <Text style={styles.titleComics}>{item.title}</Text>
            <View>
              <Image
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                }}
                style={styles.styleImagem}
              ></Image>
            </View>
            <View>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.details}>
                <Text style={styles.textDetails}>ID:{item.id} </Text>
                <Text style={styles.textDetails}>Pages:{item.pageCount} </Text>
                <Text style={styles.textDetails}>
                  Sale:{Moment(item.dates[0].date).format("MMMM do, yyyy")}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item.urls[0].url);
              }}
            >
              <Text style={styles.buttonDetails}>DETAILS</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  buttonDetails: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    marginLeft: 250,
    marginTop: -42,
    textAlign: "center",
    borderRadius: 8,
  },

  containerComics: {
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    backgroundColor: "#fff",
    height: 180,
    margin: 10,
  },

  details: {
    flexDirection: "row",
    marginLeft: 130,
    flex: 1,
  },

  styleImagem: {
    width: 100,
    height: 100,
    borderRadius: 10,
    paddingTop: 150,
    marginTop: -30,
  },

  titleComics: {
    fontWeight: "bold",
    marginLeft: 130,
  },

  description: {
    fontSize: 5,
    marginTop: -120,
    paddingLeft: 130,
    flex: 1,
  },

  textDetails: {
    fontSize: 8,
  },
});
