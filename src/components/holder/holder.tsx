import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren } from "react";
import { useHolderModel } from "../../hooks/holder";

interface Props {}

export const HolderView: React.FunctionComponent<PropsWithChildren<Props>> =
  kosComponent(function HolderView() {
    const { status, KosModelLoader } = useHolderModel();

    return (
      <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
        <div>CONTENT GOES HERE</div>
      </KosModelLoader>
    );
  });
