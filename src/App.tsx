import "./App.css";
import { Registry } from "./registration";
import {
  ErrorBoundaryWithFallback,
  initKosProvider,
  LoadingMessage,
} from "@coca-cola/kos-ui-components";
import { KosLog } from "@coca-cola/kos-ui-core";
import React, { Suspense } from "react";
import { DispenserView } from "./components/dispenser";
import { Routes, Route } from "react-router-dom";
import SetupOne from "./pages/setup";
import SetupPour from "./pages/setuppour";
import IngredientContainer from "./pages/ingredientContainer";
import ValveContainer from "./pages/valveContainer";

KosLog.setLevel("INFO");

const { KosCoreContextProvider } = initKosProvider(Registry);

function App() {
  return (
    <ErrorBoundaryWithFallback>
      <Suspense fallback={<LoadingMessage></LoadingMessage>}>
        <KosCoreContextProvider>
          <Routes>
            <Route path="/" element={<DispenserView />} />
            <Route path="/setup" element={<SetupOne />} />
            <Route path="/setuppour" element={<SetupPour />} />
            <Route path="/ingredient" element={<IngredientContainer />} />
            <Route path="/valve" element={<ValveContainer/>}/>
          </Routes>
        </KosCoreContextProvider>
      </Suspense>
    </ErrorBoundaryWithFallback>
  );
}

export default App;
