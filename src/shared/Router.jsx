import React from "react";
import { Route, Routes } from "react-router-dom";

import Phd from "../routes/Phd";
import Artist from "../routes/Artist";
import Coach from "../routes/Coach";
import Psych from "../routes/Psych";
import Developer from "../routes/Developer";
import Home from "../routes/Home";
import Letter from "../routes/Letter"
import Glory from "../routes/Glory";
import Detail from "../routes/Detail";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job0" element={<Phd />} />
      <Route path="/job1" element={<Artist />} />
      <Route path="/job2" element={<Coach />} />
      <Route path="/job3" element={<Psych />} />
      <Route path="/job4" element={<Developer />} />
      <Route path="/job5" element={<Glory />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default Router;
