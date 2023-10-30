import { useState } from "react";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/eye-open.svg";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/eye-closed.svg";
import InputField from "../../components/InputField/InputField";
import Logo from "../../assets/img/logo2.png";
import BackgroundImage from "../../assets/img/statment_bg.png";
import BaseButton from "../../components/Button/BaseButton";
import Grid from "@mui/material/Grid";

const AuthLayout = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleEyeOpenEyeClose = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container center-body grid lg:grid-cols-2 min-h-screen w-full">
        <Grid item xs={6} className="center-body">
          <div>
            <section>
              <img
                src={Logo}
                alt="Providus Bank Logo"
                className="w-[120px] h-[50px]"
              />
            </section>
            <section>
              <h1 className="text-3xl text-yellow-400 font-bold max-w-[70]">
                Bulk Lien / UnLien Portal
              </h1>
            </section>
            <section>
              <p className="text-lg text-black font-light">
                Enter your Ad credentials to sign in
              </p>
            </section>
            <section>
              <InputField label="Username" type="text" placeholder="Username" />
            </section>
            <section>
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="*****"
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
              <BaseButton type="submit" customStyle="w-full" variant="gradient">
                Sign In
              </BaseButton>
            </section>
          </div>
        </Grid>
        <Grid item xs={6}>
          {" "}
          <div
            className="bgImage lg:min-h-screen lg:bg-no-repeat lg:bg-left-bottom lg:bg-fixed"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
          >
            b
          </div>
        </Grid>
      </div>
    </>
  );
};

export default AuthLayout;
