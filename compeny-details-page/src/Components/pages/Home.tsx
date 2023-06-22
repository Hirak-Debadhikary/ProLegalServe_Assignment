import { useEffect, useState } from "react";
import { Container, Box, Flex, Text, Button } from "@mantine/core";
import { GrFormNextLink } from "react-icons/gr";

interface DataItem {
  companyInfo: {
    operatingCompany: "Pro Legal Serve";
    companyType: "B2B";
    lawFirmBusinessName: "Flesh";
  };
  address: {
    type: "Company Address";
    state: "State";
    city: "City";
    country: "Country";
    zip: "Zip Code";
    phone: 1234567890;
  };
  lawFirmInfo: {
    speciality: "Family Firm";
    caseMangement: "Server Manger";
    accountManager: "Account Manager";
  };
  notificationSettings: {
    newUserInvited: "Email";
    newUserAdded: "Email";
    paymentMethodChanged: "Email";
  };
}

const Home = () => {
  const [data, setData] = useState<DataItem[]>([]);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://masai-car-wala-api.onrender.com/companyData"
      );
      const json_Data: DataItem[] = await res.json();
      setData(json_Data);
    } catch (error) {
      console.error("Error Comes While fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container
        m={0}
        ml={"20%"}
        mt={"-43rem"}
        p={"1rem"}
        style={{
          textAlign: "left",
          background: "rgb(249,250,251",
          fontFamily: "Open Sans",
          borderRadius: "21px",
        }}
      >
        <div
          style={{
            background: "white",
            // border: "1px solid red",
            borderRadius: "23px",
          }}
        >
          <Container p="2rem">
            <h1 style={{ fontSize: "30px", fontWeight: 500 }}>
              Company Information
            </h1>
            <Box>
              {data.map((ele: DataItem, index: number) => (
                <Box>
                  <Flex align="left" gap={100} mt={40}>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Operating Company
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.companyInfo.operatingCompany}
                      </Text>
                    </Box>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Company type
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.companyInfo.companyType}
                      </Text>
                    </Box>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Law firm or business name
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.companyInfo.lawFirmBusinessName}
                      </Text>
                    </Box>
                  </Flex>

                  <Box w={"200px"} mt={20}>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "xs",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Address 1
                    </Text>
                    <Text fw={700} style={{ fontSize: "20px" }}>
                      {ele.address.type}
                    </Text>
                  </Box>

                  <Flex align="left" gap={100} mt={20}>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        State
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.address.state}
                      </Text>
                    </Box>

                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        City
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.address.city}
                      </Text>
                    </Box>

                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Country
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.address.country}
                      </Text>
                    </Box>
                  </Flex>

                  <Flex align="left" gap={100} mt={20}>
                    <Box style={{ textAlign: "left" }} w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Zip code
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.address.zip}
                      </Text>
                    </Box>

                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Phone number
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.address.phone}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Box>
          </Container>


          <hr />

          <Container p="2rem">
            <h1 style={{ fontSize: "30px", fontWeight: 500 }}>
              Law Firm Information
            </h1>
            <Box>
              {data.map((ele: DataItem, index: number) => (
                <Box>
                  <Flex align="left" gap={100} mt={40}>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Firm Speciality
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.lawFirmInfo.speciality}
                      </Text>
                    </Box>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        Case managment
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.lawFirmInfo.caseMangement}
                      </Text>
                    </Box>
                  </Flex>
                  <Box w={"200px"} mt={20}>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "xs",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Account manager
                    </Text>
                    <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                      {ele.lawFirmInfo.accountManager}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>


          <hr />
          <Container p="2rem">
            <h1 style={{ fontSize: "30px", fontWeight: 500 }}>
              Company notification settings
            </h1>
            <Box>
              {data.map((ele: DataItem, index: number) => (
                <Flex>
                  <Flex align="left" gap={100} mt={40}>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        New user invited
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.notificationSettings.newUserInvited}
                      </Text>
                    </Box>
                    <Box w={"200px"}>
                      <Text
                        style={{
                          color: "gray",
                          fontSize: "xs",
                          textTransform: "uppercase",
                          fontWeight: 500,
                        }}
                      >
                        New user added
                      </Text>
                      <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                        {ele.notificationSettings.newUserAdded}
                      </Text>
                    </Box>
                  </Flex>
                  <Box w={"300px"} mt={20}>
                    <Text
                      style={{
                        color: "gray",
                        fontSize: "xs",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Payment method changed
                    </Text>
                    <Text key={index} fw={700} style={{ fontSize: "20px" }}>
                      {ele.notificationSettings.paymentMethodChanged}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Container>

          <Flex mt={20} justify="end" mr={30} pb={20}>
            <Button
              style={{
                fontSize: "15px",
                color: "black",
                backgroundColor: "rgba(228, 196, 65, 1)",
              }}
            >
              Next
              <GrFormNextLink size={20} />
            </Button>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Home;
