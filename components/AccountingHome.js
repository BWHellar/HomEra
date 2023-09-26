import React from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  StyleSheet,
} from "react-native";
import DropDown from "react-native-paper-dropdown";
import {
  LineChart,
} from "react-native-chart-kit";
import { InvoiceList, MonthList } from "../constants";
const AccountingHome = () => {
  const [user, setUser] = React.useState(InvoiceList[0]);
  const [showDropDown, setShowDropDown] = React.useState(false);

  const data = Array.from({ length: 6 }, () =>
    (Math.random() * 100).toFixed(2)
  );
  const currentMonth = MonthList.slice(
    new Date().getMonth() - 5,
    new Date().getMonth() + 1
  ).map((month) => month);
  return (
    <ImageBackground
      source={require("../images/gradient.png")}
      style={styles.background}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <DropDown
          label={user.label}
          mode={"outlined"}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={user}
          setValue={setUser}
          list={InvoiceList}
        />
      </View>
      <View style={[styles.container, { alignItems: "center" }]}>
        <LineChart
          data={{
            labels: currentMonth,
            datasets: [{ data: data }],
          }}
          width={Dimensions.get("window").width - 10}
          height={300}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1}
          chartConfig={{
            backgroundGradientFrom: "rgba(0, 161, 145, 0.1)",
            backgroundGradientTo: "rgba(0, 80, 72, 0.1)",
            decimalPlaces: 2, 
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.headerText, styles.leftAlign]}>Date</Text>
          <Text style={[styles.headerText, styles.rightAlign]}>
            {user.label|| user}
          </Text>
        </View>
        {data.map((item, index) => (
          <>
          <View style={styles.row} key={item.id}>
            <Text style={[styles.cell, styles.leftAlign]}>
              {currentMonth[index]}
            </Text>
            <Text style={[styles.cell, styles.rightAlign]}>${item}k</Text>
          </View>
          <View style={styles.line} />
          </>
        ))}
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  leftAlign: {
    textAlign: "left",
  },
  rightAlign: {
    textAlign: "right",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    marginBottom: 17,
  },
  cell: {
    flex: 1,
    fontSize: 14,
  },
});

export default AccountingHome;
