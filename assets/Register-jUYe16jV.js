import{R as x,a as _,j as e}from"./index-5raM_vzj.js";import{u as j}from"./index.esm-BVYEyoO2.js";const N="_authContainer_p03ug_2",y="_authForm_p03ug_10",v="_register_p03ug_21",w="_loginQuestion_p03ug_59",U="_actuallyUserBtn_p03ug_65",b="_error_p03ug_70",s={authContainer:N,authForm:y,register:v,loginQuestion:w,actuallyUserBtn:U,error:b},q=()=>{const{register:r,handleSubmit:l,formState:{errors:a}}=j(),[o,u]=x.useState(""),c=_(),m=d=>{const{username:i,password:h,name:p}=d,t=JSON.parse(localStorage.getItem("users"))||[];if(t.find(n=>n.username===i))u("User already exists");else{const n={username:i,password:h,name:p};t.push(n),localStorage.setItem("users",JSON.stringify(t)),c("/login")}},g=()=>{c("/login")};return e.jsx("div",{className:s.authContainer,children:e.jsxs("div",{className:s.authForm,children:[e.jsx("h2",{className:s.register,children:"Register"}),o&&e.jsx("p",{className:s.error,children:o}),e.jsxs("form",{onSubmit:l(m),children:[e.jsx("input",{type:"text",placeholder:"Name",...r("name",{required:"Name is required",maxLength:{value:20,message:"Name cannot exceed 20 characters"}})}),a.name&&e.jsx("p",{className:s.error,children:a.name.message}),e.jsx("input",{type:"text",placeholder:"Username",...r("username",{required:"Username is required",maxLength:{value:20,message:"Username cannot exceed 20 characters"},minLength:{value:2,message:"Username must be at least 2 characters"},pattern:{value:/^[A-Za-z]+$/,message:"Username can only contain letters"}})}),a.username&&e.jsx("p",{className:s.error,children:a.username.message}),e.jsx("input",{type:"password",placeholder:"Password",...r("password",{required:"Password is required",maxLength:{value:20,message:"Password cannot exceed 20 characters"},minLength:{value:8,message:"Password must be at least 8 characters"},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/,message:"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}})}),a.password&&e.jsx("p",{className:s.error,children:a.password.message}),e.jsx("button",{type:"submit",children:"Register"})]}),e.jsx("p",{className:s.loginQuestion,children:"Do you have an account?"}),e.jsx("button",{className:s.actuallyUserBtn,onClick:g,children:"Login"})]})})};export{q as default};
