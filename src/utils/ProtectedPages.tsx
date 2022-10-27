import { useQuery } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthUser } from "./api";

export const ProtectedPage: FC<PropsWithChildren> = ({children}) => {
  const query = useQuery(['user'], getAuthUser);
  const location = useLocation()
  
  
  if (query.isLoading) {
    return <div>Loading...</div>
  }
  if (query.data?.data) {
    return <>{children}</>
  }
  return <Navigate to='/login' state={{from: location}} replace />
}