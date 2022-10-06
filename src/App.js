import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import { auth, db } from "./Firebase";
import { useDispatch } from "react-redux";
import AdminRoute from "./Routes/AdminRoute";
import CompleteSignup from "./components/Login/Completesignup";
import RetriveContact from "./admin/RetriveContact";
import AddClass from "./admin/AddClass";
function App() {
  const dispatch = useDispatch();
  var separatedString1;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // console.log(user)
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        await db
          .collection("users")
          // .where('uid', '==', user.email)
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc && doc.exists) {
              separatedString1 = doc.data();
              // console.log("hello data", doc.data());
              //use separatedString1
            }
            dispatch({
              type: "LOGGED_USERS",
              payload: {
                name: separatedString1.name,
                email: separatedString1.email,
                role: separatedString1.role,
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
      // console.log(separatedString1)
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register/complete" component={CompleteSignup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <AdminRoute exact path="/contactus-retrive" component={RetriveContact}  />
        <AdminRoute exact path="/addclass" component={AddClass}  />
        
      </Switch>
    </>
  );
}

export default App;
