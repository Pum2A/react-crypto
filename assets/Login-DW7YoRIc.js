import{R as c,A as _,a as w,j as e}from"./index-5raM_vzj.js";import{u as j}from"./index.esm-BVYEyoO2.js";const v="_authForm_1gtn4_1",N="_authContainer_1gtn4_12",U="_loginTitle_1gtn4_18",b="_registerQuestion_1gtn4_58",C="_newUserBtn_1gtn4_63",f="_error_1gtn4_67",s={authForm:v,authContainer:N,loginTitle:U,registerQuestion:b,newUserBtn:C,error:f},R=()=>{const{register:t,handleSubmit:l,formState:{errors:r}}=j(),[n,m]=c.useState(""),{login:u}=c.useContext(_),a=w(),g=h=>{const{username:x,password:p}=h,o=(JSON.parse(localStorage.getItem("users"))||[]).find(i=>i.username===x&&i.password===p);o?(u(o),a("/")):m("Invalid username or password")},d=()=>{a("/register")};return e.jsx("div",{className:s.authContainer,children:e.jsxs("div",{className:s.authForm,children:[e.jsx("h2",{className:s.loginTitle,children:"Login"}),n&&e.jsx("p",{className:s.error,children:n}),e.jsxs("form",{onSubmit:l(g),children:[e.jsx("input",{type:"text",placeholder:"Username",...t("username",{required:"Username is required",maxLength:{value:20,message:"Username cannot exceed 20 characters"},minLength:{value:2,message:"Username must be at least 2 characters"}})}),r.username&&e.jsx("p",{className:s.error,children:r.username.message}),e.jsx("input",{type:"password",placeholder:"Password",...t("password",{required:"Password is required",maxLength:{value:20,message:"Password cannot exceed 20 characters"},minLength:{value:8,message:"Password must be at least 8 characters"}})}),r.password&&e.jsx("p",{className:s.error,children:r.password.message}),e.jsx("button",{type:"submit",children:"Login"})]}),e.jsx("p",{className:s.registerQuestion,children:"Don't have an account?"}),e.jsx("button",{className:s.newUserBtn,onClick:d,children:"Register"})]})})};export{R as default};
