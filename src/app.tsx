import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTrip } from "./page/create-trip";
import { TripDetails } from "./page/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTrip/>,
  },
  {
    path: "/trip/:idTrip",
    element: <TripDetails/>,
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
