import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className="navbar bg-base-100 lg:m-3.5">
                        <div className="navbar-start">
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <div className="form-control w-full hidden lg:block">
                                <div className="input-group">
                                    <input type="text" placeholder="Search…" className="input w-8/12 input-bordered bg-base-300 border-0 rounded-2xl" />
                                    <button className="btn btn-square btn-active bg-base-300 border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-base-content" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-center">

                        </div>
                        <div className="navbar-end">
                            <button className="btn btn-ghost btn-circle lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                            <button className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://www.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 bg-base-100 border text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a className="btn btn-ghost normal-case text-xl lg:mr-10">
                                <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.4409 19.3834L48.5223 16.7586H49.7083C50.0269 16.7582 50.3199 16.6066 50.4725 16.3633C50.625 16.12 50.6129 15.8236 50.4409 15.5903L39.3393 0.417933C39.1809 0.199226 38.9039 0.067246 38.6068 0.0689673H11.9734C11.6763 0.067246 11.3992 0.199226 11.2409 0.417933L0.139303 15.5903C-0.0327482 15.8236 -0.044862 16.12 0.107706 16.3633C0.260275 16.6066 0.553238 16.7582 0.87185 16.7586H2.05788L0.139303 19.3834C-0.0327482 19.6167 -0.044862 19.9131 0.107706 20.1564C0.260275 20.3997 0.553238 20.5513 0.87185 20.5517H2.05788L0.139303 23.1766C-0.0327482 23.4098 -0.044862 23.7062 0.107706 23.9495C0.260275 24.1928 0.553238 24.3444 0.87185 24.3448H2.05788L0.139303 26.9697C-0.0327482 27.2029 -0.044862 27.4993 0.107706 27.7426C0.260275 27.9859 0.553238 28.1375 0.87185 28.1379H2.05788L0.139303 30.7628C-0.0327482 30.996 -0.044862 31.2924 0.107706 31.5357C0.260275 31.779 0.553238 31.9306 0.87185 31.931H49.7083C50.0269 31.9306 50.3199 31.779 50.4725 31.5357C50.625 31.2924 50.6129 30.996 50.4409 30.7628L48.5223 28.1379H49.7083C50.0269 28.1375 50.3199 27.9859 50.4725 27.7426C50.625 27.4993 50.6129 27.2029 50.4409 26.9697L48.5223 24.3448H49.7083C50.0269 24.3444 50.3199 24.1928 50.4725 23.9495C50.625 23.7062 50.6129 23.4098 50.4409 23.1766L48.5223 20.5517H49.7083C50.0269 20.5513 50.3199 20.3997 50.4725 20.1564C50.625 19.9131 50.6129 19.6167 50.4409 19.3834Z" fill="#B0D3F0" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 5.80717C11.667 5.80684 11.3744 5.65601 11.2215 5.41355C11.0685 5.17109 11.0793 4.87542 11.2497 4.64193L12.673 2.69607C12.8331 2.47721 13.1108 2.34472 13.409 2.34483H17.4415C17.9232 2.34483 18.3136 2.68448 18.3136 3.10345C18.3136 3.52242 17.9232 3.86207 17.4415 3.86207H13.8878L12.7218 5.45517C12.5617 5.67456 12.2836 5.80738 11.9849 5.80717Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 20.5517H0.87185C0.553238 20.5513 0.260275 20.3997 0.107706 20.1564C-0.044862 19.9131 -0.0327482 19.6167 0.139303 19.3834L2.05788 16.7586H48.5223L50.4409 19.3834C50.6129 19.6167 50.625 19.9131 50.4725 20.1564C50.3199 20.3997 50.0269 20.5513 49.7083 20.5517Z" fill="#3B97D3" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 24.3448H0.87185C0.553238 24.3444 0.260275 24.1928 0.107706 23.9495C-0.044862 23.7062 -0.0327482 23.4098 0.139303 23.1766L2.05788 20.5517H48.5223L50.4409 23.1766C50.6129 23.4098 50.625 23.7062 50.4725 23.9495C50.3199 24.1928 50.0269 24.3444 49.7083 24.3448Z" fill="#2980BA" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 28.1379H0.87185C0.553238 28.1375 0.260275 27.9859 0.107706 27.7426C-0.044862 27.4993 -0.0327482 27.2029 0.139303 26.9697L2.05788 24.3448H48.5223L50.4409 26.9697C50.6129 27.2029 50.625 27.4993 50.4725 27.7426C50.3199 27.9859 50.0269 28.1375 49.7083 28.1379Z" fill="#3B97D3" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M49.7083 31.931H0.87185C0.553238 31.9306 0.260275 31.779 0.107706 31.5357C-0.044862 31.2924 -0.0327482 30.996 0.139303 30.7628L2.05788 28.1379H48.5223L50.4409 30.7628C50.6129 30.996 50.625 31.2924 50.4725 31.5357C50.3199 31.779 50.0269 31.9306 49.7083 31.931Z" fill="#2980BA" />
                                </svg>
                                <h3 className="font-bold text-3xl ml-2.5">Stack</h3>
                            </a>
                        </li>
                        <li>
                            <h6 className="mt-10">Pages</h6>
                        </li>
                        <li>
                            <Link to='dashboard'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_20_193)">
                                        <path d="M3.7875 7.63435C2.05625 7.64685 0.156251 7.86873 0.0125012 5.57185C0.0187512 4.89998 0.0125012 4.23748 0.0125012 3.56873C0.0531262 2.56873 -0.218749 1.34685 0.593751 0.587476C0.971876 0.212476 1.48125 0.00622559 2.0125 0.00935059C2.84688 0.00622559 3.6625 0.00622559 4.4375 0.00622559H5.66875C6.72813 0.00935059 7.60625 0.887476 7.625 1.96873C7.64688 3.25935 7.64688 4.45935 7.625 5.63123C7.60313 6.7531 6.7375 7.60935 5.60938 7.62185C4.99688 7.63123 4.38438 7.63435 3.7875 7.63435ZM3.76875 1.6281C3.18438 1.6281 2.64063 1.6281 2.1125 1.63123C1.77813 1.63123 1.6375 1.7781 1.6375 2.11248C1.63438 3.20623 1.63438 4.35935 1.6375 5.53123C1.6375 5.83123 1.77813 5.97185 2.075 5.97185C3.24375 5.97498 4.4125 5.97498 5.58125 5.97185C5.84375 5.97185 5.97813 5.83435 5.98125 5.56873C5.98438 4.80935 5.98125 4.05935 5.98125 3.30623C5.98438 1.11248 6.19688 1.72185 3.76875 1.6281Z" fill="#B0B7C3" />
                                        <path d="M12.1781 7.6343C11.5781 7.6343 10.9781 7.63118 10.3969 7.6218C9.28438 7.62805 8.37813 6.72805 8.37188 5.61555C8.37188 5.60618 8.37188 5.59993 8.37188 5.59055C8.35625 4.31868 8.35625 3.1468 8.37188 2.01243C8.36875 0.909302 9.2625 0.00930176 10.3656 0.00617676H10.3906C11.5875 -0.00319824 12.7813 -0.00319824 14.0313 0.00617676C15.0656 -0.00944824 15.9969 0.931177 15.9844 1.96555C15.9906 2.66243 15.9844 3.3468 15.9844 4.03743C15.95 5.03743 16.2 6.27805 15.4 7.0343C14.5875 7.89055 13.2344 7.56868 12.1781 7.6343ZM13.2281 5.97805C13.6031 5.92805 14.3563 6.1718 14.3625 5.56868C14.3688 4.51243 14.3688 3.3593 14.3625 2.04368C14.3625 1.79368 14.1969 1.63118 13.9469 1.63118C12.775 1.62493 11.6063 1.62493 10.4438 1.63118C10.1625 1.63118 10.0188 1.78118 10.0188 2.06868V5.55305C10.0188 5.8468 10.15 5.97805 10.4438 5.97805C11.4313 5.97493 12.25 5.97493 13.2281 5.97805Z" fill="#B0B7C3" />
                                        <path d="M5.6 15.9938C4.6625 15.9719 3.65 15.9969 2.7 15.9906C1.95625 16.025 1.125 15.9844 0.59375 15.4063C0.0781251 14.9281 -0.0343749 14.175 0.00937509 13.4875C0.00625009 12.4594 0.00625009 11.3969 0.0156251 10.35C0.0187501 9.45626 0.621875 8.67814 1.48438 8.45001C2.29063 8.28751 3.04375 8.40001 3.95 8.36564C4.47188 8.36564 4.99062 8.36563 5.5125 8.36876C7.675 8.48126 7.70312 10.1406 7.63125 11.8625C7.63125 12.525 7.62813 13.2125 7.63438 13.8875C7.6625 15.0188 6.73125 16.0125 5.6 15.9938ZM3.84375 10.0188C3.25312 10.0188 2.6625 10.0188 2.07188 10.0188C1.875 10.0188 1.6375 10.0906 1.63438 10.4219C1.625 11.5781 1.625 12.7625 1.63438 13.9469C1.6375 14.2063 1.79688 14.3625 2.06562 14.3656C3.21562 14.3688 4.37187 14.3688 5.525 14.3656C5.83437 14.3656 5.97187 14.225 5.975 13.9094C5.975 13.5094 5.975 13.1031 5.975 12.7125C5.97187 11.9563 5.97813 11.1875 5.975 10.4281C5.975 10.1594 5.8375 10.0219 5.57188 10.0219C4.99688 10.0188 4.42188 10.0188 3.84375 10.0188Z" fill="#B0B7C3" />
                                        <path d="M12.1844 15.9937C8.84688 16.0125 7.08438 11.85 9.49063 9.49685C10.9125 8.01247 13.4563 7.99372 14.8781 9.4906C17.2625 11.8468 15.5406 16.0156 12.1844 15.9937ZM12.1844 10.0187C9.30938 10.1 9.34063 14.2687 12.1688 14.3625C15.05 14.2718 15.0844 10.1062 12.1844 10.0187Z" fill="#B0B7C3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_20_193">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='users'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_20_210)">
                                        <path d="M8 8.86221C5.57499 8.86221 3.67132 9.43562 2.37198 10.5518C1.06902 11.671 0.394998 13.3177 0.394998 15.4161C0.394998 15.8215 0.723562 16.1501 1.12894 16.1501H14.871C15.2764 16.1501 15.605 15.8215 15.605 15.4161C15.605 13.3178 14.931 11.6711 13.628 10.5518C12.3287 9.43568 10.425 8.86221 8 8.86221ZM14.1026 14.6822H1.89757C2.03732 13.2542 2.59969 12.1881 3.56846 11.4687C4.57889 10.7183 6.0513 10.3301 8 10.3301C9.9487 10.3301 11.4211 10.7183 12.4316 11.4687C13.4004 12.1881 13.9628 13.2542 14.1026 14.6822Z" fill="#B0B7C3" stroke="#B0B7C3" stroke-width="0.3" />
                                        <path d="M8 -0.15C5.70608 -0.15 3.97653 1.61867 3.97653 3.95116C3.97653 6.34063 5.76998 8.30553 8 8.30553C10.23 8.30553 12.0235 6.34063 12.0235 3.95134C12.0235 1.61867 10.2939 -0.15 8 -0.15ZM8 6.83784C6.60668 6.83784 5.44441 5.55959 5.44441 3.95134C5.44441 2.4173 6.51914 1.31788 8 1.31788C9.45577 1.31788 10.5556 2.44318 10.5556 3.95134C10.5556 5.55959 9.39332 6.83784 8 6.83784Z" fill="#B0B7C3" stroke="#B0B7C3" stroke-width="0.3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_20_210">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Users
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_20_240)">
                                        <path d="M13.0588 17.1499H2.70587V18.4746H13.0588V17.1499Z" fill="#B0B7C3" />
                                        <path d="M9.74509 6.48633H6.11766C5.79275 6.48633 5.52941 6.78285 5.52941 7.14868C5.52941 7.51452 5.79275 7.81104 6.11766 7.81104H9.74509C10.07 7.81104 10.3333 7.51452 10.3333 7.14868C10.3333 6.78285 10.07 6.48633 9.74509 6.48633Z" fill="#B0B7C3" />
                                        <path d="M12.4902 9.57715H6.11766C5.79275 9.57715 5.52941 9.87367 5.52941 10.2395C5.52941 10.6053 5.79275 10.9019 6.11766 10.9019H12.4902C12.8151 10.9019 13.0784 10.6053 13.0784 10.2395C13.0784 9.87367 12.8151 9.57715 12.4902 9.57715Z" fill="#B0B7C3" />
                                        <path d="M15.6533 0.649513C15.4422 0.542651 15.1953 0.58484 15.022 0.757255L13.3747 2.39808L11.7255 0.737586C11.5022 0.512602 11.1645 0.512602 10.9412 0.737586L9.29412 2.39608L7.64687 0.737586C7.42353 0.512602 7.08609 0.512602 6.86275 0.737586L5.21353 2.39808L3.56628 0.757255C3.39316 0.585051 3.14609 0.542862 2.93491 0.649513C2.72394 0.756587 2.58825 0.992831 2.58825 1.25335V13.043H0.58825C0.263344 13.043 0 13.3395 0 13.7053V15.317C0 17.0578 1.25784 18.4741 2.80391 18.4741V17.1495C1.90647 17.1495 1.17647 16.3273 1.17647 15.317V14.3677H10.3922V15.317C10.3922 17.0578 11.65 18.4742 13.1961 18.4742C14.7421 18.4742 16 17.0579 16 15.317V1.25332C16 0.992795 15.8643 0.756587 15.6533 0.649513ZM14.8235 15.317C14.8235 16.3273 14.0933 17.1495 13.1961 17.1495C12.2988 17.1495 11.5687 16.3273 11.5687 15.317V13.7053C11.5687 13.3395 11.3053 13.043 10.9804 13.043H3.76472V2.72349L4.82609 3.78082C5.04962 4.00338 5.38569 4.00225 5.60784 3.77839L7.25491 2.1199L8.90197 3.77818C9.12531 4.00316 9.46294 4.00316 9.68628 3.77818L11.3335 2.11969L12.9806 3.77818C13.2029 4.00204 13.539 4.00292 13.7623 3.78061L14.8235 2.72353V15.317Z" fill="#B0B7C3" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_20_240">
                                            <rect width="16" height="18.0156" fill="white" transform="translate(0 0.51416)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Sales
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard