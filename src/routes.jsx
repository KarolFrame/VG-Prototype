import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { GamePage } from "./pages/GamePage";

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
        <Route path= "/" element={<Home />} />
        <Route path="/profile/:theId" element={ <Profile />} />
        <Route path="/game/:title" element={<GamePage />} />
      </Route>
    )
);