
import Logo from "@/assets/Logo.png"




const Footer= () => {
    return (
        <footer
        className="bg-primary-100 py-6"
        >
        <div className="w-5/6 mx-auto justify-content gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo}/>
                <p
                className="my-5"
                >
                © 2024 EvoGym. All rights reserved. By using this site, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">
                    Links to our Social Medias
                </h4>
                <p className="my-2">Instagram: Evogym</p>
                <p className="my-2">Facebook: Evogym</p>
            </div>
            <div className="mt-6 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-2"> (213)231-2121</p>
                <p className="my-2"> (200)262-2121</p>

            </div>
        </div> 
        </footer>
    )
}

export default Footer
