import { RouterModule } from "@angular/router";
import { SongBookPage } from "../pages/songBookPage";

const routes = [
  { path: "", component: SongBookPage },
  //{ path: "**", redirectTo: "/" }
];

const router = RouterModule.forRoot(routes, {
  useHash: false
});

export default router;
