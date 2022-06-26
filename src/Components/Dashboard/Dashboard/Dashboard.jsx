import { Link } from "react-router-dom";
import Manage from "../Manage/Manage";

export default function Dashboard() {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to="/manage">Manage</Link></li>
                        <li><Link to="/upload">Manage</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
