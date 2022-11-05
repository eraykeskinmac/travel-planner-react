import { useQueryClient } from "@tanstack/react-query"
import { AxiosResponse } from "axios"
import { BiCalendarPlus } from 'react-icons/bi'
import { IoCalendarOutline } from "react-icons/io5"
import { NavigationHeader, NavigationItemsContainer, NavigationSidebar } from "../utils/styles"
import { User } from "../utils/types"

export const Sidebar = () => {
    const queryClient = useQueryClient()
    const data = queryClient.getQueryData<AxiosResponse<User>>(["user"])
    console.log(data?.data.username)
    return (
        <>
           <NavigationSidebar>
                <NavigationHeader>{data?.data.username}</NavigationHeader>
                    <NavigationItemsContainer>
                        <IoCalendarOutline size={32} />
                        <div>Plans</div>
                    </NavigationItemsContainer>
                    <NavigationItemsContainer>
                        <BiCalendarPlus size={32} />
                        <div>Shared With You</div>
                    </NavigationItemsContainer>
            </NavigationSidebar> 
        </>

    )
}