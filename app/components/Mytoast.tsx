'use client';
import { FC } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useState ,useEffect } from "react";
interface MytoastProps {
    
}
 
const Mytoast: FC<MytoastProps> = () => {

    const [mounted, setmounted] = useState(false);

    useEffect(() => {
        setmounted(true);
    }, []);
    
    if (!mounted) {
        return null;
    }
    return ( <><Toaster position="top-left" reverseOrder={false} />
    {toast.success("Welcome , happy to connect !")}</> );
}
 
export default Mytoast;