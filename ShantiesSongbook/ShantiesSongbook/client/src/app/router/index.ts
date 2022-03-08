import { RouterModule } from "@angular/router";
import { SongBookPage } from "../pages/songBookPage";
import { SongPage } from "../pages/songPage";

const routes = [
  { path: "", component: SongBookPage },
    { path: ":songNumber", component: SongPage },
  //  { path: "**", component: SongBookPage}
];

const router = RouterModule.forRoot(routes, {
    scrollPositionRestoration: "top",
  useHash: true
});

export default router;
