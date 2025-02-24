import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useRef,
  FC,
} from "react";
import io, { Socket } from "socket.io-client";

interface SocketProviderProps {
  children: ReactNode;
}

const { REACT_APP_BASE_URL } = process.env;

export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    socketRef.current = io(REACT_APP_BASE_URL);
    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socketRef.current}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const socket = useContext(SocketContext);
  return socket;
};
