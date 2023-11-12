import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/eye-closed.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-open.svg";
import { LoginSchema } from "../../utils/Yup/YupSchemas";
import InputField from "../../components/InputField/InputField";
import BaseButton from "../../components/Button/BaseButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeOpenEyeClose = () => {
    setShowPassword((prevS) => !prevS);
  };

  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleSubmit = (values) => {
    console.log({values})
  }

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleSubmit,
  });

  const handleClose = () => {
    setSnackBar((prevS) => ({
      ...prevS,
      open: false,
    }));
  };

  const showToast = ({ severity, message }) => {
    setSnackBar({
      open: true,
      severity,
      message,
    });
  };

  console.log({formik})

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackBar.severity}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
      <section>
        <p className="text-lg text-black font-light">
          Enter your Ad credentials to sign in
        </p>
      </section>
      <form onSubmit={formik.handleSubmit}>
        <section>
          <InputField
            type="text"
            label="Username"
            placeholder="Username"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            touched={formik.touched.userName}
            error={formik.errors.userName}
          />
        </section>
        <section>
          <InputField
            label="Password"
            placeholder="*****"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            touched={formik.touched.password}
            error={formik.errors.password}
            type={showPassword ? "text" : "password"}
            appendIcon={
              showPassword ? (
                <EyeOpenIcon
                  className="absolute right-2 cursor-pointer w-5 h-5 select-none"
                  onClick={handleEyeOpenEyeClose}
                />
              ) : (
                <EyeClosedIcon
                  className="absolute right-2 cursor-pointer w-5 h-5 select-none"
                  onClick={handleEyeOpenEyeClose}
                />
              )
            }
          />
        </section>
        <section>
          <BaseButton
            type="submit"
            customStyle="w-full"
            variant="gradient"
            isLoading={false}
          >
            Sign In
          </BaseButton>
        </section>
      </form>
    </>
  );
};

export default SignIn;
