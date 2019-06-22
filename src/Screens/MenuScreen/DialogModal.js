import React from "react";
import Dialog, {
  DialogContent,
  SlideAnimation,
} from "react-native-popup-dialog";

import { styles } from "../../Styles/color";

const DialogModal = props => {
  <Dialog
    onDismiss={() => {
      props._detailModalOff;
    }}
    onTouchOutside={() => {
      props._detailModalOff;
    }}
    onHardwareBackPress={() => {
      props._detailModalOff;
    }}
    visible={props.slideAnimationDialog}
    //dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
    dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
  >
    <DialogContent>
      <Image
        source={{
          uri: props.image,
          //"https://www.mcdelivery.co.kr/kr/static/1556153387275/assets/82/products/1201.png?"
        }}
        style={{ width: 300, height: 300 }}
        resizeMode="contain"
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "right",
            marginTop: 15,
            fontWeight: "bold",
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "left",
            marginTop: 15,
          }}
        >
          는 어떠세요?
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          this.setState({ slideAnimationDialog: false }, () =>
            Actions.push("webscreen", { _siteUrl: datas[0].siteUrl })
          );
        }}
        style={styles.recommendButtonStyle}
      >
        <Text style={styles.randomTextStyle}>자세히 보기</Text>
      </TouchableOpacity>
    </DialogContent>
  </Dialog>;
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF",
  },
  randomTextStyle: {
    fontFamily: "PlayfairDisplay-Black",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.01,
    textAlign: "center",
    color: "#ffffff",
  },
  randomButtonStyle: {
    backgroundColor: "#444444",
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center",
  },
  recommendButtonStyle: {
    backgroundColor: "#ff774f",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginRight: 30,
    marginLeft: 30,
  },
});

export default DialogModal;
