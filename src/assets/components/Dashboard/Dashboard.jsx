import React, { useState } from "react";
import './Dashboard.css'
import TableProduct from "../Api/Product/TableProduct";
import Connexion from '../Api/Authentification/Connexion';
import Form from './Form'



function Dashboard(){

	const [showLoginForm, setShowLoginForm] = useState(false);
    const handleLoginButtonClick = () => {
				setShowLoginForm(true);
			};

    return (<>

<main id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed aside-enabled aside-fixed d1">
		{/*begin::Main */ }
		{/*--begin::Root */ }
		<div className="d-flex flex-column flex-root">
			{/*--begin::Page */ }
			<div className="page d-flex flex-row flex-column-fluid">

				{/*--begin::Wrapper */ }
				<div className="wrapper d-flex flex-column flex-row-fluid d14" id="kt_wrapper">
					{/*--begin::Header */ }
					<div id="kt_header"  className="header align-items-stretch d13">
						{/*--begin::Container */ }
						<div className="container-fluid d-flex align-items-stretch justify-content-between">


						</div>
						{/*--end::Container */ }
					</div>
					{/*--end::Header */ }
					{/*--begin::Content */ }
					<div className="content d-flex flex-column flex-column-fluid" id="kt_content">
						{/*--begin::Toolbar */ }
						<div className="toolbar d13" id="kt_toolbar">
							{/*--begin::Container */ }
							<div id="kt_toolbar_container" className="container-fluid d-flex flex-stack">
								{/*--begin::Page title */ }
								<div data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}" className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
									{/*--begin::Title */ }
									<h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">
										<img src="src/assets/media/logo/logo-ClicktoBuy.png" alt="logo-ClicktoBuy" id="logo"/>
									{/*--begin::Separator */ }
									<span className="h-20px border-gray-200 border-start ms-3 mx-2"></span>
									{/*--end::Separator */ }
									{/*--begin::Description */ }
									<small className="text-muted fs-7 fw-bold my-1 ms-1">"Le Monde du Shopping au Bout de Vos Doigts."</small>
									{/*--end::Description */ }</h1>
									{/*--end::Title */ }
								</div>
								{/*--end::Page title */ }
								{/*--begin::Actions */ }
								<div className="d-flex align-items-center py-1">
									{/*--begin::Wrapper */ }
									<div className="me-3">
										{/*--begin::Menu */ }
										<a href="#" className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
										{/*--begin::Svg Icon | path: icons/duotune/general/gen031.svg */ }
										<span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
											</svg>
										</span>
										{/*--end::Svg Icon */ }Crèer un compte</a>
									</div>
									{/*--end::Wrapper */ }
									{/*--begin::Button */ }
									<a href="#"  onClick={handleLoginButtonClick} className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app" id="kt_toolbar_primary_button">Connercter</a>
									{/*--end::Button */ }
									
								</div>
								{/*--end::Actions */ }
							</div>
							{/*--end::Container */ }
						</div>
						{/*--end::Toolbar */ }
					</div>
				    {/*--begin::composant */ }	
					<div id="kt_app_content_container" className="app-container  container-xxl ">
					<TableProduct/>		
					{showLoginForm && <Connexion />}

					</div >	
					{/*--end::composant */ }

					{/*--begin::Footer */ }
					<div className="footer py-4 d-flex flex-lg-column d15" id="kt_footer">
						{/*--begin::Container */ }
						<div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
							{/*--begin::Copyright */ }
							<div className="text-dark order-2 order-md-1">
								<span className="text-muted fw-bold me-1">2023©</span>
								<a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Clicktobuy</a>
							</div>
							{/*--end::Copyright */ }
							{/*--begin::Menu */ }
							<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
								<li className="menu-item">
									<a href="https://keenthemes.com" target="_blank" className="menu-link px-2">A propos de nous</a>
								</li>
								<li className="menu-item">
									<a href="https://keenthemes.com/support" target="_blank" className="menu-link px-2">Consulter Support</a>
								</li>
								<li className="menu-item">
									<a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Suggestion</a>
								</li>
							</ul>
							{/*--end::Menu */ }
						</div>
						{/*--end::Container */ }
					</div>
					{/*--end::Footer */ }
				</div>
				{/*--end::Wrapper */ }
			</div>
			{/*--end::Page */ }
		</div>
		{/*--end::Root */ }








	</main>
	 </>

   
    )


}

export default Dashboard