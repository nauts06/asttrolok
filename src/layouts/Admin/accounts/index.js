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
import { useEffect, useState } from "react";
import axios from "axios";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
function Overview() {
  const [tags, setTags] = useState([]);

  const handleTagsChange = (tags) => {
    setTags(tags);
  };

  const initialValues = {
    name: "",
    email: "",
    biography: "",
    address: "",
    specialization: ["None"],
    videoType: "None",
    addEducation: [
      {
        degree: "",
        institute: "",
        yoc: "",
      },
    ],
    experience: [
      {
        organizationName: "",
        from: "",
        to: "",
        designation: "",
      },
    ],
    additionalWork: [
      {
        awards: "",
        description: "",
        year: "",
      },
    ],
  };

 useEffect(() => {
  const timer = setTimeout(() => {
    console.log('This will run after 1 second!')
    initialValues.specialization = tags
  }, 4000);
  return () => clearTimeout(timer);
 }, [])
 

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/getaccounts", {
        params: {
          role: "admin",
        },
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
       

        // setTags(response.data?.message?.specialization);
        initialValues.name = response.data?.message?.name;
        (initialValues.email = response.data?.message?.email),
          (initialValues.biography = response.data?.message?.biography),
          (initialValues.address = response.data?.message?.address),
         (initialValues.specialization = tags),
          (initialValues.videoType = response.data?.message?.videoType),
          // (initialValues.experience = );
          (initialValues.experience = response.data?.message?.experience.map((elem, i) => {
            return elem;
          }));
        initialValues.additionalWork = response.data?.message?.additionalWork.map((elem, i) => {
          return elem;
        });
        console.log("kkkkkk", response.data.message);
      })
      .catch((error) => {
        console.log("error", error);
      });

      console.log("tagsVal",tags);
  }, []);

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
                Accounts Details
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              {/* -----------------write here=------------------------------------------------ */}

              <Formik
                // enableReinitialize={true}
                // validateOnChange={true}
                initialValues={initialValues}
                onSubmit={(values) => {
                  console.log("valuesField", values);

                  const data = {
                    role: "admin",
                    name: values.name,
                    email: values.email,
                    biography: values.biography,
                    specialization: values.specialization,
                    address: values.address,
                    videoType: values.videoType,
                    education: values.addEducation,
                    experience: values.experience,
                    additionalWork: values.additionalWork,
                  };

                  axios
                    .post("http://localhost:4000/api/admin/accounts", data, {
                      headers: {
                        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
                      },
                    })
                    .then((response) => {
                      console.log("dataAccounts", response.status);
                      if (response.status !== 200) {
                        alert(`Unable to save this data!`);
                      } else {
                        alert(`Details Saved!`);
                      }
                    })
                    .catch((error) => {
                      console.log("error", error);
                    });
                }}
                render={({
                  setValues,
                  values,
                  errors,
                  touched,
                  handleReset,
                  handleSelect,
                  handleChange,
                }) => {
                  return (
                    <Form>
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
                            // onChange={(event) => (
                            //   handleChange(event), handleSetVal(event, setValues(),setFieldValue,values)
                            // )}
                            onChange={handleChange}
                             value={values.name}
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
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                              Biography
                            </SoftTypography>
                          </Grid>
                          <SoftInput
                            required
                            type="text"
                            name="biography"
                            onChange={handleChange}
                            value={values.biography}
                            placeholder="Biography"
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <Grid mb={1} ml={0.5}>
                            <SoftTypography component="label" variant="caption" fontWeight="bold">
                              Services and Specialization
                            </SoftTypography>
                          </Grid>
                          {/* <FormControl fullWidth>
                          
                            <Select
                              fullWidth
                              multiple
                              name="specialization"
                              // defaultValue={["None"] || values.specialization}
                               value={[values.specialization]}
                              onChange={handleChange}
                              // input={<OutlinedInput label="Name" />}
                              // MenuProps={MenuProps}Video Type
                            >
                              <MenuItem value="None">Select Specialization</MenuItem>
                              <MenuItem value="Marriage">Marriage</MenuItem>
                              <MenuItem value="Career">Career</MenuItem>
                              <MenuItem value="Vaastu">Vaastu</MenuItem>
                              <MenuItem value="Remedies">Remedies</MenuItem>
                              <MenuItem value="Vaidic Jyotish">Vaidic Jyotish</MenuItem>
                              <MenuItem value="Health">Health</MenuItem>
                            </Select>
                          </FormControl> */}

                          {/* <TagsInput
                            name="specialization"
                            value={values.specialization  }
                             defaultValue={values.specialization  || tags}
                            onChange={(event)=>{
                              handleChange(event),
                              handleTagsChange(event.target.value)
                            }}
                          /> */}
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
                            onChange={handleChange}
                            value={values.address}
                            placeholder="Address"
                          />
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
                            onChange={handleChange}
                            defaultValue="None"
                            value={values.videoType || "None"}
                            placeholder="Video Type"
                          >
                            <MenuItem value="None">Select Video Type</MenuItem>
                            <MenuItem value="Vimeo">Vimeo</MenuItem>
                            <MenuItem value="YouTube">YouTube</MenuItem>
                          </TextField>
                        </Grid>

                        {/* -------------------------------------without fieldarray code till here------------------------------------------------ */}

                        <Grid item xs={12}>
                          <FieldArray
                            name="addEducation"
                            render={({ insert, remove, push }) => (
                              <div>
                                <Grid style={{ display: "flex", gap: "2%" }}>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftTypography
                                      component="label"
                                      variant="caption"
                                      fontWeight="bold"
                                    >
                                      Education
                                    </SoftTypography>
                                  </Grid>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftButton
                                      variant="gradient"
                                      color="info"
                                      size="small"
                                      onClick={() => push({ degree: "", institute: "", yoc: "" })}
                                    >
                                      Add+
                                    </SoftButton>
                                  </Grid>
                                </Grid>
                                {values.addEducation.length > 0 &&
                                  values.addEducation.map((friend, index) => (
                                    <Box style={{ display: "flex", gap: "2%" }} key={index}>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`addEducation.${index}.degree`}
                                          onChange={handleChange}
                                          // value={values.education}
                                          placeholder="Degree"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`addEducation.${index}.institute`}
                                          onChange={handleChange}
                                          // value={values.education}
                                          placeholder="College / Institute"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`addEducation.${index}.yoc`}
                                          onChange={handleChange}
                                          // value={values.education}
                                          placeholder="Year Of Completion"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftButton
                                          // variant="primary"
                                          color="error"
                                          size="small"
                                          onClick={() => remove(index)}
                                        >
                                          remove
                                        </SoftButton>
                                      </Grid>
                                    </Box>
                                  ))}
                              </div>
                            )}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <FieldArray
                            name="experience"
                            render={({ insert, remove, push }) => (
                              <div>
                                <Grid style={{ display: "flex", gap: "2%" }}>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftTypography
                                      component="label"
                                      variant="caption"
                                      fontWeight="bold"
                                    >
                                      Experience
                                    </SoftTypography>
                                  </Grid>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftButton
                                      variant="gradient"
                                      color="info"
                                      size="small"
                                      onClick={() =>
                                        push({
                                          organizationName: "",
                                          from: "",
                                          to: "",
                                          designation: "",
                                        })
                                      }
                                    >
                                      Add+
                                    </SoftButton>
                                  </Grid>
                                </Grid>
                                {values.experience.length > 0 &&
                                  values.experience.map((values, index) => (
                                    <Box style={{ display: "flex", gap: "2%" }} key={index}>
                                      <Grid xs={12} md={4.5} mt={1}>
                                        {console.log("qawsedqwe", values)}
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`experience.${index}.organizationName`}
                                          onChange={handleChange}
                                          value={values.organizationName}
                                          placeholder="Organization Name"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={1.5} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`experience.${index}.from`}
                                          onChange={handleChange}
                                          value={values.from}
                                          placeholder="From"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={1.5} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`experience.${index}.to`}
                                          onChange={handleChange}
                                          value={values.to}
                                          placeholder="To"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`experience.${index}.designation`}
                                          onChange={handleChange}
                                          value={values.designation}
                                          placeholder="Designation"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={1.5} mt={1}>
                                        <SoftButton
                                          // variant="primary"
                                          color="error"
                                          size="small"
                                          onClick={() => remove(index)}
                                        >
                                          remove
                                        </SoftButton>
                                      </Grid>
                                    </Box>
                                  ))}
                              </div>
                            )}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FieldArray
                            name="additionalWork"
                            render={({ insert, remove, push }) => (
                              <div>
                                <Grid style={{ display: "flex", gap: "2%" }}>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftTypography
                                      component="label"
                                      variant="caption"
                                      fontWeight="bold"
                                    >
                                      Additional Work (Award)
                                    </SoftTypography>
                                  </Grid>
                                  <Grid mb={1} ml={0.5}>
                                    <SoftButton
                                      variant="gradient"
                                      color="info"
                                      size="small"
                                      onClick={() =>
                                        push({
                                          awards: "",
                                          description: "",
                                          year: "",
                                        })
                                      }
                                    >
                                      Add+
                                    </SoftButton>
                                  </Grid>
                                </Grid>
                                {values.additionalWork.length > 0 &&
                                  values.additionalWork.map((values, index) => (
                                    <Box style={{ display: "flex", gap: "2%" }} key={index}>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`additionalWork.${index}.awards`}
                                          onChange={handleChange}
                                          value={values.awards}
                                          placeholder="Awards"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3.5} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`additionalWork.${index}.description`}
                                          onChange={handleChange}
                                          value={values.description}
                                          placeholder="Description"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={3} mt={1}>
                                        <SoftInput
                                          required
                                          type="text"
                                          name={`additionalWork.${index}.year`}
                                          onChange={handleChange}
                                          value={values.year}
                                          placeholder="Year"
                                        />
                                      </Grid>
                                      <Grid xs={12} md={2.5} mt={1}>
                                        <SoftButton
                                          // variant="primary"
                                          color="error"
                                          size="small"
                                          onClick={() => remove(index)}
                                        >
                                          remove
                                        </SoftButton>
                                      </Grid>
                                    </Box>
                                  ))}
                              </div>
                            )}
                          />
                        </Grid>

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
                            {/* {error} */}
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
