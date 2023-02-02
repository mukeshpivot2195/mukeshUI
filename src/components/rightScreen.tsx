import React, { useState } from "react";
import BeverageContainer from "./beverageContainer";
import BrandContainer from "./brandContainer";

const RightScreen : React.FunctionComponent = () => {
  
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedBeverage, setSelectedBeverage] = useState<string>("");

  const selectBrand = (id: any) => {
    setSelectedBrand(id);
  };
  const onSelectBeverage = (id: any) => {
    setSelectedBeverage(id);
    console.log(
      "baverageSelect=>",
      "screen:right",
      "brandId:",
      selectedBrand,
      "beverageID:",
      id
    );
  };

  const backButton = () => {
    setSelectedBrand("");
    setSelectedBeverage("");
  };

  return (
    <>
      {selectedBrand ? (
        <BeverageContainer
          goback={backButton}
          brandId={selectedBrand}
          onSelectBeverage={onSelectBeverage}
          selectedBeverage={selectedBeverage}
        />
      ) : (
        <BrandContainer beverageId={(id: any) => selectBrand(id)} />
      )}
    </>
  );
};

export default RightScreen;
