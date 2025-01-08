import { IconTriangle } from "@tabler/icons-react"
import { useTheme } from "hooks/useTheme";
import ThermeToggle from "./ThermeToggle";


const Navbar = () => {

    const {theme} = useTheme();

    return (
    <>
        <div className={`flex ${ theme === 'light' ?  'bg-secondary' : 'bg-accent' } justify-around items-center py-2.5`} >
            <div className="text-3xl font-bold flex gap-3">
                <IconTriangle stroke={2} className={`${theme === 'light' ? 'text-primary' : 'text-primary'} mt-3 `}/>
                 <h2 className={`${theme === 'light' ? 'text-primary' : 'text-primary'}`}>TailDaisy Collection</h2>
            </div>
            <ThermeToggle/>
        </div>
    </>
  )
}

export default Navbar