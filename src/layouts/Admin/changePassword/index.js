/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
// import Header from "layouts/profile/components/Header";
import Header from "layouts/Admin/profile/components/Header";
// import PlatformSettings from "layouts/profile/components/PlatformSettings";
import PlatformSettings from "layouts/Admin/profile/components/PlatformSettings";

// Data
// import profilesListData from "layouts/profile/data/profilesListData";
import profilesListData from "layouts/Admin/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import { FieldArray, Form, Formik, useFormik } from "formik";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useState } from "react";
import axios from "axios";

function Overview() {
const [errorMessage, setErrorMessage] = useState("")

  const initialValues = {
  };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={2} mb={3}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6} xl={4}>
            <PlatformSettings />
          </Grid>
        </Grid> */}
      </SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Change Password
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              {/* -----------------write here=------------------------------------------------ */}

              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log(values);
                  
                  values.role = "admin"
                  // const data = {
                  //   role: "admin",
                  //   name: values.name,
                  //   email: values.email,
                  //   biography: values.biography,
                  //   specialization: values.specialization,
                  //   address: values.address,
                  //   videoType: values.videoType,
                  //   education: values.addEducation,
                  //   experience: values.experience,
                  //   additionalWork: values.additionalWork,
                  // };
                  if(values.newPassword !== values.confirmPassword){
                    setErrorMessage("New password and comfrom password does not match")   
                }
                else{  
                  axios
                    .post("http://localhost:4000/api/admin/changePassword", values, {
                      headers: {
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
                      },
                    })
                    .then((response) => {
                      setErrorMessage("  ")
                      console.log(errorMessage);
                      console.log("dataAccounts", response);
                      if (response.status !== 200) {
                        alert(`Unable to save this data!`);
                      } else {
                        alert(`Details Saved!`);
                        window.location.reload(true)
                      }
                    })
                    .catch((error) => {
                      setErrorMessage(error?.response?.data?.message)
                      console.log("error", error);
                    });
                  }

 }}
                render={({ values, errors, touched, handleReset, handleSelect, handleChange }) => {
                  return (
                    <Form>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                              Email
                            </SoftTypography>
                          </Grid>
                          <TextField
                            fullWidth
                            required
                            type="text"
                            name="email"
                            onChange={handleChange}
                            // value={}
                            placeholder="Name"
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                              Old Password
                            </SoftTypography>
                          </Grid>
                          <SoftInput
                            required
                            type="password"
                            name="oldPassword"
                            onChange={handleChange}
                            // value={values.biography}
                            placeholder="Old Password"
                          />
                        </Grid>


                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                              New Password
                            </SoftTypography>
                          </Grid>
                          <SoftInput
                            required
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            placeholder="New Password"
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                            Confirm Password
                            </SoftTypography>
                          </Grid>
                          <SoftInput
                            required
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                          />
                        </Grid>

                        {/* -------------------------------------without fieldarray code till here------------------------------------------------ */}


                        {/* ------------------------------fieldArray code end here------------------------------------- */}

                        <SoftBox mt={2} mb={2} textAlign="center">
                          <h6
                            style={{
                              fontSize: ".8em",
                              color: "red",
                              textAlign: "center",
                              fontWeight: 400,
                              transition: ".2s all",
                            }}
                          >
                            {errorMessage}
                          </h6>
                        </SoftBox>
                        <Grid item xs={12} mt={4} mb={1}>
                          <SoftButton variant="gradient" color="info" type="submit" fullWidth>
                            Save Information
                          </SoftButton>
                        </Grid>
                      </Grid>
                    </Form>
                  );
                }}
              />

              {/* ------------------------------------------------------waste one-------------------------- */}

              {/* -----------------write here=------------------------------------------------ */}
            </SoftBox>
          </SoftBox>
          <SoftBox p={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} xl={3}>
                {/* <DefaultProjectCard
                  image={homeDecor1}
                  label="project #2"
                  title="modern"
                  description="As Uber works through a huge amount of internal management turmoil."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                  ]}
                /> */}
              </Grid>
              <Grid item xs={12} md={6} xl={3}>
                {/* <DefaultProjectCard
                  image={homeDecor2}
                  label="project #1"
                  title="scandinavian"
                  description="Music is something that every person has his or her own specific opinion about."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team3, name: "Nick Daniel" },
                    { image: team4, name: "Peterson" },
                    { image: team1, name: "Elena Morison" },
                    { image: team2, name: "Ryan Milly" },
                  ]}
                /> */}
              </Grid>
              {/* <Grid item xs={12} md={6} xl={3}>
                <DefaultProjectCard
                  image={homeDecor3}
                  label="project #3"
                  title="minimalist"
                  description="Different people have different taste, and various types of music."
                  action={{
                    type: "internal",
                    route: "/pages/profile/profile-overview",
                    color: "info",
                    label: "view project",
                  }}
                  authors={[
                    { image: team4, name: "Peterson" },
                    { image: team3, name: "Nick Daniel" },
                    { image: team2, name: "Ryan Milly" },
                    { image: team1, name: "Elena Morison" },
                  ]}
                />
              </Grid> */}
              {/* <Grid item xs={12} md={6} xl={3}>
                <PlaceholderCard title={{ variant: "h5", text: "New project" }} outlined />
              </Grid> */}
            </Grid>
          </SoftBox>
        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
