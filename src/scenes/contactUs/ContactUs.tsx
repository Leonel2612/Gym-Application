import HeaderText from "@/shared/HeaderText"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"

interface Props {
    setSelectedPage:(value:SelectedPage) =>void
}

const ContactUs = ({
    setSelectedPage
}: Props) => {
    const {
        register,
        trigger,
        formState:{errors}

    }=useForm();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit =async(e:any)=>{
        
        const isValid= await trigger()
        if (!isValid){
            e.preventDefault()
        }
    }


    return (
      <section
      className="mx-auto pb-32 py-20 w-5/6 "
      >
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}
        id="contactus"
        className=""
        >
            <motion.div
            className="md:w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{once:true,
                amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                    hidden:{opacity:0,x:-50},
                    visible:{opacity:1,x:0}
                }}
            >
                <HeaderText>
                    {""} 
                    <span className="text-primary-500">
                        JOIN NOW
                    </span>
                    {" "}
                    TO GET IN SHAPE
                </HeaderText>
                <p className="my-5">
                Ready to elevate your fitness journey? Simply enter your name, email, and a brief message below. We'll provide all the details you need to kickstart your transformation with us. Your path to wellness begins with just one click!
                </p>
                {/* form and image */}

                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                    // mt-10 basis-3/5 md:mt-0
                    className=""
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,
                    amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,y:50},
                        visible:{opacity:1,y:0}
                    }}
                    >
                        <form
                        target="_blank"
                        onSubmit={onSubmit}
                        
                        action="https://formsubmit.co/971f7599f7ce9c4175408dc61582eaad"
                        method="POST"
                        >
                            <input
                            className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                            placeholder="NAME"
                            type="text"
                            {...register("name",
                           {
                            required:true,
                            maxLength:100,
                            
                           }
                            )}
                            />
                        {
                            errors.name && (
                                <p
                                className="mt-1 text-primary-500"
                                >
                                    {
                                        errors.name.type === "required" && "This field is required."
                                    
                                    }

                                     {
                                        errors.name.type === "maxLength" && "Max length is 100 char"
                                    
                                    }

                                </p>
                            )
                        }

                        <input
                            className=" mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                            placeholder="EMAIL"
                            type="text"
                            {...register("email",
                           {
                            required:true,
                            pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                            
                           }
                            )}
                            />
                        {
                            errors.email && (
                                <p
                                className="mt-1 text-primary-500"
                                >
                                    {
                                        errors.email.type === "required" && "This field is required."
                                    
                                    }

                                     {
                                        errors.email.type === "pattern" && "Email pattern incorrect!"
                                    
                                    }

                                </p>
                            )
                        }

                        <textarea
                            className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                            placeholder="MESSAGE"
                            rows={4}
                            cols={50}
                            {...register("message",
                           {
                            required:true,
                            maxLength:2000,
                            
                           }
                            )}
                            />
                        {
                            errors.message && (
                                <p
                                className="mt-1 text-primary-500"
                                >
                                    {
                                        errors.message.type === "required" && "This field is required."
                                    
                                    }

                                     {
                                        errors.message.type === "maxLength" && "Max length is 2000 char"
                                    
                                    }

                                </p>
                            )
                        }

                            <button
                            type="submit"
                            className="mt-5 bg-secondary-500 rounded-lg px-20 py-3 transition duration-500 text-white">
                            Submit
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                    className="relative mt-16 basis-2/5 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once:true,
                    amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x:-50},
                        visible:{opacity:1,x:0}
                    }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img className="w-full"
                            alt="contacusgraphic"
                                src={ContactUsPageGraphic}/>
                        </div>
                            
                        </motion.div>
                </div>
            </motion.div>
        </motion.div>

      </section>
    )
}

export default ContactUs
