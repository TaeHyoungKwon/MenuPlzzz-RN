import { Container, Text, Content } from "native-base";

import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { Actions } from "react-native-router-flux";

import Spinner from "react-native-loading-spinner-overlay";
import { layout } from "../../Styles/layout";

import { SearchBar } from "react-native-elements";
import ChildTab from "./Presenter";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: true,
      search: "",
      searchList: []
    };
  }

  componentDidMount() {
    this.setState({
      spinner: false
    });
  }

  updateSearch = search => {
    this.setState({ search });
  };

  getSearchResult = search => {
    const result = [];
    if (search !== "") {
      const data = this.props._datas;

      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].menu.length; j++) {
          if (data[i].menu[j].name.includes(search)) {
            result.push(data[i].menu[j]);
          }
        }
      }
    }

    return result;
  };

  render() {
    const store = this.props._store;
    const { spinner, search } = this.state;
    var searchResult = this.getSearchResult(search);
    const menuList = <ChildTab menu={searchResult} />;
    return (
      <Container>
        <Spinner
          visible={spinner}
          texContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        <View style={[layout.navBar, {}]}>
          <TouchableOpacity
            onPress={() => {
              Actions.pop();
            }}
          >
            <Image
              style={{ marginLeft: 10 }}
              source={require("../../assets/images/back_arrow.png")}
            />
          </TouchableOpacity>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>{store}</Text>
          </View>
          <View style={{ flex: 0.1 }} />
        </View>

        <View
          style={{
            flex: 0.1,
            borderBottomColor: "#ff774f",
            borderTopColor: "#ff774f"
          }}
        >
          <SearchBar
            placeholder="메뉴명 검색"
            onChangeText={this.updateSearch}
            value={search}
            containerStyle={{
              backgroundColor: "white",
              borderBottomColor: "#ff774f",
              borderTopColor: "#ff774f"
            }}
            inputContainerStyle={{ backgroundColor: "white" }}
            inputStyle={{ color: "black" }}
          />
        </View>

        <Content>{menuList}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF"
  }
});

export default Search;
