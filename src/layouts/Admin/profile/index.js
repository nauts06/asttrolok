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
import { FormControl, InputLabel, MenuItem, Select, Switch, TextField } from "@mui/material";
import { useFormik } from "formik";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useState } from "react";

function Overview() {
  // const [expertise, setExpertise] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      experience: "",
      organization: "",
      address: "",
      expertise: [""],
      videoType: "None",
    },
    // validationSchema: Yup.object({
    //   mobile: Yup.string()
    //     .min(10, "Mininum 10 Digits Required!")
    //     .max(10, "Maximum 10 Digits Required!")
    //     .required("Required!"),
    //   //   mobile: Yup.string()
    //   //     .email("Invalid email format")
    //   //     .required("Required!"),
    //   //   password: Yup.string()
    //   //     .min(8, "Minimum 8 characters")
    //   //     .required("Required!"),
    //   //   confirm_password: Yup.string()
    //   //     .oneOf([Yup.ref("password")], "Password's not match")
    //   //     .required("Required!")
    // }),
    onSubmit: (values) => {
      console.log("persInfo", values);
    },
  });
  
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
                Personal Information
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Name
                      </SoftTypography>
                    </Grid>
                    <TextField
                      fullWidth
                      required
                      type="text"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Email
                      </SoftTypography>
                    </Grid>
                    <SoftInput
                      required
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Email"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Phone Number
                      </SoftTypography>
                    </Grid>
                    <SoftInput
                      required
                      type="number"
                      name="number"
                      onChange={formik.handleChange}
                      value={formik.values.number}
                      placeholder="Phone Number"
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Experience
                      </SoftTypography>
                    </Grid>
                    <SoftInput
                      required
                      type="number"
                      name="experience"
                      onChange={formik.handleChange}
                      value={formik.values.experience}
                      placeholder="Experience"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Organization
                      </SoftTypography>
                    </Grid>
                    <SoftInput
                      required
                      type="text"
                      name="organization"
                      onChange={formik.handleChange}
                      value={formik.values.organization}
                      placeholder="Organization"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Address
                      </SoftTypography>
                    </Grid>
                    <SoftInput
                      required
                      type="text"
                      name="address"
                      onChange={formik.handleChange}
                      value={formik.values.address}
                      placeholder="Address"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Area of Interest / Expertise
                      </SoftTypography>
                    </Grid>
                    <FormControl fullWidth>
                      {/* <InputLabel id="demo-multiple-name-label">Name</InputLabel> */}
                      <Select
                        fullWidth
                        multiple
                        name="expertise"
                        value={formik.values.expertise}
                        // value={formik.values.videoType}
                        onChange={formik.handleChange}
                        // input={<OutlinedInput label="Name" />}
                        // MenuProps={MenuProps}Video Type
                      >
                        <MenuItem value="">Select Expertise</MenuItem>
                        <MenuItem value="Astrology">Astrology</MenuItem>
                        <MenuItem value="Palmistry">Palmistry</MenuItem>
                        <MenuItem value="Numerology">Numerology</MenuItem>
                        <MenuItem value="Ayurveda">Ayurveda</MenuItem>
                        <MenuItem value="Vaastu">Vaastu</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Video Type
                      </SoftTypography>
                    </Grid>
                    <TextField
                      required
                      fullWidth
                      select
                      name="videoType"
                      onChange={formik.handleChange}
                      value={formik.values.videoType}
                      placeholder="Video Type"
                    >
                      <MenuItem value="None">Select Video Type</MenuItem>
                      <MenuItem value="Vimeo">Vimeo</MenuItem>
                      <MenuItem value="YouTube">YouTube</MenuItem>
                    </TextField>
                  </Grid>
                  {/* <SoftBox display="flex" alignItems="center">
                  <Switch
                    defaultChecked={true}
                    // onChange={(event) => handleSetRememberMe(event.target.checked)}
                  />
                  <SoftTypography
                    variant="button"
                    fontWeight="regular"
                    // onClick={handleSetRememberMe}
                    sx={{ cursor: "pointer", userSelect: "none" }}
                  >
                    &nbsp;&nbsp;Are You Astrologer?
                  </SoftTypography>
                </SoftBox> */}
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
                      {/* {error} */}
                    </h6>
                  </SoftBox>
                  <Grid item xs={12} mt={4} mb={1}>
                    <SoftButton variant="gradient" color="info" type="submit" fullWidth>
                      Save Information
                    </SoftButton>
                  </Grid>
                </Grid>
              </form>
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
