import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import BlankCardHorizontal from "./components/BlankCardHorizontal";
import BlankCardVertical from "./components/BlankCardVertical";
import SizeSelect from "./components/SizeSelect";
import TopMenu from "./components/TopMenu";
import UploadPhotoHorizontal from "./components/UploadPhotoHorizontal";
import UploadPhotoVertical from "./components/UploadPhotoVertical";
import UploadVideoHorizontal from "./components/UploadVideoHorizontal";
import UploadVideoVertical from "./components/UploadVideoVertical";

function App() {
  return (
    <Router>
      <TopMenu />
      <div>
        <Switch>
          <Route path="/size-select" component={SizeSelect} />
          <Route path="/blank-card-vertical" component={BlankCardVertical} />
          <Route path="/blank-card-horizontal" component={BlankCardHorizontal} />
          <Route path="/upload-photo-vertical" component={UploadPhotoVertical} />
          <Route path="/upload-photo-horizontal" component={UploadPhotoHorizontal} />
          <Route path="/upload-video-vertical" component={UploadVideoVertical} />
          <Route path="/upload-video-horizontal" component={UploadVideoHorizontal} />
          {/* <Redirect to="/not-found" /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
