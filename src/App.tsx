import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./hooks/useAuth";
import { AppDispatch } from "./redux/store";
import { current } from "./redux/api";
import { RoutesList } from "./routes/RoutesList";
import { SocketProvider } from "./contexts/SocketContext";

export const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <SocketProvider>
      {isRefreshing ? (
        <div>Refresh user....</div>
      ) : (
        <>
          <RoutesList />
          <Toaster position="top-right" />
        </>
      )}
    </SocketProvider>
  );
};
