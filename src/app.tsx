import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTrip } from "./page/create-trip";
import { TripDetails } from "./page/trip-details";
import { NotFound } from "./page/page-not-found/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip />,
  },
  {
    path: "/trips/:idTrip",
    element: <TripDetails />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
