import { IoStatsChart } from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../features/authSlice";
import { loginUser } from "../api/auth";

export interface LoginResponse {
  token: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

const loginMutation = useMutation({
  mutationFn: (payload: LoginPayload) => loginUser(payload),
  onSuccess: (data: LoginResponse) => {
    dispatch(loginSuccess(data.token));
    navigate("/");
  },
});

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      loginMutation.mutate(values);
    },
  });

  return (
    <div className="flex font-jakarta items-center justify-center min-h-screen bg-[#EDF2F9]">
      <div className="flex flex-col md:flex-row w-[90%] lg:w-[55%] lg:h-100 mx-auto  border border-gray-300 rounded-l-lg   relative z-20">
        {/* Left Panel */}
        <div className="flex-1 bg-[#01416B] flex flex-col gap-4 justify-center items-center text-white p-9 text-center relative overflow-hidden rounded-t-md rounded-r-none lg:rounded-l-lg z-10">
          <div className="flex justify-center lg:text-4xl text-2xl text-white gap-3 items-center">
            <IoStatsChart className="lg:text-5xl" />
            <h1 className="font-medium text-nowrap">Claros Analytics</h1>
          </div>
          <p className="lg:px-5 my-4 text-xs lg:text-base text-gray-100">
            With the power of our Expense Tracker, you can now focus solely on
            managing your finances and goals — while we handle the tracking,
            categorization, and insights for you!
          </p>
          <img
            src="/images/ForLogin/bg1.png"
            className="absolute -top-80 w-full right-0"
          />
        </div>

        {/* Right Panel (Form) */}
        <div className="flex-1 p-9 pb-0 bg-white relative z-20 rounded-md lg:rounded-r-lg">
          <div className="py-4">
            <h2 className="font-medium mb-7 text-2xl">Admin Login</h2>
            <form onSubmit={formik.handleSubmit} className="text-sm">
              {/* Email */}
              <div className="mb-4">
                <h2 className="pb-1.5">User*</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter user"
                  className="p-2 w-full border border-gray-300  rounded-md focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.email}
                  </div>
                )}
              </div>

              {/* Password */}
              <div>
                <h2 className="pb-1.5">Password*</h2>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="p-2 w-full border border-gray-300  rounded-md focus:outline-none"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {formik.errors.password}
                  </div>
                )}
              </div>

              {/* Mutation Error */}
              {loginMutation.isError && (
                <div className="text-red-500 text-xs mt-2">
                  {loginMutation.error instanceof Error
                    ? loginMutation.error.message
                    : "Login failed"}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="p-2 w-full bg-[#287CEB] text-white rounded-md mt-9 font-semibold"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="hidden lg:block">
          <img
            src="/images/Login/bg2.png"
            className="absolute -top-24 -right-32 w-[25%]"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/Login/bg3.png"
            className="absolute -bottom-20 -left-28 w-[20%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
