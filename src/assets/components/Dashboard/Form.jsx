
function Form (){



    return(
<div className="d-flex flex-column flex-root">
{/*--begin::Authentication - Sign-in  */ }
<div className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" >
    {/*--begin::Content */ }
        {/*--begin::Wrapper */ }
        <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            {/*--begin::Form */ }
            <form className="form w-100" noValidate="novalidate" id="kt_sign_in_form" action="#">
                {/*--begin::Heading */ }
                <div className="text-center mb-10">
                    {/*--begin::Title */ }
                    <h1 className="text-dark mb-3">Connectez-vous!</h1>
                    {/*--end::Title */ }
                    {/*--begin::Link */ }
                    <div className="text-gray-400 fw-bold fs-4">Nouveau?
                    <a href="../../demo1/dist/authentication/layouts/basic/sign-up.html" className="link-primary fw-bolder">Crèer un nouveau compte</a></div>
                    {/*--end::Link */ }
                </div>
                {/*--begin::Heading */ }
                {/*--begin::Input group */ }
                <div className="fv-row mb-10">
                    {/*--begin::Label */ }
                    <label className="form-label fs-6 fw-bolder text-dark">Email</label>
                    {/*--end::Label */ }
                    {/*--begin::Input */ }
                    <input className="form-control form-control-lg form-control-solid" type="text" name="email" autoComplete="off" />
                    {/*--end::Input */ }
                </div>
                {/*--end::Input group */ }
                {/*--begin::Input group */ }
                <div className="fv-row mb-10">
                    {/*--begin::Wrapper */ }
                    <div className="d-flex flex-stack mb-2">
                        {/*--begin::Label */ }
                        <label className="form-label fw-bolder text-dark fs-6 mb-0">Mot de passe</label>
                        {/*--end::Label */ }
                        {/*--begin::Link */ }
                        <a href="../../demo1/dist/authentication/layouts/basic/password-reset.html" className="link-primary fs-6 fw-bolder">Mot de passe oublié ?</a>
                        {/*--end::Link */ }
                    </div>
                    {/*--end::Wrapper */ }
                    {/*--begin::Input */ }
                    <input className="form-control form-control-lg form-control-solid" type="password" name="password" autoComplete="off" />
                    {/*--end::Input */ }
                </div>
                {/*--end::Input group */ }
                {/*--begin::Actions */ }
                <div className="text-center">
                    {/*--begin::Submit button */ }
                    <button type="submit" id="kt_sign_in_submit" className="btn btn-lg btn-primary w-100 mb-5">
                        <span className="indicator-label">Continue</span>
                        <span className="indicator-progress">Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                    </button>
                    {/*--end::Submit button */ }
                    {/*--begin::Separator */ }
                    <div className="text-center text-muted text-uppercase fw-bolder mb-5">ou</div>
                    {/*--end::Separator */ }
                    {/*--begin::Google link */ }
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                    <img alt="Logo" src="src/assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Continuer avec Google</a>
                    {/*--end::Google link */ }
                    {/*--begin::Google link */ }
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5">
                    <img alt="Logo" src="src/assets/media/svg/brand-logos/facebook-4.svg" className="h-20px me-3" />Continuer avec Facebook</a>
                    {/*--end::Google link */ }
                    {/*--begin::Google link */ }
                    <a href="#" className="btn btn-flex flex-center btn-light btn-lg w-100">
                    <img alt="Logo" src="src/assets/media/svg/brand-logos/apple-black.svg" className="h-20px me-3" />Continuer avec Apple</a>
                    {/*--end::Google link */ }
                </div>
                {/*--end::Actions */ }
            </form>
            {/*--end::Form */ }
        </div>
        {/*--end::Wrapper */ }
 
    {/*--end::Content */ }
    {/*--begin::Footer */ }
    <div className="d-flex flex-center flex-column-auto p-10">
        {/*--begin::Links */ }
        <div className="d-flex align-items-center fw-bold fs-6">
            <a href="https://keenthemes.com" className="text-muted text-hover-primary px-2">About</a>
            <a href="mailto:support@keenthemes.com" className="text-muted text-hover-primary px-2">Contact</a>
            <a href="https://1.envato.market/EA4JP" className="text-muted text-hover-primary px-2">Contact Us</a>
        </div>
        {/*--end::Links */ }
    </div>
    {/*--end::Footer */ }
</div>
{/*--end::Authentication - Sign-in */ }
</div>
    )
}

export default Form


