import React, { Suspense } from "react";
import {Routes, Route } from "react-router-dom"
import "./App.css";
import type { IKosRegistry } from "@coca-cola/kos-ui-core";
import {
  ErrorBoundaryWithFallback,
  initKosProvider,
  LoadingMessage,
} from "@coca-cola/kos-ui-components";
import { DispenserRoot } from "./pages/demo";
import { DispenserFactory } from "./models/dispenser/dispenser-factory";
import { DispenserModel } from "./models/dispenser/dispenser-model";
import { BeverageFactory } from "./models/beverage/beverage-factory";
import { BeverageModel } from "./models/beverage/beverage-model";
import { BrandFactory } from "./models/brand/brand-factory";
import { BrandModel } from "./models/brand/brand-model";
import Home from "./components/loginPopup";
import Setup from "./pages/setup";

export const Registry: IKosRegistry = {
  models: {
    [DispenserFactory.type]: {
      class: DispenserModel,
      singleton: true,
    },
    [BeverageFactory.type]: {
      class: BeverageModel,
    },
    [BrandFactory.type]: {
      class: BrandModel,
    },
  },
  preloadModels: [DispenserFactory.type],
};

const { KosCoreContextProvider } = initKosProvider(Registry);

function App() {
  return (
    <ErrorBoundaryWithFallback>
      <Suspense fallback={<LoadingMessage></LoadingMessage>}>
        <KosCoreContextProvider>
          <Routes>
          <Route path="/" element={<DispenserRoot/>} />
          <Route path="/setup" element={<Setup/>} />
          </Routes>
          {/* <DispenserRoot></DispenserRoot> */}
        </KosCoreContextProvider>
      </Suspense>
    </ErrorBoundaryWithFallback>
  );
}

export default App;
