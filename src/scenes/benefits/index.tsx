import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/16/solid"
import { motion } from "framer-motion";
import { BenefitTypes } from "@/shared/types"
import BenefitsDescription from "./BenefitsDescription";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value:SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {

    const benefits: Array <BenefitTypes>=[{    
        icon:<HomeModernIcon className="h-6 w-6"/>,
        title:"State of Art Facilites",
        description:"Our cutting-edge facilities redefine your workout experience. Featuring advanced equipment, specialized workout zones, and smart technology, we empower your fitness journey in an environment designed for peak performance and motivation.",
    },

    {    
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title:"100's Diverse Classes",
        description:"Our expert and pro trainers offer unparalleled expertise to elevate your fitness. Certified in multiple disciplines, they mentor and tailor strategies to your goals, ensuring personalized, effective growth. Train with the best and surpass expectations."

    },
    {    
        icon:<AcademicCapIcon className="h-6 w-6"/>,
        title:"Expert and Pro Trainer",
        description:"Our expert trainers, certified in various disciplines, are mentors who enhance your skills and motivation. Tailoring strategies to your goals, they offer personalized attention and techniques to exceed expectations. Start transforming with the best."
    }
    ]

    return (
        <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
            onViewportEnter={()=>(setSelectedPage(SelectedPage.Benefits))}
            >
                <motion.div className="md:my-5 md:w-full "
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
                       MORE THAN JUST A GYM
                    </HeaderText>
                    <p className="font-montserrat text-sm my-5">
                        We provided world class fitness equipment, trainers and classess to get you to your ultimate fitness goals with ease. We provide true care 
                        into each and every member
                    </p>

                    <div className="mt-6 items-center justify-between gap-8 md:flex">                        
                        {
                            benefits.map((benefits:BenefitTypes)=>(
                               <BenefitsDescription
                                    key = {benefits.title}
                                    icon={benefits.icon}
                                    title={benefits.title}
                                    description= {benefits.description}
                                    setSelectedPage={setSelectedPage}
                               />
                            )
                            )
                        }
                        
                    </div>
                    
                </motion.div>
                {/* Graphic and descriptions */}

                <div className=" mt-11 items-center justify-between gap-20 md:flex md:my-28  w-full ">
                    {/* Graphics */}
                    <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{once:true,
                     amount:0.5}}
                     transition={{delay:0.1,duration:0.5}}
                     variants={{
                         hidden:{opacity:0,x:-50},
                         visible:{opacity:1,x:0}
                     }}
                        className="md:w-10/12">
                        <img 
                        className="mx-auto"
                        alt="benefitsGraphic" src={BenefitsPageGraphic}/>
                    </motion.div>
                    
                    {/* TITLE */}
                    <div>
                        <motion.div 
                          initial="hidden"
                          whileInView="visible"
                          viewport={{once:true,
                          amount:0.5}}
                          transition={{delay:0.2,duration:0.5}}
                          variants={{
                              hidden:{opacity:0,x:-50},
                              visible:{opacity:1,x:0}
                          }}
                        className="relative">
                           <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <div>
                                <HeaderText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                                    <span className="text-primary-500">
                                        FIT
                                    </span>
                                </HeaderText>
                            </div>
                           </div>
                        </motion.div>
                        {/* DESCRIPTION */}
                        <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,
                        amount:0.5}}
                        transition={{delay:0.3,duration:0.5}}
                        variants={{
                            hidden:{opacity:0,x:-50},
                            visible:{opacity:1,x:0}
                        }}
                        >
                            <p className="my-5">
                                Join EvoVym to unlock a healthier you with state-of-the-art equipment, personalized training plans, and a supportive community that motivates and challenges. Embrace a transformative fitness journey that caters to all levels and goals.
                            </p>
                            <p className="mb-5">
                                EvoGym is more than fitness; it's a lifestyle revolution, it's not just a gym, it's a community where every workout moves you closer to your best self.  
                                Experience the change today.
                            </p>
                        </motion.div>

                        <motion.div className="relative mt-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once:true,
                        amount:0.5}}
                        transition={{delay:0.4,duration:0.5}}
                        variants={{
                            hidden:{opacity:0,x:-50},
                            visible:{opacity:1,x:0}
                        }}
                        >
                            <div className="before:absolute before:-bottom-20 before:right-20 before:z-[-1] before:content-sparkles">
                               <ActionButton setSelectedPage={setSelectedPage}>
                                    Join us
                               </ActionButton>
                            </div>   
                        </motion.div>
                    </div>
                </div>

              
            </motion.div>
        </section>
    )
}

export default Benefits
