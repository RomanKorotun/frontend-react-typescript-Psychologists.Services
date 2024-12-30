import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const { REACT_APP_BASE_URL } = process.env;

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  useEffect(() => {
    if (!socket) {
      const socketInstance = io(REACT_APP_BASE_URL);
      setSocket(socketInstance);
    }
  }, [socket, setSocket]);
  return socket;
};
