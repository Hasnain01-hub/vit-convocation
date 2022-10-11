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
import Contactus from "./components/Contact";
import Classdata from "./components/class/Classdisplay";
import Fotter from "./footer/Footer";
import Classretrive from "./admin/Classretrive";
import About from "./components/About";
import UserSeats from "./components/UserSeats";
function App() {
  const dispatch = useDispatch();
  var separatedString1;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // console.log(user)
      if (user) {
        // const idTokenResult = await user.getIdTokenResult();
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
                roll:separatedString1.roll,
                department:separatedString1.department,
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
        <Route exact path="/contact" component={Contactus} />
        <Route exact path="/class" component={Classdata} />
        <Route exact path="/about" component={About} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/booked-data" component={UserSeats} />
        
        <AdminRoute exact path="/contactus-retrive" component={RetriveContact}  />
        <AdminRoute exact path="/class-retrive" component={Classretrive}  />
        <AdminRoute exact path="/addclass" component={AddClass}  />
        
      </Switch>
      <Fotter/>
    </>
  );
}

export default App;
