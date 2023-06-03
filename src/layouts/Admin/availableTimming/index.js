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
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";
import { useEffect, useState } from "react";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
function Overview() {
  // const [monday, setMonday] = useState(false);
  const [addBreak, setAddBreak] = useState(false);

  // console.log("asdfghj", monday);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "id", headerName: "Days", width: 150 },
    {
      field: "firstName",
      headerName: "Status",
      width: 100,
      editable: true,
      renderCell: (row) => <Switch />,
    },
    {
      field: "lastName",
      headerName: "Start Time",
      width: 150,
      editable: true,
      renderCell: (row) => <TextField type="time" />,
    },
    {
      field: "age",
      headerName: "End Time",
      type: "number",
      width: 150,
      editable: true,
      renderCell: (row) => <TextField type="time" />,
    },
    { field: "", headerName: "", width: 20 },
    {
      field: "agae",
      headerName: "Lunch Break",
      type: "number",
      width: 150,
      editable: true,
      renderCell: (row) => <Typography>4:30 - 5:00</Typography>,
    },
    {
      field: "addBreak",
      headerName: "",
      width: 120,
      editable: true,
      renderCell: (row) => <SoftButton size="small" variant="gradient"  color="info" onClick={handleClickOpen}>Add Break</SoftButton>,
    },
    {
      field: "agase",
      headerName: "Tea Break",
      type: "number",
      width: 150,
      editable: true,
      renderCell: (row) => <Typography>4:30 - 5:00</Typography>,
    },
    {
      field: "addBreak",
      headerName: "",
      width: 120,
      editable: true,
      renderCell: (row) => <SoftButton size="small" variant="gradient"  color="info" onClick={handleClickOpen}>Add Break</SoftButton>,
    },
    // {
    //   field: "BreakIn",
    //   headerName: "Break In",
    //   type: "number",
    //   width: 150,
    //   editable: true,
    //   renderCell: (row) => <TextField type="time" />,
    // },
    // {
    //   field: "BreakOut",
    //   headerName: "Break Out",
    //   type: "number",
    //   width: 150,
    //   editable: true,
    //   renderCell: (row) => <TextField type="time" />,
    // },
  ];

  const rows = [
    { id: "Monday", lastName: "Snow", firstName: "Jon", age: 35 },
    //  addBreak === true ?  { id: "Mnday", lastName: "Ssnow", firstName: "Josn", age: 375 }:(""),
    { id: "Tuesday", lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: "Wednesday", lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: "Thursday", lastName: "Stark", firstName: "Arya", age: 16 },
    { id: "Friday", lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: "Saturday", lastName: "Melisandre", firstName: null, age: 150 },
    { id: "Sunday", lastName: "Clifford", firstName: "Ferrara", age: 44 },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      gender: "None",
      experienceInYears: "",
      organization: "",
      address: "",
      areaofInterest: [""],
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

      const data = {
        role: "admin",
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        address: values.address,
        gender: values.gender,
        experienceInYears: values.experienceInYears,
        organization: values.organization,
        areaofInterest: values.areaofInterest,
        videoType: values.videoType,
      };

      axios
        .post("http://localhost:4000/api/admin/profileSettings", data, {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((response) => {
          console.log("datahhhh", response.status);
          if (response.status !== 200) {
            alert(`Unable to save this data!`);
          } else {
            alert(`Details Saved!`);
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  });
  // console.log(JSON.parse(localStorage.getItem("token")));

  const { setValues } = formik;

  useEffect(() => {
    // console.log("its token", JSON.parse(localStorage.getItem("token")));
    axios
      .get("http://localhost:4000/api/admin/getprofileSettings", {
        params: {
          role: "admin",
        },
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((response) => {
        console.log("kkkkkk", response);
        setValues(response.data.message);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  // const handleAddBreak = (event) => {
  //   console.log("vgcfxds", event.target.checked);
  //   setAddBreak(event.target.checked);
  // };

  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={2} mb={3}></SoftBox>
      <SoftBox mb={3}>
        <Card>
          <SoftBox pt={2} px={2}>
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Available Timming
              </SoftTypography>
            </SoftBox>
            <SoftBox mb={1}>
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ height: 500, width: "100%", mt: 4 }}>
                  <DataGrid
                    getRowId={(row) => row.id}
                    rows={rows}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: {
                          pageSize: 7,
                        },
                      },
                    }}
                    pageSizeOptions={[5]}
                    //checkboxSelection
                    // disableRowSelectionOnClick
                  />
                </Box>
                {/* <Grid container spacing={2}>
                  <Grid item xs={12} md={2} mt={4} ml={4}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="h6" fontWeight="medium">
                        Days
                      </SoftTypography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2} mt={4}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="h6" fontWeight="medium">
                        Status
                      </SoftTypography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12} md={2} mt={4}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="h6" fontWeight="medium">
                        Start Time
                      </SoftTypography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={2} mt={4}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="h6" fontWeight="medium">
                        Close Time
                      </SoftTypography>
                    </Grid>
                  </Grid>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={2} mt={1}>
                      <Grid mb={1} ml={0.5}>
                        <SoftTypography ml={5} component="label" variant="h6" fontWeight="medium">
                          Monday
                        </SoftTypography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} mt={1}>
                      <Grid mb={1} ml={6}>
                        <Switch defaultChecked />
                      </Grid>
                    </Grid>

                    <Grid item xs={12} md={2} mt={1}>
                      <Grid mb={1} ml={4}>
                         <TextField
                          fullWidth
                          required
                          type="time"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          placeholder="Name"
                        />
                        
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} mt={1}>
                      <Grid mb={1} ml={4}>
                       <TextField
                          fullWidth
                          required
                          type="time"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          placeholder="Name"
                        />
                       
                      </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} mt={1}>
                      <Grid mb={1} ml={0.5}>
                        <SoftButton variant="contained" onClick={(event)=>console.log("asgvcxs",event)} color="secondary" size="small">
                          Add Break
                        </SoftButton>
                      </Grid>
                    </Grid>

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
                       
                      </h6>
                    </SoftBox>
                    <Grid item xs={12} mt={4} mb={1}>
                      <SoftButton variant="gradient" color="info" type="submit" fullWidth>
                        Save Information
                      </SoftButton>
                    </Grid>
                  </Grid>
                </Grid> */}
              </form>
            </SoftBox>
            <Dialog open={open} onClose={handleClose} >
              <DialogTitle>Add Break</DialogTitle>
              <DialogContent>
                
              <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        Start Time
                      </SoftTypography>
                    </Grid>
                    <TextField
                      fullWidth
                      required
                      type="time"
                      name="name"
                      // onChange={formik.handleChange}
                      // value={formik.values.name}
                      placeholder="Name"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Grid mb={1} ml={0.5}>
                      <SoftTypography component="label" variant="caption" fontWeight="bold">
                        End Time
                      </SoftTypography>
                    </Grid>
                    <TextField
                      fullWidth
                      required
                      type="time"
                      // name="name"
                      // onChange={formik.handleChange}
                      // value={formik.values.name}
                      placeholder="Name"
                    />
                  </Grid>
                  </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>
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
                <PlaceholderCard title={{ variant: "h6", text: "New project" }} outlined />
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
