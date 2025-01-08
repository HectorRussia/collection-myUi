import { IconTriangle } from "@tabler/icons-react"
import ThermeToggle from "./ThermeToggle";
import { useTheme } from "@/hooks/useTheme";


const Navbar = () => {

    const {theme} = useTheme();

    return (
    <>
        <div className={`flex ${ theme === 'garden' ?  'neutral' : 'base-300' } justify-around  xs:justify-between items-center py-2.5 mt-3`} >
            <div className="text-3xl font-bold flex gap-3 sm:justify-end ">
                 <IconTriangle stroke={2} className={`${theme === 'garden' ? 'text-secondary' : 'text-secondary'} mt-2 `}/>
                 <h2 className={`${theme === 'garden' ? 'text-[#0EA5E9]' : 'text-secondary'} `}>MyUI Collection</h2>
            </div>
            <ThermeToggle/>
        </div>
    </>
  )
}

export default Navbar