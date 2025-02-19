import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { providusLoginFn } from "../../utils/ApiFactory/auth";
import { useFormik } from "formik";
import { LoginSchema } from "../../utils/Yup/YupSchemas";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/eye-closed.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-open.svg";
import { Encrypt, Decrypt } from "../../utils/EncryptDecrypt";
import InputField from "../../components/InputField/InputField";
import BaseButton from "../../components/Button/BaseButton";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignIn = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleEyeOpenEyeClose = () => {
    setShowPassword((prevS) => !prevS);
  };

  const handleSubmit = async (values) => {
    const loginCredentials = {
      username: values.username,
      password: values.password,
    };
    const encryptedCredentials = await Encrypt(loginCredentials)
    const check = await Decrypt("99618f82044090df0c844e0ed8d59c6c1399018a7845a41b7e2fd03c2846ba2a7d759b1bc8307dd93431886b08210096ff93f5386c092291f85c7d919cddecbc")
    const checkers = await Decrypt("BDF49103D2E16E74AAE1284B321085F0610E95FC7D4CD9F9A8896B0F93EC18B0387F05B8BBB5790D498BDFF695E636DCB70AF3A721F328C23CADE27FAB1796FC")
    // console.log({ loginCredentials });
    console.log("Encrypted Data: ", encryptedCredentials)
    console.log("Decrypted Data: ", check)
    console.log("Decrypted_2 Data: ", checkers)
  };

  const formik = useFormik({
    initialValues: {
      username: "",
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

  // console.log({ formik });

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
          Enter your Ad credentials to signs in
        </p>
      </section>
      <form onSubmit={formik.handleSubmit}>
        <section>
          <InputField
            type="text"
            label="Username"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            touched={formik.touched.username}
            error={formik.errors.username}
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
