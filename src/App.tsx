import { ThemeProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import toast,{ Toaster } from 'react-hot-toast';
import routes from "@/routes";
import theme from "@/theme";
import { useSelector } from "@/redux/hook";
import { useEffect } from "react";

function App() {
  const content = useRoutes(routes);
  const errorStates = useSelector(state => state.error);

  useEffect(() => {
    if (errorStates.errorMessage) {
      toast.error(errorStates.errorMessage.slice(0, 60));
    }
  }, [errorStates.errorMessage]);

  return (
    <ThemeProvider theme={theme}>
      {content} <Toaster />
    </ThemeProvider>
  );
}

export default App;
